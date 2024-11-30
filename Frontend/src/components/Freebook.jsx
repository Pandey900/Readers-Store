import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Freebook() {
  const [book, setBook] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        setBook(res.data.filter((data) => data.category === "Free"));
      } catch (error) {
        console.log("Error", error);
      }
    };
    getBook();
  }, []);

  const handleBuyNow = (selectedBook) => {
    navigate("/buy", { state: { book: selectedBook } }); // Pass book details
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 2, slidesToScroll: 2, initialSlide: 2 },
      },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
      <p>
        Unlock a world of knowledge with our free book! Dive into captivating
        stories and insights, available exclusively for our readers.
      </p>
      <Slider {...settings}>
        {book.map((item) => (
          <Cards
            key={item._id}
            item={item}
            handleBuyNow={() => handleBuyNow(item)}
          />
        ))}
      </Slider>
    </div>
  );
}

export default Freebook;
