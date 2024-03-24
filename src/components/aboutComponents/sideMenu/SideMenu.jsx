"use client"

import React from "react"
import styles from "./sideMenu.module.css"
import Link from "next/link"
import { useState, useEffect } from "react"

const SideMenu = ({ currentPage }) => {
    const offset = 497.5 // 497.5px is the height of the header
    const [scrollPosition, setScrollPosition] = useState(0) // init scroll position
    const handleScroll = () => {
        const position = window.scrollY
        setScrollPosition(position)
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true })

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <div className={styles.container}>
            <div
                className={scrollPosition + 100 > offset ? styles.sticky : null}
            >
                <h2 className={styles.subtitle}>{currentPage}</h2>
                <Link href="/about" className={styles.link}>
                    <h1 className={styles.title}>About</h1>
                </Link>
                <div className={styles.categoryList}>
                    <Link
                        href="/about/charter"
                        className={`${styles.categoryItem} ${styles.charter}`}
                    >
                        Charter
                    </Link>
                    <Link
                        href="/about/team"
                        className={`${styles.categoryItem} ${styles.team}`}
                    >
                        Team
                    </Link>
                    <Link
                        href="/about/theme"
                        className={`${styles.categoryItem} ${styles.theme}`}
                    >
                        Theme
                    </Link>
                    <Link
                        href="/blog"
                        className={`${styles.categoryItem} ${styles.travel}`}
                    >
                        Travel
                    </Link>
                    <Link
                        href="/blog"
                        className={`${styles.categoryItem} ${styles.culture}`}
                    >
                        Culture
                    </Link>
                    <Link
                        href="/blog"
                        className={`${styles.categoryItem} ${styles.coding}`}
                    >
                        Coding
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SideMenu
