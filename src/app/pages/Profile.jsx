import React from 'react'
import { FaHeart, FaRegHeart, FaHeartbeat, FaRegEnvelope, FaRegShareSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import moment from "moment";
import { useState, useEffect } from 'react';
import { Navigate } from "react-router-dom";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { UserAuth } from '../context/userAuth';
import { makeRequest } from '../axios';




const Profile = () => {
  const [commentOpen, setCommentOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [likes, setLikes] = useState([])
  const [liked, setLiked] = useState(false);
  const [isAdded, setIsAdded] = useState(true);

  const { currentUser, myProfile, gUser } = UserAuth();

  const uid = location.pathname.split("/")[2];

  const getProfiles = async () => {
    console.log(uid)
    const mydata = await makeRequest.get("/profiles/" + uid);
    //console.log(mydata.data[0]);
    return mydata.data[0];
  }


  const { data: post } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      return await getProfiles()
    },
  },);


  const getMyLikes = async () => {
    const dta = await makeRequest.get("/mylikes")
    setLikes(dta.data)
  }

  const getLikes = async () => {
    try {
      const dta = await makeRequest.get("/likes?pid=" + uid)
      setLikes(dta.data)
    } catch (error) {

    }
  }

  const handleLike = async () => {
    try {
      await makeRequest.post('/likes?pid=' + uid);
      setLiked(true);
    } catch (error) {
      console.error('Error liking profile:', error);
    }
  }

  useEffect(() => {
    getLikes()
  }, [liked])
  useEffect(() => {
    getLikes()
  }, [])


  const getRequests = async () => {
    console.log(uid)
    const mydata = await makeRequest.get('/requests?pid=' + uid);
    //console.log(mydata.data[0]);
    return mydata.data[0];
  }

  const handleSendRequest = () => {
    try {
      console.log(uid)
      const sent = makeRequest.post("/requests?pid=" + uid)
      console.log(sent)
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className="post lg:max-w-lg md:max-w-md sm:w-full">
      <div className="flex flex-col justify-between bg-white m-3 p-0.5 rounded-xl">

        <div className='text-gray-950'>{JSON.stringify(isAdded.toString())}</div>
        <div className="w-full flex justify-between items-start align-top">
          {/* top left */}
          <div className="userInfo topleft w-full flex">
            <div className='profilepic w-10 bg-purple-400 rounded-full text-center items-center'>
              {post?.profilePic ? <img className='' src={"/upload/" + post?.profilePic} alt="" />
                : <>
                  {post?.gender === "m" ?
                    <img className='genderlogo' src={"man.png"} alt="" />
                    :
                    <img className='genderlogo' src={"woman.png"} alt="" />}
                </>}
            </div>

            <div className="details text-black">
              <Link
                to={`/profile/${post?.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name text-blue-950 pl-2">{post?.nickname}</span>
              </Link>
              <div className='-mt-1 ml-1 w-full'><small className="date  -mt-1 text-sm text-slate-600 pl-1">{moment(post?.publishedAt).fromNow()}</small></div>
            </div>
          </div>

          {/* top middle */}

          <span className='topmiddle w-30 text-center text-black'>{post?.livingIn}</span>


          {/* top right */}


          <div className='topright w-full flex justify-end'>

            <img className='genderlogo rounded-full mr-2' src={"https://img.freepik.com/premium-vector/hijab-icon-graphic-design-illustration-vector_11554-1151.jpg?w=740"} width={25} alt="woman" />

            <span className='right flex justify-end text-black' onClick={() => setMenuOpen(!menuOpen)}>Pid {post?.userId}
              {menuOpen && (<FaRegShareSquare />)}
            </span>

          </div>

        </div>
        {/* row1 end */}


        {/* row2 begin*/}

        <div className="text-purple-950 content w-full bg-blue-200 rounded p-2 mt-2 h-10 text-center flex-wrap">
          <p>{post?.aboutme}</p>
        </div>

        {/* row2 end*/}

        {/* row3 start*/}
        <div className="info items-end justify-between text-black bg-gradient-to-t from-red-200 to-indigo-200 rounded-b-xl -m-0.5 px-1">
          <div className="item flex justify-center items-center">
            {likes?.includes(currentUser.id) ? (
              <FaHeart
                style={{ color: "red" }}
                onClick={() => handleLike}
              />
            ) : (
              <FaRegHeart onClick={() => handleLike} />
            )}
            {likes?.length} Likes
          </div>

          <div className="bg-green-500 hover:bg-green-700 cursor-pointer text-white rounded-2xl mx-9 item flex justify-center items-center" onClick={() => handleSendRequest()}>
            <FaRegShareSquare />
            Request
          </div>
          <div className='container'>

          </div>
          <div className="item flex justify-center  items-center" onClick={() => setCommentOpen(!commentOpen)}>
            <FaRegEnvelope />
            Message
          </div>


        </div>
        {/* row3 end*/}

      </div>
    </div>
  );
};


export default Profile;