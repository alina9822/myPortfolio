import React, { useState, useEffect } from "react";

const TypingText = ({
  text,
  typingSpeed = 100,
  eraseSpeed = 50,
  delay = 1000,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let typingTimer;

    if (isTyping) {
      if (currentIndex < text.length) {
        typingTimer = setTimeout(() => {
          setDisplayedText((prev) => prev + text[currentIndex]);
          setCurrentIndex((prev) => prev + 1);
        }, typingSpeed);
      } else {
        // Finished typing, start erasing after delay
        setTimeout(() => setIsTyping(false), delay);
      }
    } else {
      if (currentIndex > 0) {
        typingTimer = setTimeout(() => {
          setDisplayedText((prev) => prev.slice(0, -1));
          setCurrentIndex((prev) => prev - 1);
        }, eraseSpeed);
      } else {
        // Finished erasing, start typing after delay
        setTimeout(() => setIsTyping(true), delay);
      }
    }

    return () => clearTimeout(typingTimer); // Cleanup on component unmount or update
  }, [isTyping, currentIndex, text, typingSpeed, eraseSpeed, delay]);

  return <span className="">{displayedText}</span>;
};

export default TypingText;
