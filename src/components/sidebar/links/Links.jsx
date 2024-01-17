import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = () => {
  const items = ["Home", "Services", "Portfolio", "Contact"];

  return (
    <motion.div className="links" variants={variants}>
      {items.map((el) => (
        <motion.a href={`#${el}`} key={el} variants={itemVariants}>
          {el}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
