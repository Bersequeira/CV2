import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInview = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      //animate="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow <br />
          and move forward
        </p>
        <hr />
      </motion.div>

      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="people.webp" alt="webp" />
          <h2>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </h2>
        </div>
        <div className="title">
          <h2>
            <motion.b whileHover={{ color: "orange" }}>For Your </motion.b>
            Bussines.
          </h2>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>

      <motion.div className="listContainer" variants={variants}>
        <motion.div className="box">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="white"
            className="svg1"
          >
            <path d="M20,3H4C2.897,3,2,3.897,2,5v14c0,1.103,0.897,2,2,2h16c1.103,0,2-0.897,2-2V5C22,3.897,21.103,3,20,3z M4,19V7h16 l0.002,12H4z" />
            <path d="M9.293 9.293L5.586 13 9.293 16.707 10.707 15.293 8.414 13 10.707 10.707zM14.707 9.293L13.293 10.707 15.586 13 13.293 15.293 14.707 16.707 18.414 13z" />
          </svg>

          <h2> Developer </h2>
          <p>
            I develop sites and applications for Web platforms. I help you build
            your project from start to finish.
          </p>
          {/*  <button>Go!!</button> */}
        </motion.div>
        <motion.div className="box">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="white"
          >
            <path d="M20,3H7C5.897,3,5,3.897,5,5v2H4C2.897,7,2,7.897,2,9v10c0,1.103,0.897,2,2,2h6c1.103,0,2-0.897,2-2h8c1.103,0,2-0.897,2-2 V5C22,3.897,21.103,3,20,3z M6,9h4l-0.003,9H4V9H6z M12,17V9c0-1.103-0.897-2-2-2H7V5h11v12H12z" />
          </svg>

          <h2>Web Design </h2>
          <p>
            I prototype and mock up your static designs and turn them into
            amazing responsive, optimal, and accessible websites and web
            applications
          </p>
          {/*  <button>Go!!</button> */}
        </motion.div>
        <motion.div className="box">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="white"
          >
            <path d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z" />
            <path d="M11.412,8.586C11.791,8.966,12,9.468,12,10h2c0-1.065-0.416-2.069-1.174-2.828c-1.514-1.512-4.139-1.512-5.652,0 l1.412,1.416C9.346,7.83,10.656,7.832,11.412,8.586z" />
          </svg>
          <h2>SEO</h2>
          <p>
            Search Engine Optimization, I optimize your web sites and web
            applications to improve your position in search engines organically.
          </p>
          {/*  <button>Go!!</button> */}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
