import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer-rpg">
      <div className="footer-content">
        <p>
          © {new Date().getFullYear()} - Handcrafted by
          <a
            href="https://leogomesdev.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            -Leo Gomes Developer
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
