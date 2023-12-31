import React, { useState, useEffect } from 'react';
import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  const [text, setText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const textToType = "When I code, I code with fun. so, I never get bored.";
    let currentIndex = 0;

    const typeText = () => {
      setText(textToType.slice(0, currentIndex));
      currentIndex++;

      if (currentIndex <= textToType.length) {
        setTimeout(typeText, 230); // Adjust typing speed here (in milliseconds)
      } else {
        // Typing finished, wait for 10 seconds before starting again
        setTimeout(() => {
          currentIndex = 0;
          typeText();
        }, 10000); // Adjust the delay (in milliseconds) before starting again
      }
    };

    typeText();
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prevCursorVisible) => !prevCursorVisible);
    }, 500); // Adjust cursor blink speed here (in milliseconds)

    return () => {
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">In the name of Allah,</span> the Most Gracious, the Most Merciful.{" "}
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[65px] text-[52px] text-white ss:leading-[80.8px] leading-[75px]">
            {text}
            {cursorVisible && <span className="text-gradient">|</span>}
          </h1>
        </div>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          "Greetings! This is Nafizul Islam (Noyon), and I am a junior Software Engineer from Dhaka, Bangladesh. I specialize in HTML, CSS, JavaScript, ReactJs, NodeJs, PHP, and MySQL Database aiming to develop cutting-edge, user-friendly web solutions that drive business growth. I stay up-to-date with the latest web technologies and strive to deliver exceptional user experiences. Let's collaborate to push the boundaries of web development and create innovative solutions that make a lasting impact."
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt="billing" className="w-[85%] h-[80%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
