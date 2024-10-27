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
                <div key={index} className={styles.articleCard}>
                    <div className={styles.details}>
                        <span className={styles.publisher}>Virtù</span>
                        <span className={styles.date_published}>
                            {" "}
                            | {article.date_published}
                        </span>
                    </div>
                    <div className={styles.title}>
                        <Link href={`/articles/${article.id}`}>
                            {article.title}
                        </Link>
                    </div>
                    <div className={styles.authors}>By {article.authors}</div>
                </div>
            ))}
        </div>
    )
}

export default FeaturedArticle
