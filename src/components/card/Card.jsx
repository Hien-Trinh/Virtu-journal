import Image from "next/image"
import styles from "./card.module.css"
import Link from "next/link"

// currently static, change when API is ready
const Card = ({ key, item }) => {
    // placeholder data
    item = {
        img: "/p1.jpeg",
        createdAt: "2023-03-10T00:00:00.000Z",
        catSlug: "Travel",
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        slug: "slug",
    }

    return (
        <div className={styles.container} key={key}>
            {item.img && (
                <div className={styles.imageContainer}>
                    <Image
                        src={item.img}
                        alt=""
                        fill
                        className={styles.image}
                    />
                </div>
            )}
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>
                        {item.createdAt.substring(0, 10)} -{" "}
                    </span>
                    <span className={styles.category}>{item.catSlug}</span>
                </div>
                <Link href={`/posts/${item.slug}`}>
                    <h1>{item.title}</h1>
                </Link>
                <div
                    className={styles.desc}
                    dangerouslySetInnerHTML={{
                        __html: item?.desc.substring(0, 60),
                    }}
                />
                <Link href={`/posts/${item.slug}`} className={styles.link}>
                    Read More
                </Link>
            </div>
        </div>
    )
}

export default Card
