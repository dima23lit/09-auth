import Link from "next/link";
// import Image from 'next/image';
import css from '@/app/(private routes)/profile/ProfilePage.module.css'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NoteHab",
  description: "Welcome to NoteHab",
  openGraph: {
    title: "NoteHab",
    description: "Welcome to NoteHab",
    url: "https://08-zustand-aiv1.vercel.app/",
    images: [
      {
        url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
        width: 1200,
        height: 630,
        alt: "Note Hub Logo",
      },
    ],
  },
};

export default function Profile() {
    return (
        <main className={css.mainContent}>
            <div className={css.profileCard}>
                <div className={css.header}>
                    <h1 className={css.formTitle}>Profile Page</h1>
                    <Link href="/app/(private routes)/profile/edit" className={css.editProfileButton}>
                        Edit Profile
                    </Link>
                </div>
                <div className={css.avatarWrapper}>
                    {/* <Image
                        src="Avatar"
                        alt="User Avatar"
                        width={120}
                        height={120}
                        className={css.avatar}
                    /> */}
                </div>
                <div className={css.profileInfo}>
                    <p>
                        Username: your_username
                    </p>
                    <p>
                        Email: your_email@example.com
                    </p>
                </div>
            </div>
        </main>
    )
}