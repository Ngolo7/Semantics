import { useState } from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="navigator">
          <div className="logo-container">
            <div className="logo-text">Cristiano7</div>
          </div>
        </nav>
      </header>
      <main className="main">
        <section id="home" className="about-me">
          <h1 className="heading1">Welcome!!</h1>
          <p className="paragraph1">
            Hi, I am Cristiano Ronaldo dos Santos Aveiro. I am a professional
            soccer player. I am considered one of the greatest footballers of
            all time. I have won five Ballon d'Or awards and four European
            Golden Shoes, both of which are records for a European player. I
            have won 32 trophies in my career, including seven league titles,
            five UEFA Champions Leagues, one UEFA European Championship, and one
            UEFA Nations League. I have scored over 800 career goals, and I am
            the all-time leading goalscorer for both Portugal and Real Madrid.
          </p>
        </section>
        <section id="about" className="experience">
          <h1 className="heading2"> Achievements</h1>
          <div className="article-container">
            <article>
              <h3>Club</h3>
              <p>Achieved everything</p>
            </article>
            <article>
              <h3>International </h3>
              <p>EUEFA Euro & Nationss league</p>
            </article>
            <article>
              <h3>Individual</h3>
              <p>Everythings</p>
            </article>
          </div>
        </section>
      </main>
      <footer className="footer">
        <nav className="foot-navigator">
          <div className="nav-links-container">
            <ul className="nav_links">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About </a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
            </ul>
          </div>
        </nav>
        <p className="paragraph2">
          Copyright &#169; 2023 cr7. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
