'use client'

import css from '@/app/(auth routes)/sign-up/SignUpPage.module.css'
import { Field, Form, Formik, FormikHelpers } from 'formik'
import { Credentials } from '@/lib/api/api'
import { register } from '@/lib/api/clientApi'
import { useAuthStore } from '@/lib/store/authStore'
import { useRouter } from 'next/navigation'

const initialValues: Credentials= {
    email: "",
    password: ""
}

export default function Register() {
    const setUser = useAuthStore(state => state.setUser)
    const router = useRouter();

    const handleSubmit = async (
                values: Credentials,
                actons: FormikHelpers<Credentials>
        ) => {
            try {
                const user = await register(values);
                actons.resetForm()
                setUser(user)
                router.replace("/profile")
            } catch (error) {
                console.log(error)
            }
        }

    return (
        <main className={css.mainContent}>
            <h1 className={css.formTitle}>Sign up</h1>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form className={css.form}>
                <div className={css.formGroup}>
                    <label htmlFor="email">Email</label>
                    <Field id="email" type="email" name="email" className={css.input} required />
                </div>
                <div className={css.formGroup}>
                    <label htmlFor="password">Password</label>
                    <Field id="password" type="password" name="password" className={css.input} required />
                </div>
                <div className={css.actions}>
                    <button type="submit" className={css.submitButton}>
                        Register
                    </button>
                </div>
                    {/* {user.code === "ERR_BAD_REQUEST" && <p className={css.error}>{ }</p>} */}
                </Form>
                </Formik>
        </main>
    )
} 