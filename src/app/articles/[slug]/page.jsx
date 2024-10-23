"use client"
import { db } from "@/utils/firebase"
import { doc, getDoc } from "firebase/firestore"
import { useEffect, useState } from "react"
import styles from "./articlesPage.module.css"

const getData = async (slug) => {
    const docRef = doc(db, "articles", slug)
    const docSnap = await getDoc(docRef)

    const data = docSnap.data()

    return data
}

const SinglePage = ({ params }) => {
    const { slug } = params

    const [data, setData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const data = await getData(slug)
            setData(data)
        }
        fetchData()
    }, [slug])

    const [copySuccess, setCopySuccess] = useState("")

    useEffect(() => {
        if (copySuccess) {
            const timer = setTimeout(() => {
                setCopySuccess("")
            }, 2000)
            return () => clearTimeout(timer)
        }
    }, [copySuccess])

    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <div className={styles.title}>{data?.title}</div>
                <div className={styles.authors}>{data?.authors}</div>
                <div className={styles.date_published}>
                    {data?.date_published}
                </div>
                <div
                    className={styles.link}
                    onClick={() => {
                        navigator.clipboard.writeText(
                            `https://virtu.org/articles/${data?.id}`
                        )
                        setCopySuccess("Copied!")
                    }}
                >
                    https://virtu.org/articles/{data?.id}
                    <div
                        className={`${styles.copyConfirm} ${
                            copySuccess ? styles.show : null
                        }`}
                    >
                        {copySuccess}
                    </div>
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.pdf}>
                    <iframe
                        src={data?.pdf_url}
                        width="100%"
                        height="100%"
                        allow="autoplay"
                    ></iframe>
                </div>
                <div className={styles.infoContainer}>
                    <details className={styles.details}>
                        <summary className={styles.summary}>Abstract</summary>
                        <div className={styles.detailContents}>
                            <p>{data?.abstract}</p>
                        </div>
                    </details>

                    <details className={styles.details}>
                        <summary className={styles.summary}>Keywords</summary>
                        <div className={styles.detailContents}>
                            <p>
                                {data?.keywords?.map((keyword, index) => (
                                    <span key={index}>
                                        {keyword}
                                        <br />
                                    </span>
                                ))}
                            </p>
                        </div>
                    </details>
                    <div className={styles.details} />
                </div>
            </div>
        </div>
    )
}

export default SinglePage
