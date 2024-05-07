import React, { useState } from "react";
import Card from "./Card";
import {
  HiOutlineArrowCircleLeft,
  HiOutlineArrowCircleRight,
} from "react-icons/hi";
const Testinonials = (props) => {
  let reviews = props.reviews;
  const [index, setIndex] = useState(0);

  function leftShiftHandler() {
    if (index - 1 < 0) {
      // ager koe bhi index nhi aa rha hai  to last index par chale jao yhi kiya gya jab index ki value 0 ya 0 se kam hogi tab ho last me  chal jayega
      setIndex(reviews.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  function rightShiftHandler() {
    if (index + 1 >= reviews.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  function surpiseHandler() {
    let randomIndex = Math.floor(Math.random() * reviews.length);
    setIndex(randomIndex);
  }

  return (
    <div className="w[85vw] md:w-[700px] bg-red-50  flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-lg">
      <Card review={reviews[index]}></Card>

      <div className="flex mx-auto text-3xl mt-10 gap-5 text-violet-300 font-bold">
        <button
          onClick={leftShiftHandler}
          className=" cursor-pointer hover:text-violet-500"
        >
          <HiOutlineArrowCircleLeft />
        </button>

        <button
          onClick={rightShiftHandler}
          className=" cursor-pointer hover:text-violet-500"
        >
          <HiOutlineArrowCircleRight />
        </button>
      </div>

      <div className="mt-6">
        <button
          onClick={surpiseHandler}
          className=" bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg"
        >
          Suprise Me
        </button>
      </div>
    </div>
  );
};

export default Testinonials;
