"use client"

import styles from "./aboutPage.module.css"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header/Header"
import Featured from "@/components/featured/Featured"
import Card from "@/components/card/Card"

const AboutPage = () => {
    const aboutSubjects = [
        {
            title: "Charter of Establishment",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            route: "charter",
        },
    ]
    return (
        <div>
            <Header />
            <div className={styles.posts}>
                <h1 className={styles.title}>About Virtù</h1>
                {aboutSubjects?.map((item) => (
                    <div>
                        <div className={styles.textContainer}>
                            <Link href={`/posts/${item.slug}`}>
                                <h1>{item.title}</h1>
                            </Link>
                            <div
                                className={styles.desc}
                                dangerouslySetInnerHTML={{
                                    __html: item?.desc.substring(0, 60),
                                }}
                            />
                            <Link
                                href={`/about/${item.route}`}
                                className={styles.link}
                            >
                                Read More
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AboutPage
