import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';

function Home() {
  return (
    <div className="page">
      <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/contact">Kontakt</Link></li>
          </ul>
        </nav>
      </header>
      <section className="hero">
        <div className="hero-content">
          <h1>Witaj w naszej pizzerii!</h1>
          <p>Smaczne i świeże pizze czekają na Ciebie.</p>
          <Link to="/menu" className="btn">Zobacz menu</Link>
        </div>
      </section>
      <footer>
        <p>&copy; 2023 Pizzeria. Wszelkie prawa zastrzeżone.</p>
      </footer>
    </div>
  );
}

function Menu() {
  return (
    <div className="page">
      <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/contact">Kontakt</Link></li>
          </ul>
        </nav>
      </header>
      <section className="menu-section">
        <h1>Menu</h1>
        {/* Tutaj możesz dodać kod dotyczący wyświetlania menu */}
      </section>
      <footer>
        <p>&copy; 2023 Pizzeria. Wszelkie prawa zastrzeżone.</p>
      </footer>
    </div>
  );
}

function Contact() {
  return (
    <div className="page">
      <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/contact">Kontakt</Link></li>
          </ul>
        </nav>
      </header>
      <section className="contact-section">
        <h1>Kontakt</h1>
        {/* Tutaj możesz dodać kod dotyczący wyświetlania informacji kontaktowych */}
      </section>
      <footer>
        <p>&copy; 2023 Pizzeria. Wszelkie prawa zastrzeżone.</p>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/menu" component={Menu} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
