"use client"
import { db } from "@/utils/firebase"
import { doc, getDoc } from "firebase/firestore"
import Image from "next/image"
import { useEffect, useState } from "react"
import styles from "./singlePage.module.css"

const getData = async (slug) => {
    const docRef = doc(db, "articles", slug)
    const docSnap = await getDoc(docRef)

    const data = docSnap.data()

    return data
}

// currently static, change when API is ready
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

    console.log(data)
    const pdf_url = "/ClimateCasino.pdf"

    const [numPages, setNumPages] = useState()
    const [pageNumber, setPageNumber] = useState(1)

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages)
    }

    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>{data?.title}</h1>
                    {/* <h1 className={styles.title}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit.
                    </h1> */}
                    <div className={styles.user}>
                        {/* {data?.user?.image && (
                            <div className={styles.userImageContainer}>
                                <Image
                                    src={data.user.image}
                                    alt=""
                                    fill
                                    className={styles.avatar}
                                />
                            </div>
                        )} */}
                        <div className={styles.userImageContainer}>
                            <Image
                                src="/food.png"
                                alt=""
                                fill
                                className={styles.avatar}
                            />
                        </div>
                        <div className={styles.userTextContainer}>
                            <span className={styles.username}>
                                {/* {data?.user.name} */}
                                David
                            </span>
                            {/* <span className={styles.date}>{data?.date}</span> */}
                            <span className={styles.date}>01.01.2024</span>
                        </div>
                    </div>
                </div>
                {/* {data?.img && (
                    <div className={styles.imageContainer}>
                        <Image
                            src={data.img}
                            alt=""
                            fill
                            className={styles.image}
                        />
                    </div>
                )} */}
                <div className={styles.imageContainer}>
                    <Image
                        src="/food.png"
                        alt=""
                        fill
                        className={styles.image}
                    />
                </div>
            </div>
            <iframe
                src={data?.pdf_url}
                width="640"
                height="480"
                allow="autoplay"
            ></iframe>
        </div>
    )
}

export default SinglePage
