import React from "react"
import styles from "./footer.module.css"
import Image from "next/image"
import Link from "next/link"

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <div className={styles.logo}>
                    <Image
                        src="/logo.png"
                        alt="lama blog"
                        width={50}
                        height={50}
                    />
                    <h1 className={styles.logoText}>Lamablog</h1>
                </div>
                <p className={styles.desc}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Enim necessitatibus similique aspernatur obcaecati
                    veritatis. Aperiam cum porro sequi, totam minima
                    consequuntur, aspernatur deleniti vero repellendus dorales.
                </p>
                <div className={styles.icons}>
                    <Image src="/facebook.png" alt="" width={18} height={18} />
                    <Image src="/instagram.png" alt="" width={18} height={18} />
                    <Image src="/tiktok.png" alt="" width={18} height={18} />
                    <Image src="/youtube.png" alt="" width={18} height={18} />
                </div>
            </div>
            <div className={styles.links}>
                <div className={styles.list}>
                    <span className={styles.listTitle}>Links</span>
                    <Link href="/" className={styles.link}>
                        Homepage
                    </Link>
                    <Link href="/" className={styles.link}>
                        Blog
                    </Link>
                    <Link href="/" className={styles.link}>
                        About
                    </Link>
                    <Link href="/" className={styles.link}>
                        Contact
                    </Link>
                </div>
                <div className={styles.list}>
                    <span className={styles.listTitle}>Tags</span>
                    <Link href="/" className={styles.link}>
                        Style
                    </Link>
                    <Link href="/" className={styles.link}>
                        Fashion
                    </Link>
                    <Link href="/" className={styles.link}>
                        Coding
                    </Link>
                    <Link href="/" className={styles.link}>
                        Travel
                    </Link>
                </div>
                <div className={styles.list}>
                    <span className={styles.listTitle}>Social</span>
                    <Link href="/" className={styles.link}>
                        Facebook
                    </Link>
                    <Link href="/" className={styles.link}>
                        Instagram
                    </Link>
                    <Link href="/" className={styles.link}>
                        Tiktok
                    </Link>
                    <Link href="/" className={styles.link}>
                        Youtube
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Footer
