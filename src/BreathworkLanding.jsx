import React, { useState, useEffect } from 'react';
import BreathingTool from "./BreathingTool";

export default function BreathworkLanding() {

  const heroImg = '/hero.png';
  const gallery = [
    '/pic1.png',
    '/pic2.png',
    '/pic3.png',
    '/pic4.png'
  ];

  return (
      <div className="bg-light text-dark min-vh-100">
        <header className="bg-white shadow-sm">
          <div className="container py-4 d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center gap-3">
              <div className="rounded-circle bg-success d-flex align-items-center justify-content-center text-white fw-bold" style={{height: 40, width: 40}}>TBC</div>
              <div>
                <h1 className="h4 fw-semibold mb-0">The Breathwork Collective</h1>
                <p className="small text-muted mb-0">Guided breath sessions • Online & In-person</p>
              </div>
            </div>
            <nav className="d-none d-md-flex gap-4">
              <a href="#about" className="text-decoration-none text-dark">About</a>
              <a href="#sessions" className="text-decoration-none text-dark">Sessions</a>
              <a href="#gallery" className="text-decoration-none text-dark">Gallery</a>
              <a href="#contact" className="text-decoration-none text-dark">Contact</a>
            </nav>
          </div>
        </header>

        <main>
          <section className="position-relative">
            <img
                src={heroImg}
                alt="Breathwork"
                className="w-100"
                style={{height: '70vh', objectFit: 'cover', filter: 'brightness(75%)'}}
            />
            <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
              <div className="text-center text-white p-4" style={{maxWidth: 600}}>
                <h2 className="fw-bold display-5">Breathe to Calm • Breathe to Be</h2>
                <p className="mt-3 fs-5">Simple breath practices, rooted in tradition and science, to help you reduce stress, sleep better, and feel energised.</p>
                <div className="mt-4 d-flex gap-2 justify-content-center">
                  <a href="#sessions" className="btn btn-light text-success fw-bold">Join a Session</a>
                  <a href="#breath" className="btn btn-outline-light text-white">Try a 5-min Breath</a>
                </div>
              </div>
            </div>
          </section>

          <section id="about" className="container py-5">
            <div className="row align-items-center g-4">
              <div className="col-md-6">
                <h3 className="h4 fw-semibold">What is Breathwork?</h3>
                <p className="mt-3 text-muted">Breathwork describes a variety of breathing practices that influence your
                  nervous system. Our sessions combine guided diaphragmatic breathing, gentle movement and mindful pauses
                  to help you regulate stress and boost clarity.
                </p>
                <ul className="mt-4 list-unstyled">
                  <li>• Better sleep & recovery</li>
                  <li>• Improved focus & mood</li>
                  <li>• Reduced anxiety and tension</li>
                </ul>
              </div>
              <div className="col-md-6">
                <div className="bg-white rounded shadow-sm p-3">
                  <h4 className="fw-semibold">Daily Practices</h4>
                  <ol className="mt-2 ps-3 text-muted">
                    <li>Morning: 5–10 minutes of gentle diaphragmatic breathing</li>
                    <li>Afternoon: 5-minute reset (box breathing)</li>
                    <li>Evening: 10–15 minutes mindful breath before sleep</li>
                  </ol>
                </div>
              </div>
            </div>
            {/* Natalia Bio Section */}
            <div className="row align-items-center mt-5">
              <div className="col-md-4 text-center">
                <img
                    src="/natalia.png"
                    alt="Natalia"
                    className="img-fluid rounded-circle shadow-sm"
                    style={{maxWidth: '200px', height: 'auto'}}
                />
              </div>
              <div className="col-md-8">
                <h4 className="fw-semibold">Meet Natalia</h4>
                <p className="text-muted">
                  Natalia Lalioti is a certified breathwork practitioner with over 5 years of experience helping individuals unlock
                  their full potential through mindful breathing techniques. Passionate about holistic wellness, she combines
                  science and tradition to guide transformative breath sessions. When not teaching, Natalia enjoys hiking and
                  practicing yoga.
                </p>
              </div>
            </div>
          </section>

          <section id="breath" className="bg-white py-5">
            <div className="container text-center">
              <h3 className="h5 fw-semibold">Mini Breathwork Timer</h3>
              <p className="text-muted mt-2">Follow the on-screen phase: inhale • hold • exhale • rest</p>
              <BreathingTool />
              <p className="small text-muted mt-3">Tip: Breathe gently — never force your breath. Stop if you feel dizzy.</p>
            </div>
          </section>

          <section id="sessions" className="container py-5">
            <h3 className="h4 fw-semibold">Sessions & Pricing</h3>
            <div className="mt-4 row g-4">
              <div className="col-md-4">
                <div className="p-3 bg-white rounded shadow-sm">
                  <h4 className="fw-semibold">Weekly Group</h4>
                  <p className="mt-2 text-muted">60-min guided session • Online</p>
                  <p className="mt-3 fw-bold">€12 / session</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="p-3 bg-white rounded shadow-sm">
                  <h4 className="fw-semibold">Monthly Pass</h4>
                  <p className="mt-2 text-muted">Unlimited drop-ins for one month</p>
                  <p className="mt-3 fw-bold">€39 / month</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="p-3 bg-white rounded shadow-sm">
                  <h4 className="fw-semibold">Private Session</h4>
                  <p className="mt-2 text-muted">1:1 tailored breathwork</p>
                  <p className="mt-3 fw-bold">€60 / session</p>
                </div>
              </div>
            </div>
          </section>

          <section id="gallery" className="bg-light py-5">
            <div className="container">
              <h3 className="h4 fw-semibold">Gallery</h3>
              <div className="mt-4 row g-3">
                {gallery.map((src, i) => (
                    <div className="col-sm-6 col-md-3" key={i}>
                      <img src={src} alt={`breath-${i}`} className="w-100 rounded" style={{height: '176px', objectFit: 'cover'}} />
                    </div>
                ))}
              </div>
            </div>
          </section>

          <section id="contact" className="container py-5">
            <h3 className="h4 fw-semibold">Contact & Newsletter</h3>
            <p className="text-muted mt-2">Sign up for free tips and weekly breath practices.</p>
            <form className="mt-4 row g-2">
              <div className="col-sm-8">
                <input aria-label="email" placeholder="Your email" className="form-control" />
              </div>
              <div className="col-sm-4">
                <button className="btn btn-success w-100">Subscribe</button>
              </div>
            </form>
          </section>
        </main>

        <footer className="bg-white border-top mt-5">
          <div className="container py-4 text-muted small">2025 © The Breathwork Collective • Built with love &hearts; by <a href="https://www.linkedin.com/company/quantoslabs">Quantos Labs</a></div>
        </footer>
      </div>
  );
}
