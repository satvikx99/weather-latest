import React from 'react'
import Comp5 from './Card'

function CurrentCond(props) {



  return (
    <div className='container my-4'>
      <div className="row ">

        <div className="col">
          <div className="row ps-5">
            <div className="col-6">
             <Comp5 data={props.data.icon} width ={"250px"}/>
            </div>
            <div className='col-6 pt-5 pe-5 '>
              <br />
              <h3  style={{ display: 'inline' }}>{props.data.temp} <sup>o</sup> {props.unit === "metric" ? "C " : "F "} </h3><br />
              <h3 style={{ display: 'inline' }}>{props.data.conditions}</h3>
            </div>
          </div>
        </div>


        <div className="col  bg-transparent bg-gradient rounded pt-5 fs-6 text-dark ">
          <div className="row ">
            <div className="col text-center">
           &nbsp; &nbsp;{props.data.precipprob} %<br />Rain
            </div>
            <div className="col text-center">
              {props.data.humidity} <br />Humidity

            </div>
            <div className="col text-center ">
              {props.data.sunrise.substring(1,5)} AM<br />
              Sunrise
            </div>
          </div>
          <div className="row text-center my-5 ">
            <div className="col text-center">
              {props.data.feelslike} <sup>o</sup> {props.unit === "metric" ? "C " : "F "} <br />
              Real Feel 
            </div>
            <div className="col text-center">
              {props.data.windspeed} {props.unit === "metric" ? "Kph" : "Mph"}<br />Wind

            </div>
            <div className="col  text-center">
              {props.data.sunset.substring(1,2)-2 + props.data.sunset.substring(2,5)} PM<br />Sunset

            </div>
          </div>
        </div>
      </div>

    </div >
  )
}

export default CurrentCond