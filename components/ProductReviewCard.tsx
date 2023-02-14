import urlFor from "lib/urlFor";
import Image from "next/image";
import React from "react";

import ProductReviewImage from '../public/images/001.png'

function ProductReviewCard({data}:any) {
  console.log(urlFor(data.productimage).url())
  return (
    <div className="card-product">
      <Image src={urlFor(data.productimage).url()} alt="" height={100} width={100} />
      <div className="card-body">
      <a href={data.link} target="_blank" rel="noreferrer">
        <h3>{data.title}</h3>
        <h4>
          View Page<i className="fa fa-arrow-right"></i>
        </h4>
      </a>
      </div>
    </div>
  );
}

export default ProductReviewCard;
