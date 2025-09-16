'use client'

import { checkServerSession, fetchUser } from "@/lib/api/clientApi"
import { useAuthStore } from "@/lib/store/authStore"
import { useEffect, useState } from "react"
import Loading from "@/app/loading"

type Props = {
    children: React.ReactNode
}

export const AuthProvider = ({ children }: Props) => {
    const [isRefreshing, setisRefreshing] = useState(true);

    const setUser = useAuthStore(state => state.setUser)

    useEffect(() => {
        const asyncWrapper = async () => { 
            const isActiveSession = await checkServerSession();
            console.log('isActiveSession', isActiveSession)
            if (isActiveSession) {
                const user = await fetchUser();
                setUser(user)
            }
            setisRefreshing(false)
        };
        asyncWrapper();
    }, [setUser])

    return <>
        {isRefreshing && <Loading />}
        {children}
    </>
}