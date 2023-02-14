import Image from "next/image";
import React from "react";
import TwitterIcon from "../public/images/1x/twitter.png";
import InstagramIcon from "../public/images/1x/ig.png";
import FacebookIcon from "../public/images/1x/facebook.png";

function SocialLinks() {
  return (
    <div className="social-links">
    <div className="circle">
      <a href="https://www.google.com">
        <Image src={TwitterIcon} alt="twittericon" fill ></Image>
      </a>
    </div>
    <div className="circle">
      <a href="https://www.google.com">
        <Image src={FacebookIcon} alt="facebookicon" fill></Image>
      </a>
    </div>
    <div className="circle">
      <a href="https://www.google.com">
        <Image src={InstagramIcon} alt="instagram" fill></Image>
      </a>
      </div>
  </div>
  );
}

export default SocialLinks;
