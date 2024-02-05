// create your App component here
import React, {useEffect, useState} from 'react'

function App() {
const [dogs, setDogs]=useState('')
const [Loading, setLoading]=useState(true)

    useEffect(()=>{
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(res=>res.json())
        .then((data)=>{setDogs(data.message)})
        setLoading(false)
    },[])
  return (
    <div>
    {
        Loading?<p>Loading....</p>:<img src={dogs} alt="A Random Dog"/>
    }

    </div>
  )
}

export default App
