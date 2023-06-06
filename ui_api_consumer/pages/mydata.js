import Head from 'next/head'
import Link from "next/link";
import styles from '../styles/Home.module.css'
import { API_HOST } from '../config';
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

export default function MyData() {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch(`${API_HOST}/auth/me`, {
            method: "GET",
            headers: {
              Authorization: "Bearer "+Cookies.get("token"),
            }
        })
        .then((res) => res.json())
        .then((data) => {
            setData(data)
            setLoading(false)
        })
    }, [])

    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>Token failed, try to login</p>
    if (data.status_code) return <p>Token failed, try to login</p>

    return (
        <div className={styles.container}>
            <Head>
                <title>User Data</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h2 className={styles.title}>
                    User Data - <Link href="/">Home</Link>
                </h2>
                <div>
                    <label htmlFor="id">id: </label>
                    <span id="id">{data.id}</span>
                </div>
                <div>
                    <label htmlFor="name">name: </label>
                    <span>{data.name}</span>
                </div>
                <div>
                    <label htmlFor="email">email: </label>
                    <span>{data.email}</span>
                </div>
            </main>
        </div>
    )
}