import React from 'react'
import { userFields } from './fields'
import { UserAuth } from '../../context/userAuth'
import { Link } from 'react-router-dom'

const CreateProfile = () => {
  const { myProfile } = UserAuth()
  userFields.map((u, i) => {
    return
  })
  return (
    <div>
      {myProfile && <Link>Goto MyProfile</Link>}
      {!myProfile && <form className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-6">Create Profile</h2>
        {userFields.map((u, i) => (
          <Input data={u} />

        ))}

      </form>}



    </div>
  )
}

export default CreateProfile


const Input = ({ data }) => {
  return (
    <div className="mb-4">
      <label htmlFor={data.name} className="block text-gray-700 text-sm font-bold mb-2">
        {data.title}:
      </label>
      <input
        type={data.type}
        id={data.name}
        name={data.title}
        className="w-full p-2 border rounded text-black"
        onChange={data.handleChange}
      />
    </div>
  )
}
