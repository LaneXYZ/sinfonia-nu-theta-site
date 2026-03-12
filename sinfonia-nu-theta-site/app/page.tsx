"use client";

export default function Page() {
  return (
    <main style={{ padding: "40px", fontFamily: "serif" }}>
      <h1>Phi Mu Alpha Sinfonia</h1>
      <h2>Nu Theta Chapter</h2>
      <p>Kennesaw State University</p>

      <p>
        Welcome to the official website of the Nu Theta Chapter of
        Phi Mu Alpha Sinfonia, the world's oldest and largest
        national music fraternity.
      </p>

      <h3>Follow Us</h3>
      <a href="https://instagram.com/sinfonianutheta">
        @sinfonianutheta
      </a>

      <hr style={{ margin: "40px 0" }} />

      <section>
        <h2>Rush Signup</h2>

        <form style={{ display: "grid", gap: "10px", maxWidth: "400px" }}>
          <input placeholder="Full Name" />
          <input type="email" placeholder="Email" />
          <input placeholder="Phone Number" />
          <input placeholder="Major" />
          <textarea placeholder="Tell us about your musical background" />
          <button>Submit</button>
        </form>
      </section>

      <footer style={{ marginTop: "60px" }}>
        <p>
          © {new Date().getFullYear()} Phi Mu Alpha Sinfonia – Nu Theta Chapter
        </p>
        <p>Kennesaw State University</p>
      </footer>
    </main>
  );
}
