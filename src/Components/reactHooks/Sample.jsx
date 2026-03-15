import React, {useState} from 'react'

function Sample() {
    // const [brand, setBrand] = useState('Tesla');
    // const [color, setColor] = useState('Red');
    // const [model, setModel] = useState('Tl2025');
    // const [year, setYear] = useState('2025');

    const [car, setCar] = useState({
        model : 'Tl2025',
        brand : 'Tesla',
        color: 'Red',
        year : '2025'
    })

    const changeCar = ()=>{
        setCar ((prev)=>{
          return {
            ...prev,
            color : 'Blue'
          }
        });
    }


  return (
    <>
    <h1>Hello world</h1>
    <h2>My Car is {car.brand}.</h2>
    <h2>Its Color is {car.color}</h2>
    <h2>Its Model is {car.model} and manufactured in {car.year}</h2>

    <button onClick={changeCar}>Change Car</button>
    </>
  )
}

export default Sample