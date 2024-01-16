import React, { useEffect, useState } from 'react'
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { UserAuth } from '../context/userAuth';
import { makeRequest } from '../axios';
import { Link } from 'react-router-dom';

const Granted = () => {
  const { currentUser } = UserAuth()
  const [grants, setgrants] = useState([])

  const uid = location.pathname.split("/")[2];

  const getUserNameById = async (id) => {
    if (id === undefined) return "id undefined"
    try {
      const mydata = await makeRequest.get("/users/find/" + id);
      //console.log(mydata.data.fullname)
      return mydata.data.fullname;
    } catch (error) {

    }

  }

  const getGrants = async () => {
    if (currentUser.id === undefined || null) return "undefined userid"
    try {
      const grantFromIds = (await makeRequest.get("/grants?pid=" + currentUser.id)).data;
      //console.log(grantFromIds)
      setgrants(grantFromIds)
      return grantFromIds;
    } catch (error) {
    }
  }

  const { data } = useQuery({
    queryKey: ["grants"],
    queryFn: async () => {
      return await getGrants()
    },
  },);


  const handleDelete = (uid) => {
    try {
      const clean = makeRequest.delete("/grants?pid=" + uid);
      console.log(clean.data)
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    getGrants()
  }, [grants])


  return (<>

    <section id='grantsview'>
      <div className='bg-green-700'>
        Granted
      </div>
      <div className='flex-row justify-center items-center'>
        {grants?.map((r, i) => (<div key={i} className='flex justify-between items-center'>

          <div>{"id:" + r?.id + " - " + r?.name}</div>
          <div><button onClick={() => handleDelete(r.id)} className='m-4 p-1 bg-red-700 text-white rounded'>Delete</button></div>

        </div>))}
      </div>
    </section>

  </>

  )
}

export default Granted

