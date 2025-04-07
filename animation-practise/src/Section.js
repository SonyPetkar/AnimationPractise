import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const Section = ({ title, content, image }) => {
  const [inView, setInView] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      className="section"
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <h1>{title}</h1>
      <p>{content}</p>
      <img src={image} alt={title} />
    </motion.div>
  );
};

export default Section;
