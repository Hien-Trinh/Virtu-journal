"use client"

import Featured from "@/components/homeComponents/featured/Featured"
import FeaturedArticle from "../components/homeComponents/featuredArticles/FeaturedArticles"
import styles from "./homepage.module.css"

export default function Home({ searchParams }) {
    // const page = parseInt(searchParams.page) || 1

    return (
        <div className={styles.container}>
            <Featured />
            <FeaturedArticle />
            {/* <div className={styles.content}>
                <CardList page={page} />
                <Menu />
            </div> */}
        </div>
    )
}
