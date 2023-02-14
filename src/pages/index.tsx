import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import HeaderBanner from "../../public/images/banner.jpg";
import ProfileImage from "../../public/images/profile.png";
import ProductReviewCard from "components/ProductReviewCard";
import Footer from "components/Footer";
import SocialLinks from "components/SocialLinks";
import AdvertisementBanner from "../../public/images/5785216.jpg";
import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";
import urlFor from "lib/urlFor";

export default function Home(props:any) {

  return (
    <>
      <Head>
        <title>HeyAnand.In</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
          integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <div className="header-img">
          <Image src={HeaderBanner} alt="Header Banner"></Image>
        </div>
        <div className="image-profile">
          <Image src={ProfileImage} alt="profile image"></Image>
        </div>
        <div className="personal-details">
          <h2>Anand Verma</h2>
          <span>
            <i className="fa-solid fa-location-dot"></i> Gujarat, India
          </span>

          <p>SEO Expert & Digital Content Creator</p>
        </div>
        <SocialLinks />

        <div className="recent-content">
          <div className="wrapper">
            {
              props.control[0].offerbanner?
              <div className="card">
              <Image src={AdvertisementBanner} alt=""></Image>
            </div>
                : ""
            }
           

            <br />
            <p># Recent Contents</p>

            {props.referLinks.map((e:any) => {
              return (
                <div className="card-link" key={e._id}>
                  <Image src={urlFor(e.sideimage).url()} alt="refer logo" width={70} height={70}></Image>
                  <div>
                  <a href={e.link} target="_blank" rel="noreferrer">
                    <div>
                      <h3>{e.title}</h3>
                      <p>{e.link}</p>
                    </div>
                    <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  </a>
                  </div>
                 
                </div>
              );
            })}
            <div className="more-btn">
              <a>
                More<i className="fa fa-caret-down" aria-hidden="true"></i>
              </a>
            </div>

            <br />

            {
              props.control[0].productreview ?
              <div className="product-reviews">
              <p># Product Reviews</p>
              <div>
                <ProductReviewCard />
                <ProductReviewCard />
                <ProductReviewCard />
                <ProductReviewCard />
                <ProductReviewCard />
                <ProductReviewCard />
                <ProductReviewCard />
                <ProductReviewCard />
                <ProductReviewCard />
                <ProductReviewCard />
              </div>
            </div>
              : ""
            }

          
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const query = groq`
    *[_type =='referlinks']
    `;
  
  const query2 = groq`
  *[_type =='visibilitycontroller']
  `;

  const referLinks: any = await client.fetch(query);
  const control: any = await client.fetch(query2);
  // console.log(control)

  return {
    props: {
      referLinks,
      control
    }, // will be passed to the page component as props
  };
}
