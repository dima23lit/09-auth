'use client'

import css from '@/app/(auth routes)/sign-in/SignInPage.module.css'
import { Field, Form, Formik, FormikHelpers } from 'formik'
import { Credentials } from '@/lib/api/api'
import { login } from '@/lib/api/clientApi'

const initialValues: Credentials= {
    email: "",
    password: ""
}

export default function Login() {
    const handleSubmit = async (
            values: Credentials,
            actons: FormikHelpers<Credentials>
        ) => {
            console.log('values:', values)
            const user = await login(values);
            console.log('user', user);
            actons.resetForm()
    }
    
    return (
        <main className={css.mainContent}>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form className={css.form}>
                <h1 className={css.formTitle}>Sign in</h1>
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
                        Log in
                    </button>
                </div>
                {/* <p className={css.error}>{error}</p> */}
                </Form>
                </Formik>
        </main>
    )
}