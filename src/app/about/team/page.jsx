"use client"

import styles from "./teamPage.module.css"
import Header from "@/components/header/Header"
import SideMenu from "@/components/aboutComponents/sideMenu/SideMenu"

const TeamPage = () => {
    const team = [
        {
            name: "Walter Moore",
            role: "Founder & Content Editor",
            major: "International Studies",
            year: "First-Year",
        },
        {
            name: "Khant Wai Yan",
            role: "Founder & Managerial Editor",
            major: "International Studies",
            year: "Junior",
        },
        {
            name: "Dean Hu",
            role: "Content Writer",
            major: "International Studies",
            year: "Sophomore",
        },
        {
            name: "Katie Whelan",
            role: "Assistant Editor",
            major: "International Studies",
            year: "First-year",
        },
        {
            name: "Sydney Stratton",
            role: "Assistant Editor",
            major: "International Studies",
            year: "First-year",
        },
        {
            name: "Cole Conklin",
            role: "Secretary",
            major: "International Studies",
            year: "First-year",
        },
        {
            name: "Colette Lawler",
            role: "Assistant Editor",
            major: "Undecided",
            year: "First-year",
        },
        {
            name: "Nini Yiu",
            role: "Associate Editor",
            major: "English Literature",
            year: "Senior",
        },
        {
            name: "David Trinh",
            role: "Technologist & Walter's Roommate",
            major: "Computer Science",
            year: "First-year",
        },
        {
            name: "Nanami Chesen",
            role: "Outreach Coordinator",
            major: "International Studies",
            year: "Sophomore",
        },
        {
            name: "Adam Rose",
            role: "Content Writer",
            major: "English Literature",
            year: "Senior",
        },
        {
            name: "Yosephine Manihuruk",
            role: "Associate Editor",
            major: "International Studies",
            year: "Sophomore",
        },
    ]

    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.content}>
                <div className={styles.teamContent}>
                    <h1 className={styles.title}>Meet the Team</h1>
                    <div className={styles.teamList}>
                        {team?.map((member) => (
                            <div>
                                <div className={styles.detail}>
                                    <span className={styles.major}>
                                        {member.major} -{" "}
                                    </span>
                                    <span className={styles.category}>
                                        {member.year}
                                    </span>
                                </div>
                                <div className={styles.textContainer}>
                                    <h2>{member.name}</h2>
                                    <h2 className={styles.role}>
                                        {member.role}
                                    </h2>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <SideMenu currentPage={"Team"} />
            </div>
        </div>
    )
}

export default TeamPage
