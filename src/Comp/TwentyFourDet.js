import React from 'react'
import Card from './Card'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 8
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 8
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


function TwentyFourDet(props) {

  return (



    <Carousel responsive={responsive}>
      {
        props.data.hours.map((element, index) => {
          return <div className='d-flex flex-column align-items-center border mx-1 py-1 rounded border' key={element.datetime}>
            <div className='my-1'>{element.datetime.substring(1, 2) === "0" ? "12:00" : element.datetime.substring(1, 5)} {index > 12 ? "PM" : "AM"}</div>
            <Card data={element.icon} width={"50px"} />
            <div>{element.temp}  <sup>o</sup> {props.unit === "metric" ? "C " : "F "} </div>
          </div>
        })}
    </Carousel>


  )
}

export default TwentyFourDet
