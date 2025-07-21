import React from "react";
import { Link } from "react-router-dom";
import Gifts from './gifts.json';
import '../Stylesheet/GiftCard.css'
import giftcard from '../assets/Designer (2).png';

function GiftCard() {
  return (
    <div>
      <h1 className="font-semibold text-lg text-center pt-16 pb-8">Recommendation based on your input .</h1>
      <div className="giftcard_container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-8  ">
        {Gifts.map((gift) => (
          <div className="gift_Card bg-gray-200 p-4 rounded-2xl mb-16">
            <div className="gift_card_head">{gift.giftname}</div>
            <div className="gift_card_desc">{gift.giftdesc}</div>
            <div className="gift_card_link">
              <Link>{gift.productlink}</Link>
            </div>
            <div><img src={giftcard} alt="" /></div>
          </div>
        ))}
       
      </div>
    </div>
  );
}

export default GiftCard;
