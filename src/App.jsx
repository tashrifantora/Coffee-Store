
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCart from './Components/CoffeeCart'
import NavBar from './Components/NavBar/NavBar'

function App() {
  const coffees = useLoaderData()


  return (
    <>
      <NavBar></NavBar>

      <h1 className='text-4xl text-purple-500 text-center'>Coffee:- {coffees.length}</h1>
      <div className='grid md:grid-cols-2 gap-4 m-20'>
        {
          coffees.map(coffee => <CoffeeCart
            key={coffee._id}
            coffee={coffee}
          ></CoffeeCart>)
        }
      </div>

    </>
  )
}

export default App
