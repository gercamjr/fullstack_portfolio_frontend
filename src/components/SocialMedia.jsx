import React from 'react'
import { BsTwitter, BsFacebook, BsLinkedin, BsGithub } from 'react-icons/bs'

import { motion } from 'framer-motion'

import { FcBusinessman } from 'react-icons/fc'

const SocialMedia = () => {
  return (
    <div className='app__social app__flex'>
      <motion.div
        whileHover={{ scale: 1.2, boxShadow: '0 0 10px rgba(0, 255, 204, 0.5)' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className='app__social-icon'
      >
        <a href='https://github.com/gercamjr' target='_blank' rel='noreferrer'>
          <BsGithub />
        </a>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.2, boxShadow: '0 0 10px rgba(0, 255, 204, 0.5)' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className='app__social-icon'
      >
        <a href='https://gercamjr.github.io/digital_business_card' target='_blank' rel='noreferrer'>
          <FcBusinessman />
        </a>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.2, boxShadow: '0 0 10px rgba(0, 255, 204, 0.5)' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className='app__social-icon'
      >
        <a href='https://www.linkedin.com/in/gera-camo-jr/' target='_blank' rel='noreferrer'>
          <BsLinkedin />
        </a>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.2, boxShadow: '0 0 10px rgba(0, 255, 204, 0.5)' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className='app__social-icon'
      >
        <a href='https://www.twitter.com/CamorlingaJr' target='_blank' rel='noreferrer'>
          <BsTwitter />
        </a>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.2, boxShadow: '0 0 10px rgba(0, 255, 204, 0.5)' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className='app__social-icon'
      >
        <a href='https://www.facebook.com/geracamojr' target='_blank' rel='noreferrer'>
          <BsFacebook />
        </a>
      </motion.div>
    </div>
  )
}

export default SocialMedia
