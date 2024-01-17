import { motion } from "framer-motion";
import "./hero.scss";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  const items = [
    {
      id: 1,
      href: "Portfolio",
      text: "View Projects",
    },
    {
      id: 2,
      href: "Contact",
      text: "Contact Me",
    },
  ];

  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>BerSqueira</motion.h2>
          <motion.h1 variants={textVariants}>
            Web Developer and UI Desingner
          </motion.h1>

          <motion.div variants={textVariants} className="contactBtn">
            {items.map((el) => (
              <a href={`#${el.href}`} key={el.id}>
                {el.text}
              </a>
            ))}
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="scroll.png"
            alt="png"
          />
        </motion.div>
        <div className="imageContainer">
          <img src="hero.png" alt="png" />
        </div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Writer Content for BerSequeira
      </motion.div>
    </div>
  );
};

export default Hero;
