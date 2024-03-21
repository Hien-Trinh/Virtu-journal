"use client"

import styles from "./header.module.css"
import Image from "next/image"

const Header = () => {
    const title = "Virtù"
    const subtitle = "Journal of Transdisciplinary Explorations"
    const imgSrc = "/Virtu_large.png"
    const imgAlt = "Virtù logo"

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.subtitle}>{subtitle}</p>
            <div className={styles.imgContainer}>
                <Image
                    src={imgSrc}
                    alt={imgAlt}
                    height={200}
                    width={200}
                    className={styles.image}
                />
            </div>
        </div>
    )
}

export default Header
