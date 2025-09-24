import React from 'react'


export default function Card(props) {

  return (

      <img src={`/assets/Weather-Image/${props.data}.png`}  style={{ width: `${props.width}` ,marginTop:"8px" , marginBottom:"8px"}} alt="Just Look Outside"/>
  )
}
