"use client"

import SideMenu from "@/components/aboutComponents/sideMenu/SideMenu"
import Header from "@/components/header/Header"
import styles from "./charterNewPage.module.css"

const CharterPage = () => {
    return (
        <div class={styles.container}>
            <Header></Header>
            <div class={styles.content}>
                <ul class={styles.charterContent}>
                    <h1 class={styles.title}>Charter of Establishment</h1>
                    <li class={styles.li}>
                        <h2>Article I - Purpose</h2>
                        <ol class={styles.alphaUpper}>
                            <li class={styles.li}>
                                <h4>Purpose</h4>
                                <p class={styles.indented}>
                                    Virtù, Macalester College’s journal of
                                    transdisciplinary explorations, endeavors to
                                    empower students and community members to
                                    espouse their convictions by way of original
                                    composition about specific themes selected
                                    by the Journal’s editorial staff.
                                </p>
                            </li>
                            <li class={styles.li}>
                                <h4>Uniqueness</h4>
                                <p class={styles.indented}>
                                    Distinguishing Features:
                                </p>
                                <ol class={styles.alphaLower}>
                                    <li class={styles.li}>
                                        <p>
                                            Adherence to elevated standards for
                                            quality of writing.
                                        </p>
                                    </li>
                                    <li class={styles.li}>
                                        <p>
                                            Commitment to a partnership with
                                            Macalester’s academic departments.
                                        </p>
                                    </li>
                                    <li class={styles.li}>
                                        <p>
                                            Unwavering commitment to the
                                            Journal’s thematic focus.
                                        </p>
                                    </li>
                                </ol>
                            </li>
                            <li class={styles.li}>
                                <h4>Impact</h4>
                                <p class={styles.indented}>
                                    Virtú provides Macalester’s students with a
                                    unique opportunity to elucidate their ideas
                                    and convictions in conjunction with editors
                                    collaborating to construct the best product
                                    possible. In doing so, students will reap
                                    the benefits of extracurricular intellectual
                                    enrichment and engage in dialogues
                                    impossible within the confines of the
                                    classroom. Virtú strives for excellence in
                                    all facets: intellectual rigor,
                                    interpersonal working relationships, quality
                                    of writing, and leadership.
                                </p>
                            </li>
                        </ol>
                    </li>
                    <li class={styles.li}>
                        <h2>Article II - Membership</h2>
                        <ol class={styles.alphaUpper}>
                            <li class={styles.li}>
                                <h4>Diversity, Equity, and Inclusion</h4>
                                <p class={styles.indented}>
                                    Virtù shall not be restrictive or
                                    discriminatory. In no aspect of its programs
                                    shall there be any difference in the
                                    treatment of persons based on race, creed,
                                    color, national origin, disability, age,
                                    gender, any consideration of sexual
                                    orientation, associational preference, or
                                    any other classification that would deprive
                                    the person of consideration as an individual
                                    equal opportunity and access to membership,
                                    programming, facilities, and benefits shall
                                    be open to all persons.
                                </p>
                            </li>
                        </ol>
                    </li>
                </ul>
                <SideMenu currentPage={"Charter"} />
            </div>
        </div>
    )
}

export default CharterPage
