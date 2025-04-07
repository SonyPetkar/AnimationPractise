import React from 'react';
import './style.css';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function AmbitioScrollCards() {
  const { scrollY } = useScroll();

  // Animated gradient background
  const bgColor = useTransform(
    scrollY,
    [0, 500, 900, 1300, 1700, 2100],
    [
      '#ffffff',
      'radial-gradient(circle at top left, #ff6ec4, #7873f5)',
      'linear-gradient(to bottom, #43cea2, #185a9d)',
      'linear-gradient(to bottom, #ff9a9e, #fad0c4)',
      'linear-gradient(to bottom, #a1c4fd, #c2e9fb)',
      'linear-gradient(to bottom, #fddb92, #d1fdff)'
    ]
  );

  // Scale animations for each card
  const scale1 = useTransform(scrollY, [500, 900], [1, 0.8]);
  const scale2 = useTransform(scrollY, [900, 1300], [1, 0.8]);
  const scale3 = useTransform(scrollY, [1300, 1700], [1, 0.8]);
  const scale4 = useTransform(scrollY, [1700, 2100], [1, 0.8]);
  const scale5 = useTransform(scrollY, [2100, 2500], [1, 0.8]);

  const getScale = (index) => {
    return [scale1, scale2, scale3, scale4, scale5][index] || 1;
  };

  // Rotation animations for each card
  const rotate1 = useTransform(scrollY, [500, 900], [0, 5]);
  const rotate2 = useTransform(scrollY, [900, 1300], [0, 5]);
  const rotate3 = useTransform(scrollY, [1300, 1700], [0, 5]);
  const rotate4 = useTransform(scrollY, [1700, 2100], [0, 5]);
  const rotate5 = useTransform(scrollY, [2100, 2500], [0, 5]);

  const getRotate = (index) => {
    return [rotate1, rotate2, rotate3, rotate4, rotate5][index] || 0;
  };

  // Shape parallax animation transforms
  const shapeX1 = useTransform(scrollY, [0, 1000], [0, -50]);
  const shapeY1 = useTransform(scrollY, [0, 1000], [0, 50]);
  const shapeY2 = useTransform(scrollY, [0, 1000], [0, -30]);
  const shapeX2 = useTransform(scrollY, [0, 1000], [0, 30]);

  const cards = [
    {
      id: 1,
      heading: 'We let our numbers do the talking',
      subheading: 'Our elite members love us! - Can bet you will too!',
      stats: [
        { number: '4.96', label: 'Google Rating' },
        { number: '98.20%', label: 'got into their dream school' },
        { number: '5000+', label: 'students guided' }
      ]
    },
    {
      id: 2,
      heading: 'Success stories that inspire',
      subheading: 'Real results from real students around the world.',
      stats: [
        { number: '350+', label: 'Top Admits' },
        { number: '120+', label: 'Universities covered' },
        { number: '95%', label: 'Student satisfaction' }
      ]
    },
    {
      id: 3,
      heading: 'Our global presence',
      subheading: 'We guide students from every corner of the world.',
      stats: [
        { number: '25+', label: 'Countries served' },
        { number: '100+', label: 'Global mentors' },
        { number: '24/7', label: 'Support availability' }
      ]
    },
    {
      id: 4,
      heading: 'Achieving excellence',
      subheading: 'Breaking boundaries with academic success.',
      stats: [
        { number: '800+', label: 'Ivy League admits' },
        { number: '95%', label: 'Scholarships earned' },
        { number: '50+', label: 'Global partnerships' }
      ]
    },
    {
      id: 5,
      heading: 'Empowering futures',
      subheading: 'Transforming lives through expert guidance.',
      stats: [
        { number: '10,000+', label: 'Career paths shaped' },
        { number: '99%', label: 'Visa success rate' },
        { number: '4.9/5', label: 'Mentor ratings' }
      ]
    }
  ];

  return (
    <div style={{ position: 'relative' }}>
      {/* Animated gradient background */}
      <motion.div
        style={{
          width: '100%',
          height: '100vh',
          position: 'fixed',
          top: 0,
          left: 0,
          backgroundImage: bgColor,
          backgroundSize: 'cover',
          zIndex: 0
        }}
      />

      {/* Cards container */}
      <div className="ambitio-vertical-container" style={{ zIndex: 1, position: 'relative' }}>
        {cards.map((card, index) => {
          const scale = getScale(index);
          const rotate = getRotate(index);

          return (
            <motion.div
              className="ambitio-card"
              key={card.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.3 }}
              style={{
                scale,
                rotate,
                position: 'sticky',
                top: '70px',
                backdropFilter: 'blur(100px)',
              }}
              whileHover={{
                scale: 1.02,
                boxShadow: '0 0 30px rgba(255, 255, 255, 0.3)',
              }}
            >
              {/* Background floating shapes */}
              <div className="ambitio-card-bg-shapes">
                <motion.span className="circle top-left" style={{ x: shapeX1 }} />
                <motion.span className="diamond bottom-right" style={{ y: shapeY1 }} />
                <motion.span className="circle bottom-left" style={{ y: shapeY2 }} />
                <motion.span className="diamond top-right" style={{ x: shapeX2 }} />
              </div>

              <h2>{card.heading}</h2>
              <p>{card.subheading}</p>

              <div className="ambitio-stats">
                {card.stats.map((stat, i) => (
                  <div className="stat-block" key={i}>
                    <h3>{stat.number}</h3>
                    <p>{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
