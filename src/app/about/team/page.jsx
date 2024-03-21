"use client"

import styles from "./teamPage.module.css"
import Header from "@/components/header/Header"
import SideMenu from "@/components/aboutComponents/sideMenu/SideMenu"

const TeamPage = () => {
    const team = [
        {
            name: "Walter Moore",
            role: "Founder & Editor-in-Chief",
            major: "International Studies",
            year: "Freshman",
        },
        {
            name: "Khant Wai Yan",
            role: "Founder & Editor-in-Chief",
            major: "International Studies",
            year: "Junior",
        },
        {
            name: "Jane Smith",
            role: "Graphic Designer",
            major: "Fine Arts",
            year: "Junior",
        },
        {
            name: "Alex Johnson",
            role: "Marketing Coordinator",
            major: "Business Administration",
            year: "Sophomore",
        },
        {
            name: "Emily Davis",
            role: "Content Writer",
            major: "English Literature",
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
                                    <h1>{member.name}</h1>
                                    <h1 className={styles.role}>
                                        {member.role}
                                    </h1>
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
