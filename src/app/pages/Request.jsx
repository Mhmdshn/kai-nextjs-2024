import React, { useEffect, useState } from 'react'
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { UserAuth } from '../context/userAuth';
import { makeRequest } from '../axios';
import { Link } from 'react-router-dom';
import Granted from './granted';


const Request = () => {
  const { currentUser } = UserAuth()
  const [requests, setRequests] = useState([])


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

  const getRequests = async () => {
    if (currentUser.id === undefined || null) return "undefined userid"
    try {
      const requestFromIds = (await makeRequest.get("/requests?pid=" + currentUser.id)).data;
      //console.log(requestFromIds)
      setRequests(requestFromIds)
      return requestFromIds;
    } catch (error) {
    }
  }

  const { data } = useQuery({
    queryKey: ["requests"],
    queryFn: async () => {
      return await getRequests()
    },
  },);



  const handleAllow = (uid) => {
    try {
      const grantedFrom = currentUser.id;
      const grantedTo = uid;
      console.log([grantedFrom, grantedTo])
      const mydata = makeRequest.post("/grants?pid=" + uid);
      console.log(mydata.data)
      //const clean = makeRequest.delete("/requests?pid=" + uid);
    } catch (error) {
      console.log(error)
    }
  }

  const handleDeny = (uid) => {
    try {
      const clean = makeRequest.delete("/requests?pid=" + uid);
      console.log(clean.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (<>
    <section id='requests'>
      {/* {JSON.stringify(requests)} */}
      <div className='bg-yellow-700'>
        Pending requests
      </div>
      <div className='flex-row justify-center items-center'>
        {requests?.map((r, i) => (<div key={i} className='flex justify-between items-center'>

          <div>{"id:" + r?.id + " - " + r?.name} sent request to you</div>
          <div><button onClick={() => handleAllow(r.id)} className='m-4 p-1 bg-green-700 text-white rounded'>Allow</button></div>
          <div><button onClick={() => handleDeny(r.id)} className='m-4 p-1 bg-red-700 text-white rounded'>Deny</button></div>

        </div>))}
      </div>
    </section>


    <Granted />

  </>

  )
}

export default Request

