"use client"

import styles from "./aboutPage.module.css"
import Image from "next/image"

const AboutPage = () => {
    const title = "Virtù"
    const subtitle = "Journal of Transdisciplinary Explorations"
    const imgSrc = "/Virtu_large.png"
    const imgAlt = "Virtù logo"

    const css = ` li {display: block;}#l1 {counter-reset: c1 1;}#l1> li>*:first-child:before {counter-increment: c1;content: counter(c1, upper-latin)". ";font-weight: bold;}#l1> li:first-child>*:first-child:before {counter-increment: c1 0;}#l2 {counter-reset: c2 1;}#l2> li>*:first-child:before {counter-increment: c2;content: counter(c2, decimal)". ";font-weight: bold;}#l2> li:first-child>*:first-child:before {counter-increment: c2 0;}#l3 {counter-reset: c3 1;}#l3> li>*:first-child:before {counter-increment: c3;content: counter(c3, lower-latin)". ";font-weight: bold;}#l3> li:first-child>*:first-child:before {counter-increment: c3 0;}#l4 { }#l4> li>*:first-child:before {content: "- ";}#l5 {counter-reset: c3 1;}#l5> li>*:first-child:before {counter-increment: c3;content: counter(c3, lower-latin)". ";font-weight: bold;}#l5> li:first-child>*:first-child:before {counter-increment: c3 0;}#l6 { }#l6> li>*:first-child:before {content: "- ";}#l7 {counter-reset: c3 1;}#l7> li>*:first-child:before {counter-increment: c3;content: counter(c3, lower-latin)". ";font-weight: bold;}#l7> li:first-child>*:first-child:before {counter-increment: c3 0;}#l8 { }#l8> li>*:first-child:before {content: "● ";font-family:Arial, sans-serif;}#l9 {counter-reset: e1 1;}#l9> li>*:first-child:before {counter-increment: e1;content: counter(e1, upper-latin)". ";font-weight: bold;}#l9> li:first-child>*:first-child:before {counter-increment: e1 0;}#l10 {counter-reset: e2 1;}#l10> li>*:first-child:before {counter-increment: e2;content: counter(e2, lower-latin)". ";font-weight: bold;}#l10> li:first-child>*:first-child:before {counter-increment: e2 0;}#l11 {counter-reset: e3 1;}#l11> li>*:first-child:before {counter-increment: e3;content: counter(e3, lower-roman)". ";font-weight: bold;}#l11> li:first-child>*:first-child:before {counter-increment: e3 0;}#l12 {counter-reset: e3 1;}#l12> li>*:first-child:before {counter-increment: e3;content: counter(e3, lower-roman)". ";font-weight: bold;}#l12> li:first-child>*:first-child:before {counter-increment: e3 0;}#l13 {counter-reset: e4 1;}#l13> li>*:first-child:before {counter-increment: e4;content: counter(e4, decimal)". ";font-weight: bold;}#l13> li:first-child>*:first-child:before {counter-increment: e4 0;}#l14 {counter-reset: e2 1;}#l14> li>*:first-child:before {counter-increment: e2;content: counter(e2, lower-latin)". ";font-weight: bold;}#l14> li:first-child>*:first-child:before {counter-increment: e2 0;}#l15 {counter-reset: e2 1;}#l15> li>*:first-child:before {counter-increment: e2;content: counter(e2, lower-latin)". ";font-weight: bold;}#l15> li:first-child>*:first-child:before {counter-increment: e2 0;}#l16 {counter-reset: e3 1;}#l16> li>*:first-child:before {counter-increment: e3;content: counter(e3, lower-roman)". ";font-weight: bold;}#l16> li:first-child>*:first-child:before {counter-increment: e3 0;}#l17 {counter-reset: e3 1;}#l17> li>*:first-child:before {counter-increment: e3;content: counter(e3, lower-roman)". ";font-weight: bold;}#l17> li:first-child>*:first-child:before {counter-increment: e3 0;}#l18 {counter-reset: e3 1;}#l18> li>*:first-child:before {counter-increment: e3;content: counter(e3, lower-roman)". ";font-weight: bold;}#l18> li:first-child>*:first-child:before {counter-increment: e3 0;}#l19 {counter-reset: e2 1;}#l19> li>*:first-child:before {counter-increment: e2;content: counter(e2, lower-latin)". ";font-weight: bold;}#l19> li:first-child>*:first-child:before {counter-increment: e2 0;}#l20 {counter-reset: e3 1;}#l20> li>*:first-child:before {counter-increment: e3;content: counter(e3, lower-roman)". ";font-weight: bold;}#l20> li:first-child>*:first-child:before {counter-increment: e3 0;}#l21 {counter-reset: e3 1;}#l21> li>*:first-child:before {counter-increment: e3;content: counter(e3, lower-roman)". ";font-weight: bold;}#l21> li:first-child>*:first-child:before {counter-increment: e3 0;}#l22 {counter-reset: f1 1;}#l22> li>*:first-child:before {counter-increment: f1;content: counter(f1, upper-latin)". ";font-weight: bold;}#l22> li:first-child>*:first-child:before {counter-increment: f1 0;}#l23 {counter-reset: f2 1;}#l23> li>*:first-child:before {counter-increment: f2;content: counter(f2, lower-latin)". ";font-weight: bold;}#l23> li:first-child>*:first-child:before {counter-increment: f2 0;}#l24 {counter-reset: f2 1;}#l24> li>*:first-child:before {counter-increment: f2;content: counter(f2, lower-latin)". ";font-weight: bold;}#l24> li:first-child>*:first-child:before {counter-increment: f2 0;}#l25 {counter-reset: g1 1;}#l25> li>*:first-child:before {counter-increment: g1;content: counter(g1, upper-latin)". ";font-weight: bold;}#l25> li:first-child>*:first-child:before {counter-increment: g1 0;}#l26 {counter-reset: g2 1;}#l26> li>*:first-child:before {counter-increment: g2;content: counter(g2, lower-latin)". ";font-weight: bold;}#l26> li:first-child>*:first-child:before {counter-increment: g2 0;}#l27 {counter-reset: g2 1;}#l27> li>*:first-child:before {counter-increment: g2;content: counter(g2, lower-latin)". ";font-weight: bold;}#l27> li:first-child>*:first-child:before {counter-increment: g2 0;}#l28 {counter-reset: g2 1;}#l28> li>*:first-child:before {counter-increment: g2;content: counter(g2, lower-latin)". ";font-weight: bold;}#l28> li:first-child>*:first-child:before {counter-increment: g2 0;}#l29 {counter-reset: g2 1;}#l29> li>*:first-child:before {counter-increment: g2;content: counter(g2, lower-latin)". ";font-weight: bold;}#l29> li:first-child>*:first-child:before {counter-increment: g2 0;}#l30 {counter-reset: g2 1;}#l30> li>*:first-child:before {counter-increment: g2;content: counter(g2, lower-latin)". ";font-weight: bold;}#l30> li:first-child>*:first-child:before {counter-increment: g2 0;}#l31 {counter-reset: g2 1;}#l31> li>*:first-child:before {counter-increment: g2;content: counter(g2, lower-latin)". ";font-weight: bold;}#l31> li:first-child>*:first-child:before {counter-increment: g2 0;}#l32 {counter-reset: g2 1;}#l32> li>*:first-child:before {counter-increment: g2;content: counter(g2, lower-latin)". ";font-weight: bold;}#l32> li:first-child>*:first-child:before {counter-increment: g2 0;}#l33 {counter-reset: g2 1;}#l33> li>*:first-child:before {counter-increment: g2;content: counter(g2, lower-latin)". ";font-weight: bold;}#l33> li:first-child>*:first-child:before {counter-increment: g2 0;}#l34 {counter-reset: g2 1;}#l34> li>*:first-child:before {counter-increment: g2;content: counter(g2, lower-latin)". ";font-weight: bold;}#l34> li:first-child>*:first-child:before {counter-increment: g2 0;}#l35 {counter-reset: g2 1;}#l35> li>*:first-child:before {counter-increment: g2;content: counter(g2, lower-latin)". ";font-weight: bold;}#l35> li:first-child>*:first-child:before {counter-increment: g2 0;}#l36 {counter-reset: g2 1;}#l36> li>*:first-child:before {counter-increment: g2;content: counter(g2, lower-latin)". ";font-weight: bold;}#l36> li:first-child>*:first-child:before {counter-increment: g2 0;}#l37 {counter-reset: h1 1;}#l37> li>*:first-child:before {counter-increment: h1;content: counter(h1, upper-latin)". ";font-weight: bold;}#l37> li:first-child>*:first-child:before {counter-increment: h1 0;}#l38 {counter-reset: h2 1;}#l38> li>*:first-child:before {counter-increment: h2;content: counter(h2, lower-latin)". ";font-weight: bold;}#l38> li:first-child>*:first-child:before {counter-increment: h2 0;}#l39 {counter-reset: h3 1;}#l39> li>*:first-child:before {counter-increment: h3;content: counter(h3, lower-roman)". ";font-weight: bold;}#l39> li:first-child>*:first-child:before {counter-increment: h3 0;}#l40 {counter-reset: h3 1;}#l40> li>*:first-child:before {counter-increment: h3;content: counter(h3, lower-roman)". ";font-weight: bold;}#l40> li:first-child>*:first-child:before {counter-increment: h3 0;}#l41 {counter-reset: h4 1;}#l41> li>*:first-child:before {counter-increment: h4;content: counter(h4, decimal)". ";font-weight: bold;}#l41> li:first-child>*:first-child:before {counter-increment: h4 0;}#l42 {counter-reset: h3 1;}#l42> li>*:first-child:before {counter-increment: h3;content: counter(h3, lower-roman)". ";font-weight: bold;}#l42> li:first-child>*:first-child:before {counter-increment: h3 0;}#l43 {counter-reset: h3 1;}#l43> li>*:first-child:before {counter-increment: h3;content: counter(h3, lower-roman)". ";font-weight: bold;}#l43> li:first-child>*:first-child:before {counter-increment: h3 0;}#l44 {counter-reset: h4 1;}#l44> li>*:first-child:before {counter-increment: h4;content: counter(h4, decimal)". ";font-weight: bold;}#l44> li:first-child>*:first-child:before {counter-increment: h4 0;}#l45 {counter-reset: h5 1;}#l45> li>*:first-child:before {counter-increment: h5;content: counter(h5, lower-latin)". ";font-weight: bold;}#l45> li:first-child>*:first-child:before {counter-increment: h5 0;}#l46 {counter-reset: h2 1;}#l46> li>*:first-child:before {counter-increment: h2;content: counter(h2, lower-latin)". ";font-weight: bold;}#l46> li:first-child>*:first-child:before {counter-increment: h2 0;}#l47 {counter-reset: h3 1;}#l47> li>*:first-child:before {counter-increment: h3;content: counter(h3, lower-roman)". ";font-weight: bold;}#l47> li:first-child>*:first-child:before {counter-increment: h3 0;}#l48 {counter-reset: h2 1;}#l48> li>*:first-child:before {counter-increment: h2;content: counter(h2, lower-latin)". ";font-weight: bold;}#l48> li:first-child>*:first-child:before {counter-increment: h2 0;}#l49 {counter-reset: h3 1;}#l49> li>*:first-child:before {counter-increment: h3;content: counter(h3, lower-roman)". ";font-weight: bold;}#l49> li:first-child>*:first-child:before {counter-increment: h3 0;}#l50 {counter-reset: h3 1;}#l50> li>*:first-child:before {counter-increment: h3;content: counter(h3, lower-roman)". ";font-weight: bold;}#l50> li:first-child>*:first-child:before {counter-increment: h3 0;}#l51 {counter-reset: h3 1;}#l51> li>*:first-child:before {counter-increment: h3;content: counter(h3, lower-roman)". ";font-weight: bold;}#l51> li:first-child>*:first-child:before {counter-increment: h3 0;}#l52 {counter-reset: h2 1;}#l52> li>*:first-child:before {counter-increment: h2;content: counter(h2, lower-latin)". ";font-weight: bold;}#l52> li:first-child>*:first-child:before {counter-increment: h2 0;}#l53 {counter-reset: h3 1;}#l53> li>*:first-child:before {counter-increment: h3;content: counter(h3, lower-roman)". ";font-weight: bold;}#l53> li:first-child>*:first-child:before {counter-increment: h3 0;}#l54 {counter-reset: h3 1;}#l54> li>*:first-child:before {counter-increment: h3;content: counter(h3, lower-roman)". ";font-weight: bold;}#l54> li:first-child>*:first-child:before {counter-increment: h3 0;}#l55 {counter-reset: h3 1;}#l55> li>*:first-child:before {counter-increment: h3;content: counter(h3, lower-roman)". ";font-weight: bold;}#l55> li:first-child>*:first-child:before {counter-increment: h3 0;}#l56 {counter-reset: i1 1;}#l56> li>*:first-child:before {counter-increment: i1;content: counter(i1, upper-latin)". ";font-weight: bold;}#l56> li:first-child>*:first-child:before {counter-increment: i1 0;}#l57 {counter-reset: i2 1;}#l57> li>*:first-child:before {counter-increment: i2;content: counter(i2, lower-latin)". ";}#l57> li:first-child>*:first-child:before {counter-increment: i2 0;}#l58 {counter-reset: i2 1;}#l58> li>*:first-child:before {counter-increment: i2;content: counter(i2, lower-latin)". ";}#l58> li:first-child>*:first-child:before {counter-increment: i2 0;}#l59 {counter-reset: i3 1;}#l59> li>*:first-child:before {counter-increment: i3;content: counter(i3, lower-roman)". ";font-weight: bold;}#l59> li:first-child>*:first-child:before {counter-increment: i3 0;}#l60 {counter-reset: i3 1;}#l60> li>*:first-child:before {counter-increment: i3;content: counter(i3, lower-roman)". ";font-weight: bold;}#l60> li:first-child>*:first-child:before {counter-increment: i3 0;}#l61 {counter-reset: i2 1;}#l61> li>*:first-child:before {counter-increment: i2;content: counter(i2, lower-latin)". ";}#l61> li:first-child>*:first-child:before {counter-increment: i2 0;}#l62 {counter-reset: i3 1;}#l62> li>*:first-child:before {counter-increment: i3;content: counter(i3, lower-roman)". ";font-weight: bold;}#l62> li:first-child>*:first-child:before {counter-increment: i3 0;}#l63 {counter-reset: i2 1;}#l63> li>*:first-child:before {counter-increment: i2;content: counter(i2, lower-latin)". ";}#l63> li:first-child>*:first-child:before {counter-increment: i2 0;}#l64 {counter-reset: j1 1;}#l64> li>*:first-child:before {counter-increment: j1;content: counter(j1, upper-latin)". ";font-weight: bold;}#l64> li:first-child>*:first-child:before {counter-increment: j1 0;}#l65 {counter-reset: j2 1;}#l65> li>*:first-child:before {counter-increment: j2;content: counter(j2, lower-latin)". ";font-weight: bold;}#l65> li:first-child>*:first-child:before {counter-increment: j2 0;}#l66 {counter-reset: j3 1;}#l66> li>*:first-child:before {counter-increment: j3;content: counter(j3, lower-roman)". ";font-weight: bold;}#l66> li:first-child>*:first-child:before {counter-increment: j3 0;}#l67 {counter-reset: j3 1;}#l67> li>*:first-child:before {counter-increment: j3;content: counter(j3, lower-roman)". ";font-weight: bold;}#l67> li:first-child>*:first-child:before {counter-increment: j3 0;}#l68 {counter-reset: j2 1;}#l68> li>*:first-child:before {counter-increment: j2;content: counter(j2, lower-latin)". ";font-weight: bold;}#l68> li:first-child>*:first-child:before {counter-increment: j2 0;}#l69 { }#l69> li>*:first-child:before {content: "○ ";font-family:Arial, sans-serif;font-weight: bold;}#l70 {counter-reset: l1 1;}#l70> li>*:first-child:before {counter-increment: l1;content: counter(l1, upper-latin)". ";font-weight: bold;}#l70> li:first-child>*:first-child:before {counter-increment: l1 0;}#l71 {counter-reset: l2 1;}#l71> li>*:first-child:before {counter-increment: l2;content: counter(l2, lower-latin)". ";font-weight: bold;}#l71> li:first-child>*:first-child:before {counter-increment: l2 0;}#l72 {counter-reset: l2 1;}#l72> li>*:first-child:before {counter-increment: l2;content: counter(l2, lower-latin)". ";font-weight: bold;}#l72> li:first-child>*:first-child:before {counter-increment: l2 0;}#l73 {counter-reset: m1 1;}#l73> li>*:first-child:before {counter-increment: m1;content: counter(m1, upper-latin)". ";font-weight: bold;}#l73> li:first-child>*:first-child:before {counter-increment: m1 0;}#l74 {counter-reset: m2 1;}#l74> li>*:first-child:before {counter-increment: m2;content: counter(m2, lower-latin)". ";font-weight: bold;}#l74> li:first-child>*:first-child:before {counter-increment: m2 0;}#l75 {counter-reset: m2 1;}#l75> li>*:first-child:before {counter-increment: m2;content: counter(m2, lower-latin)". ";font-weight: bold;}#l75> li:first-child>*:first-child:before {counter-increment: m2 0;}#l76 {counter-reset: n1 1;}#l76> li>*:first-child:before {counter-increment: n1;content: counter(n1, upper-latin)". ";font-weight: bold;}#l76> li:first-child>*:first-child:before {counter-increment: n1 0;}#l77 {counter-reset: n2 1;}#l77> li>*:first-child:before {counter-increment: n2;content: counter(n2, lower-latin)". ";font-weight: bold;}#l77> li:first-child>*:first-child:before {counter-increment: n2 0;}#l78 {counter-reset: n2 1;}#l78> li>*:first-child:before {counter-increment: n2;content: counter(n2, lower-latin)". ";font-weight: bold;}#l78> li:first-child>*:first-child:before {counter-increment: n2 0;}`

    return (
        <div className={styles.container}>
            <style>{css}</style>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.subtitle}>{subtitle}</p>
            <div className={styles.imgContainer}>
                <Image
                    src={imgSrc}
                    alt={imgAlt}
                    height={200}
                    width={200}
                    className={styles.image}
                />
            </div>
            <br />
            <h2
                style={{
                    textAlign: "center",
                }}
            >
                Charter of Establishment
            </h2>
            <br />
            <div className={styles.articleContent}>
                <h3
                    style={{
                        paddingLeft: "5pt",
                    }}
                >
                    Article I - Purpose
                </h3>
                <ol id="l1">
                    <li data-list-text="A.">
                        <h4
                            style={{
                                paddingTop: "2pt",
                                paddingLeft: "41pt",
                                textIndent: "-18pt",
                            }}
                        >
                            Purpose
                        </h4>
                        <p
                            style={{
                                paddingTop: "2pt",
                                paddingLeft: "41pt",
                            }}
                        >
                            Virtù, Macalester College’s journal of
                            transdisciplinary explorations, endeavors to empower
                            students and community members to espouse their
                            convictions by way of original composition about
                            specific themes selected by the Journal’s editorial
                            staff.
                        </p>
                    </li>
                    <li data-list-text="B.">
                        <h4
                            style={{
                                paddingLeft: "41pt",
                                textIndent: "-18pt",
                            }}
                        >
                            Uniqueness
                        </h4>
                        <ol id="l2">
                            <li data-list-text={1}>
                                <p
                                    style={{
                                        paddingTop: "2pt",
                                        paddingLeft: "77pt",
                                        textIndent: "-18pt",
                                    }}
                                >
                                    Distinguishing Features:
                                </p>
                                <ol id="l3">
                                    <li data-list-text="a.">
                                        <p
                                            style={{
                                                paddingTop: "2pt",
                                                paddingLeft: "113pt",
                                                textIndent: "-18pt",
                                            }}
                                        >
                                            Adherence to elevated standards for
                                            quality of writing.
                                        </p>
                                    </li>
                                    <li data-list-text="b.">
                                        <p
                                            style={{
                                                paddingTop: "2pt",
                                                paddingLeft: "113pt",
                                                textIndent: "-18pt",
                                            }}
                                        >
                                            Commitment to a partnership with
                                            Macalester’s academic departments.
                                        </p>
                                    </li>
                                    <li data-list-text="c.">
                                        <p
                                            style={{
                                                paddingTop: "2pt",
                                                paddingLeft: "113pt",
                                                textIndent: "-18pt",
                                            }}
                                        >
                                            Unwavering commitment to the
                                            Journal’s thematic focus.
                                        </p>
                                        <ul id="l4">
                                            <li data-list-text="-">
                                                <p
                                                    style={{
                                                        paddingTop: "2pt",
                                                        paddingLeft: "149pt",
                                                        textIndent: "-18pt",
                                                    }}
                                                >
                                                    Virtù is distinguished from
                                                    other academic journals at
                                                    Macalester by its commitment
                                                    to maintaining a{" "}
                                                    <i>specific </i>
                                                    and <i>elucidated </i>theme
                                                    to which all published
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
                                        </ul>
                                    </li>
                                </ol>
                            </li>
                            <li data-list-text={2}>
                                <p
                                    style={{
                                        paddingLeft: "77pt",
                                        textIndent: "-18pt",
                                    }}
                                >
                                    Thematic Focus:
                                </p>
                                <ol id="l5">
                                    <li data-list-text="a.">
                                        <p
                                            style={{
                                                paddingTop: "2pt",
                                                paddingLeft: "113pt",
                                                textIndent: "-18pt",
                                            }}
                                        >
                                            Encourages diverse opinions
                                            expressed in various forms and
                                            mediums.
                                        </p>
                                    </li>
                                    <li data-list-text="b.">
                                        <p
                                            style={{
                                                paddingTop: "2pt",
                                                paddingLeft: "113pt",
                                                textIndent: "-18pt",
                                            }}
                                        >
                                            Includes personal essays, literary
                                            criticism, short narratives, poems,
                                            and written pieces focused on
                                            political discourse.
                                        </p>
                                    </li>
                                    <li data-list-text="c.">
                                        <p
                                            style={{
                                                paddingLeft: "113pt",
                                                textIndent: "-18pt",
                                            }}
                                        >
                                            Internationalism and emphasis on a
                                            transdisciplinary academic approach.
                                        </p>
                                        <ul id="l6">
                                            <li data-list-text="-">
                                                <p
                                                    style={{
                                                        paddingTop: "2pt",
                                                        paddingLeft: "149pt",
                                                        textIndent: "-18pt",
                                                    }}
                                                >
                                                    Virtù intends to publish
                                                    written pieces addressing
                                                    issues and experiences the
                                                    world over; specifically, we
                                                    intend to have at{" "}
                                                    <b>least one chapter </b>
                                                    written by those with
                                                    personal and intellectual
                                                    connections to the{" "}
                                                    <i>
                                                        United States, China,
                                                        Europe, Latin America,
                                                        Africa,{" "}
                                                    </i>
                                                    and the greater <i>Asia</i>.
                                                </p>
                                            </li>
                                            <li data-list-text="-">
                                                <p
                                                    style={{
                                                        paddingTop: "4pt",
                                                        paddingLeft: "149pt",
                                                        textIndent: "-18pt",
                                                    }}
                                                >
                                                    While we hope to have{" "}
                                                    <b>
                                                        at least one written
                                                        piece{" "}
                                                    </b>
                                                    addressing each of the
                                                    aforementioned states and
                                                    continents within each issue
                                                    of Virtù, this does not mean
                                                    we will not publish in areas
                                                    outside of those listed.
                                                </p>
                                            </li>
                                        </ul>
                                    </li>
                                </ol>
                            </li>
                            <li data-list-text={3}>
                                <p
                                    style={{
                                        paddingLeft: "77pt",
                                        textIndent: "-18pt",
                                    }}
                                >
                                    Strategic Partnership:
                                </p>
                                <ol id="l7">
                                    <li data-list-text="a.">
                                        <p
                                            style={{
                                                paddingTop: "2pt",
                                                paddingLeft: "113pt",
                                                textIndent: "-18pt",
                                            }}
                                        >
                                            Idealized within the literary pieces
                                            included in the publication.
                                        </p>
                                    </li>
                                    <li data-list-text="b.">
                                        <p
                                            style={{
                                                paddingTop: "2pt",
                                                paddingLeft: "113pt",
                                                textIndent: "-18pt",
                                            }}
                                        >
                                            Serves as a platform for informed
                                            social dialogue.
                                        </p>
                                    </li>
                                    <li data-list-text="c.">
                                        <p
                                            style={{
                                                paddingTop: "2pt",
                                                paddingLeft: "113pt",
                                                textIndent: "-18pt",
                                            }}
                                        >
                                            Inspires meaningful conversations.
                                        </p>
                                    </li>
                                </ol>
                            </li>
                        </ol>
                    </li>
                    <li data-list-text="C.">
                        <h4
                            style={{
                                paddingTop: "2pt",
                                paddingLeft: "41pt",
                                textIndent: "-18pt",
                            }}
                        >
                            Impact
                        </h4>
                        <ul id="l8">
                            <li data-list-text="●">
                                <p
                                    style={{
                                        paddingTop: "2pt",
                                        paddingLeft: "77pt",
                                        textIndent: "-18pt",
                                    }}
                                >
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
                        </ul>
                    </li>
                </ol>

                <h3
                    style={{
                        paddingTop: "10pt",
                        paddingLeft: "5pt",
                    }}
                >
                    Article II - Membership
                </h3>
                <ol id="l9">
                    <li data-list-text="A.">
                        <h4
                            style={{
                                paddingTop: "2pt",
                                paddingLeft: "41pt",
                                textIndent: "-18pt",
                            }}
                        >
                            Diversity, Equity, and Inclusion
                        </h4>
                        <ol id="l10">
                            <li data-list-text="a.">
                                <h4
                                    style={{
                                        paddingTop: "2pt",
                                        paddingLeft: "77pt",
                                        textIndent: "-18pt",
                                    }}
                                >
                                    Statement of Inclusion
                                </h4>
                                <ol id="l11">
                                    <li data-list-text="i.">
                                        <p
                                            style={{
                                                paddingTop: "2pt",
                                                paddingLeft: "113pt",
                                                textIndent: "-24pt",
                                            }}
                                        >
                                            Virtù shall not be restrictive or
                                            discriminatory. In no aspect of its
                                            programs shall there be any
                                            difference in the treatment of
                                            persons based on race, creed, color,
                                            national origin, disability, age,
                                            gender, any consideration of sexual
                                            orientation, associational
                                            preference, or any other
                                            classification that would deprive
                                            the person of consideration as an
                                            individual equal opportunity and
                                            access to membership, programming,
                                            facilities, and benefits shall be
                                            open to all persons.
                                        </p>
                                    </li>
                                </ol>
                            </li>
                            <li data-list-text="b.">
                                <h4
                                    style={{
                                        paddingLeft: "77pt",
                                        textIndent: "-18pt",
                                    }}
                                >
                                    Virtù’s Promise
                                </h4>
                                <ol id="l12">
                                    <li data-list-text="i.">
                                        <p
                                            style={{
                                                paddingTop: "2pt",
                                                paddingLeft: "113pt",
                                                textIndent: "-24pt",
                                            }}
                                        >
                                            As Macalester’s student body is
                                            diverse, we aim to represent these
                                            values in our journal as well.
                                            Therefore, the members of Virtù will
                                            strive for these promises within our
                                            bylaws:
                                        </p>
                                        <ol id="l13">
                                            <li data-list-text={1}>
                                                <p
                                                    style={{
                                                        paddingLeft: "149pt",
                                                        textIndent: "-18pt",
                                                    }}
                                                >
                                                    The leadership of the
                                                    journal will encourage the
                                                    one-third rule in both the
                                                    Editorial Board and the
                                                    Executive Board. This means
                                                    these committees should aim
                                                    for at least one-third
                                                    representation for those who
                                                    identify as BIPOC and/or
                                                    international students. We
                                                    also hope to uphold the same
                                                    standard for other matrices
                                                    of oppression, such as
                                                    gender, sexuality,
                                                    disability, and age. This
                                                    ensures that the club stays
                                                    aligned with our
                                                    internationalism,
                                                    multiculturalism, and
                                                    inclusion goals.
                                                </p>
                                            </li>
                                            <li data-list-text={2}>
                                                <p
                                                    style={{
                                                        paddingLeft: "149pt",
                                                        textIndent: "-18pt",
                                                    }}
                                                >
                                                    The one-third rule shall
                                                    also be considered for the
                                                    contributing writers,
                                                    however, as we want to
                                                    promote academic freedom and
                                                    do not want to censor
                                                    scholarship, it will not be
                                                    a requirement.
                                                </p>
                                                <br />
                                                <br />
                                            </li>
                                        </ol>
                                    </li>
                                </ol>
                            </li>
                        </ol>
                    </li>
                    <li data-list-text="B.">
                        <h4
                            style={{
                                paddingLeft: "41pt",
                                textIndent: "-18pt",
                            }}
                        >
                            Membership Status
                        </h4>
                        <ol id="l14">
                            <li data-list-text="a.">
                                <p
                                    style={{
                                        paddingTop: "2pt",
                                        paddingLeft: "77pt",
                                        textIndent: "-18pt",
                                    }}
                                >
                                    Membership will not require auditions and
                                    tryouts;interested individuals can contact
                                    Executive and Editorial Board members.
                                    Interested individuals must display
                                    commitment toward the organization’s
                                    expectations by attending at least six
                                    meetings before being considered a full
                                    member.
                                </p>
                            </li>
                            <li data-list-text="b.">
                                <p
                                    style={{
                                        paddingLeft: "77pt",
                                        textIndent: "-18pt",
                                    }}
                                >
                                    Members are allowed two unexcused absences
                                    in one semester without any repercussions.
                                    Members are expected to attend at least half
                                    of the organization’s meetings in one
                                    semester. Any violation of these
                                    expectations will be brought to the Board’s
                                    attention to discuss the appropriate next
                                    step.
                                </p>
                            </li>
                            <li data-list-text="c.">
                                <p
                                    style={{
                                        paddingLeft: "77pt",
                                        textIndent: "-18pt",
                                    }}
                                >
                                    Members are expected to assume a role in the
                                    organization listed under Article III. Each
                                    member is then expected to fulfill their
                                    responsibilities within the assumed role. If
                                    members need help fulfilling their duties to
                                    their abilities, they are expected to
                                    communicate their concerns to the Board
                                    members.
                                </p>
                            </li>
                        </ol>
                    </li>
                    <li data-list-text="C.">
                        <h4
                            style={{
                                paddingLeft: "41pt",
                                textIndent: "-18pt",
                            }}
                        >
                            Removal
                        </h4>
                        <ol id="l15">
                            <li data-list-text="a.">
                                <p
                                    style={{
                                        paddingTop: "2pt",
                                        paddingLeft: "77pt",
                                        textIndent: "-18pt",
                                    }}
                                >
                                    All members shall have good faith attempts
                                    regarding possible removals.
                                </p>
                            </li>
                            <li data-list-text="b.">
                                <p
                                    style={{
                                        paddingTop: "2pt",
                                        paddingLeft: "77pt",
                                        textIndent: "-18pt",
                                    }}
                                >
                                    Initial meeting
                                </p>
                                <ol id="l16">
                                    <li data-list-text="i.">
                                        <p
                                            style={{
                                                paddingTop: "2pt",
                                                paddingLeft: "113pt",
                                                textIndent: "-24pt",
                                            }}
                                        >
                                            When a concern arises with one of
                                            the members, the Content Editor (CE)
                                            and/or Managerial Editor (ME) should
                                            set up an appointment with the
                                            concerned party to discuss their
                                            concerns. This could involve CSLE if
                                            needed.
                                        </p>
                                    </li>
                                </ol>
                            </li>
                            <li data-list-text="c.">
                                <p
                                    style={{
                                        paddingLeft: "77pt",
                                        textIndent: "-18pt",
                                    }}
                                >
                                    Determining appropriate measure
                                </p>
                                <ol id="l17">
                                    <li data-list-text="i.">
                                        <p
                                            style={{
                                                paddingTop: "2pt",
                                                paddingLeft: "113pt",
                                                textIndent: "-24pt",
                                            }}
                                        >
                                            The Executive Board will set up an
                                            appointment to discuss appropriate
                                            measures for the member and
                                            determine whether removal is needed.
                                        </p>
                                    </li>
                                </ol>
                            </li>
                            <li data-list-text="d.">
                                <p
                                    style={{
                                        paddingLeft: "77pt",
                                        textIndent: "-18pt",
                                    }}
                                >
                                    SOC &amp;CSLE Approval
                                </p>
                                <ol id="l18">
                                    <li data-list-text="i.">
                                        <p
                                            style={{
                                                paddingTop: "2pt",
                                                paddingLeft: "113pt",
                                                textIndent: "-24pt",
                                            }}
                                        >
                                            <a
                                                href="https://docs.google.com/document/d/1S3cJu0VCemFNTICrUM2s49BR14FB6gEx4BWR8hvR-fQ/edit?usp=sharing"
                                                style={{
                                                    textDecoration: "none",
                                                }}
                                                target="_blank"
                                            >
                                                Virtù, the Executive Board, the
                                                Editorial Board, and all members
                                                will review and adhere to all
                                                College policies, including the{" "}
                                            </a>
                                            <span
                                                style={{
                                                    textDecoration: "underline",
                                                }}
                                            >
                                                Student
                                            </span>
                                            <a
                                                href="https://docs.google.com/document/d/1S3cJu0VCemFNTICrUM2s49BR14FB6gEx4BWR8hvR-fQ/edit?usp=sharing"
                                                style={{
                                                    textDecoration: "underline",
                                                }}
                                                target="_blank"
                                            >
                                                {" "}
                                            </a>
                                            <a
                                                href="https://docs.google.com/document/d/1S3cJu0VCemFNTICrUM2s49BR14FB6gEx4BWR8hvR-fQ/edit?usp=sharing"
                                                target="_blank"
                                            >
                                                Organization Code of Conduct
                                            </a>
                                        </p>
                                    </li>
                                    <li data-list-text="ii.">
                                        <p
                                            style={{
                                                paddingLeft: "113pt",
                                                textIndent: "-27pt",
                                            }}
                                        >
                                            As membership in Virtù is rarely
                                            repealed, the journal members with
                                            concerns will schedule advising
                                            appointments with a CSLE staff
                                            and/or advisor after the initial
                                            meeting to determine appropriate
                                            measures they can take.
                                        </p>
                                    </li>
                                </ol>
                            </li>
                        </ol>
                    </li>
                    <li data-list-text="D.">
                        <h4
                            style={{
                                paddingLeft: "41pt",
                                textIndent: "-18pt",
                            }}
                        >
                            Contributing Writers
                        </h4>
                        <ol id="l19">
                            <li data-list-text="a.">
                                <p
                                    style={{
                                        paddingTop: "2pt",
                                        paddingLeft: "77pt",
                                        textIndent: "-18pt",
                                    }}
                                >
                                    Membership
                                </p>
                                <ol id="l20">
                                    <li data-list-text="i.">
                                        <p
                                            style={{
                                                paddingTop: "2pt",
                                                paddingLeft: "113pt",
                                                textIndent: "-24pt",
                                            }}
                                        >
                                            As the contributing writer is an
                                            issue-based role, the contributing
                                            writer does not necessarily have to
                                            be stated as a club member.
                                        </p>
                                    </li>
                                    <li data-list-text="ii.">
                                        <p
                                            style={{
                                                paddingLeft: "113pt",
                                                textIndent: "-27pt",
                                            }}
                                        >
                                            However, if the writer chooses to be
                                            a member the process shall be the
                                            same as Article II (B).
                                        </p>
                                    </li>
                                </ol>
                            </li>
                            <li data-list-text="b.">
                                <p
                                    style={{
                                        paddingTop: "4pt",
                                        paddingLeft: "77pt",
                                        textIndent: "-18pt",
                                    }}
                                >
                                    Selection Process
                                </p>
                                <ol id="l21">
                                    <li data-list-text="i.">
                                        <p
                                            style={{
                                                paddingTop: "2pt",
                                                paddingLeft: "113pt",
                                                textIndent: "-24pt",
                                            }}
                                        >
                                            Submit a form that includes an
                                            abstract of the article and a
                                            summary of reasons for pursuing the
                                            article.
                                        </p>
                                    </li>
                                </ol>
                            </li>
                            <li data-list-text="c.">
                                <p
                                    style={{
                                        paddingLeft: "77pt",
                                        textIndent: "-18pt",
                                    }}
                                >
                                    The Editorial Board will discuss and make
                                    decisions based on the submission forms that
                                    have been collected.
                                </p>
                            </li>
                        </ol>
                    </li>
                </ol>
                <h3
                    style={{
                        paddingTop: "10pt",
                        paddingLeft: "5pt",
                    }}
                >
                    Article III - Officers and Duties
                </h3>
                <p
                    style={{
                        paddingTop: "2pt",
                        paddingLeft: "5pt",
                    }}
                >
                    The Journal will have two boards:{" "}
                    <i>The Executive Board </i>and <i>The Editorial Board.</i>
                </p>
                <p
                    style={{
                        paddingTop: "2pt",
                        paddingLeft: "5pt",
                    }}
                >
                    Note: Requirements for specific position eligibility take
                    effect on January 1st, 2025.
                </p>
                <br />
                <ol id="l22">
                    <li data-list-text="A.">
                        <h4
                            style={{
                                paddingLeft: "41pt",
                                textIndent: "-18pt",
                            }}
                        >
                            The Executive Board
                        </h4>
                        <ol id="l23">
                            <li data-list-text="a.">
                                <p
                                    style={{
                                        paddingTop: "2pt",
                                        paddingLeft: "77pt",
                                        textIndent: "-18pt",
                                    }}
                                >
                                    This board will include the Managerial
                                    Editor, Secretary, and five members voted on
                                    at the start of the semester. They will
                                    serve for two semesters (one academic year)
                                    except for the inaugural board, which will
                                    serve at least four semesters (two academic
                                    years) to ensure the implementation of a
                                    practical foundational function.
                                </p>
                            </li>
                            <li data-list-text="b.">
                                <p
                                    style={{
                                        paddingLeft: "77pt",
                                        textIndent: "-18pt",
                                    }}
                                >
                                    Anyone who has been a part of the club for
                                    at least two semesters can apply to be on
                                    the Executive Board and must get majority
                                    approval from the previous board and a
                                    majority vote within the club membership.
                                </p>
                            </li>
                            <li data-list-text="c.">
                                <p
                                    style={{
                                        paddingLeft: "77pt",
                                        textIndent: "-18pt",
                                    }}
                                >
                                    Any person applying to the Executive Board
                                    should submit their name no later than the{" "}
                                    <i>second meeting </i>of the semester.
                                </p>
                            </li>
                            <li data-list-text="d.">
                                <p
                                    style={{
                                        paddingLeft: "77pt",
                                        textIndent: "-18pt",
                                    }}
                                >
                                    More detailed information on Article IV (A).
                                </p>
                            </li>
                        </ol>
                    </li>
                    <li data-list-text="B.">
                        <h4
                            style={{
                                paddingTop: "2pt",
                                paddingLeft: "41pt",
                                textIndent: "-18pt",
                            }}
                        >
                            The Editorial Board
                        </h4>
                        <ol id="l24">
                            <li data-list-text="a.">
                                <p
                                    style={{
                                        paddingTop: "2pt",
                                        paddingLeft: "77pt",
                                        textIndent: "-18pt",
                                    }}
                                >
                                    This board will include the Content Editor
                                    and the Associate Editors voted on at the
                                    start of the semester. They will serve for
                                    at least two semesters (one academic year).
                                </p>
                            </li>
                            <li data-list-text="b.">
                                <p
                                    style={{
                                        paddingLeft: "77pt",
                                        textIndent: "-18pt",
                                    }}
                                >
                                    The Editorial Board is responsible for
                                    determining the theme for a respective issue
                                    of Virtù and accepting or rejecting ideas
                                    for articles or pieces to be published
                                    within the journal. The Editorial Board is
                                    also responsible for delegating editors who
                                    will collaborate with specific writers
                                    according to their needs and respective
                                    writing styles and methods. The Editorial
                                    Board passes or rejects motions with a
                                    simple majority vote.
                                </p>
                            </li>
                        </ol>
                    </li>
                    <li data-list-text="C.">
                        <h4
                            style={{
                                paddingLeft: "41pt",
                                textIndent: "-18pt",
                            }}
                        >
                            Roles and Responsibilities
                        </h4>
                    </li>
                </ol>
                <ol id="l25">
                    <li data-list-text="A.">
                        <p
                            style={{
                                paddingTop: "2pt",
                                paddingLeft: "77pt",
                                textIndent: "-18pt",
                            }}
                        >
                            Content Editor (1 person) (2-4 hours per week)
                        </p>
                        <ol id="l26">
                            <li data-list-text="a.">
                                <p
                                    style={{
                                        paddingTop: "2pt",
                                        paddingLeft: "113pt",
                                        textIndent: "-18pt",
                                    }}
                                >
                                    Determine the overarching theme and
                                    structure of the journal.
                                </p>
                            </li>
                            <li data-list-text="b.">
                                <p
                                    style={{
                                        paddingTop: "2pt",
                                        paddingLeft: "113pt",
                                        textIndent: "-18pt",
                                    }}
                                >
                                    Preside over weekly meetings.
                                </p>
                            </li>
                            <li data-list-text="c.">
                                <p
                                    style={{
                                        paddingTop: "2pt",
                                        paddingLeft: "113pt",
                                        textIndent: "-18pt",
                                    }}
                                >
                                    Provide support to the editorial team in
                                    refining and editing submissions.
                                </p>
                            </li>
                        </ol>
                    </li>
                    <li data-list-text="B.">
                        <p
                            style={{
                                paddingTop: "2pt",
                                paddingLeft: "77pt",
                                textIndent: "-18pt",
                            }}
                        >
                            Managerial Editor (1) (2-4 hours per week)
                        </p>
                        <ol id="l27">
                            <li data-list-text="a.">
                                <p
                                    style={{
                                        paddingTop: "2pt",
                                        paddingLeft: "113pt",
                                        textIndent: "-18pt",
                                    }}
                                >
                                    Address and manage administrative duties and
                                    tasks.
                                </p>
                            </li>
                            <li data-list-text="b.">
                                <p
                                    style={{
                                        paddingTop: "2pt",
                                        paddingLeft: "113pt",
                                        textIndent: "-18pt",
                                    }}
                                >
                                    Preside over weekly meetings.
                                </p>
                            </li>
                            <li data-list-text="c.">
                                <p
                                    style={{
                                        paddingTop: "2pt",
                                        paddingLeft: "113pt",
                                        textIndent: "-18pt",
                                    }}
                                >
                                    Maintain the operational efficiency of the
                                    journal.
                                </p>
                            </li>
                            <li data-list-text="d.">
                                <p
                                    style={{
                                        paddingTop: "2pt",
                                        paddingLeft: "113pt",
                                        textIndent: "-18pt",
                                    }}
                                >
                                    Handle Presence Page Management.
                                </p>
                            </li>
                        </ol>
                    </li>
                    <li data-list-text="C.">
                        <p
                            style={{
                                paddingTop: "4pt",
                                paddingLeft: "77pt",
                                textIndent: "-18pt",
                            }}
                        >
                            Secretary (1) (2-3 hours per week)
                        </p>
                        <ol id="l28">
                            <li data-list-text="a.">
                                <p
                                    style={{
                                        paddingTop: "2pt",
                                        paddingLeft: "113pt",
                                        textIndent: "-18pt",
                                    }}
                                >
                                    Manage organizational correspondence and
                                    email communications.
                                </p>
                            </li>
                            <li data-list-text="b.">
                                <p
                                    style={{
                                        paddingTop: "2pt",
                                        paddingLeft: "113pt",
                                        textIndent: "-18pt",
                                    }}
                                >
                                    Serve as an administrative assistant,
                                    facilitating meeting logistics, including
                                    notes, agendas, and reservation of meeting
                                    spaces.
                                </p>
                            </li>
                            <li data-list-text="c.">
                                <p
                                    style={{
                                        paddingLeft: "113pt",
                                        textIndent: "-18pt",
                                    }}
                                >
                                    Coordinate all-staff and special meetings.
                                </p>
                            </li>
                        </ol>
                    </li>
                    <li data-list-text="D.">
                        <p
                            style={{
                                paddingTop: "2pt",
                                paddingLeft: "77pt",
                                textIndent: "-18pt",
                            }}
                        >
                            Associate Editor (3-4) (1-3 hours per week)
                        </p>
                        <ol id="l29">
                            <li data-list-text="a.">
                                <p
                                    style={{
                                        paddingTop: "2pt",
                                        paddingLeft: "113pt",
                                        textIndent: "-18pt",
                                    }}
                                >
                                    Assume primary editorial responsibility for
                                    at least one article.
                                </p>
                            </li>
                            <li data-list-text="b.">
                                <p
                                    style={{
                                        paddingTop: "2pt",
                                        paddingLeft: "113pt",
                                        textIndent: "-18pt",
                                    }}
                                >
                                    Collaborate closely with the contributing
                                    writers to develop compelling chapters.
                                </p>
                            </li>
                            <li data-list-text="c.">
                                <p
                                    style={{
                                        paddingLeft: "113pt",
                                        textIndent: "-18pt",
                                    }}
                                >
                                    Mentor Assistant Editors, enhancing their
                                    editorial proficiency.
                                </p>
                            </li>
                        </ol>
                    </li>
                    <li data-list-text="E.">
                        <p
                            style={{
                                paddingTop: "2pt",
                                paddingLeft: "77pt",
                                textIndent: "-18pt",
                            }}
                        >
                            Assistant Editor (3-4) (1-2 hours per week)
                        </p>
                        <ol id="l30">
                            <li data-list-text="a.">
                                <p
                                    style={{
                                        paddingTop: "2pt",
                                        paddingLeft: "113pt",
                                        textIndent: "-18pt",
                                    }}
                                >
                                    Assist the Associate Editors in the
                                    editorial process.
                                </p>
                            </li>
                            <li data-list-text="b.">
                                <p
                                    style={{
                                        paddingTop: "2pt",
                                        paddingLeft: "113pt",
                                        textIndent: "-18pt",
                                    }}
                                >
                                    Engage in shadowing opportunities with
                                    Associate Editors to learn advanced
                                    editorial techniques.
                                </p>
                            </li>
                        </ol>
                    </li>
                    <li data-list-text="F.">
                        <p
                            style={{
                                paddingLeft: "77pt",
                                textIndent: "-18pt",
                            }}
                        >
                            Research and Content Associates (1-3 hours per week)
                        </p>
                        <ol id="l31">
                            <li data-list-text="a.">
                                <p
                                    style={{
                                        paddingTop: "2pt",
                                        paddingLeft: "113pt",
                                        textIndent: "-18pt",
                                    }}
                                >
                                    Design and execute surveys to gauge the
                                    interests and concerns of the college's
                                    community.
                                </p>
                            </li>
                            <li data-list-text="b.">
                                <p
                                    style={{
                                        paddingLeft: "113pt",
                                        textIndent: "-18pt",
                                    }}
                                >
                                    Analyze survey data to identify trends and
                                    inform the journal's content direction.
                                </p>
                            </li>
                            <li data-list-text="c.">
                                <p
                                    style={{
                                        paddingLeft: "113pt",
                                        textIndent: "-18pt",
                                    }}
                                >
                                    Present findings to the editorial board to
                                    guide the thematic focus of the journal.
                                </p>
                            </li>
                        </ol>
                    </li>
                    <li data-list-text="G.">
                        <p
                            style={{
                                paddingLeft: "77pt",
                                textIndent: "-18pt",
                            }}
                        >
                            Publicity and Social Media Associates (1-3 hours per
                            week)
                        </p>
                        <ol id="l32">
                            <li data-list-text="a.">
                                <p
                                    style={{
                                        paddingTop: "2pt",
                                        paddingLeft: "113pt",
                                        textIndent: "-18pt",
                                    }}
                                >
                                    Oversee the journal’s presence on social
                                    media platforms.
                                </p>
                            </li>
                            <li data-list-text="b.">
                                <p
                                    style={{
                                        paddingTop: "2pt",
                                        paddingLeft: "113pt",
                                        textIndent: "-18pt",
                                    }}
                                >
                                    Ensure timely and relevant updates to social
                                    media content.
                                </p>
                            </li>
                            <li data-list-text="c.">
                                <p
                                    style={{
                                        paddingTop: "2pt",
                                        paddingLeft: "113pt",
                                        textIndent: "-18pt",
                                    }}
                                >
                                    Coordinate and update the website alongside
                                    the Technologist.
                                </p>
                            </li>
                            <li data-list-text="d.">
                                <p
                                    style={{
                                        paddingTop: "2pt",
                                        paddingLeft: "113pt",
                                        textIndent: "-18pt",
                                    }}
                                >
                                    Create and distribute promotional materials
                                    across campus.
                                </p>
                            </li>
                        </ol>
                    </li>
                    <li data-list-text="H.">
                        <p
                            style={{
                                paddingTop: "2pt",
                                paddingLeft: "77pt",
                                textIndent: "-18pt",
                            }}
                        >
                            Designer (as needed)
                        </p>
                        <ol id="l33">
                            <li data-list-text="a.">
                                <p
                                    style={{
                                        paddingTop: "2pt",
                                        paddingLeft: "113pt",
                                        textIndent: "-18pt",
                                    }}
                                >
                                    Design and format the journal's visual
                                    branding and aesthetics.
                                </p>
                            </li>
                            <li data-list-text="b.">
                                <p
                                    style={{
                                        paddingTop: "2pt",
                                        paddingLeft: "113pt",
                                        textIndent: "-18pt",
                                    }}
                                >
                                    Ensure consistency and visual appeal in the
                                    journal’s presentation.
                                </p>
                            </li>
                        </ol>
                    </li>
                    <li data-list-text="I.">
                        <p
                            style={{
                                paddingTop: "2pt",
                                paddingLeft: "77pt",
                                textIndent: "-18pt",
                            }}
                        >
                            Treasurer (1) (1-3 hours per week)
                        </p>
                        <ol id="l34">
                            <li data-list-text="a.">
                                <p
                                    style={{
                                        paddingTop: "2pt",
                                        paddingLeft: "113pt",
                                        textIndent: "-18pt",
                                    }}
                                >
                                    Manage all financial matters relating to the
                                    journal’s management and the publication of
                                    finalized editions of Virtù.
                                </p>
                            </li>
                            <li data-list-text="b.">
                                <p
                                    style={{
                                        paddingLeft: "113pt",
                                        textIndent: "-18pt",
                                    }}
                                >
                                    Oversee budgeting, expenditures, and
                                    financial planning for the journal.
                                </p>
                            </li>
                            <li data-list-text="c.">
                                <p
                                    style={{
                                        paddingTop: "2pt",
                                        paddingLeft: "113pt",
                                        textIndent: "-18pt",
                                    }}
                                >
                                    Handle financial documentation and
                                    transactions for the journal on the Presence
                                    platform, integrating page management and
                                    financial oversight.
                                </p>
                            </li>
                        </ol>
                    </li>
                    <li data-list-text="J.">
                        <p
                            style={{
                                paddingLeft: "77pt",
                                textIndent: "-18pt",
                            }}
                        >
                            Technologist (1) (as needed)
                        </p>
                        <ol id="l35">
                            <li data-list-text="a.">
                                <p
                                    style={{
                                        paddingTop: "2pt",
                                        paddingLeft: "113pt",
                                        textIndent: "-18pt",
                                    }}
                                >
                                    Oversee the technical management and upkeep
                                    of the journal’s website.
                                </p>
                            </li>
                            <li data-list-text="b.">
                                <p
                                    style={{
                                        paddingTop: "2pt",
                                        paddingLeft: "113pt",
                                        textIndent: "-18pt",
                                    }}
                                >
                                    Implement necessary updates and
                                    modifications to the website’s content and
                                    design.
                                </p>
                                <p
                                    style={{
                                        paddingTop: "4pt",
                                        paddingLeft: "5pt",
                                    }}
                                >
                                    Non-Permanent Members
                                </p>
                            </li>
                        </ol>
                    </li>
                    <li data-list-text="K.">
                        <p
                            style={{
                                paddingTop: "2pt",
                                paddingLeft: "77pt",
                                textIndent: "-18pt",
                            }}
                        >
                            Contributing Writers (6-8 per issue) (hours as
                            needed)
                        </p>
                        <ol id="l36">
                            <li data-list-text="a.">
                                <p
                                    style={{
                                        paddingTop: "2pt",
                                        paddingLeft: "113pt",
                                        textIndent: "-18pt",
                                    }}
                                >
                                    Propose innovative and thought-provoking
                                    ideas for chapters in the journal.
                                </p>
                            </li>
                            <li data-list-text="b.">
                                <p
                                    style={{
                                        paddingLeft: "113pt",
                                        textIndent: "-18pt",
                                    }}
                                >
                                    Collaborate closely with the editors to
                                    develop compelling chapters that are 15-25
                                    pages in length.
                                </p>
                            </li>
                            <li data-list-text="c.">
                                <p
                                    style={{
                                        paddingLeft: "113pt",
                                        textIndent: "-18pt",
                                    }}
                                >
                                    The writer can also be a permanent member of
                                    the journal;however, they are not required
                                    to be engaged in member activities such as
                                    weekly meetings as this is a seasonal role.
                                </p>
                            </li>
                        </ol>
                    </li>
                </ol>
                <br />
                <h3
                    style={{
                        paddingLeft: "5pt",
                    }}
                >
                    Article IV - Nominations &amp;Elections
                </h3>
                <ol id="l37">
                    <li data-list-text="A.">
                        <h4
                            style={{
                                paddingTop: "2pt",
                                paddingLeft: "41pt",
                                textIndent: "-18pt",
                            }}
                        >
                            Elections for Positions
                        </h4>
                        <ol id="l38">
                            <li data-list-text="a.">
                                <p
                                    style={{
                                        paddingTop: "2pt",
                                        paddingLeft: "77pt",
                                        textIndent: "-18pt",
                                    }}
                                >
                                    Voting members will nominate and confirm
                                    Executive Board members.
                                </p>
                                <ol id="l39">
                                    <li data-list-text="i.">
                                        <p
                                            style={{
                                                paddingTop: "2pt",
                                                paddingLeft: "113pt",
                                                textIndent: "-24pt",
                                            }}
                                        >
                                            The Executive Board is open to any
                                            members within the club;however,
                                            they must have been a member for at
                                            least <i>three </i>
                                            semesters.
                                        </p>
                                    </li>
                                    <li data-list-text="ii.">
                                        <p
                                            style={{
                                                paddingLeft: "113pt",
                                                textIndent: "-27pt",
                                            }}
                                        >
                                            The Executive Board members shall
                                            continue serving their other roles
                                            within the club.
                                        </p>
                                    </li>
                                </ol>
                            </li>
                            <li data-list-text="b.">
                                <p
                                    style={{
                                        paddingLeft: "77pt",
                                        textIndent: "-18pt",
                                    }}
                                >
                                    Voting members will nominate and confirm the
                                    Content Editor (1) &amp;Managerial Editor
                                    (1). (two semesters in a term, two-term
                                    limit)
                                </p>
                                <ol id="l40">
                                    <li data-list-text="i.">
                                        <p
                                            style={{
                                                paddingLeft: "113pt",
                                                textIndent: "-24pt",
                                            }}
                                        >
                                            The individuals hoping to take on
                                            the role must:
                                        </p>
                                        <ol id="l41">
                                            <li data-list-text={1}>
                                                <p
                                                    style={{
                                                        paddingTop: "2pt",
                                                        paddingLeft: "149pt",
                                                        textIndent: "-18pt",
                                                    }}
                                                >
                                                    Be a member for at least{" "}
                                                    <i>three </i>semesters.
                                                </p>
                                            </li>
                                            <li data-list-text={2}>
                                                <p
                                                    style={{
                                                        paddingTop: "2pt",
                                                        paddingLeft: "149pt",
                                                        textIndent: "-18pt",
                                                    }}
                                                >
                                                    Have had at least one issue
                                                    working in an organizational
                                                    role.
                                                </p>
                                            </li>
                                            <li data-list-text={3}>
                                                <p
                                                    style={{
                                                        paddingTop: "2pt",
                                                        paddingLeft: "149pt",
                                                        textIndent: "-18pt",
                                                    }}
                                                >
                                                    Have had at least one issue
                                                    working in an editorial
                                                    role.
                                                </p>
                                            </li>
                                        </ol>
                                    </li>
                                </ol>
                            </li>
                            <li data-list-text="c.">
                                <p
                                    style={{
                                        paddingTop: "2pt",
                                        paddingLeft: "77pt",
                                        textIndent: "-18pt",
                                    }}
                                >
                                    Secretary (1) will be nominated and
                                    confirmed by a simple majority of the Voting
                                    Virtù members. (two semesters in a term,
                                    two-term limit)
                                </p>
                            </li>
                            <li data-list-text="d.">
                                <p
                                    style={{
                                        paddingLeft: "77pt",
                                        textIndent: "-18pt",
                                    }}
                                >
                                    Treasurer (1) will be nominated and
                                    confirmed by a simple majority of the Voting
                                    Virtù members. (two semesters in a term,
                                    two-term limit)
                                </p>
                                <ol id="l42">
                                    <li data-list-text="i.">
                                        <p
                                            style={{
                                                paddingLeft: "113pt",
                                                textIndent: "-24pt",
                                            }}
                                        >
                                            The individuals hoping to take on
                                            the role of Secretary and Treasure
                                            must be members for at least{" "}
                                            <i>two </i>
                                            semesters.
                                        </p>
                                    </li>
                                </ol>
                            </li>
                            <li data-list-text="e.">
                                <p
                                    style={{
                                        paddingLeft: "77pt",
                                        textIndent: "-18pt",
                                    }}
                                >
                                    Associate Editor (3-4) will be nominated and
                                    confirmed by most Voting Virtù members. (two
                                    semesters in a term, two-term limit)
                                </p>
                                <ol id="l43">
                                    <li data-list-text="i.">
                                        <p
                                            style={{
                                                paddingLeft: "113pt",
                                                textIndent: "-24pt",
                                            }}
                                        >
                                            The individuals hoping to take the
                                            role must:
                                        </p>
                                        <ol id="l44">
                                            <li data-list-text={1}>
                                                <p
                                                    style={{
                                                        paddingTop: "2pt",
                                                        paddingLeft: "149pt",
                                                        textIndent: "-18pt",
                                                    }}
                                                >
                                                    Be an assistant editor for
                                                    at least <i>two </i>issues.
                                                </p>
                                            </li>
                                            <li data-list-text={2}>
                                                <p
                                                    style={{
                                                        paddingTop: "2pt",
                                                        paddingLeft: "149pt",
                                                        textIndent: "-18pt",
                                                    }}
                                                >
                                                    Exceptions for those who
                                                    are:
                                                </p>
                                                <ol id="l45">
                                                    <li data-list-text="a.">
                                                        <p
                                                            style={{
                                                                paddingTop:
                                                                    "2pt",
                                                                paddingLeft:
                                                                    "185pt",
                                                                textIndent:
                                                                    "-18pt",
                                                            }}
                                                        >
                                                            Writing Tutors.
                                                        </p>
                                                    </li>
                                                    <li data-list-text="b.">
                                                        <p
                                                            style={{
                                                                paddingTop:
                                                                    "2pt",
                                                                paddingLeft:
                                                                    "185pt",
                                                                textIndent:
                                                                    "-18pt",
                                                            }}
                                                        >
                                                            Experienced Editors
                                                            at another club.
                                                        </p>
                                                    </li>
                                                    <li data-list-text="c.">
                                                        <p
                                                            style={{
                                                                paddingTop:
                                                                    "2pt",
                                                                paddingLeft:
                                                                    "185pt",
                                                                textIndent:
                                                                    "-18pt",
                                                            }}
                                                        >
                                                            Preceptors for
                                                            Writing Intensive
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
                            <li data-list-text="f.">
                                <p
                                    style={{
                                        paddingTop: "2pt",
                                        paddingLeft: "77pt",
                                        textIndent: "-18pt",
                                    }}
                                >
                                    Assistant Editors (3-4) will be nominated
                                    and Voted on by Associate Editors, and a
                                    simple majority vote is required.
                                </p>
                            </li>
                            <li data-list-text="g.">
                                <p
                                    style={{
                                        paddingTop: "4pt",
                                        paddingLeft: "77pt",
                                        textIndent: "-18pt",
                                    }}
                                >
                                    Research &amp;Content Associates, Publicity
                                    &amp;Social Media Associates, and
                                    Technologist (1) will be nominated and
                                    confirmed by a simple majority of the Voting
                                    Virtù members.
                                </p>
                            </li>
                        </ol>
                    </li>
                    <li data-list-text="B.">
                        <h4
                            style={{
                                paddingLeft: "41pt",
                                textIndent: "-18pt",
                            }}
                        >
                            Election Process
                        </h4>
                        <ol id="l46">
                            <li data-list-text="a.">
                                <p
                                    style={{
                                        paddingTop: "2pt",
                                        paddingLeft: "77pt",
                                        textIndent: "-18pt",
                                    }}
                                >
                                    The club elections will occur in early
                                    September of each school year.
                                </p>
                                <ol id="l47">
                                    <li data-list-text="i.">
                                        <p
                                            style={{
                                                paddingTop: "2pt",
                                                paddingLeft: "113pt",
                                                textIndent: "-24pt",
                                            }}
                                        >
                                            The election process will start with
                                            introductory meetings about the
                                            positions and club.
                                        </p>
                                    </li>
                                    <li data-list-text="ii.">
                                        <p
                                            style={{
                                                paddingLeft: "113pt",
                                                textIndent: "-27pt",
                                            }}
                                        >
                                            These meetings will let people know
                                            about the positions to run for and
                                            the different responsibilities they
                                            entail during such meetings.
                                        </p>
                                    </li>
                                    <li data-list-text="iii.">
                                        <p
                                            style={{
                                                paddingLeft: "113pt",
                                                textIndent: "-31pt",
                                            }}
                                        >
                                            After these first few meetings, the
                                            board will have interested members
                                            give a talk in front of the club
                                            about why they wish to run for their
                                            position.
                                        </p>
                                    </li>
                                    <li data-list-text="iv.">
                                        <p
                                            style={{
                                                paddingLeft: "113pt",
                                                textIndent: "-29pt",
                                            }}
                                        >
                                            Later, the group will email short
                                            biographies of each nominee for each
                                            position.
                                        </p>
                                    </li>
                                </ol>
                            </li>
                            <li data-list-text="b.">
                                <p
                                    style={{
                                        paddingLeft: "77pt",
                                        textIndent: "-18pt",
                                    }}
                                >
                                    All club members will be sent a Google form
                                    to vote in early September.
                                </p>
                            </li>
                            <li data-list-text="c.">
                                <p
                                    style={{
                                        paddingTop: "2pt",
                                        paddingLeft: "77pt",
                                        textIndent: "-18pt",
                                    }}
                                >
                                    The current board will keep track of the
                                    election results and results will be
                                    announced at the next meeting.
                                </p>
                            </li>
                        </ol>
                    </li>
                    <li data-list-text="C.">
                        <h4
                            style={{
                                paddingLeft: "41pt",
                                textIndent: "-18pt",
                            }}
                        >
                            Removal
                        </h4>
                        <ol id="l48">
                            <li data-list-text="a.">
                                <p
                                    style={{
                                        paddingTop: "2pt",
                                        paddingLeft: "77pt",
                                        textIndent: "-18pt",
                                    }}
                                >
                                    All members shall have good faith attempts
                                    regarding possible removals.
                                </p>
                            </li>
                            <li data-list-text="b.">
                                <p
                                    style={{
                                        paddingTop: "2pt",
                                        paddingLeft: "77pt",
                                        textIndent: "-18pt",
                                    }}
                                >
                                    Initial meeting
                                </p>
                                <ol id="l49">
                                    <li data-list-text="i.">
                                        <p
                                            style={{
                                                paddingTop: "2pt",
                                                paddingLeft: "113pt",
                                                textIndent: "-24pt",
                                            }}
                                        >
                                            When a concern arises with one of
                                            the members, the CE and/or ME should
                                            set up an appointment with the
                                            concerned party to discuss the
                                            concerns.
                                        </p>
                                    </li>
                                </ol>
                            </li>
                            <li data-list-text="c.">
                                <p
                                    style={{
                                        paddingLeft: "77pt",
                                        textIndent: "-18pt",
                                    }}
                                >
                                    Determining appropriate measures for removal
                                </p>
                                <ol id="l50">
                                    <li data-list-text="i.">
                                        <p
                                            style={{
                                                paddingTop: "2pt",
                                                paddingLeft: "113pt",
                                                textIndent: "-24pt",
                                            }}
                                        >
                                            The Executive Board will set up an
                                            appointment to discuss appropriate
                                            measures for the member and
                                            determine whether removal is needed.
                                        </p>
                                    </li>
                                </ol>
                            </li>
                            <li data-list-text="d.">
                                <p
                                    style={{
                                        paddingLeft: "77pt",
                                        textIndent: "-18pt",
                                    }}
                                >
                                    SOC Approval
                                </p>
                                <ol id="l51">
                                    <li data-list-text="i.">
                                        <p
                                            style={{
                                                paddingTop: "2pt",
                                                paddingLeft: "113pt",
                                                textIndent: "-24pt",
                                            }}
                                        >
                                            Student organizations, their
                                            leaders, and members will review and
                                            adhere to all College policies,
                                            including the{" "}
                                            <a
                                                href="https://docs.google.com/document/d/1S3cJu0VCemFNTICrUM2s49BR14FB6gEx4BWR8hvR-fQ/edit?usp=sharing"
                                                style={{
                                                    textDecoration: "underline",
                                                }}
                                                target="_blank"
                                            >
                                                Student Organization Code of
                                                Conduct.
                                            </a>
                                        </p>
                                    </li>
                                    <li data-list-text="ii.">
                                        <p
                                            style={{
                                                paddingLeft: "113pt",
                                                textIndent: "-27pt",
                                            }}
                                        >
                                            As membership in student
                                            organizations is rarely repealed,
                                            the journal members with concerns
                                            will schedule advising appointments
                                            with a CSLE staff member and/or
                                            advisor after the initial meeting to
                                            determine appropriate measures they
                                            can take.
                                        </p>
                                    </li>
                                </ol>
                            </li>
                        </ol>
                    </li>
                    <li data-list-text="D.">
                        <h4
                            style={{
                                paddingLeft: "41pt",
                                textIndent: "-18pt",
                            }}
                        >
                            Resignation
                        </h4>
                        <ol id="l52">
                            <li data-list-text="a.">
                                <p
                                    style={{
                                        paddingTop: "2pt",
                                        paddingLeft: "77pt",
                                        textIndent: "-18pt",
                                    }}
                                >
                                    Initial meeting
                                </p>
                                <ol id="l53">
                                    <li data-list-text="i.">
                                        <p
                                            style={{
                                                paddingTop: "2pt",
                                                paddingLeft: "113pt",
                                                textIndent: "-24pt",
                                            }}
                                        >
                                            If concerns about resignation arise
                                            with a member, the CE and ME should
                                            set up an appointment with the board
                                            member to try to alleviate the
                                            potential problems causing
                                            resignation.
                                        </p>
                                    </li>
                                </ol>
                            </li>
                            <li data-list-text="b.">
                                <p
                                    style={{
                                        paddingTop: "4pt",
                                        paddingLeft: "77pt",
                                        textIndent: "-18pt",
                                    }}
                                >
                                    Process
                                </p>
                                <ol id="l54">
                                    <li data-list-text="i.">
                                        <p
                                            style={{
                                                paddingTop: "2pt",
                                                paddingLeft: "113pt",
                                                textIndent: "-24pt",
                                            }}
                                        >
                                            If the member still wishes to
                                            resign, they should contact the
                                            board immediately and give an
                                            official resignation statement.
                                        </p>
                                    </li>
                                    <li data-list-text="ii.">
                                        <p
                                            style={{
                                                paddingLeft: "113pt",
                                                textIndent: "-27pt",
                                            }}
                                        >
                                            The official resignation statement
                                            should be given at least a week
                                            prior.
                                        </p>
                                    </li>
                                </ol>
                            </li>
                            <li data-list-text="c.">
                                <p
                                    style={{
                                        paddingTop: "2pt",
                                        paddingLeft: "77pt",
                                        textIndent: "-18pt",
                                    }}
                                >
                                    Special Election Protocol
                                </p>
                                <ol id="l55">
                                    <li data-list-text="i.">
                                        <p
                                            style={{
                                                paddingTop: "2pt",
                                                paddingLeft: "113pt",
                                                textIndent: "-24pt",
                                            }}
                                        >
                                            Elections for the vacant position
                                            will be held as soon as possible,
                                            following the same nomination and
                                            voting process as regular elections
                                            listed in Article IV (B).
                                        </p>
                                    </li>
                                </ol>
                            </li>
                        </ol>
                    </li>
                </ol>
                <h3
                    style={{
                        paddingTop: "10pt",
                        paddingLeft: "5pt",
                    }}
                >
                    Article V - Advisor
                </h3>
                <ol id="l56">
                    <li data-list-text="A.">
                        <h4
                            style={{
                                paddingTop: "2pt",
                                paddingLeft: "41pt",
                                textIndent: "-18pt",
                            }}
                        >
                            The Faculty Advisor
                        </h4>
                        <ol id="l57">
                            <li data-list-text="a.">
                                <p
                                    style={{
                                        paddingTop: "2pt",
                                        paddingLeft: "77pt",
                                        textIndent: "-18pt",
                                    }}
                                >
                                    The advisor will regularly check in about
                                    the club upholding its responsibilities,
                                    which shall be done bi-weekly with the
                                    members of the Executive Board.
                                </p>
                            </li>
                            <li data-list-text="b.">
                                <p
                                    style={{
                                        paddingLeft: "77pt",
                                        textIndent: "-18pt",
                                    }}
                                >
                                    Professor Ahmed I. Samatar, the chair of the
                                    Macalester International Studies Department,
                                    will be the faculty advisor for the club.
                                </p>
                            </li>
                        </ol>
                    </li>
                    <li data-list-text="B.">
                        <h4
                            style={{
                                paddingLeft: "41pt",
                                textIndent: "-18pt",
                            }}
                        >
                            Responsibilities and Duties
                        </h4>
                        <ol id="l58">
                            <li data-list-text="a.">
                                <p
                                    style={{
                                        paddingTop: "2pt",
                                        paddingLeft: "77pt",
                                        textIndent: "-18pt",
                                    }}
                                >
                                    Advisory Role
                                </p>
                                <ol id="l59">
                                    <li data-list-text="i.">
                                        <p
                                            style={{
                                                paddingTop: "2pt",
                                                paddingLeft: "113pt",
                                                textIndent: "-24pt",
                                            }}
                                        >
                                            Contribute advice and expertise in
                                            the field/theme of internationalism.
                                        </p>
                                    </li>
                                    <li data-list-text="ii.">
                                        <p
                                            style={{
                                                paddingTop: "2pt",
                                                paddingLeft: "113pt",
                                                textIndent: "-27pt",
                                            }}
                                        >
                                            Advise journal content and
                                            publication; facilitate
                                            intercollegiate distribution of
                                            product.
                                        </p>
                                    </li>
                                    <li data-list-text="iii.">
                                        <p
                                            style={{
                                                paddingLeft: "113pt",
                                                textIndent: "-31pt",
                                            }}
                                        >
                                            Mediate the ethical considerations
                                            for the journal.
                                        </p>
                                    </li>
                                </ol>
                            </li>
                            <li data-list-text="b.">
                                <p
                                    style={{
                                        paddingTop: "2pt",
                                        paddingLeft: "77pt",
                                        textIndent: "-18pt",
                                    }}
                                >
                                    Advocacy Role
                                </p>
                                <ol id="l60">
                                    <li data-list-text="i.">
                                        <p
                                            style={{
                                                paddingTop: "2pt",
                                                paddingLeft: "113pt",
                                                textIndent: "-24pt",
                                            }}
                                        >
                                            Promote the cause of the journal;aid
                                            in representing its financial and
                                            functional needs to the Macalester
                                            Board of Trustees and general
                                            administration.
                                        </p>
                                    </li>
                                </ol>
                            </li>
                        </ol>
                    </li>
                    <li data-list-text="C.">
                        <h4
                            style={{
                                paddingLeft: "41pt",
                                textIndent: "-18pt",
                            }}
                        >
                            Selection Process:{" "}
                            <i>For Selection of All New Advisors</i>
                        </h4>
                        <ol id="l61">
                            <li data-list-text="a.">
                                <p
                                    style={{
                                        paddingTop: "2pt",
                                        paddingLeft: "77pt",
                                        textIndent: "-18pt",
                                    }}
                                >
                                    The faculty advisor must possess the
                                    following characteristics:
                                </p>
                                <ol id="l62">
                                    <li data-list-text="i.">
                                        <p
                                            style={{
                                                paddingTop: "2pt",
                                                paddingLeft: "113pt",
                                                textIndent: "-24pt",
                                            }}
                                        >
                                            Transdisciplinary academic approach;
                                        </p>
                                    </li>
                                    <li data-list-text="ii.">
                                        <p
                                            style={{
                                                paddingTop: "2pt",
                                                paddingLeft: "113pt",
                                                textIndent: "-27pt",
                                            }}
                                        >
                                            Permanent faculty status;
                                        </p>
                                    </li>
                                    <li data-list-text="iii.">
                                        <p
                                            style={{
                                                paddingTop: "2pt",
                                                paddingLeft: "113pt",
                                                textIndent: "-31pt",
                                            }}
                                        >
                                            Commitment to the journal's ethos
                                            and time and effort to dedicate to
                                            advising.
                                        </p>
                                    </li>
                                </ol>
                            </li>
                            <li data-list-text="b.">
                                <p
                                    style={{
                                        paddingLeft: "77pt",
                                        textIndent: "-18pt",
                                    }}
                                >
                                    The Board will use its discretion and
                                    collaboration to evaluate candidates along
                                    the metrics (1) and (3).
                                </p>
                            </li>
                        </ol>
                    </li>
                    <li data-list-text="D.">
                        <h4
                            style={{
                                paddingLeft: "41pt",
                                textIndent: "-18pt",
                            }}
                        >
                            Replacement Procedure
                        </h4>
                        <ol id="l63">
                            <li data-list-text="a.">
                                <p
                                    style={{
                                        paddingTop: "2pt",
                                        paddingLeft: "77pt",
                                        textIndent: "-18pt",
                                    }}
                                >
                                    The incumbent advisor may propose a
                                    successor to the board, or, lacking
                                    recommendations, a special committee of five
                                    active members will seek out and determine
                                    an advisor conducive to Virtù
                                    transdisciplinary mission and core values.
                                </p>
                            </li>
                            <li data-list-text="b.">
                                <p
                                    style={{
                                        paddingLeft: "77pt",
                                        textIndent: "-18pt",
                                    }}
                                >
                                    If Professor Ahmed I. Samatar retires
                                    shortly, there are contingency plans to
                                    court other professors as replacement
                                    advisors.
                                </p>
                            </li>
                        </ol>
                    </li>
                </ol>
                <h3
                    style={{
                        paddingTop: "4pt",
                        paddingLeft: "5pt",
                    }}
                >
                    Article VI - Meetings
                </h3>
                <ol id="l64">
                    <li data-list-text="A.">
                        <h4
                            style={{
                                paddingTop: "2pt",
                                paddingLeft: "41pt",
                                textIndent: "-18pt",
                            }}
                        >
                            Meeting Logistics
                        </h4>
                        <ol id="l65">
                            <li data-list-text="a.">
                                <p
                                    style={{
                                        paddingTop: "2pt",
                                        paddingLeft: "77pt",
                                        textIndent: "-18pt",
                                    }}
                                >
                                    Virtu will meet at least once a week.
                                </p>
                                <ol id="l66">
                                    <li data-list-text="i.">
                                        <p
                                            style={{
                                                paddingTop: "2pt",
                                                paddingLeft: "113pt",
                                                textIndent: "-24pt",
                                            }}
                                        >
                                            The meetings will be one hour long.
                                            The executive committee can decide
                                            beforehand if it needs to be longer.
                                        </p>
                                    </li>
                                </ol>
                            </li>
                            <li data-list-text="b.">
                                <p
                                    style={{
                                        paddingLeft: "77pt",
                                        textIndent: "-18pt",
                                    }}
                                >
                                    Meeting Authority
                                </p>
                                <ol id="l67">
                                    <li data-list-text="i.">
                                        <p
                                            style={{
                                                paddingTop: "2pt",
                                                paddingLeft: "113pt",
                                                textIndent: "-24pt",
                                            }}
                                        >
                                            The entire board will be responsible
                                            for directing meetings.
                                        </p>
                                    </li>
                                    <li data-list-text="ii.">
                                        <p
                                            style={{
                                                paddingTop: "2pt",
                                                paddingLeft: "113pt",
                                                textIndent: "-27pt",
                                            }}
                                        >
                                            The Content and Managerial Editor
                                            will have the bulk of the authority.
                                        </p>
                                    </li>
                                </ol>
                            </li>
                        </ol>
                    </li>
                    <li data-list-text="B.">
                        <h4
                            style={{
                                paddingTop: "2pt",
                                paddingLeft: "41pt",
                                textIndent: "-18pt",
                            }}
                        >
                            Special Meetings
                        </h4>
                        <ol id="l68">
                            <li data-list-text="a.">
                                <p
                                    style={{
                                        paddingTop: "2pt",
                                        paddingLeft: "77pt",
                                        textIndent: "-18pt",
                                    }}
                                >
                                    The Secretary will be responsible for
                                    notifying members of a special meeting.
                                </p>
                            </li>
                            <li data-list-text="b.">
                                <p
                                    style={{
                                        paddingTop: "2pt",
                                        paddingLeft: "77pt",
                                        textIndent: "-18pt",
                                    }}
                                >
                                    Members should be notified via email two
                                    plus days before.
                                </p>
                            </li>
                        </ol>
                    </li>
                    <li data-list-text="C.">
                        <h4
                            style={{
                                paddingTop: "2pt",
                                paddingLeft: "37pt",
                                textIndent: "-14pt",
                            }}
                        >
                            Quorum
                        </h4>
                    </li>
                </ol>
                <ul id="l69">
                    <li data-list-text="○">
                        <p
                            style={{
                                paddingTop: "2pt",
                                paddingLeft: "77pt",
                                textIndent: "-18pt",
                            }}
                        >
                            Once the Secretary proposes a new meeting or event,
                            members will vote on it. There is a simple majority
                            requirement with the quorum voted during the
                            meeting.
                        </p>
                    </li>
                </ul>
                <h3
                    style={{
                        paddingTop: "10pt",
                        paddingLeft: "5pt",
                    }}
                >
                    Article VII - Finances
                </h3>
                <ol id="l70">
                    <li data-list-text="A.">
                        <h4
                            style={{
                                paddingTop: "2pt",
                                paddingLeft: "41pt",
                                textIndent: "-18pt",
                            }}
                        >
                            Financial Affairs
                        </h4>
                        <ol id="l71">
                            <li data-list-text="a.">
                                <p
                                    style={{
                                        paddingTop: "2pt",
                                        paddingLeft: "77pt",
                                        textIndent: "-18pt",
                                    }}
                                >
                                    The Treasurer will be in charge of managing
                                    this organization's financial affairs. The
                                    Treasurer, Managing Editor, and Secretary
                                    will have access to the student org
                                    management system (Involve) finance portal
                                    and, therefore, will manage it.
                                </p>
                            </li>
                            <li data-list-text="b.">
                                <p
                                    style={{
                                        paddingLeft: "77pt",
                                        textIndent: "-18pt",
                                    }}
                                >
                                    The Treasurer, the Managerial Editor, and
                                    the Secretary will be responsible for
                                    funding allocations from the Financial
                                    Affairs Committee and/or making purchases on
                                    behalf of the organization.
                                </p>
                            </li>
                        </ol>
                    </li>
                    <li data-list-text="B.">
                        <h4
                            style={{
                                paddingLeft: "41pt",
                                textIndent: "-18pt",
                            }}
                        >
                            Budgeting
                        </h4>
                        <ol id="l72">
                            <li data-list-text="a.">
                                <p
                                    style={{
                                        paddingTop: "2pt",
                                        paddingLeft: "77pt",
                                        textIndent: "-18pt",
                                    }}
                                >
                                    Given that the annual budget is typically
                                    due in early March, the annual budget will
                                    be prepared by early February of each year,
                                    which will be the Treasurer and Managing
                                    Editor's responsibility;the Executive Board
                                    may also play a part if the need arises.
                                </p>
                            </li>
                            <li data-list-text="b.">
                                <p
                                    style={{
                                        paddingLeft: "77pt",
                                        textIndent: "-18pt",
                                    }}
                                >
                                    The approval process will be completed once
                                    most of the board approves the budgeting
                                    plan.
                                </p>
                            </li>
                        </ol>
                    </li>
                </ol>
                <br />
                <h3
                    style={{
                        paddingLeft: "5pt",
                    }}
                >
                    Article VIII - Amendments
                </h3>
                <ol id="l73">
                    <li data-list-text="A.">
                        <h4
                            style={{
                                paddingTop: "2pt",
                                paddingLeft: "41pt",
                                textIndent: "-18pt",
                            }}
                        >
                            Amendment Proposals
                        </h4>
                        <ol id="l74">
                            <li data-list-text="a.">
                                <p
                                    style={{
                                        paddingTop: "2pt",
                                        paddingLeft: "77pt",
                                        textIndent: "-18pt",
                                    }}
                                >
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
                        </ol>
                    </li>
                    <li data-list-text="B.">
                        <h4
                            style={{
                                paddingTop: "4pt",
                                paddingLeft: "41pt",
                                textIndent: "-18pt",
                            }}
                        >
                            Amendment Approval
                        </h4>
                        <ol id="l75">
                            <li data-list-text="a.">
                                <p
                                    style={{
                                        paddingTop: "2pt",
                                        paddingLeft: "77pt",
                                        textIndent: "-18pt",
                                    }}
                                >
                                    A 5/7th majority of votes from Board members
                                    is required to ratify an amendment. Given
                                    seven board members, a tie-in vote is not
                                    anticipated. The secretary will submit
                                    charter amendments to the SOC for approval.
                                </p>
                            </li>
                        </ol>
                    </li>
                </ol>
                <br />
                <h3
                    style={{
                        paddingLeft: "5pt",
                    }}
                >
                    Article IX - Sunset Clause
                </h3>
                <ol id="l76">
                    <li data-list-text="A.">
                        <h4
                            style={{
                                paddingTop: "2pt",
                                paddingLeft: "41pt",
                                textIndent: "-18pt",
                                textAlign: "justify",
                            }}
                        >
                            Process of Disbanding
                        </h4>
                        <ol id="l77">
                            <li data-list-text="a.">
                                <p
                                    style={{
                                        paddingTop: "2pt",
                                        paddingLeft: "77pt",
                                        textIndent: "-18pt",
                                        textAlign: "justify",
                                    }}
                                >
                                    A unanimous vote by the executive board will
                                    be needed. Following the unanimous vote by
                                    the executive board, the members will vote.
                                    A 2/3rd participant agreement is required
                                    for confirmation.
                                </p>
                            </li>
                        </ol>
                    </li>
                    <li data-list-text="B.">
                        <h4
                            style={{
                                paddingLeft: "41pt",
                                textIndent: "-18pt",
                                textAlign: "justify",
                            }}
                        >
                            Organizational Renewal
                        </h4>
                        <ol id="l78">
                            <li data-list-text="a.">
                                <p
                                    style={{
                                        paddingTop: "2pt",
                                        paddingLeft: "77pt",
                                        textIndent: "-18pt",
                                    }}
                                >
                                    Similar to other news organizations, we plan
                                    on renewing one year after our charter date.
                                    Afterward, we will renew from our last
                                    formal check-in date every three years.
                                </p>
                            </li>
                            <li data-list-text="b.">
                                <p
                                    style={{
                                        paddingLeft: "77pt",
                                        textIndent: "-18pt",
                                    }}
                                >
                                    This charter will expire in{" "}
                                    <b>March 2025</b>, at which time it may be
                                    resubmitted for renewal.
                                </p>
                            </li>
                        </ol>
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default AboutPage
