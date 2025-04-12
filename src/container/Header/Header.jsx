import React from 'react'
import { motion } from 'framer-motion'
import { AppWrap } from '../../wrapper'
import { images } from '../../constants'
import './Header.scss'
const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
}
const Header = () => {
  return (
    <div className='app__hero app__flex' id='home'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duraction: 0.5 }}
        className='app__header-info'
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <span>👋🏾</span>
            <div style={{ marginLeft: 20 }}>
              <p className='p-text'>Hello, I am </p>
              <h1 className='head-text'>Gerardo</h1>
            </div>
          </div>
          <div className='tag-cmp app__flex'>
            <p className='p-text'>Full Stack Web Developer</p>
          </div>
        </div>
      </motion.div>
      <motion.button
        whileInView={{ y: [50, 0], opacity: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut', delay: 1 }}
        className='cta-button'
        onClick={() => console.log('Explore My Work')}
      >
        Explore My Work
      </motion.button>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='app__header-img'
      >
        <div className='app__header-sphere'>
          <img src={images.profile} alt='profile' className='sphere-img' />
          <img src={images.logo} alt='logo' className='sphere-logo' />
        </div>
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className='overlay_circle'
          src={images.circle}
          alt='profile_circle'
        />
      </motion.div>

      <motion.div variant={scaleVariants} whileInView={scaleVariants.whileInView} className='app__header-circles'>
        {[images.html, images.react, images.sass].map((circle, index) => (
          <div className='circle-cmp app__flex' key={`circle-${index}`}>
            <img src={circle} alt='circle' />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default AppWrap(Header, 'home')
