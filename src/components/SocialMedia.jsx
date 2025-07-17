import React from 'react'
import { BsTwitter, BsFacebook, BsLinkedin, BsGithub } from 'react-icons/bs'

import { FcBusinessman } from 'react-icons/fc'

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div>
        <a href='https://github.com/gercamjr' target='_blank' rel='noreferrer'>
          <BsGithub />
        </a>
      </div>
      <div>
        <a href='https://gercamjr.github.io/digital_business_card' target='_blank' rel='noreferrer'>
          <FcBusinessman />
        </a>
      </div>
      <div>
        <a href='https://www.linkedin.com/in/gera-camo-jr/' target='_blank' rel='noreferrer'>
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a href='https://www.twitter.com/CamorlingaJr' target='_blank' rel='noreferrer'>
          <BsTwitter />
        </a>
      </div>
      <div>
        <a href='https://www.facebook.com/geracamojr' target='_blank' rel='noreferrer'>
          <BsFacebook />
        </a>
      </div>
    </div>
  )
}

export default SocialMedia
