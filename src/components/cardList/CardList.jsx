import React from "react"
import styles from "./cardList.module.css"
import Pagination from "../pagination/Pagination"
import Image from "next/image"
import Card from "../card/Card"

const getData = async (page, cat) => {
    const res = await fetch(
        `http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`,
        {
            cache: "no-store",
        }
    )

    if (!res.ok) {
        throw new Error("Failed")
    }

    return res.json()
}

// currently static, change when API is ready
const CardList = async ({ page, cat }) => {
    // const { posts, count } = await getData(page, cat)
    const posts = [
        { _id: 1, title: "Card 1" },
        { _id: 2, title: "Card 2" },
        { _id: 3, title: "Card 3" },
    ]

    // const POST_PER_PAGE = 2

    // const hasPrev = POST_PER_PAGE * (page - 1) > 0
    // const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count
    const hasPrev = true
    const hasNext = true

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Recent Posts</h1>
            <div className={styles.posts}>
                {posts?.map((item) => (
                    <Card item={item} key={item._id} />
                ))}
            </div>
            <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
        </div>
    )
}

export default CardList
