import React from 'react';
import './Ambitio.css';

export default function AmbitioScrollCards() {
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
      heading: 'Tailored for your dreams',
      subheading: 'Personalized roadmap to your dream university.',
      stats: [
        { number: '1500+', label: 'Universities analyzed' },
        { number: '100%', label: 'Profile fit analysis' },
        { number: 'Unlimited', label: 'Shortlist revisions' }
      ]
    },
    {
      id: 5,
      heading: 'Funding your future',
      subheading: 'Find the scholarships that work for you.',
      stats: [
        { number: '300+', label: 'Scholarships listed' },
        { number: '50+', label: 'Funding sources' },
        { number: '90%', label: 'Application success' }
      ]
    }
  ];

  return (
    <div className="ambitio-scroll-container">
      {cards.map(card => (
        <div className="ambitio-card" key={card.id}>
          <div className="ambitio-card-bg-shapes">
            <span className="circle top-left"></span>
            <span className="diamond bottom-right"></span>
            <span className="circle bottom-left"></span>
            <span className="diamond top-right"></span>
          </div>
          <h2>{card.heading}</h2>
          <p>{card.subheading}</p>
          <div className="ambitio-stats">
            {card.stats.map((stat, index) => (
              <div className="stat-block" key={index}>
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
