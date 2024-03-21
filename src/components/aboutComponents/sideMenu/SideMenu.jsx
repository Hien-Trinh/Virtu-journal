"use client"

import React from "react"
import styles from "./sideMenu.module.css"
import Link from "next/link"

const SideMenu = ({ currentPage }) => {
    return (
        <div className={styles.container}>
            <h2 className={styles.subtitle}>{currentPage}</h2>
            <h1 className={styles.title}>About</h1>
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
                    href="/blog"
                    className={`${styles.categoryItem} ${styles.food}`}
                >
                    Food
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
    )
}

export default SideMenu
