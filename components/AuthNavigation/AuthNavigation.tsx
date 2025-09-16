'use client'

import css from '@/components/AuthNavigation/AuthNavigation.module.css'
import { logout } from '@/lib/api/clientApi';
import Link from "next/link";
import { useAuthStore } from '@/lib/store/authStore';
import { useRouter } from 'next/navigation';


export default function AuthNavigation() {
    const isAuthenticated = useAuthStore(state => state.isAuthenticated);
    const clearIsAuthenticated = useAuthStore(state => state.clearIsAuthenticated);
    const user = useAuthStore(state => state.user)
    const router = useRouter()

    const onLogout = async () => {
        try {
            await logout();
            clearIsAuthenticated()
            router.replace('/sign-in')
        } catch (error) {
            console.log(error);
        }
    }

    if (isAuthenticated) {
        return (<>
            <li className={css.navigationItem}>
                <Link href="/profile" prefetch={false} className={css.navigationLink}>
                    Profile
                </Link>
            </li>
            <li className={css.navigationItem}>
                <p className={css.userEmail}>{user?.email}</p>
                <button className={css.logoutButton} onClick={onLogout}>
                    Logout
                </button>
            </li>
        </>)
    }

    return (
        <>
            <li className={css.navigationItem}>
                <Link href="/sign-in" prefetch={false} className={css.navigationLink}>
                    Login
                </Link>
            </li>
            <li className={css.navigationItem}>
                <Link href="/sign-up" prefetch={false} className={css.navigationLink}>
                    Sign up
                </Link>
            </li></>
    )
}