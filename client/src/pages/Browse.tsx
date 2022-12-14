import {useEffect, useState} from 'react'

function Browse() {

  const [popular, setPopular] = useState<[any]>([''])
  const [search, setSearch] = useState<string>('')
  const [sRecipes, setSRecipes] = useState<[any]>([''])

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

  const formSubmit = async (e:React.SyntheticEvent) => {
    e.preventDefault()
    const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${search}&number=9`)
      const data = await api.json()
      console.log('data: ', data.results)
      setSRecipes(data.results)
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    
    setSearch(e.target.value)
  }

  

  return (
    <div className="w-screen h-full m-5 flex flex-col justify-center align-middle">
      <h1 className="text-center text-2xl">Browse</h1>
      <form className="w-fit" onSubmit={formSubmit}>
        <input className="border border-slate-900 rounded " value={search} onChange={handleSearchChange} />
        <button className="rounded-md py-1 px-4 bg-lime-300 mx-5" type="submit">Search</button>
      </form>
      <div className="flex flex-row justify-between flex-wrap">
      {popular && popular.map(recipe => {
        return(
          <div className=" w-1/3 h-fit p-5 border border-gray-900 m-5" key={recipe.id}>
            <p className="text-slate-900">{recipe.title}</p>
            <img src={recipe.image} alt="" />
            <p>{recipe.summary.substring(0,100)}</p>
          </div>
        )
      })}
      </div>
      <hr />
      {sRecipes && sRecipes.map(recipe => {
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