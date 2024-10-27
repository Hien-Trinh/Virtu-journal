import Image from "next/image"
import Link from "next/link"
import styles from "./footer.module.css"

const InstagramURL = "https://www.instagram.com/virtuatmac/"

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <div className={styles.logo}>
                    <Image
                        src="/Virtu_small.png" // Change this to the path of Virtù logo
                        alt="Virtù logo"
                        width={50}
                        height={50}
                    />
                    <h1 className={styles.logoText}>Virtù</h1>
                </div>
                <p className={styles.desc}>
                    Virtù, Macalester’s Journal of Transdisciplinary
                    Explorations, is an annual publication led by students.{" "}
                </p>
            </div>
            <div className={styles.links}>
                <div className={styles.list}>
                    <span className={styles.listTitle}>Links</span>
                    <Link href="/" className={styles.link}>
                        Homepage
                    </Link>
                    <Link href="/about" className={styles.link}>
                        About
                    </Link>
                    <Link href="/submit" className={styles.link}>
                        Submit
                    </Link>
                </div>
                <div className={styles.list}>
                    <span className={styles.listTitle}>About</span>
                    <Link href="/about/charter" className={styles.link}>
                        Charter
                    </Link>
                    <Link href="/about/team" className={styles.link}>
                        Team
                    </Link>
                    <Link href="/about/theme" className={styles.link}>
                        Theme
                    </Link>
                </div>
                <div className={styles.list}>
                    <span className={styles.listTitle}>Social</span>
                    <Link
                        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUXbmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXA%3D"
                        rel="noopener noreferrer"
                        target="_blank"
                        className={styles.link}
                    >
                        Facebook
                    </Link>
                    <Link
                        href={InstagramURL}
                        rel="noopener noreferrer"
                        target="_blank"
                        className={styles.link}
                    >
                        Instagram
                    </Link>
                    <Link
                        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUXbmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXA%3D"
                        rel="noopener noreferrer"
                        target="_blank"
                        className={styles.link}
                    >
                        Tiktok
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Footer
