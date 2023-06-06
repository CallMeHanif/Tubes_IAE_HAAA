import Head from 'next/head'
import Link from "next/link";
import styles from '../styles/Home.module.css'
import { API_HOST } from '../config';
import { useState } from "react";
import Cookies from "js-cookie";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [result, setResult] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("email", email);
        formData.append("password", password);

        // Make API call with fetch()
        const response = await fetch(`${API_HOST}/auth/token`, {
            method: "POST",
            body: formData,
        });

        let resultTmp = {}

        if (response.ok) {
            // Success!
            console.log("ok");
            resultTmp = await response.json();

            Cookies.set("token", resultTmp.access_token, {
                expires: resultTmp.expires_in/86400,
            });
            console.log("Login success!", resultTmp);
            alert("Token saved in Cookies");
        } else {
            // Error
            resultTmp = {
                failed: true
            }
            console.error("Error login:", response.status);
        }
        
        setResult(resultTmp)
    };
    
    return (
        <div className={styles.container}>
            <Head>
                <title>Login</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h2 className={styles.title}>
                    Login - <Link href="/">Home</Link>
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email:</label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="password">Password:</label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit">Send</button>
                </form>
                <br/>
                { result.access_token && <p>Token: {result.access_token}</p> }
                { result.token_type && <p>Token Type: {result.token_type}</p> }
                { result.expires_in && <p>Expires In: {result.expires_in}</p> }
                { result.failed && <p>Login Failed</p>}
            </main>
        </div>
    )
}