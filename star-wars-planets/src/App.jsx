import { useEffect,useState} from "react"

function App() {
  const [starships,setStarships] = useState([])

  useEffect(() => {
    const fatchData  = async() => {
      try{
        const api = await fetch(
          "https://swapi.info/api/starships/"
        )
        const answer = await Response.json()
        setStarships(answer)
      }catch (error) {
        console.log(error)
      }
    }
    fatchData()
  },[])


  return ()
}

export default App
