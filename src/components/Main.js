import React from "react"
import Button from "./Button"


export default function Main() {
    return (
        <main>
            <h1 className="main--title">Gary Yau</h1>
            <p className="main--title_description">Frontend Developer</p>
            <p className="main--title_subdescription">garyyau.website</p>
            <Button />
            <h3 className="main--sub_title">About</h3>
            <p className="main--sub_text">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
            <h3 className="main--sub_title">Interests</h3>
            <p className="main--sub_text">Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
        </main>
    )
}
