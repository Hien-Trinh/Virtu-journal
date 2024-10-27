"use client"

import SideMenu from "@/components/aboutComponents/sideMenu/SideMenu"
import Header from "@/components/header/Header"
import styles from "./teamPage.module.css"

const TeamPage = () => {
    const team = [
        {
            _id: 1,
            name: "Walter Moore",
            role: "Founder & Content Editor",
            major: "International Studies",
            year: "Sophomore",
        },
        {
            _id: 2,
            name: "Khant Wai Yan",
            role: "Founder & Managerial Editor",
            major: "International Studies",
            year: "Senior",
        },
        {
            _id: 3,
            name: "Dean Hu",
            role: "Content Writer",
            major: "International Studies",
            year: "Junior",
        },
        {
            _id: 4,
            name: "Katie Whelan",
            role: "Assistant Editor",
            major: "International Studies",
            year: "Sophomore",
        },
        {
            _id: 5,
            name: "Sydney Stratton",
            role: "Assistant Editor",
            major: "International Studies",
            year: "Sophomore",
        },
        {
            _id: 6,
            name: "Cole Conklin",
            role: "Secretary",
            major: "International Studies",
            year: "Sophomore",
        },
        {
            _id: 7,
            name: "Colette Lawler",
            role: "Assistant Editor",
            major: "Undecided",
            year: "Sophomore",
        },
        {
            _id: 8,
            name: "Nini Yiu",
            role: "Assistant Editor",
            major: "English Literature",
            year: "Sophomore",
        },
        {
            _id: 9,
            name: "David Trinh",
            role: "Technologist & Walter's Roommate",
            major: "Computer Science",
            year: "Sophomore",
        },
        {
            _id: 10,
            name: "Nanami Chesen",
            role: "Outreach Coordinator",
            major: "International Studies",
            year: "Junior",
        },
        {
            _id: 11,
            name: "Adam Rose",
            role: "Content Writer",
            major: "English Literature",
            year: "Senior",
        },
        {
            _id: 12,
            name: "Yosephine Manihuruk",
            role: "Associate Editor",
            major: "International Studies",
            year: "Junior",
        },
        {
            _id: 13,
            name: "Hannah Jenkins",
            role: "Assistant Editor",
            major: "Economics & Political Science",
            year: "Junior",
        },
        {
            _id: 14,
            name: "Jerry Park Piano",
            role: "Assistant Editor",
            major: "International Studies",
            year: "Senior",
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
                            <div key={member._id}>
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
