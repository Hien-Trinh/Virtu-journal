"use client"

import SideMenu from "@/components/aboutComponents/sideMenu/SideMenu"
import Header from "@/components/header/Header"
import Link from "next/link"
import styles from "./adminPage.module.css"

const AboutPage = () => {
    const summary =
        "Virtù, Macalester’s Journal of Transdisciplinary Explorations, is an annual publication led by students. Virtù serves as a platform for showcasing original works of literature, art, and research that align with a designated theme for each edition. Virtù strives to unite various perspectives and experiences from the Macalester community and beyond. The journal's overarching objective is to reveal universal truths that resonate with its readers and writers, promoting clarity and understanding across diverse cultures, borders, academic disciplines, and all manner of divisions."

    const aboutSubjects = [
        {
            _id: 1,
            title: "Charter of Establishment",
            route: "charter",
        },
        {
            _id: 2,
            title: "Meet the Team",
            route: "team",
        },
        {
            _id: 3,
            title: "Thematic Mock-up",
            route: "theme",
        },
    ]
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.content}>
                <div className={styles.aboutContent}>
                    <h1 className={styles.title}>About Virtù</h1>
                    <p className={styles.summary}>{summary}</p>
                    <div className={styles.aboutSubjects}>
                        {aboutSubjects?.map((item, index) => (
                            <div key={index} className={styles.textContainer}>
                                <Link href={`/about/${item.route}`}>
                                    <h1>{item.title}</h1>
                                </Link>
                                <Link
                                    href={`/about/${item.route}`}
                                    className={styles.link}
                                >
                                    Read More
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
                <SideMenu currentPage={"About"} />
            </div>
        </div>
    )
}

export default AboutPage
