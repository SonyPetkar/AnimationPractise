import React, { useState } from 'react';
import './style.css';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function AmbitioScrollCards() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { scrollY } = useScroll();

  const bgColor = useTransform(
    scrollY,
    [0, 500, 900, 1300, 1700, 2100],
    [
      isDarkMode ? '#111' : '#ffffff',
      isDarkMode ? '#1a1a2e' : '#ff6ec4',
      isDarkMode ? '#16213e' : '#43cea2',
      isDarkMode ? '#0f3460' : '#ff9a9e',
      isDarkMode ? '#1a1a2e' : '#a1c4fd',
      isDarkMode ? '#0f3460' : '#fddb92'
    ]
  );

  const scales = [
    useTransform(scrollY, [500, 900], [1, 0.8]),
    useTransform(scrollY, [900, 1300], [1, 0.8]),
    useTransform(scrollY, [1300, 1700], [1, 0.8]),
    useTransform(scrollY, [1700, 2100], [1, 0.8]),
    useTransform(scrollY, [2100, 2500], [1, 0.8]),
  ];

  const rotates = [
    useTransform(scrollY, [500, 900], [0, 5]),
    useTransform(scrollY, [900, 1300], [0, 5]),
    useTransform(scrollY, [1300, 1700], [0, 5]),
    useTransform(scrollY, [1700, 2100], [0, 5]),
    useTransform(scrollY, [2100, 2500], [0, 5]),
  ];

  const shapeX1 = useTransform(scrollY, [0, 1000], [0, -20]);
  const shapeY1 = useTransform(scrollY, [0, 1000], [0, 20]);
  const shapeY2 = useTransform(scrollY, [0, 1000], [0, -20]);
  const shapeX2 = useTransform(scrollY, [0, 1000], [0, 20]);

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
    <div style={{ position: 'relative' }} className={isDarkMode ? 'dark' : 'light'}>
      <motion.div
        style={{
          width: '100%',
          height: '100vh',
          position: 'fixed',
          top: 0,
          left: 0,
          backgroundColor: bgColor,
          backgroundSize: 'cover',
          zIndex: 0
        }}
      />

      <div className="theme-toggle">
        <button onClick={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? '☀ Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>

      <div className="ambitio-vertical-container">
        {cards.map((card, index) => {
          const scale = scales[index];
          const rotate = rotates[index];

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
                top: '80px'
              }}
              whileHover={{
                scale: 1.02,
                boxShadow: '0 0 30px rgba(255, 255, 255, 0.3)'
              }}
            >
              <div className="ambitio-card-bg-shapes">
                <motion.span className="circle top-left" style={{ x: shapeX1 }} />
                <motion.span className="diamond bottom-right" style={{ y: shapeY1 }} />
                <motion.span className="circle bottom-left" style={{ y: shapeY2 }} />
                <motion.span className="diamond top-right" style={{ x: shapeX2 }} />
              </div>

              <div className="ambitio-card-content">
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
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
