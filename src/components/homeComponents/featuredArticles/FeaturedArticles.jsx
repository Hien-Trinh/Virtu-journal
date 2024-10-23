"use client"
import { db } from "@/utils/firebase"
import { collection, getDocs } from "firebase/firestore"
import Link from "next/link"
import { useEffect, useState } from "react"
import styles from "./featuredArticles.module.css"

const getData = async () => {
    const docRef = collection(db, "articles")
    const docSnap = await getDocs(docRef)

    const data = []
    docSnap.forEach((doc) => {
        data.push(doc.data())
    })

    return data
}

const FeaturedArticle = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const data = await getData()
            setData(data)
        }
        fetchData()
    }, [])

    return (
        <div className={styles.container}>
            {data?.map((article, index) => (
                <div key={index}>
                    <div className={styles.textContainer}>
                        <h2>{article.title}</h2>
                        <h2 className={styles.authors}>{article.authors}</h2>
                    </div>
                </div>
            ))}
            {data?.map((article, index) => (
                <div key={index} className={styles.articleCard}>
                    <div className={styles.title}>{article.title}</div>
                    <div className={styles.authors}>{article.authors}</div>
                    <div className={styles.authors}>
                        <Link href={`/articles/${article.id}`}>Learn more</Link>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default FeaturedArticle
