import Image from "next/image";
import React from "react";
import Youtube from "../public/images/youtube.png";
import Telegram from "../public/images/telegram.png";
import Gmail from "../public/images/gmail.png";

function SocialLinks() {
  return (
    <div className="social-links">
    <div className="circle">
      <a href="https://www.youtube.com/@heyanand" target="_blank" rel="noreferrer">
        <Image src={Youtube} alt="twittericon" fill ></Image>
      </a>
    </div>
    <div className="circle">
      <a href="https://t.me/heyyanand" target="_blank" rel="noreferrer">
        <Image src={Telegram} alt="facebookicon" fill></Image>
      </a>
    </div>
    <div className="circle">
      <a href="https://mail.google.com/mail/?view=cm&fs=1&to=hey.anandverma@gmail.com" target="_blank" rel="noreferrer">
        <Image src={Gmail} alt="instagram" fill></Image>
      </a>
      </div>
  </div>
  );
}

export default SocialLinks;
