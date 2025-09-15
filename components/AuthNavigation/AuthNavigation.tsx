'use client'

import css from '@/components/AuthNavigation/AuthNavigation.module.css'
import { logout } from '@/lib/api/clientApi';
import Link from "next/link";


export default function AuthNavigation() {
    const onLogout = async () => {
        await logout();
    } 

    return (
        <>
            <li className={css.navigationItem}>
                <Link href="/profile" prefetch={false} className={css.navigationLink}>
                    Profile
                </Link>
            </li>
            <li className={css.navigationItem}>
                <p className={css.userEmail}>User email</p>
                <button className={css.logoutButton} onClick={onLogout}>
                    Logout
                </button>
            </li>
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