import React from 'react'

function Search(props) {

    const handleChange = (event) => {
        props.changeLocation(event.target.value)
    }

    return (
        <div className="d-flex justify-content-center my-5" >
            <input className="form-control mr-sm-2 rounded-pill" style={{ width: '500px', marginTop: '50px' }} type="text" placeholder="Dehradun" aria-label="Search" onChange={handleChange}></input>
        </div>
    )
}

export default Search
