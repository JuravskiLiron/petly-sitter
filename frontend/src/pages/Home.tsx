// src/pages/Home.tsx
import { Link } from "react-router-dom";
import "../styles/Home.css";
import heroImg from "../assets/hero-pet.png"; // <— импортируем как модуль

export default function Home() {
  return (
      <div className="home">
        {/* Hero */}
        <section className="hero">
          <div className="hero__bg" aria-hidden></div>
          <div className="container hero__inner">
            <div className="hero__text">
            <span className="badge">
              {PawIcon()} Trusted by pet owners
            </span>
              <h1 className="hero__title">
                Find a sitter your <span className="accent">best friend</span> will love
              </h1>
              <p className="hero__subtitle">
                Safe, caring, and verified sitters for dogs, cats, and more. Book in minutes, chat instantly, and relax while we handle the rest.
              </p>
              <div className="hero__cta">
                <Link to="/find-sitters" className="btn btn--primary">Find a Sitter</Link>
                <Link to="/how-it-works" className="btn btn--ghost">How it works</Link>
              </div>
              <div className="stats">
                <div className="stat"><span className="stat__k">2,400+</span><span className="stat__l">Verified sitters</span></div>
                <div className="stat"><span className="stat__k">18k</span><span className="stat__l">5★ reviews</span></div>
                <div className="stat"><span className="stat__k">120</span><span className="stat__l">Cities covered</span></div>
              </div>
            </div>

            <div className="hero__media">
              <div className="media-card">
                  <img src={heroImg} alt="Happy dog with sitter" className="media-card__img" />
                  <div className="media-hints">
                  <div className="hint">
                    {ShieldIcon()}<p><strong>Insurance</strong><br/><span>Covered bookings</span></p>
                  </div>
                  <div className="hint">
                    {ChatIcon()}<p><strong>Instant chat</strong><br/><span>Connect right away</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Sitters */}
        <section className="section">
          <div className="container section__header">
            <div>
              <h2 className="section__title">Popular Sitters</h2>
              <p className="section__subtitle">Hand‑picked pros near you.</p>
            </div>
            <Link to="/find-sitters" className="link">See all sitters →</Link>
          </div>
          <div className="container grid grid--cards">
            <SitterCard id={1} name="John Doe" rating={4.9} reviews={120} price={35} img="/assets/sitter1.jpg" tags={["Dogs","Cats"]}/>
            <SitterCard id={2} name="Jane Smith" rating={4.8} reviews={98} price={32} img="/assets/sitter2.jpg" tags={["Puppies","Overnight"]}/>
            <SitterCard id={3} name="Alex Kim" rating={5.0} reviews={76} price={40} img="/assets/sitter3.jpg" tags={["Senior pets","Medication"]}/>
          </div>
        </section>

        {/* Reviews */}
        <section className="section section--soft">
          <div className="container">
            <h2 className="section__title section__title--center">What Pet Owners Say</h2>
            <div className="grid grid--reviews">
              <Testimonial quote="Best service ever! My dog loved it!" author="Emily R." />
              <Testimonial quote="Reliable and friendly sitters. Highly recommend." author="Mark L." />
              <Testimonial quote="Booking was so easy and the updates were great." author="Sofia G." />
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="section">
          <div className="container">
            <h2 className="section__title">Why Choose Us</h2>
            <div className="grid grid--features">
              <Feature icon={PawIcon()} title="Experienced Sitters" desc="All sitters are verified and experienced in pet care." />
              <Feature icon={MapPinIcon()} title="Find Local Sitters" desc="Search by location and availability to match your schedule." />
              <Feature icon={ChatIcon()} title="Easy Communication" desc="Chat directly with sitters to discuss details and updates." />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section">
          <div className="container cta">
            <div>
              <h3 className="cta__title">Ready to book a sitter?</h3>
              <p className="cta__subtitle">Create a free request and start chatting with trusted sitters today.</p>
            </div>
            <Link to="/find-sitters" className="btn btn--light">Get started</Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="container footer__inner">
            <nav className="footer__nav">
              <Link to="/about">About Us</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/terms">Terms</Link>
              <Link to="/privacy">Privacy</Link>
            </nav>
            <p className="footer__copy">© 2025 Petly Sitter. All rights reserved.</p>
          </div>
        </footer>
      </div>
  );
}

