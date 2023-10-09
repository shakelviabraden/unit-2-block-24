import { useState } from 'react'
import './App.css'
import { puppyList } from './data'

function App() {
  const [puppies, setPuppies] = useState(puppyList)
  const [featuredPuppy , setFeaturedPuppy ] = useState(null)

  return (
    <>
  { featuredPuppy && 
  <div className='featured'>
  <h1>Featured Puppy</h1>
  <p>{featuredPuppy.name}</p>
  <ul>
    <li> Age: {featuredPuppy.age}</li>
    <li> Email: {featuredPuppy.email}</li>
  </ul>
  </div>}
  <div className='list'>
  <h1>All Puppies</h1>
  <div className='all-pups'>
  { puppies.map((puppy) => {
     return <p className='puppy' key={puppy.id} onClick={()=>{setFeaturedPuppy(puppy)}}>{puppy.name}</p>
   })
}
</div>
</div>
    </>
  )
}

export default App
