"use client"
import { db, storage } from "@/utils/firebase"
import { doc, getDoc } from "firebase/firestore"
import { getDownloadURL, ref } from "firebase/storage"
import Image from "next/image"
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

    const [articleUrl, setArticleUrl] = useState("")
    const [authorImgUrl, setAuthorImgUrl] = useState("")

    useEffect(() => {
        if (data?.article_name) {
            const fetchPdfUrl = async () => {
                const articleRef = ref(
                    storage,
                    `Articles/${data.article_name}.pdf`
                )
                const articleDownloadUrl = await getDownloadURL(articleRef)
                setArticleUrl(articleDownloadUrl)

                const authorImgRef = ref(
                    storage,
                    `AuthorPictures/${data.author_img_name}.png`
                )
                const authorImgDownloadUrl = await getDownloadURL(authorImgRef)
                setAuthorImgUrl(authorImgDownloadUrl)
            }
            fetchPdfUrl()
        }
    }, [data])

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
                            `https://virtujournal.org/articles/${data?.id}`
                        )
                        setCopySuccess("Copied!")
                    }}
                >
                    https://virtujournal.org/articles/{data?.id}
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
                        src={articleUrl}
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
                    <details className={styles.details}>
                        <summary className={styles.summary}>Author</summary>
                        <div className={styles.detailContents}>
                            <Image
                                src={authorImgUrl}
                                alt="Picture of the author"
                                sizes="100vw"
                                width={0}
                                height={0}
                                style={{
                                    width: "100%",
                                    height: "auto",
                                }}
                            ></Image>
                            <p>{data?.author_bio}</p>
                        </div>
                    </details>
                    <div className={styles.details} />
                </div>
            </div>
        </div>
    )
}

export default SinglePage
