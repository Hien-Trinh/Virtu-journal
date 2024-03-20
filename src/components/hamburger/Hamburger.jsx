"use client"

import Link from "next/link"
import styles from "./hamburger.module.css"
import { useState } from "react"

const Hamburger = () => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <div className={styles.burger} onClick={() => setOpen(!open)}>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
            </div>
            {open && (
                <div className={styles.responsiveMenu}>
                    <Link href="/" className={styles.link}>
                        Homepage
                    </Link>
                    <Link href="/" className={styles.link}>
                        About
                    </Link>
                    <Link href="/" className={styles.link}>
                        Contact
                    </Link>
                </div>
            )}
        </>
    )
}

export default Hamburger
