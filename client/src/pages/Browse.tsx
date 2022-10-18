import {useEffect, useState} from 'react'

function Browse() {

  const [popular, setPopular] = useState<[any]>([''])

  useEffect(() => {
    // getPopular()
  },[])

  const getPopular = async () => {
    const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`)
    const data = await api.json()
    setPopular(data.recipes)
  }

  return (
    <div>
      <h1>Browse</h1>
      {popular.map(recipe => {
        return(
          <div key={recipe.id}>
            <p>{recipe.title}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Browse