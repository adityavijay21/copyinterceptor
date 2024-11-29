import React from 'react';
import CopyTextInterceptor from './CopyTextInterceptor';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title">🔒 Secure Content App</h1>
        <p className="app-subtitle">
          Protect your content with advanced copy protection.
        </p>
      </header>

      <main className="app-content">
        <section className="card-section">
          <div className="card">
            <h2>Protected Content</h2>
            <p className="protected-text">
              This content is protected. Any attempt to copy this text will result in 
              a custom message being copied instead. Try it out!
            </p>
          </div>

          <div className="card">
            <h2>How It Works</h2>
            <ul className="info-list">
              <li>
                Copy attempts are intercepted and replaced with a custom message.
              </li>
              <li>
                This ensures your content remains secure and properly attributed.
              </li>
              <li>
                Works dynamically to safeguard all text on the page.
              </li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="app-footer">
        <p>&copy; 2024 Secure Content App. All rights reserved.</p>
      </footer>

      <CopyTextInterceptor />
    </div>
  );
};

export default App;