function SitterCard({ id, name, rating, reviews, price, img, tags }: { id: number; name: string; rating: number; reviews: number; price: number; img: string; tags: string[] }) {
  return (
      <article className="card">
        <div className="card__media">
          <img src={img} alt={name} />
        </div>
        <div className="card__body">
          <header className="card__head">
            <div>
              <h3 className="card__title">{name}</h3>
              <div className="rating">
              <span className="rating__stars" aria-label={`${rating} out of 5`}>
                {Stars(rating)}
              </span>
                <span className="rating__num">{rating.toFixed(1)}</span>
                <span className="rating__reviews">({reviews})</span>
              </div>
            </div>
            <div className="price">from <strong>${price}</strong>/night</div>
          </header>
          <ul className="tags">
            {tags.map((t: string) => (<li key={t} className="tag">{t}</li>))}
          </ul>
          <div className="card__actions">
            <Link to={`/sitter/${id}`} className="btn btn--small btn--primary">View Profile</Link>
            <Link to={`/book/${id}`} className="btn btn--small btn--ghost">Book</Link>
          </div>
        </div>
      </article>
  );
}

function Testimonial({ quote, author }: { quote: string; author: string }) {
  return (
      <figure className="review">
        <div className="review__quote">{QuoteIcon()}</div>
        <blockquote>“{quote}”</blockquote>
        <figcaption>— {author}</figcaption>
      </figure>
  );
}

function Feature({ icon, title, desc }: { icon: JSX.Element; title: string; desc: string }) {
  return (
      <div className="feature">
        <div className="feature__icon">{icon}</div>
        <h3 className="feature__title">{title}</h3>
        <p className="feature__desc">{desc}</p>
      </div>
  );
}

// Inline SVG icons (no external libs)
function PawIcon() {
  return (
      <svg viewBox="0 0 24 24" className="i i--paw" aria-hidden>
        <path d="M8.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm12 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM10 5.5A2.5 2.5 0 1 1 10 0a2.5 2.5 0 0 1 0 5.5Zm8 0A2.5 2.5 0 1 1 18 0a2.5 2.5 0 0 1 0 5.5ZM12 12c-3.5 0-6 2.1-6 4.3 0 2 1.8 3.7 4.3 3.7 1.3 0 2.4-.5 3.7-.5s2.4.5 3.7.5c2.5 0 4.3-1.7 4.3-3.7 0-2.2-2.5-4.3-6-4.3-1.5 0-2.5.6-2.5.6S13.5 12 12 12Z"/>
      </svg>
  );
}

function MapPinIcon() {
  return (
      <svg viewBox="0 0 24 24" className="i" aria-hidden>
        <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"/>
      </svg>
  );
}

function ChatIcon() {
  return (
      <svg viewBox="0 0 24 24" className="i" aria-hidden>
        <path d="M4 3h16a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9.4L4 21v-3H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"/>
      </svg>
  );
}

function ShieldIcon() {
  return (
      <svg viewBox="0 0 24 24" className="i" aria-hidden>
        <path d="M12 2 4 5v6c0 5 3.4 9.6 8 11 4.6-1.4 8-6 8-11V5l-8-3Z"/>
      </svg>
  );
}

function QuoteIcon() {
  return (
      <svg viewBox="0 0 24 24" className="i i--quote" aria-hidden>
        <path d="M9 6H4v7h7V6H9Zm11 0h-5v7h7V8a2 2 0 0 0-2-2Z"/>
      </svg>
  );
}

function Stars(rating: number) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  const total = 5;
  const stars = [];
  for (let i = 0; i < total; i++) {
    if (i < full) stars.push(<span key={i}>★</span>);
    else if (i === full && half) stars.push(<span key={i}>☆</span>);
    else stars.push(<span key={i}>☆</span>);
  }
  return <>{stars}</>;
}


