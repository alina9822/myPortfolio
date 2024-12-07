import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ScrollSpy = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");
    const options = { threshold: 0.7 }; // Trigger when 70% of the section is visible

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;

          // Update URL without reloading
          navigate(`#${sectionId}`, { replace: true });

          // Highlight active link
          navLinks.forEach((link) => {
            link.classList.remove("text-stone-500", "font-bold", "underline");
            if (link.getAttribute("href") === `#${sectionId}`) {
              link.classList.add("text-stone-500", "font-bold","underline");
            }
          });
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect(); // Cleanup observer
  }, [navigate]);

  return null;
};

export default ScrollSpy;
