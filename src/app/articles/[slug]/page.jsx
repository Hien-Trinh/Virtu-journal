"use client"
import { db } from "@/utils/firebase"
import { doc, getDoc } from "firebase/firestore"
import { useEffect, useState } from "react"
import styles from "./singlePage.module.css"

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
                <div className={styles.infoContainer}></div>
                <div className={styles.pdf}>
                    <iframe
                        src={data?.pdf_url}
                        width="100%"
                        height="100%"
                        allow="autoplay"
                    ></iframe>
                </div>
                <div className={styles.details}>
                    <div className={styles.abstract}>
                        <h2>Abstract</h2>
                        <p>{data?.abstract}</p>
                    </div>
                    <div className={styles.keywords}>
                        <h2>Keywords</h2>
                        <p>{data?.keywords}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SinglePage
