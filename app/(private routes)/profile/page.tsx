import Link from "next/link";
// import Image from 'next/image';
import css from '@/app/(private routes)/profile/ProfilePage.module.css'
// import { Metadata } from "next";
import { fetchUser } from "@/lib/api/serverApi";

// export const metadata: Metadata = {
//   title: "NoteHab",
//   description: "Welcome to NoteHab",
//   openGraph: {
//     title: "NoteHab",
//     description: "Welcome to NoteHab",
//     url: "https://08-zustand-aiv1.vercel.app/",
//     images: [
//       {
//         url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
//         width: 1200,
//         height: 630,
//         alt: "Note Hub Logo",
//       },
//     ],
//   },
// };


export default async function Profile() {

    const data  = await fetchUser();
    console.log('data', data);

    return (
        <main className={css.mainContent}>
            <div className={css.profileCard}>
                <div className={css.header}>
                    <h1 className={css.formTitle}>Profile Page</h1>
                    <Link href="/profile/edit" className={css.editProfileButton}>
                        Edit Profile
                    </Link>
                </div>
                <div className={css.avatarWrapper}>
                    {/* <Image
                        src={data.avatar}
                        alt="User Avatar"
                        width={120}
                        height={120}
                        className={css.avatar}
                    /> */}
                </div>
                <div className={css.profileInfo}>
                    <p>
                        Username: {data.username}
                    </p>
                    <p>
                        Email: {data.email}
                    </p>
                </div>
            </div>
        </main>
    )
}