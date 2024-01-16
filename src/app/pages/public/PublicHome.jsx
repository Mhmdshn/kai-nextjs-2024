
import { useState } from "react"
import { useEffect } from "react";
import { Link } from 'react-router-dom'
import PublicCard from "../../components/public/PublicCard";
import PublicNavbar from "../../components/public/PublicNavbar";


const PublicHome = () => {
  const [data, setData] = useState([]);


  useEffect(() => {
    fetch("http://localhost:8800/api/profiles/public").then(res => res.json()).then(res => {
      console.log(res)
      setData(res)
    })
  }, [])


  return (
    <div>
      <PublicNavbar />
      <div className="flex justify-around">
        <Link to={"/login"}>Login</Link>
        <Link to={"/register"}>Register</Link>
      </div>
      get logged in
      <h1>My data is {data?.length}</h1>
      {data?.length === 0 ? "Error. No data recieved from database" : data?.map(d => (
        <PublicCard post={d} key={d.id} />
      ))}

    </div>
  )
}

export default PublicHome