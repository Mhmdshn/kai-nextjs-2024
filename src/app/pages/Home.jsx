import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import { makeRequest } from "../axios";
import Card from "../(components)/Card";
import { UserAuth } from "../context/userAuth";
import { Link } from "react-router-dom";
import { FaSquare, FaCheckSquare } from "react-icons/fa";
import { useEffect, useState } from "react";

const getUsers = async () => {
  const mydata = await makeRequest.get("/users");
  //console.log(mydata.data);
  return mydata.data;
}

const getProfiles = async () => {
  const mydata = await makeRequest.get("/profiles");
  //console.log(mydata.data);
  return mydata.data;
}


const Home = () => {
  //const [cuser, setCuser] = useState()
  const { currentUser, gUser } = UserAuth();


  const { data } = useQuery({
    queryKey: ["profiles"],
    queryFn: async () => {
      return await getProfiles()
    },
  },);


  if (data === null || undefined) { return "Error. No data recieved from database" }


  return <div>
    <h3>welcome {gUser.email} id: {currentUser?.id}</h3>
    <h1>My data is {data?.length}</h1>
    {data?.map(d => (
      <Card post={d} key={d.id} />
    ))}



  </div>;
};

export default Home;
