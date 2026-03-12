
"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Page() {

  const officers = [
    { role: "President", name: "Name Here" },
    { role: "Vice President", name: "Name Here" },
    { role: "Secretary", name: "Name Here" },
    { role: "Treasurer", name: "Name Here" },
    { role: "Recruitment Chair", name: "Name Here" }
  ];

  const events = [
    { title: "Rush Interest Meeting", date: "September 5", location: "KSU Music Building" },
    { title: "Brotherhood Cookout", date: "September 8", location: "KSU Green" },
    { title: "Open Rehearsal", date: "September 12", location: "Music Building Room 101" }
  ];

  return (
    <main>

      <nav className="nav">
        <div className="nav-inner">
          <div className="brand">
            <img src="/sinfonia-crest.png" />
            <span>Nu Theta – Sinfonia</span>
          </div>

          <div className="links">
            <a href="#about">About</a>
            <a href="#officers">Officers</a>
            <a href="#events">Events</a>
            <a href="#instagram">Instagram</a>
            <a href="#rush">Rush</a>
          </div>
        </div>
      </nav>

      <section className="hero">
        <motion.img
          src="/sinfonia-crest.png"
          className="crest"
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        />

        <h1>Phi Mu Alpha Sinfonia</h1>
        <h2>Nu Theta Chapter</h2>
        <p>Kennesaw State University</p>
      </section>

      <section id="about" className="section">
        <h2>About Phi Mu Alpha Sinfonia</h2>
        <p>
          Phi Mu Alpha Sinfonia is the world's largest and oldest secret
          national fraternal society in music dedicated to the advancement of
          music in America.
        </p>
      </section>

      <section id="officers" className="section gray">
        <h2>Elected Officers</h2>
        <div className="grid">
          {officers.map((o,i)=>(
            <div key={i} className="card">
              <div className="avatar"/>
              <h3>{o.name}</h3>
              <p>{o.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="events" className="section">
        <h2>Upcoming Events</h2>
        <div className="events">
          {events.map((e,i)=>(
            <div key={i} className="event">
              <div>
                <h3>{e.title}</h3>
                <p>{e.location}</p>
              </div>
              <strong>{e.date}</strong>
            </div>
          ))}
        </div>
      </section>

      <section id="instagram" className="section gray">
        <h2>Instagram</h2>
        <p>Follow @sinfonianutheta for updates.</p>
      </section>

      <section id="rush" className="section">
        <h2>Rush Signup</h2>
        <form className="form">
          <input placeholder="Full Name"/>
          <input placeholder="Email"/>
          <input placeholder="Phone Number"/>
          <input placeholder="Major"/>
          <textarea placeholder="Musical background or interest"/>
          <button>Submit</button>
        </form>
      </section>

      <footer className="footer">
        <p>© Phi Mu Alpha Sinfonia – Nu Theta Chapter</p>
        <p>Kennesaw State University</p>
      </footer>

    </main>
  )
}
