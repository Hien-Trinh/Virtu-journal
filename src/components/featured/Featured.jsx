import React from "react"
import styles from "./featured.module.css"
import Image from "next/image"
import Link from "next/link"

const Featured = () => {
    const title = ""
    const desc = ""
    const imgSrc = "/Virtu_large.png"
    const imgAlt = "Virtù logo"

    const postTitle = "Virtù"
    const postSubTitle = "Journal of Transdisciplinary Studies"
    const postDesc =
        "Virtù, Macalester’s Journal of Transdisciplinary Explorations, is an annual publication led by students. Virtù serves as a platform for showcasing original works of literature, art, and research that align with a designated theme for each edition. Virtù strives to unite various perspectives and experiences from the Macalester community and beyond. The journal's overarching objective is to reveal universal truths that resonate with its readers and writers, promoting clarity and understanding across diverse cultures, borders, academic disciplines, and all manner of divisions."

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <b>{title}</b>
            </h1>
            <p className={styles.desc}>{desc}</p>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <Image
                        src={imgSrc}
                        alt={imgAlt}
                        fill
                        className={styles.image}
                    />
                </div>
                <div className={styles.textContainer}>
                    <h1 className={styles.postTitle}>{postTitle}</h1>
                    <p className={styles.postSubTitle}>{postSubTitle}</p>
                    <p className={styles.postDesc}>{postDesc}</p>
                    <Link href="/about" className={styles.button}>
                        Read More
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Featured
