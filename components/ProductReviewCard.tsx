import Image from "next/image";
import React from "react";

import ProductReviewImage from '../public/images/001.png'

function ProductReviewCard() {
  return (
    <div className="card-product">
      <Image src={ProductReviewImage} alt="" height={200}/>
      <div className="card-body">
        <h3>Product Creator Hai ham</h3>
        <h4>
          View Page<i className="fa fa-arrow-right"></i>
        </h4>
      </div>
    </div>
  );
}

export default ProductReviewCard;
