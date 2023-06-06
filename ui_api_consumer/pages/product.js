import Head from 'next/head'
import Link from "next/link";
import styles from '../styles/Home.module.css'
import { API_HOST } from '../config';
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

export default function Product() {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch(`${API_HOST}/product/`, {
            method: "GET"
        })
        .then((res) => res.json())
        .then((data) => {
            setData(data)
            setLoading(false)
        })
    }, [])

    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>Could not retrieved the data</p>

    return (
        <div className={styles.container}>
            <Head>
                <title>Product Data</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h2 className={styles.title}>
                    Product Data - <Link href="/">Home</Link>
                </h2>
                <ul>
                {data.map((product) => (
                    <li>
                        <div>
                            <label>Name: </label>
                            <span>{product.name}</span>
                        </div>
                        <div>
                            <label>Price: </label>
                            <span>{product.price}</span>
                        </div>
                    </li>
                ))}
                </ul>
            </main>
        </div>
    )
}