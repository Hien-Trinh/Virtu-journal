import React from "react"
import styles from "./navbar.module.css"
import Link from "next/link"
import Hamburger from "../hamburger/Hamburger"
import ThemeToggle from "../themeToggle/ThemeToggle"

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>Virtù</div>
            <div className={styles.links}>
                <ThemeToggle />
                <Link href="/" className={styles.link}>
                    Home
                </Link>
                <Link href="/" className={styles.link}>
                    Contact
                </Link>
                <Link href="/" className={styles.link}>
                    About
                </Link>
                <Hamburger />
            </div>
        </div>
    )
}

export default Navbar
