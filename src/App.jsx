import React from "react"
import "./styles.css"

export default function App() {
  return (
    <main className="hero" role="main">
      <header className="nav">
        <div className="container nav-inner">
          <img src="/src/assets/logo.svg" alt="QuickResume logo" className="logo" />
          <nav aria-label="Main navigation">
            <a href="#features">Features</a>
            <a href="#templates">Templates</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section className="container hero-content">
        <div className="hero-left">
          <h1 className="hero-title">QuickResume</h1>
          <p className="hero-sub">
            Build a professional resume in minutes. Choose a template, edit content,
            and download a polished PDF tailored for hiring managers.
          </p>

          <ul className="benefits" aria-hidden>
            <li>Modern, recruiter-friendly templates</li>
            <li>Easy export to PDF</li>
            <li>ATS-friendly formatting</li>
          </ul>
        </div>

        <aside className="card hero-form" aria-labelledby="start-heading">
          <h2 id="start-heading">Get started — it&apos;s free</h2>
          <form className="form" onSubmit={(e) => e.preventDefault()}>
            <label>
              Full name
              <input name="name" type="text" placeholder="Jane Doe" required />
            </label>

            <label>
              Email address
              <input name="email" type="email" placeholder="you@domain.com" required />
            </label>

            <label className="upload">
              Upload existing resume (optional)
              <input name="resume" type="file" accept=".pdf,.doc,.docx" />
            </label>

            <button className="btn primary" type="submit">Create my resume</button>
          </form>
        </aside>
      </section>

      <footer className="container footer" id="contact">
        <small>© {new Date().getFullYear()} QuickResume — Built with care.</small>
      </footer>
    </main>
  )
}
