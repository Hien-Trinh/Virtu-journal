import styles from "./singlePage.module.css"
import Image from "next/image"

const getData = async (slug) => {
    const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
        cache: "no-store",
    })

    if (!res.ok) {
        throw new Error("Failed")
    }

    return res.json()
}

// currently static, change when API is ready
const SinglePage = async ({ params }) => {
    const { slug } = params

    // const data = await getData(slug)

    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.textContainer}>
                    {/* <h1 className={styles.title}>{data?.title}</h1> */}
                    <h1 className={styles.title}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit.
                    </h1>
                    <div className={styles.user}>
                        {/* {data?.user?.image && (
                            <div className={styles.userImageContainer}>
                                <Image
                                    src={data.user.image}
                                    alt=""
                                    fill
                                    className={styles.avatar}
                                />
                            </div>
                        )} */}
                        <div className={styles.userImageContainer}>
                            <Image
                                src="/food.png"
                                alt=""
                                fill
                                className={styles.avatar}
                            />
                        </div>
                        <div className={styles.userTextContainer}>
                            <span className={styles.username}>
                                {/* {data?.user.name} */}
                                David
                            </span>
                            {/* <span className={styles.date}>{data?.date}</span> */}
                            <span className={styles.date}>01.01.2024</span>
                        </div>
                    </div>
                </div>
                {/* {data?.img && (
                    <div className={styles.imageContainer}>
                        <Image
                            src={data.img}
                            alt=""
                            fill
                            className={styles.image}
                        />
                    </div>
                )} */}
                <div className={styles.imageContainer}>
                    <Image
                        src="/food.png"
                        alt=""
                        fill
                        className={styles.image}
                    />
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.post}>
                    <div
                        className={styles.description}
                        // dangerouslySetInnerHTML={{ __html: data?.desc }}
                        dangerouslySetInnerHTML={{
                            __html: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. \
                        Enim necessitatibus similique aspernatur obcaecati \
                        veritatis. Aperiam cum porro sequi, totam minima \
                        consequuntur, aspernatur deleniti vero repellendus dorales.Lorem, ipsum dolor sit amet consectetur adipisicing elit. \
                        Enim necessitatibus similique aspernatur obcaecati \
                        veritatis. Aperiam cum porro sequi, totam minima \
                        consequuntur, aspernatur deleniti vero repellendus dorales.Lorem, ipsum dolor sit amet consectetur adipisicing elit. \
                        Enim necessitatibus similique aspernatur obcaecati \
                        veritatis. Aperiam cum porro sequi, totam minima \
                        consequuntur, aspernatur deleniti vero repellendus dorales.Lorem, ipsum dolor sit amet consectetur adipisicing elit. \
                        Enim necessitatibus similique aspernatur obcaecati \
                        veritatis. Aperiam cum porro sequi, totam minima \
                        consequuntur, aspernatur deleniti vero repellendus dorales.Lorem, ipsum dolor sit amet consectetur adipisicing elit. \
                        Enim necessitatibus similique aspernatur obcaecati \
                        veritatis. Aperiam cum porro sequi, totam minima \
                        consequuntur, aspernatur deleniti vero repellendus dorales.",
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default SinglePage
