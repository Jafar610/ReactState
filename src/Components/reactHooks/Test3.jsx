import React, {useState, useEffect} from 'react'

function Test3() {
    // const [brand, setBrand] = useState('Toyota');
    // const [model, setModel] = useState('Camry');
    // const [year, setYear] = useState('2020');
    // const [color, setColor] = useState('Blue');

    const [car, setCar] = useState({
        brand : 'Toyota',
        model : {
            model1 : 'Camry',
            model2 : 'Corolla'
        },
        year : '2020',
        color : 'Blue'
    })

    const [count, setCount] = useState(0)

    useEffect(()=>{
        console.log('hello');

        return ()=>{
            alert('goodbye');
        }

    }, [])
   
    const changeColor = ()=>{
        setCar((prevCar)=>{
            return {
                ...prevCar,
                color : 'Red',
                year : '2026',
                model : {
                    ...prevCar.model,
                    model1 : 'Tl2025'
                }
            }
        })
    }

    const increment = ()=>{
        setCount(count => count + 1)//1
        setCount(count => count + 1) // 1+1 = 2
        setCount(count => count + 1)//3
        setCount(count => count + 1)//4
    }

  return (
    <>
    <h1>Car Information</h1>
    <h2>Brand: {car.brand}</h2>
    <h2>Model: {car.model.model1}</h2>
    <h2>Year: {car.year}</h2>
    <h2>Color: {car.color}</h2>

    <h2>Count: {count}</h2>
    <button onClick={changeColor}>Change Color</button>
    <button onClick={increment}>Increment By 4</button>

    </>
  )
}

export default Test3