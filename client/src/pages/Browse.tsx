import {useEffect, useState} from 'react'

function Browse() {

  const [popular, setPopular] = useState<[any]>([''])
  const [search, setSearch] = useState<string>('')
  useEffect(() => {
    getPopular()
  },[])

  const getPopular = async () => {

    const check: string= localStorage.getItem('popular') || ''

    if(check !== ''){
      setPopular(JSON.parse(check))
    }else{
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`)
      const data = await api.json()
      localStorage.setItem('popular', JSON.stringify(data.recipes))
      setPopular(data.recipes)
    }

    console.log(popular)
  }

  const formSubmit = async () => {

  }

  const handleSearchChange = () => {

  }

  return (
    <div>
      <h1>Browse</h1>
      <form onSubmit={formSubmit}>
        <input className="border border-slate-900" value={search} onChange={handleSearchChange} />

      </form>
      {popular && popular.map(recipe => {
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