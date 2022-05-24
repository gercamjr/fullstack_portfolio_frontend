import React from "react";
import {
  BsTwitter,
  BsFacebook,
  BsLinkedin,
  BsGithub
  
} from "react-icons/bs";

import {FcBusinessman} from 'react-icons/fc'

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <BsGithub />
      </div>
      <div>
        <FcBusinessman />
      </div>
      <div>
        <BsLinkedin />
      </div>
      <div>
        <BsTwitter />
      </div>
      <div>
        <BsFacebook />
      </div>
    </div>
  );
};

export default SocialMedia;
