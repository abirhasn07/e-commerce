import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  max-width: var(--maxWidth);
  margin: 0px auto;

  @media (max-width: 768px) {
     margin-top: 0;
  }
`;

export const Content = styled.div`
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
   padding: 5px;
  }
`
export const CategoryDiv = styled.div`
  background: var(--dark);
  width: 30%;

  .title {
    width: 100%;
    background: var(--green);
    padding: 5px 0;
    color: var(--dark);
  }

  @media (max-width: 768px) {
    display: none;
  }
`
export const SliderContainer=styled.div`
width: 68%;
min-height: 350px;
position: relative;
overflow: hidden;


.section-center{
  margin: 0 auto;
  width: 100%;
  height: 395px;
  max-width: 700px;
  text-align: center;
  position: relative;
  display: flex;
  overflow: hidden;




article {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: 0.5s ease;
  opacity: 0;

 
}
article.activeSlide {
  transform: translateX(0);
  opacity: 1;
}
article.lastSlide {
  transform: translateX(-100%);
}
article.nextSlide {
  transform: translateX(100%);
}
}

@media (max-width: 768px) {
    width: 100%;
    height: 100px;
    

    .section-center{
      height: 200px;

      article{
        width: 100%;
        height: 100%;
        img{
         height: 100%;
         width: 100%;
         object-fit: cover;
        }
      }
    }
   
  }
`

export const Arrow=styled.div`
position: absolute;
height: 30px;
width: 40px;
border-radius: 2px;
color: var(--white);
background-color: var(--green);
display: flex;
justify-content: center;
align-items: center;
font-size: var(--font);
opacity: 0.6;
top: 0;
bottom: 0;
margin: auto;
left: ${props=>props.direction==="left"&& "5px"};
right: ${props=>props.direction==="right"&& "5px"};
cursor: pointer;
z-index: 99;


`
