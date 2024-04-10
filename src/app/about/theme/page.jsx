"use client"

import styles from "./themePage.module.css"
import Image from "next/image"
import Header from "@/components/header/Header"
import SideMenu from "@/components/aboutComponents/sideMenu/SideMenu"

const TeamPage = () => {
    const imgSrc = "/Vexed_to_Nightmare.png"
    const imgAlt =
        "Vexed to Nightmare - an interpretation of The Second Coming by W B Yeats"

    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.content}>
                <ul className={styles.themeContent}>
                    <div className={styles.centered}>
                        <h1 className={styles.title}>
                            “Pervasive Uncertainty and Emerging Chaos”
                        </h1>
                        <h2 className={styles.subtitle}>Thematic Mock-up</h2>
                    </div>
                    <li className={`${styles.li} ${styles.centered}`}>
                        <h3>
                            “The Second Coming”
                            <br />
                            BY WILLIAM BUTLER YEATS
                        </h3>
                        <br />
                        Turning and turning in the widening gyre
                        <br />
                        The falcon cannot hear the falconer;
                        <br />
                        Things fall apart; the centre cannot hold;
                        <br />
                        Mere anarchy is loosed upon the world,
                        <br />
                        The blood-dimmed tide is loosed, and everywhere
                        <br />
                        The ceremony of innocence is drowned;
                        <br />
                        The best lack all conviction, while the worst
                        <br />
                        Are full of passionate intensity.
                        <br />
                        <br />
                        Surely some revelation is at hand;
                        <br />
                        Surely the Second Coming is at hand.
                        <br />
                        The Second Coming! Hardly are those words out
                        <br />
                        When a vast image out of Spiritus Mundi
                        <br />
                        Troubles my sight: somewhere in sands of the desert
                        <br />
                        A shape with lion body and the head of a man,
                        <br />
                        A gaze blank and pitiless as the sun,
                        <br />
                        Is moving its slow thighs, while all about it
                        <br />
                        Reel shadows of the indignant desert birds.
                        <br />
                        The darkness drops again; but now I know
                        <br />
                        That twenty centuries of stony sleep
                        <br />
                        Were vexed to nightmare by a rocking cradle,
                        <br />
                        And what rough beast, its hour come round at last,
                        <br />
                        Slouches towards Bethlehem to be born?
                    </li>
                    <li className={`${styles.li} ${styles.centered}`}>
                        <h3>
                            “Jungleland” [Verse 7]
                            <br />
                            BY BRUCE SPRINGSTEEN
                        </h3>
                        <br />
                        Outside the street&apos;s on fire in a real death waltz
                        <br />
                        Between what&apos;s flesh and what&apos;s fantasy
                        <br />
                        And the poets down here don&apos;t write nothing at all
                        <br />
                        They just stand back and let it all be
                        <br />
                        And in the quick of the night
                        <br />
                        They reach for their moment and try to make an honest
                        stand
                        <br />
                        But they wind up wounded, not even dead
                        <br />
                        Tonight in Jungleland
                        <br />
                    </li>

                    <li className={`${styles.li} ${styles.centered}`}>
                        <h4 className={styles.subtitle}>
                            Vexed to Nightmare - an interpretation of The Second
                            Coming by W B Yeats
                        </h4>
                        <div className={styles.imgContainer}>
                            <Image
                                src={imgSrc}
                                alt={imgAlt}
                                fill
                                className={styles.image}
                            />
                        </div>
                        <h4 className={styles.subtitle}>
                            Note. From SAA Community [Illustration], by Julia
                            Helmstedt, unknown
                        </h4>
                    </li>
                    <li className={styles.li}>
                        <h3 className={styles.centered}>
                            “Pervasive Uncertainty and Emerging Chaos”
                        </h3>
                        <br />
                        <p>
                            As the Soviet Union&apos;s anthem echoed its fading
                            proclamation and its flag descended from the Kremlin
                            for the final time in December 1991, the global
                            landscape underwent a profound transformation. The
                            geopolitical, social, cultural, and economic
                            dynamics shifted from the era of ideological
                            confrontation, where two opposing systems,
                            lifestyles, and historical perspectives engaged in a
                            fervent struggle, to an epoch that celebrated
                            liberal meritocratic capitalism, neoliberalism, and
                            democracy as the prevailing modes of thought
                            worldwide.
                        </p>
                        <br />
                        <p>
                            Forged in the crucible of external conflicts,
                            internal reckonings, and periodic soul-searching,
                            the United States of America initially assumed,
                            unchallenged, the mantle of global leadership. Over
                            time, however, this esteemed position began to
                            crumble under arrogance, complacency, and political
                            ignorance. These detrimental factors ultimately
                            contributed to the alienation of a once-strong
                            alliance, leading the United States astray from its
                            founding principles and convictions.
                        </p>
                        <p className={styles.indented}>
                            The erosion of integrity and credibility has seeped
                            into the core of American civilization, shattering
                            citizens&apos; confidence across the nation.
                            Once-revered institutions have lost their standing,
                            evident in events such as the divisive 2020 Black
                            Lives Matter protests and the 2021 storming of the
                            U.S. Capitol by fringe-right groups emboldened by
                            the seditious rhetoric of then-President Trump. This
                            erosion has created a trust vacuum, fostering the
                            growth of perilous populism and fringe political
                            ideologies that further deepen divisions among
                            Americans—neighbors from neighbors, business owners
                            from customers, and colleagues from colleagues.
                        </p>
                        <p className={styles.indented}>
                            The United States, once a unified entity, now finds
                            itself tribalized and socially Balkanized, driven
                            further apart by ideological fissures. The nation
                            grapples with a growing chasm, sowing discord that
                            threatens the fabric of its society. It is a
                            sobering reflection of the consequences that arise
                            when a nation loses sight of its foundational
                            principles and succumbs to internal strife.
                        </p>
                        <br />
                        <p>
                            The decline of the United States is not an isolated
                            phenomenon; it pervades the entire classical Western
                            world, currently the nexus of Giovanni
                            Arrighi&apos;s &quot;Cycle of Accumulation.&quot;
                            Europe&apos;s recent shift towards right-wing
                            ideologies amidst systemic immigration crises
                            mirrors the political landscape in the United
                            States. This entrenchment of power hinders the
                            effective management of internal stability and the
                            direction of social discourse and development.
                        </p>
                        <p className={styles.indented}>
                            Moreover, Japan, an external player in the American
                            hegemon and a recent economic powerhouse, faces
                            challenges leading to decline. The mismanagement of
                            its population&apos;s age distribution condemns
                            Japan to squalor and devastating downturn. The
                            burden on its diminishing younger generations to
                            care for an exponentially growing older, retired
                            demographic spells economic and social
                            deterioration, pointing toward impending doom in the
                            near future.
                        </p>
                        <p className={styles.indented}>And on and on.</p>
                        <br />
                        <p>
                            As the influence of the United States and its allies
                            diminishes, traditionally categorized as members of
                            the &quot;Global South&quot; are on the rise, even
                            as they endure subtle oppression through &quot;slow
                            violence&quot; — violence which occurs gradually and
                            is not necessarily visible, it is “incremental and
                            accretive” — orchestrated by both nations and
                            non-state entities in the core, aligned with the
                            hegemonic power. Bearing in mind the traumatic and
                            disastrous consequences of slow violence, these
                            emerging nations are progressively rebuffing
                            invitations for alignment and collaboration from the
                            United States and its allied states. Instead, they
                            are gravitating towards an expanding bloc
                            predominantly led by the People’s Republic of China
                            (PRC). These nations, cognizant of the discord
                            created by hollow promises and deceptive assurances
                            from the core, perceive their shift towards the PRC
                            as a significant and authentic challenge to Western
                            hegemony, reminiscent of the Cold War era. Above
                            all, their aspiration lies in fostering
                            institutional change and accountability, both within
                            their borders and among the prevailing powers.
                        </p>
                        <p className={styles.indented}>
                            Is the Chinese model sustainable; will the PRC
                            overcome temporally-removed party politics, the
                            middle-income trap (lack of upward mobility upon
                            reaching the “middle class”), and population
                            challenges of their own? Is this emerging political
                            bloc led by the People’s Republic of China driven by
                            genuinely positive intentions? Or is its aim solely
                            to shift power dynamics, becoming the master of
                            neo-colonialist domination reminiscent of the United
                            States&apos; current position? Will our global
                            situation worsen — politically, socially, and
                            economically — under the leadership of the People’s
                            Republic of China? Can we anticipate a reduction in
                            violence and an alleviation of uncertainty with this
                            change in leadership?
                        </p>
                        <br />
                        <p>
                            Thirty-three years have elapsed since the United
                            States ascended to the pinnacle of global power.
                            Now, our world stands at a critical juncture, marked
                            by a crossroads that unveils a myriad of potential
                            paths, each laden with its own implications and
                            ominous outcomes. The waning influence of the United
                            States and its allies exposes vulnerabilities and
                            offers a momentous opportunity for well-intentioned
                            state actors motivated to improve global standards
                            of equity and non-state entities eager to hasten the
                            onset of worldwide disorder and subsequent
                            reconfiguration.
                        </p>
                        <p className={styles.indented}>
                            As time marches on, our world seems to be in a state
                            of unraveling, echoing the prophetic words of Yeats.
                            The &quot;centre,&quot; embodied by the United
                            States, is struggling to hold, heralding an era of
                            global uncertainty that will persist until a new
                            &quot;centre&quot; emerges to take on the mantle of
                            global leadership. The question is: Who will step
                            forward to define this new epoch and rebuild the
                            world order after a period of barbarism,
                            desperation, and uncertainty? Will the new global
                            order be led by a nation that aspires towards
                            universal equity, or will it be an interloper,
                            disguised as a champion of righteousness but intent
                            on perpetuating chaos and despair? Yeats&apos;
                            somber description of &quot;The darkness drops
                            again; but now I know / That twenty centuries of
                            stony sleep / Were vexed to nightmare by a rocking
                            cradle, / And what rough beast, its hour come round
                            at last, / Slouches towards Bethlehem to be
                            born?&quot; (Yeats, lines 17-22) paints a bleak
                            picture of what may come.
                        </p>
                        <p className={styles.indented}>
                            Can we, as a human family, break free from the
                            constraints of this metaphorical Jungleland? Can we
                            overcome our fundamental disagreements and
                            ideological qualms to move forward together, sharing
                            destinies and transitioning from an epoch
                            characterized by a culture of death to an era of
                            understanding, cooperation, and progress? Or will we
                            fail, forever condemned to endure chaos, violence,
                            and uncertainty, forever reminiscing about what we
                            had, never to dream about what &quot;could be&quot;
                            again?
                        </p>
                    </li>
                </ul>
                <SideMenu currentPage={"Team"} />
            </div>
        </div>
    )
}

export default TeamPage
