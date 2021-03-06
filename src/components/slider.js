import React from "react";
import Slider from "react-slick";
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import '../../node_modules/slick-carousel/slick/slick.css';
import '../../node_modules/slick-carousel/slick/slick-theme.css';
import background from "../assets/images/campus_above.jpg"

const SliderContainer = styled.div`
  // background: linear-gradient(210deg,#943cff 0%,#dd45d3 40.13%,#fc9a57 90%);
  background-image: url(${background});
  color: white;
  padding: 25rem 0;
  // clip-path: polygon(0 0, 100% 0, 100% 85%, 0% 100%);
`

let SlickSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const sideMetadata = useStaticQuery(graphql`
    query TitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  let { title, description} = sideMetadata.site.siteMetadata
  return (
    <SliderContainer>
      <Slider {...settings}>
        <div>
          <div className="text-center">
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
        </div>
        <div>
          <div className="text-center">
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
        </div>
        <div>
          <div className="text-center">
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
        </div>
      </Slider>
    </SliderContainer>
  )
}

export default SlickSlider
