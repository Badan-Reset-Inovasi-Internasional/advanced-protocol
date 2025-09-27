import React from "react";

function Hero() {
  const handleScroll = () => {
    const memberSection = document.getElementById("member");
    if (memberSection) {
      memberSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-inner">
        <div className="hero-content">
          <h1>Advanced Network Protocol</h1>
        </div>
        <div className="hero-button">
          <p>
            Our research focuses on the design and optimization of advanced
            network protocols that ensure efficient, scalable, and secure
            communication. By addressing challenges in latency, reliability, and
            adaptability, we aim to build the foundation for next-generation
            networking technologies.
          </p>
          <button onClick={handleScroll} className="btn">
            Our Members
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
