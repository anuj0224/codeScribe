import React from "react";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <>
      <div class="wave-container wave">
        <p>
          © {year}, Developed & Designed with ❤️ by{" "}
          <a
            className="footer_heart"
            target="_target"
            href="https://react-portfolio-lake-chi.vercel.app/"
          >
            Anuj Mourya
          </a>
        </p>
      </div>
    </>
  );
}

export default Footer;
