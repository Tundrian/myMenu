import { useState, useEffect } from 'react'

function Menu() {
  const [user, setUser] = useState<any>({})

  useEffect(() => {

  }, [])

  const loadUser = async () => {
    const check: string = localStorage.getItem('user') || ''
    if(check !== ''){
      setUser(JSON.parse(check))
    }else{
      // const userFetch = await fetch('')
    }
  }

  return (
    <div>Menu</div>
  )
}

export default Menu