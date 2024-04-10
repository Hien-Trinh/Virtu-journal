"use client"

import styles from "./charterPage.module.css"
import Header from "@/components/header/Header"
import SideMenu from "@/components/aboutComponents/sideMenu/SideMenu"

const CharterPage = () => {
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.content}>
                <ul className={styles.charterContent}>
                    <h1 className={styles.title}>Charter of Establishment</h1>
                    <li className={styles.li}>
                        <h2>Article I - Purpose</h2>
                        <ol className={styles.alphaUpper}>
                            <li className={styles.li}>
                                <h4
                                    style={{
                                        paddingTop: "2pt",
                                    }}
                                >
                                    Purpose
                                </h4>
                                <p className={styles.nonList}>
                                    Virtù, Macalester College’s journal of
                                    transdisciplinary explorations, endeavors to
                                    empower students and community members to
                                    espouse their convictions by way of original
                                    composition about specific themes selected
                                    by the Journal’s editorial staff.
                                </p>
                            </li>
                            <li className={styles.li}>
                                <h4>Uniqueness</h4>
                                <ol className={styles.number}>
                                    <li className={styles.li}>
                                        <p>Distinguishing Features:</p>
                                        <ol className={styles.alphaLower}>
                                            <li className={styles.li}>
                                                <p>
                                                    Adherence to elevated
                                                    standards for quality of
                                                    writing.
                                                </p>
                                            </li>
                                            <li className={styles.li}>
                                                <p>
                                                    Commitment to a partnership
                                                    with Macalester’s academic
                                                    departments.
                                                </p>
                                            </li>
                                            <li className={styles.li}>
                                                <p>
                                                    Unwavering commitment to the
                                                    Journal’s thematic focus.
                                                </p>
                                                <p className={styles.nonList}>
                                                    Virtù is distinguished from
                                                    other academic journals at
                                                    Macalester by its commitment
                                                    to maintaining a{" "}
                                                    <i>specific </i>
                                                    and <i>elucidated </i>
                                                    theme to which all published
                                                    written works in an issue
                                                    will adhere and cater. The
                                                    goal of the thematic
                                                    structure is to construct a{" "}
                                                    <i>unified narrative </i>
                                                    that tells a single story
                                                    from the prism of many
                                                    perspectives and modes of
                                                    written communication.
                                                </p>
                                            </li>
                                        </ol>
                                    </li>
                                    <li className={styles.li}>
                                        <p>Thematic Focus:</p>
                                        <ol className={styles.alphaLower}>
                                            <li className={styles.li}>
                                                <p>
                                                    Encourages diverse opinions
                                                    expressed in various forms
                                                    and mediums.
                                                </p>
                                            </li>
                                            <li className={styles.li}>
                                                <p>
                                                    Includes personal essays,
                                                    literary criticism, short
                                                    narratives, poems, and
                                                    written pieces focused on
                                                    political discourse.
                                                </p>
                                            </li>
                                            <li className={styles.li}>
                                                <p>
                                                    Internationalism and
                                                    emphasis on a
                                                    transdisciplinary academic
                                                    approach.
                                                </p>
                                                <ul className={styles.hyphen}>
                                                    <li className={styles.li}>
                                                        <p>
                                                            Virtù intends to
                                                            publish written
                                                            pieces addressing
                                                            issues and
                                                            experiences the
                                                            world over;
                                                            specifically, we
                                                            intend to have at{" "}
                                                            <b>
                                                                least one
                                                                chapter{" "}
                                                            </b>
                                                            written by those
                                                            with personal and
                                                            intellectual
                                                            connections to the{" "}
                                                            <i>
                                                                United States,
                                                                China, Europe,
                                                                Latin America,
                                                                Africa,{" "}
                                                            </i>
                                                            and the greater{" "}
                                                            <i>Asia</i>.
                                                        </p>
                                                    </li>
                                                    <li className={styles.li}>
                                                        <p>
                                                            While we hope to
                                                            have{" "}
                                                            <b>
                                                                at least one
                                                                written piece{" "}
                                                            </b>
                                                            addressing each of
                                                            the aforementioned
                                                            states and
                                                            continents within
                                                            each issue of Virtù,
                                                            this does not mean
                                                            we will not publish
                                                            in areas outside of
                                                            those listed.
                                                        </p>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ol>
                                    </li>
                                    <li className={styles.li}>
                                        <p>Strategic Partnership:</p>
                                        <ol className={styles.alphaLower}>
                                            <li className={styles.li}>
                                                <p>
                                                    Idealized within the
                                                    literary pieces included in
                                                    the publication.
                                                </p>
                                            </li>
                                            <li className={styles.li}>
                                                <p>
                                                    Serves as a platform for
                                                    informed social dialogue.
                                                </p>
                                            </li>
                                            <li className={styles.li}>
                                                <p>
                                                    Inspires meaningful
                                                    conversations.
                                                </p>
                                            </li>
                                        </ol>
                                    </li>
                                </ol>
                            </li>
                            <li className={styles.li}>
                                <h4>Impact</h4>
                                <p className={styles.nonList}>
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
                    <li className={styles.li}>
                        <h2>Article II - Membership</h2>
                        <ol className={styles.alphaUpper}>
                            <li className={styles.li}>
                                <h4>Diversity, Equity, and Inclusion</h4>
                                <ol className={styles.number}>
                                    <li className={styles.li}>
                                        <h4>Statement of Inclusion</h4>
                                        <ol className={styles.alphaLower}>
                                            <li className={styles.li}>
                                                <p>
                                                    Virtù shall not be
                                                    restrictive or
                                                    discriminatory. In no aspect
                                                    of its programs shall there
                                                    be any difference in the
                                                    treatment of persons based
                                                    on race, creed, color,
                                                    national origin, disability,
                                                    age, gender, any
                                                    consideration of sexual
                                                    orientation, associational
                                                    preference, or any other
                                                    classification that would
                                                    deprive the person of
                                                    consideration as an
                                                    individual equal opportunity
                                                    and access to membership,
                                                    programming, facilities, and
                                                    benefits shall be open to
                                                    all persons.
                                                </p>
                                            </li>
                                        </ol>
                                    </li>
                                    <li className={styles.li}>
                                        <h4>Virtù’s Promise</h4>
                                        <ol className={styles.alphaLower}>
                                            <li className={styles.li}>
                                                <p>
                                                    As Macalester’s student body
                                                    is diverse, we aim to
                                                    represent these values in
                                                    our journal as well.
                                                    Therefore, the members of
                                                    Virtù will strive for these
                                                    promises within our bylaws:
                                                </p>
                                                <ol className={styles.hyphen}>
                                                    <li className={styles.li}>
                                                        <p>
                                                            The leadership of
                                                            the journal will
                                                            encourage the
                                                            one-third rule in
                                                            both the Editorial
                                                            Board and the
                                                            Executive Board.
                                                            This means these
                                                            committees should
                                                            aim for at least
                                                            one-third
                                                            representation for
                                                            those who identify
                                                            as BIPOC and/or
                                                            international
                                                            students. We also
                                                            hope to uphold the
                                                            same standard for
                                                            other matrices of
                                                            oppression, such as
                                                            gender, sexuality,
                                                            disability, and age.
                                                            This ensures that
                                                            the club stays
                                                            aligned with our
                                                            internationalism,
                                                            multiculturalism,
                                                            and inclusion goals.
                                                        </p>
                                                    </li>
                                                    <li className={styles.li}>
                                                        <p>
                                                            The one-third rule
                                                            shall also be
                                                            considered for the
                                                            contributing
                                                            writers, however, as
                                                            we want to promote
                                                            academic freedom and
                                                            do not want to
                                                            censor scholarship,
                                                            it will not be a
                                                            requirement.
                                                        </p>
                                                    </li>
                                                </ol>
                                            </li>
                                        </ol>
                                    </li>
                                </ol>
                            </li>
                            <li className={styles.li}>
                                <h4>Membership Status</h4>
                                <ol className={styles.number}>
                                    <li className={styles.li}>
                                        <p>
                                            Membership will not require
                                            auditions and tryouts;interested
                                            individuals can contact Executive
                                            and Editorial Board members.
                                            Interested individuals must display
                                            commitment toward the organization’s
                                            expectations by attending at least
                                            six meetings before being considered
                                            a full member.
                                        </p>
                                    </li>
                                    <li className={styles.li}>
                                        <p>
                                            Members are allowed two unexcused
                                            absences in one semester without any
                                            repercussions. Members are expected
                                            to attend at least half of the
                                            organization’s meetings in one
                                            semester. Any violation of these
                                            expectations will be brought to the
                                            Board’s attention to discuss the
                                            appropriate next step.
                                        </p>
                                    </li>
                                    <li className={styles.li}>
                                        <p>
                                            Members are expected to assume a
                                            role in the organization listed
                                            under Article III. Each member is
                                            then expected to fulfill their
                                            responsibilities within the assumed
                                            role. If members need help
                                            fulfilling their duties to their
                                            abilities, they are expected to
                                            communicate their concerns to the
                                            Board members.
                                        </p>
                                    </li>
                                </ol>
                            </li>
                            <li className={styles.li}>
                                <h4>Removal</h4>
                                <ol className={styles.number}>
                                    <li className={styles.li}>
                                        <p>
                                            All members shall have good faith
                                            attempts regarding possible
                                            removals.
                                        </p>
                                    </li>
                                    <li className={styles.li}>
                                        <p>Initial meeting</p>
                                        <ol className={styles.alphaLower}>
                                            <li className={styles.li}>
                                                <p>
                                                    When a concern arises with
                                                    one of the members, the
                                                    Content Editor (CE) and/or
                                                    Managerial Editor (ME)
                                                    should set up an appointment
                                                    with the concerned party to
                                                    discuss their concerns. This
                                                    could involve CSLE if
                                                    needed.
                                                </p>
                                            </li>
                                        </ol>
                                    </li>
                                    <li className={styles.li}>
                                        <p>Determining appropriate measure</p>
                                        <ol className={styles.alphaLower}>
                                            <li className={styles.li}>
                                                <p>
                                                    The Executive Board will set
                                                    up an appointment to discuss
                                                    appropriate measures for the
                                                    member and determine whether
                                                    removal is needed.
                                                </p>
                                            </li>
                                        </ol>
                                    </li>
                                    <li className={styles.li}>
                                        <p>SOC & CSLE Approval</p>
                                        <ol className={styles.alphaLower}>
                                            <li className={styles.li}>
                                                <p>
                                                    Virtù, the Executive Board,
                                                    the Editorial Board, and all
                                                    members will review and
                                                    adhere to all College
                                                    policies, including the{" "}
                                                    <a
                                                        href="https://docs.google.com/document/d/1S3cJu0VCemFNTICrUM2s49BR14FB6gEx4BWR8hvR-fQ/edit?usp=sharing"
                                                        style={{
                                                            textDecoration:
                                                                "underline",
                                                        }}
                                                        target="_blank"
                                                    >
                                                        Student Organization
                                                        Code of Conduct.
                                                    </a>
                                                </p>
                                            </li>
                                            <li className={styles.li}>
                                                <p>
                                                    As membership in Virtù is
                                                    rarely repealed, the journal
                                                    members with concerns will
                                                    schedule advising
                                                    appointments with a CSLE
                                                    staff and/or advisor after
                                                    the initial meeting to
                                                    determine appropriate
                                                    measures they can take.
                                                </p>
                                            </li>
                                        </ol>
                                    </li>
                                </ol>
                            </li>
                            <li className={styles.li}>
                                <h4>Contributing Writers</h4>
                                <ol className={styles.number}>
                                    <li className={styles.li}>
                                        <p>Membership</p>
                                        <ol className={styles.alphaLower}>
                                            <li className={styles.li}>
                                                <p>
                                                    As the contributing writer
                                                    is an issue-based role, the
                                                    contributing writer does not
                                                    necessarily have to be
                                                    stated as a club member.
                                                </p>
                                            </li>
                                            <li className={styles.li}>
                                                <p>
                                                    However, if the writer
                                                    chooses to be a member the
                                                    process shall be the same as
                                                    Article II (B).
                                                </p>
                                            </li>
                                        </ol>
                                    </li>
                                    <li className={styles.li}>
                                        <p>Selection Process</p>
                                        <ol className={styles.alphaLower}>
                                            <li className={styles.li}>
                                                <p>
                                                    Submit a form that includes
                                                    an abstract of the article
                                                    and a summary of reasons for
                                                    pursuing the article.
                                                </p>
                                            </li>
                                        </ol>
                                    </li>
                                    <li className={styles.li}>
                                        <p>
                                            The Editorial Board will discuss and
                                            make decisions based on the
                                            submission forms that have been
                                            collected.
                                        </p>
                                    </li>
                                </ol>
                            </li>
                        </ol>
                    </li>
                    <li className={styles.li}>
                        <h2>Article III - Officers and Duties</h2>
                        <p className={styles.nonList}>
                            The Journal will have two boards:{" "}
                            <i>The Executive Board </i>and{" "}
                            <i>The Editorial Board.</i>
                        </p>
                        <p className={styles.nonList}>
                            Note: Requirements for specific position eligibility
                            take effect on January 1st, 2025.
                        </p>
                        <ol className={styles.alphaUpper}>
                            <li className={styles.li}>
                                <h4>The Executive Board</h4>
                                <ol className={styles.number}>
                                    <li className={styles.li}>
                                        <p>
                                            This board will include the
                                            Managerial Editor, Secretary, and
                                            five members voted on at the start
                                            of the semester. They will serve for
                                            two semesters (one academic year)
                                            except for the inaugural board,
                                            which will serve at least four
                                            semesters (two academic years) to
                                            ensure the implementation of a
                                            practical foundational function.
                                        </p>
                                    </li>
                                    <li className={styles.li}>
                                        <p>
                                            Anyone who has been a part of the
                                            club for at least two semesters can
                                            apply to be on the Executive Board
                                            and must get majority approval from
                                            the previous board and a majority
                                            vote within the club membership.
                                        </p>
                                    </li>
                                    <li className={styles.li}>
                                        <p>
                                            Any person applying to the Executive
                                            Board should submit their name no
                                            later than the{" "}
                                            <i>second meeting </i>of the
                                            semester.
                                        </p>
                                    </li>
                                    <li className={styles.li}>
                                        <p>
                                            More detailed information on Article
                                            IV (A).
                                        </p>
                                    </li>
                                </ol>
                            </li>
                            <li className={styles.li}>
                                <h4>The Editorial Board</h4>
                                <ol className={styles.number}>
                                    <li className={styles.li}>
                                        <p>
                                            This board will include the Content
                                            Editor and the Associate Editors
                                            voted on at the start of the
                                            semester. They will serve for at
                                            least two semesters (one academic
                                            year).
                                        </p>
                                    </li>
                                    <li className={styles.li}>
                                        <p>
                                            The Editorial Board is responsible
                                            for determining the theme for a
                                            respective issue of Virtù and
                                            accepting or rejecting ideas for
                                            articles or pieces to be published
                                            within the journal. The Editorial
                                            Board is also responsible for
                                            delegating editors who will
                                            collaborate with specific writers
                                            according to their needs and
                                            respective writing styles and
                                            methods. The Editorial Board passes
                                            or rejects motions with a simple
                                            majority vote.
                                        </p>
                                    </li>
                                </ol>
                            </li>
                            <li className={styles.li}>
                                <h4>Roles and Responsibilities</h4>
                                <ol className={styles.number}>
                                    <li className={styles.li}>
                                        <p>
                                            Content Editor (1 person) (2-4 hours
                                            per week)
                                        </p>
                                        <ol className={styles.alphaLower}>
                                            <li className={styles.li}>
                                                <p>
                                                    Determine the overarching
                                                    theme and structure of the
                                                    journal.
                                                </p>
                                            </li>
                                            <li className={styles.li}>
                                                <p>
                                                    Preside over weekly
                                                    meetings.
                                                </p>
                                            </li>
                                            <li className={styles.li}>
                                                <p>
                                                    Provide support to the
                                                    editorial team in refining
                                                    and editing submissions.
                                                </p>
                                            </li>
                                        </ol>
                                    </li>
                                    <li className={styles.li}>
                                        <p>
                                            Managerial Editor (1) (2-4 hours per
                                            week)
                                        </p>
                                        <ol className={styles.alphaLower}>
                                            <li className={styles.li}>
                                                <p>
                                                    Address and manage
                                                    administrative duties and
                                                    tasks.
                                                </p>
                                            </li>
                                            <li className={styles.li}>
                                                <p>
                                                    Preside over weekly
                                                    meetings.
                                                </p>
                                            </li>
                                            <li className={styles.li}>
                                                <p>
                                                    Maintain the operational
                                                    efficiency of the journal.
                                                </p>
                                            </li>
                                            <li className={styles.li}>
                                                <p>
                                                    Handle Presence Page
                                                    Management.
                                                </p>
                                            </li>
                                        </ol>
                                    </li>
                                    <li className={styles.li}>
                                        <p>
                                            Secretary (1) (2-3 hours per week)
                                        </p>
                                        <ol className={styles.alphaLower}>
                                            <li className={styles.li}>
                                                <p>
                                                    Manage organizational
                                                    correspondence and email
                                                    communications.
                                                </p>
                                            </li>
                                            <li className={styles.li}>
                                                <p>
                                                    Serve as an administrative
                                                    assistant, facilitating
                                                    meeting logistics, including
                                                    notes, agendas, and
                                                    reservation of meeting
                                                    spaces.
                                                </p>
                                            </li>
                                            <li className={styles.li}>
                                                <p>
                                                    Coordinate all-staff and
                                                    special meetings.
                                                </p>
                                            </li>
                                        </ol>
                                    </li>
                                    <li className={styles.li}>
                                        <p>
                                            Associate Editor (3-4) (1-3 hours
                                            per week)
                                        </p>
                                        <ol className={styles.alphaLower}>
                                            <li className={styles.li}>
                                                <p>
                                                    Assume primary editorial
                                                    responsibility for at least
                                                    one article.
                                                </p>
                                            </li>
                                            <li className={styles.li}>
                                                <p>
                                                    Collaborate closely with the
                                                    contributing writers to
                                                    develop compelling chapters.
                                                </p>
                                            </li>
                                            <li className={styles.li}>
                                                <p>
                                                    Mentor Assistant Editors,
                                                    enhancing their editorial
                                                    proficiency.
                                                </p>
                                            </li>
                                        </ol>
                                    </li>
                                    <li className={styles.li}>
                                        <p>
                                            Assistant Editor (3-4) (1-2 hours
                                            per week)
                                        </p>
                                        <ol className={styles.alphaLower}>
                                            <li className={styles.li}>
                                                <p>
                                                    Assist the Associate Editors
                                                    in the editorial process.
                                                </p>
                                            </li>
                                            <li className={styles.li}>
                                                <p>
                                                    Engage in shadowing
                                                    opportunities with Associate
                                                    Editors to learn advanced
                                                    editorial techniques.
                                                </p>
                                            </li>
                                        </ol>
                                    </li>
                                    <li className={styles.li}>
                                        <p>
                                            Research and Content Associates (1-3
                                            hours per week)
                                        </p>
                                        <ol className={styles.alphaLower}>
                                            <li className={styles.li}>
                                                <p>
                                                    Design and execute surveys
                                                    to gauge the interests and
                                                    concerns of the
                                                    college&apos;s community.
                                                </p>
                                            </li>
                                            <li className={styles.li}>
                                                <p>
                                                    Analyze survey data to
                                                    identify trends and inform
                                                    the journal&apos;s content
                                                    direction.
                                                </p>
                                            </li>
                                            <li className={styles.li}>
                                                <p>
                                                    Present findings to the
                                                    editorial board to guide the
                                                    thematic focus of the
                                                    journal.
                                                </p>
                                            </li>
                                        </ol>
                                    </li>
                                    <li className={styles.li}>
                                        <p>
                                            Publicity and Social Media
                                            Associates (1-3 hours per week)
                                        </p>
                                        <ol className={styles.alphaLower}>
                                            <li className={styles.li}>
                                                <p>
                                                    Oversee the journal’s
                                                    presence on social media
                                                    platforms.
                                                </p>
                                            </li>
                                            <li className={styles.li}>
                                                <p>
                                                    Ensure timely and relevant
                                                    updates to social media
                                                    content.
                                                </p>
                                            </li>
                                            <li className={styles.li}>
                                                <p>
                                                    Coordinate and update the
                                                    website alongside the
                                                    Technologist.
                                                </p>
                                            </li>
                                            <li className={styles.li}>
                                                <p>
                                                    Create and distribute
                                                    promotional materials across
                                                    campus.
                                                </p>
                                            </li>
                                        </ol>
                                    </li>
                                    <li className={styles.li}>
                                        <p>Designer (as needed)</p>
                                        <ol className={styles.alphaLower}>
                                            <li className={styles.li}>
                                                <p>
                                                    Design and format the
                                                    journal&apos;s visual
                                                    branding and aesthetics.
                                                </p>
                                            </li>
                                            <li className={styles.li}>
                                                <p>
                                                    Ensure consistency and
                                                    visual appeal in the
                                                    journal’s presentation.
                                                </p>
                                            </li>
                                        </ol>
                                    </li>
                                    <li className={styles.li}>
                                        <p>
                                            Treasurer (1) (1-3 hours per week)
                                        </p>
                                        <ol className={styles.alphaLower}>
                                            <li className={styles.li}>
                                                <p>
                                                    Manage all financial matters
                                                    relating to the journal’s
                                                    management and the
                                                    publication of finalized
                                                    editions of Virtù.
                                                </p>
                                            </li>
                                            <li className={styles.li}>
                                                <p>
                                                    Oversee budgeting,
                                                    expenditures, and financial
                                                    planning for the journal.
                                                </p>
                                            </li>
                                            <li className={styles.li}>
                                                <p>
                                                    Handle financial
                                                    documentation and
                                                    transactions for the journal
                                                    on the Presence platform,
                                                    integrating page management
                                                    and financial oversight.
                                                </p>
                                            </li>
                                        </ol>
                                    </li>
                                    <li className={styles.li}>
                                        <p>Technologist (1) (as needed)</p>
                                        <ol className={styles.alphaLower}>
                                            <li className={styles.li}>
                                                <p>
                                                    Oversee the technical
                                                    management and upkeep of the
                                                    journal’s website.
                                                </p>
                                            </li>
                                            <li className={styles.li}>
                                                <p>
                                                    Implement necessary updates
                                                    and modifications to the
                                                    website’s content and
                                                    design.
                                                </p>
                                                <p>Non-Permanent Members</p>
                                            </li>
                                        </ol>
                                    </li>
                                    <li className={styles.li}>
                                        <p>
                                            Contributing Writers (6-8 per issue)
                                            (hours as needed)
                                        </p>
                                        <ol className={styles.alphaLower}>
                                            <li className={styles.li}>
                                                <p>
                                                    Propose innovative and
                                                    thought-provoking ideas for
                                                    chapters in the journal.
                                                </p>
                                            </li>
                                            <li className={styles.li}>
                                                <p>
                                                    Collaborate closely with the
                                                    editors to develop
                                                    compelling chapters that are
                                                    15-25 pages in length.
                                                </p>
                                            </li>
                                            <li className={styles.li}>
                                                <p>
                                                    The writer can also be a
                                                    permanent member of the
                                                    journal;however, they are
                                                    not required to be engaged
                                                    in member activities such as
                                                    weekly meetings as this is a
                                                    seasonal role.
                                                </p>
                                            </li>
                                        </ol>
                                    </li>
                                </ol>
                            </li>
                        </ol>
                    </li>
                    <li className={styles.li}>
                        <h2>Article IV - Nominations & Elections</h2>
                        <ol className={styles.alphaUpper}>
                            <li className={styles.li}>
                                <h4>Elections for Positions</h4>
                                <ol className={styles.number}>
                                    <li className={styles.li}>
                                        <p>
                                            Voting members will nominate and
                                            confirm Executive Board members.
                                        </p>
                                        <ol className={styles.alphaLower}>
                                            <li className={styles.li}>
                                                <p>
                                                    The Executive Board is open
                                                    to any members within the
                                                    club;however, they must have
                                                    been a member for at least{" "}
                                                    <i>three </i>
                                                    semesters.
                                                </p>
                                            </li>
                                            <li className={styles.li}>
                                                <p>
                                                    The Executive Board members
                                                    shall continue serving their
                                                    other roles within the club.
                                                </p>
                                            </li>
                                        </ol>
                                    </li>
                                    <li className={styles.li}>
                                        <p>
                                            Voting members will nominate and
                                            confirm the Content Editor (1) &
                                            Managerial Editor (1). (two
                                            semesters in a term, two-term limit)
                                        </p>
                                        <ol className={styles.alphaLower}>
                                            <li className={styles.li}>
                                                <p>
                                                    The individuals hoping to
                                                    take on the role must:
                                                </p>
                                                <ol className={styles.hyphen}>
                                                    <li className={styles.li}>
                                                        <p>
                                                            Be a member for at
                                                            least <i>three </i>
                                                            semesters.
                                                        </p>
                                                    </li>
                                                    <li className={styles.li}>
                                                        <p>
                                                            Have had at least
                                                            one issue working in
                                                            an organizational
                                                            role.
                                                        </p>
                                                    </li>
                                                    <li className={styles.li}>
                                                        <p>
                                                            Have had at least
                                                            one issue working in
                                                            an editorial role.
                                                        </p>
                                                    </li>
                                                </ol>
                                            </li>
                                        </ol>
                                    </li>
                                    <li className={styles.li}>
                                        <p>
                                            Secretary (1) will be nominated and
                                            confirmed by a simple majority of
                                            the Voting Virtù members. (two
                                            semesters in a term, two-term limit)
                                        </p>
                                    </li>
                                    <li className={styles.li}>
                                        <p>
                                            Treasurer (1) will be nominated and
                                            confirmed by a simple majority of
                                            the Voting Virtù members. (two
                                            semesters in a term, two-term limit)
                                        </p>
                                        <ol className={styles.alphaLower}>
                                            <li className={styles.li}>
                                                <p>
                                                    The individuals hoping to
                                                    take on the role of
                                                    Secretary and Treasure must
                                                    be members for at least{" "}
                                                    <i>two </i>
                                                    semesters.
                                                </p>
                                            </li>
                                        </ol>
                                    </li>
                                    <li className={styles.li}>
                                        <p>
                                            Associate Editor (3-4) will be
                                            nominated and confirmed by most
                                            Voting Virtù members. (two semesters
                                            in a term, two-term limit)
                                        </p>
                                        <ol className={styles.alphaLower}>
                                            <li className={styles.li}>
                                                <p>
                                                    The individuals hoping to
                                                    take the role must:
                                                </p>
                                                <ol
                                                    className={
                                                        styles.romanLower
                                                    }
                                                >
                                                    <li className={styles.li}>
                                                        <p>
                                                            Be an assistant
                                                            editor for at least{" "}
                                                            <i>two </i>
                                                            issues.
                                                        </p>
                                                    </li>
                                                    <li className={styles.li}>
                                                        <p>
                                                            Exceptions for those
                                                            who are:
                                                        </p>
                                                        <ol
                                                            className={
                                                                styles.hyphen
                                                            }
                                                        >
                                                            <li
                                                                className={
                                                                    styles.li
                                                                }
                                                            >
                                                                <p>
                                                                    Writing
                                                                    Tutors.
                                                                </p>
                                                            </li>
                                                            <li
                                                                className={
                                                                    styles.li
                                                                }
                                                            >
                                                                <p>
                                                                    Experienced
                                                                    Editors at
                                                                    another
                                                                    club.
                                                                </p>
                                                            </li>
                                                            <li
                                                                className={
                                                                    styles.li
                                                                }
                                                            >
                                                                <p>
                                                                    Preceptors
                                                                    for Writing
                                                                    Intensive
                                                                    (WA, WP, WC)
                                                                    classes.
                                                                </p>
                                                            </li>
                                                        </ol>
                                                    </li>
                                                </ol>
                                            </li>
                                        </ol>
                                    </li>
                                    <li className={styles.li}>
                                        <p>
                                            Assistant Editors (3-4) will be
                                            nominated and Voted on by Associate
                                            Editors, and a simple majority vote
                                            is required.
                                        </p>
                                    </li>
                                    <li className={styles.li}>
                                        <p>
                                            Research & Content Associates,
                                            Publicity & Social Media Associates,
                                            and Technologist (1) will be
                                            nominated and confirmed by a simple
                                            majority of the Voting Virtù
                                            members.
                                        </p>
                                    </li>
                                </ol>
                            </li>
                            <li className={styles.li}>
                                <h4>Election Process</h4>
                                <ol className={styles.number}>
                                    <li className={styles.li}>
                                        <p>
                                            The club elections will occur in
                                            early September of each school year.
                                        </p>
                                        <ol className={styles.alphaLower}>
                                            <li className={styles.li}>
                                                <p>
                                                    The election process will
                                                    start with introductory
                                                    meetings about the positions
                                                    and club.
                                                </p>
                                            </li>
                                            <li className={styles.li}>
                                                <p>
                                                    These meetings will let
                                                    people know about the
                                                    positions to run for and the
                                                    different responsibilities
                                                    they entail during such
                                                    meetings.
                                                </p>
                                            </li>
                                            <li className={styles.li}>
                                                <p>
                                                    After these first few
                                                    meetings, the board will
                                                    have interested members give
                                                    a talk in front of the club
                                                    about why they wish to run
                                                    for their position.
                                                </p>
                                            </li>
                                            <li className={styles.li}>
                                                <p>
                                                    Later, the group will email
                                                    short biographies of each
                                                    nominee for each position.
                                                </p>
                                            </li>
                                        </ol>
                                    </li>
                                    <li className={styles.li}>
                                        <p>
                                            All club members will be sent a
                                            Google form to vote in early
                                            September.
                                        </p>
                                    </li>
                                    <li className={styles.li}>
                                        <p>
                                            The current board will keep track of
                                            the election results and results
                                            will be announced at the next
                                            meeting.
                                        </p>
                                    </li>
                                </ol>
                            </li>
                            <li className={styles.li}>
                                <h4>Removal</h4>
                                <ol className={styles.number}>
                                    <li className={styles.li}>
                                        <p>
                                            All members shall have good faith
                                            attempts regarding possible
                                            removals.
                                        </p>
                                    </li>
                                    <li className={styles.li}>
                                        <p>Initial meeting</p>
                                        <ol className={styles.alphaLower}>
                                            <li className={styles.li}>
                                                <p>
                                                    When a concern arises with
                                                    one of the members, the CE
                                                    and/or ME should set up an
                                                    appointment with the
                                                    concerned party to discuss
                                                    the concerns.
                                                </p>
                                            </li>
                                        </ol>
                                    </li>
                                    <li className={styles.li}>
                                        <p>
                                            Determining appropriate measures for
                                            removal
                                        </p>
                                        <ol className={styles.alphaLower}>
                                            <li className={styles.li}>
                                                <p>
                                                    The Executive Board will set
                                                    up an appointment to discuss
                                                    appropriate measures for the
                                                    member and determine whether
                                                    removal is needed.
                                                </p>
                                            </li>
                                        </ol>
                                    </li>
                                    <li className={styles.li}>
                                        <p>SOC Approval</p>
                                        <ol className={styles.alphaLower}>
                                            <li className={styles.li}>
                                                <p>
                                                    Student organizations, their
                                                    leaders, and members will
                                                    review and adhere to all
                                                    College policies, including
                                                    the{" "}
                                                    <a
                                                        href="https://docs.google.com/document/d/1S3cJu0VCemFNTICrUM2s49BR14FB6gEx4BWR8hvR-fQ/edit?usp=sharing"
                                                        style={{
                                                            textDecoration:
                                                                "underline",
                                                        }}
                                                        target="_blank"
                                                    >
                                                        Student Organization
                                                        Code of Conduct.
                                                    </a>
                                                </p>
                                            </li>
                                            <li className={styles.li}>
                                                <p>
                                                    As membership in student
                                                    organizations is rarely
                                                    repealed, the journal
                                                    members with concerns will
                                                    schedule advising
                                                    appointments with a CSLE
                                                    staff member and/or advisor
                                                    after the initial meeting to
                                                    determine appropriate
                                                    measures they can take.
                                                </p>
                                            </li>
                                        </ol>
                                    </li>
                                </ol>
                            </li>
                            <li className={styles.li}>
                                <h4>Resignation</h4>
                                <ol className={styles.number}>
                                    <li className={styles.li}>
                                        <p>Initial meeting</p>
                                        <ol className={styles.alphaLower}>
                                            <li className={styles.li}>
                                                <p>
                                                    If concerns about
                                                    resignation arise with a
                                                    member, the CE and ME should
                                                    set up an appointment with
                                                    the board member to try to
                                                    alleviate the potential
                                                    problems causing
                                                    resignation.
                                                </p>
                                            </li>
                                        </ol>
                                    </li>
                                    <li className={styles.li}>
                                        <p>Process</p>
                                        <ol className={styles.alphaLower}>
                                            <li className={styles.li}>
                                                <p>
                                                    If the member still wishes
                                                    to resign, they should
                                                    contact the board
                                                    immediately and give an
                                                    official resignation
                                                    statement.
                                                </p>
                                            </li>
                                            <li className={styles.li}>
                                                <p>
                                                    The official resignation
                                                    statement should be given at
                                                    least a week prior.
                                                </p>
                                            </li>
                                        </ol>
                                    </li>
                                    <li className={styles.li}>
                                        <p>Special Election Protocol</p>
                                        <ol className={styles.alphaLower}>
                                            <li className={styles.li}>
                                                <p>
                                                    Elections for the vacant
                                                    position will be held as
                                                    soon as possible, following
                                                    the same nomination and
                                                    voting process as regular
                                                    elections listed in Article
                                                    IV (B).
                                                </p>
                                            </li>
                                        </ol>
                                    </li>
                                </ol>
                            </li>
                        </ol>
                    </li>
                    <li className={styles.li}>
                        <h2>Article V - Advisor</h2>
                        <ol className={styles.alphaUpper}>
                            <li className={styles.li}>
                                <h4>The Faculty Advisor</h4>
                                <ol className={styles.number}>
                                    <li className={styles.li}>
                                        <p>
                                            The advisor will regularly check in
                                            about the club upholding its
                                            responsibilities, which shall be
                                            done bi-weekly with the members of
                                            the Executive Board.
                                        </p>
                                    </li>
                                    <li className={styles.li}>
                                        <p>
                                            Professor Ahmed I. Samatar, the
                                            chair of the Macalester
                                            International Studies Department,
                                            will be the faculty advisor for the
                                            club.
                                        </p>
                                    </li>
                                </ol>
                            </li>
                            <li className={styles.li}>
                                <h4>Responsibilities and Duties</h4>
                                <ol className={styles.number}>
                                    <li className={styles.li}>
                                        <p>Advisory Role</p>
                                        <ol className={styles.alphaLower}>
                                            <li className={styles.li}>
                                                <p>
                                                    Contribute advice and
                                                    expertise in the field/theme
                                                    of internationalism.
                                                </p>
                                            </li>
                                            <li className={styles.li}>
                                                <p>
                                                    Advise journal content and
                                                    publication; facilitate
                                                    intercollegiate distribution
                                                    of product.
                                                </p>
                                            </li>
                                            <li className={styles.li}>
                                                <p>
                                                    Mediate the ethical
                                                    considerations for the
                                                    journal.
                                                </p>
                                            </li>
                                        </ol>
                                    </li>
                                    <li className={styles.li}>
                                        <p>Advocacy Role</p>
                                        <ol className={styles.alphaLower}>
                                            <li className={styles.li}>
                                                <p>
                                                    Promote the cause of the
                                                    journal;aid in representing
                                                    its financial and functional
                                                    needs to the Macalester
                                                    Board of Trustees and
                                                    general administration.
                                                </p>
                                            </li>
                                        </ol>
                                    </li>
                                </ol>
                            </li>
                            <li className={styles.li}>
                                <h4>
                                    Selection Process:{" "}
                                    <i>For Selection of All New Advisors</i>
                                </h4>
                                <ol className={styles.number}>
                                    <li className={styles.li}>
                                        <p>
                                            The faculty advisor must possess the
                                            following characteristics:
                                        </p>
                                        <ol className={styles.alphaLower}>
                                            <li className={styles.li}>
                                                <p>
                                                    Transdisciplinary academic
                                                    approach;
                                                </p>
                                            </li>
                                            <li className={styles.li}>
                                                <p>Permanent faculty status;</p>
                                            </li>
                                            <li className={styles.li}>
                                                <p>
                                                    Commitment to the
                                                    journal&apos;s ethos and
                                                    time and effort to dedicate
                                                    to advising.
                                                </p>
                                            </li>
                                        </ol>
                                    </li>
                                    <li className={styles.li}>
                                        <p>
                                            The Board will use its discretion
                                            and collaboration to evaluate
                                            candidates along the metrics (1) and
                                            (3).
                                        </p>
                                    </li>
                                </ol>
                            </li>
                            <li className={styles.li}>
                                <h4>Replacement Procedure</h4>
                                <ol className={styles.number}>
                                    <li className={styles.li}>
                                        <p>
                                            The incumbent advisor may propose a
                                            successor to the board, or, lacking
                                            recommendations, a special committee
                                            of five active members will seek out
                                            and determine an advisor conducive
                                            to Virtù transdisciplinary mission
                                            and core values.
                                        </p>
                                    </li>
                                    <li className={styles.li}>
                                        <p>
                                            If Professor Ahmed I. Samatar
                                            retires shortly, there are
                                            contingency plans to court other
                                            professors as replacement advisors.
                                        </p>
                                    </li>
                                </ol>
                            </li>
                        </ol>
                    </li>
                    <li className={styles.li}>
                        <h2>Article VI - Meetings</h2>
                        <ol className={styles.alphaUpper}>
                            <li className={styles.li}>
                                <h4>Meeting Logistics</h4>
                                <ol className={styles.number}>
                                    <li className={styles.li}>
                                        <p>
                                            Virtu will meet at least once a
                                            week.
                                        </p>
                                        <ol className={styles.alphaLower}>
                                            <li className={styles.li}>
                                                <p>
                                                    The meetings will be one
                                                    hour long. The executive
                                                    committee can decide
                                                    beforehand if it needs to be
                                                    longer.
                                                </p>
                                            </li>
                                        </ol>
                                    </li>
                                    <li className={styles.li}>
                                        <p>Meeting Authority</p>
                                        <ol className={styles.alphaLower}>
                                            <li className={styles.li}>
                                                <p>
                                                    The entire board will be
                                                    responsible for directing
                                                    meetings.
                                                </p>
                                            </li>
                                            <li className={styles.li}>
                                                <p>
                                                    The Content and Managerial
                                                    Editor will have the bulk of
                                                    the authority.
                                                </p>
                                            </li>
                                        </ol>
                                    </li>
                                </ol>
                            </li>
                            <li className={styles.li}>
                                <h4>Special Meetings</h4>
                                <ol className={styles.number}>
                                    <li className={styles.li}>
                                        <p>
                                            The Secretary will be responsible
                                            for notifying members of a special
                                            meeting.
                                        </p>
                                    </li>
                                    <li className={styles.li}>
                                        <p>
                                            Members should be notified via email
                                            two plus days before.
                                        </p>
                                    </li>
                                </ol>
                            </li>
                            <li className={styles.li}>
                                <h4>Quorum</h4>
                                <p className={styles.nonList}>
                                    Once the Secretary proposes a new meeting or
                                    event, members will vote on it. There is a
                                    simple majority requirement with the quorum
                                    voted during the meeting.
                                </p>
                            </li>
                        </ol>
                    </li>
                    <li className={styles.li}>
                        <h2>Article VII - Finances</h2>
                        <ol className={styles.alphaUpper}>
                            <li className={styles.li}>
                                <h4>Financial Affairs</h4>
                                <ol className={styles.number}>
                                    <li className={styles.li}>
                                        <p>
                                            The Treasurer will be in charge of
                                            managing this organization&apos;s
                                            financial affairs. The Treasurer,
                                            Managing Editor, and Secretary will
                                            have access to the student org
                                            management system (Involve) finance
                                            portal and, therefore, will manage
                                            it.
                                        </p>
                                    </li>
                                    <li className={styles.li}>
                                        <p>
                                            The Treasurer, the Managerial
                                            Editor, and the Secretary will be
                                            responsible for funding allocations
                                            from the Financial Affairs Committee
                                            and/or making purchases on behalf of
                                            the organization.
                                        </p>
                                    </li>
                                </ol>
                            </li>
                            <li className={styles.li}>
                                <h4>Budgeting</h4>
                                <ol className={styles.number}>
                                    <li className={styles.li}>
                                        <p>
                                            Given that the annual budget is
                                            typically due in early March, the
                                            annual budget will be prepared by
                                            early February of each year, which
                                            will be the Treasurer and Managing
                                            Editor&apos;s responsibility;the
                                            Executive Board may also play a part
                                            if the need arises.
                                        </p>
                                    </li>
                                    <li className={styles.li}>
                                        <p>
                                            The approval process will be
                                            completed once most of the board
                                            approves the budgeting plan.
                                        </p>
                                    </li>
                                </ol>
                            </li>
                        </ol>
                    </li>
                    <li className={styles.li}>
                        <h2>Article VIII - Amendments</h2>
                        <ol className={styles.alphaUpper}>
                            <li className={styles.li}>
                                <h4>Amendment Proposals</h4>
                                <p className={styles.nonList}>
                                    Eligible members will be informed of the
                                    amendment through the formal proposal to the
                                    board by the member who creates the
                                    amendment. General amendments will be
                                    proposed to the Executive Board, and
                                    Editorial amendments will be proposed to the
                                    Editorial Board. Reading and discussion at a
                                    minimum of two consecutive meetings and
                                    communications through email will also be a
                                    means of notification regarding amendments.
                                </p>
                            </li>
                            <li className={styles.li}>
                                <h4>Amendment Approval</h4>
                                <p className={styles.nonList}>
                                    A 5/7th majority of votes from Board members
                                    is required to ratify an amendment. Given
                                    seven board members, a tie-in vote is not
                                    anticipated. The secretary will submit
                                    charter amendments to the SOC for approval.
                                </p>
                            </li>
                        </ol>
                    </li>
                    <li className={styles.li}>
                        <h2>Article IX - Sunset Clause</h2>
                        <ol className={styles.alphaUpper}>
                            <li className={styles.li}>
                                <h4>Process of Disbanding</h4>
                                <p className={styles.nonList}>
                                    A unanimous vote by the executive board will
                                    be needed. Following the unanimous vote by
                                    the executive board, the members will vote.
                                    A 2/3rd participant agreement is required
                                    for confirmation.
                                </p>
                            </li>
                            <li className={styles.li}>
                                <h4>Organizational Renewal</h4>
                                <ol className={styles.number}>
                                    <li className={styles.li}>
                                        <p>
                                            Similar to other news organizations,
                                            we plan on renewing one year after
                                            our charter date. Afterward, we will
                                            renew from our last formal check-in
                                            date every three years.
                                        </p>
                                    </li>
                                    <li className={styles.li}>
                                        <p>
                                            This charter will expire in{" "}
                                            <b>March 2025</b>, at which time it
                                            may be resubmitted for renewal.
                                        </p>
                                    </li>
                                </ol>
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
