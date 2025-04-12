import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import ReactTooltip from 'react-tooltip'
import { AppWrap, MotionWrap } from '../../wrapper'
import { urlFor, client } from '../../client'

import './About.scss'

function About() {
  const [abouts, setAbouts] = useState([])
  const [skills, setSkills] = useState([])

  useEffect(() => {
    const query = '*[_type == "abouts"]'
    const skillQuery = '*[_type == "skills"]'

    client.fetch(query).then((data) => {
      setAbouts(data)
    })

    client.fetch(skillQuery).then((data) => {
      setSkills(data)
    })
  }, [])

  return (
    <>
      <div className='app__about-container'>
        <div className='app__about-bio'>
          <h2 className='head-text'>
            I Know That <span>Good Design</span> <br />
            Means <span>Good Business</span>
          </h2>
          <div className='app__about-services'>
            {abouts.map((about, index) => (
              <motion.div
                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className='app__about-service-item'
                key={about.title + index}
              >
                <img src={urlFor(about.imgUrl)} alt={about.title} />
                <h2 className='bold-text' style={{ marginTop: 20 }}>
                  {about.title}
                </h2>
                <p className='p-text' style={{ marginTop: 10 }}>
                  {about.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className='app__about-skills'>
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className='app__about-skill-icon tooltip'
              key={skill.name}
              data-tip
              data-for={skill.name}
            >
              <div className='app__flex' style={{ backgroundColor: skill.bgColor }}>
                <img src={urlFor(skill.icon)} alt={skill.name} className='sphere-img' />
              </div>
              <ReactTooltip id={skill.name} effect='solid' arrowColor='#fff' className='skills-tooltip'>
                {skill.desc}
              </ReactTooltip>
            </motion.div>
          ))}
        </div>
      </div>
      <motion.button
        whileInView={{ y: [50, 0], opacity: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut', delay: 1 }}
        className='cta-button'
        onClick={() => console.log('Explore My Work')}
      >
        Explore My Work
      </motion.button>
    </>
  )
}

export default AppWrap(MotionWrap(About, 'app__about'), 'about', 'app__whitebg')
