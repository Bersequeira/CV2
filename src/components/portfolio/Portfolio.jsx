import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import "./portfolio.scss";

const items = [
  {
    id: 1,
    title: "REACT",
    img: "https://cdn.donmai.us/sample/f4/4d/__original_drawn_by_soolee040995__sample-f44dab531ae3339313f06bbb729993f2.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident at delectus adipisci itaque praesentium blanditiis, ipsa, dolore molestias molestiae eius aliquid incidunt sequi hic. Corrupti blanditiis esse vel ratione neque.",
  },
  {
    id: 2,
    title: "CSS",
    img: "https://cdn.donmai.us/sample/9c/79/__escape_from_tarkov_drawn_by_fukufaku__sample-9c791797928a966e6a9fe3afe3380a5f.jpg",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident at delectus adipisci itaque praesentium blanditiis, ipsa, dolore molestias molestiae eius aliquid incidunt sequi hic. Corrupti blanditiis esse vel ratione neque.",
  },
  {
    id: 3,
    title: "JAVASCRIPT",
    img: "https://cdn.donmai.us/sample/a1/8c/__original_drawn_by_gaanc_23_tomosuge__sample-a18cf37f232a99786a9106a8b3c7732e.jpg",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident at delectus adipisci itaque praesentium blanditiis, ipsa, dolore molestias molestiae eius aliquid incidunt sequi hic. Corrupti blanditiis esse vel ratione neque.",
  },
  {
    id: 4,
    title: "NODEJS",
    img: "https://cdn.donmai.us/sample/ee/c1/__original_drawn_by_kensight328__sample-eec1037c4f1d854fdce7bfb3bc6e8bbf.jpg",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident at delectus adipisci itaque praesentium blanditiis, ipsa, dolore molestias molestiae eius aliquid incidunt sequi hic. Corrupti blanditiis esse vel ratione neque.",
  },
];

const Single = ({ el }) => {
  let { title, img, desc } = el;

  let ref = useRef();
  let { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={img} alt="jpg" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{title}</h2>
            <p>{desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  let ref = useRef();

  let { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  let scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h2>Feature Works</h2>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>

      {items.map((el) => (
        <Single el={el} key={el.id} />
      ))}
    </div>
  );
};

export default Portfolio;
