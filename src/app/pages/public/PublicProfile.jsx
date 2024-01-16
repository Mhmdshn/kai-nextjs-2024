import React from 'react'
import { FaHeart, FaRegHeart, FaHeartbeat, FaRegEnvelope, FaRegShareSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import moment from "moment";
import { useState, useEffect } from 'react';
import PublicNavbar from '../../components/public/PublicNavbar';




const PublicProfile = () => {
  const [commentOpen, setCommentOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [likes, setLikes] = useState([])
  const [post, setPost] = useState([]);

  const uid = location.pathname.split("/")[2];

  useEffect(() => {
    fetch("http://localhost:8800/api/profiles/public/" + uid).then(d => d.json()).then(res => {
      console.log(res[0])
      setPost(res[0])
    })
    // fetch("http://localhost:8800/api/likes?pid=" + uid).then(res => res.json()).then(res => {
    //   console.log(res)
    //   setLikes(res)
    // })

  }, [])


  return (
    <div className="post lg:max-w-lg md:max-w-md sm:w-full">
      <PublicNavbar />
      <div className="flex flex-col justify-between bg-white m-3 p-0.5 rounded-xl">


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
                to={`/publicprofile/${uid}`}
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
            {likes?.includes(uid) ? (
              <FaHeart
                style={{ color: "red" }}
                onClick={() => { }}
              />
            ) : (
              <FaRegHeart onClick={() => { }} />
            )}
            {likes?.length} Likes
          </div>

          <Link to={"/login"} className="bg-green-500 hover:bg-green-700 cursor-pointer text-white rounded-2xl mx-9 item flex justify-center items-center" >
            <FaRegShareSquare />
            Request
          </Link>
          <div className='container'>

          </div>
          <Link to={"/login"} className="item flex justify-center  items-center" onClick={() => setCommentOpen(!commentOpen)}>
            <FaRegEnvelope />
            Message
          </Link>


        </div>
        {/* row3 end*/}

      </div>
    </div>
  );
};


export default PublicProfile;