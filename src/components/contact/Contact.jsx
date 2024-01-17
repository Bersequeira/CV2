import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import "./contact.scss";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const [err, setErr] = useState(false);
  const [success, setSuccess] = useState(false);

  const ref = useRef();
  const fomrRef = useRef();

  const isInview = useInView(ref, { margin: "-100px" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kdy1men",
        "template_ggk8k6s",
        fomrRef.current,
        "c5FOAHSPrvnMIIUw4"
      )
      .then(
        (result) => {
          setSuccess(true);
        },
        (error) => {
          setErr(true);
          // console.log(error.text);
        }
      );
  };

  return (
    <motion.div
      ref={ref}
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h2>Let´s Work Together</motion.h2>
        <motion.div className="item" variants={variants}>
          <h3>E-Mail</h3>
          <span>
            <a
              href="mailto:bersuarezsequeira@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Ber@Sequeira
            </a>
          </span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h3>Address</h3>
          <span>Managua - Nicaragua</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h3>Phone</h3>
          <span>(+505) 78636076</span>
        </motion.div>
      </motion.div>

      <div className="formContainer">
        <motion.div
          className="phoneSvg"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="300px"
            height="300px"
            fill="white"
            className="bi bi-cloud-arrow-down"
          >
            <motion.path
              strokeWidth={0.2}
              initial={{ pathLength: 0 }}
              animate={isInview && { pathLength: 1 }}
              transition={{ duration: 3 }}
              stroke="orange"
              d="M25,2C12.318,2,2,12.318,2,25c0,3.96,1.023,7.854,2.963,11.29L2.037,46.73c-0.096,0.343-0.003,0.711,0.245,0.966 C2.473,47.893,2.733,48,3,48c0.08,0,0.161-0.01,0.24-0.029l10.896-2.699C17.463,47.058,21.21,48,25,48c12.682,0,23-10.318,23-23 S37.682,2,25,2z M36.57,33.116c-0.492,1.362-2.852,2.605-3.986,2.772c-1.018,0.149-2.306,0.213-3.72-0.231 c-0.857-0.27-1.957-0.628-3.366-1.229c-5.923-2.526-9.791-8.415-10.087-8.804C15.116,25.235,13,22.463,13,19.594 s1.525-4.28,2.067-4.864c0.542-0.584,1.181-0.73,1.575-0.73s0.787,0.005,1.132,0.021c0.363,0.018,0.85-0.137,1.329,1.001 c0.492,1.168,1.673,4.037,1.819,4.33c0.148,0.292,0.246,0.633,0.05,1.022c-0.196,0.389-0.294,0.632-0.59,0.973 s-0.62,0.76-0.886,1.022c-0.296,0.291-0.603,0.606-0.259,1.19c0.344,0.584,1.529,2.493,3.285,4.039 c2.255,1.986,4.158,2.602,4.748,2.894c0.59,0.292,0.935,0.243,1.279-0.146c0.344-0.39,1.476-1.703,1.869-2.286 s0.787-0.487,1.329-0.292c0.542,0.194,3.445,1.604,4.035,1.896c0.59,0.292,0.984,0.438,1.132,0.681 C37.062,30.587,37.062,31.755,36.57,33.116z"
            />
          </svg>
        </motion.div>

        <motion.form
          onSubmit={sendEmail}
          ref={fomrRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
        >
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea
            cols="8"
            rows="8"
            name="message"
            placeholder="Message"
            required
          ></textarea>
          <button>SEND</button>
          {err && "Error"}
          {success && "Success"}
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
