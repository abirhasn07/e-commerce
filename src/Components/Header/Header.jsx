import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import imageList from "../../fakeData/features";
import Category from "./Category/Category";
import { Arrow, CategoryDiv, Content, SliderContainer, Wrapper } from "./style";

const Header = ({ categories }) => {
  const [imgData, setImgData] = useState(imageList);
  const [slideIndex, setSlideIndex] = useState(0);
  useEffect(() => {
    const lastIndex = imgData.length - 1;
    if (slideIndex < 0) {
      setSlideIndex(lastIndex);
    }

    if (slideIndex > lastIndex) {
      setSlideIndex(0);
    }
  }, [imgData, slideIndex]);

  useEffect(() => {
    let sliderValue= setInterval(() => {
      setSlideIndex(slideIndex + 1);
    }, 5000);
    return ()=>clearInterval(sliderValue)
  }, [slideIndex]);
  return (
    <Wrapper>
      <Content>
        {/* category  */}
        <CategoryDiv>
          <div className="title">
            <h2 style={{paddingLeft:"15px"}}>Categories</h2>
          </div>
          <div className="cat-item">
            {categories.map((cat,index) => {
              return <Category cat={cat} key={index} />;
            })}
          </div>
        </CategoryDiv>
        {/* category  */}

        {/* slider  */}
        <SliderContainer>
          <div className="section-center">
            {imgData.map((item, itemIndex) => {
              const { img, key } = item;

              let position = "nextSlide";
              if (itemIndex === slideIndex) {
                position = "activeSlide";
              }
              if (
                itemIndex === slideIndex - 1 ||
                (slideIndex === 0 && itemIndex === imgData.length - 1)
              ) {
                position = "lastSlide";
              }
              return (
                <article key={key} className={position}>
                  <img src={img} alt={key} />
                </article>
              );
            })}
            <Arrow direction="left">
              <FontAwesomeIcon
                className="prev"
                icon={faArrowLeft}
                onClick={() => setSlideIndex(slideIndex - 1)}
              />
            </Arrow>
            <Arrow direction="right">
              <FontAwesomeIcon
                className="next"
                icon={faArrowRight}
                onClick={() => setSlideIndex(slideIndex + 1)}
              />
            </Arrow>
          </div>
        </SliderContainer>
        {/* slider  */}
      </Content>
    </Wrapper>
  );
};

export default Header;
