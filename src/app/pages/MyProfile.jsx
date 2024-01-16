import React, { useState } from 'react';
import { UserAuth } from '../context/userAuth';
import { Link } from 'react-router-dom';

const MyProfile = () => {
  const [step, setStep] = useState(1);
  const { currentUser, myProfile } = UserAuth();
  // Sample user data
  const userData = {
    name: currentUser.name,
    email: myProfile?.nickname,
    photoUrl: 'https://placekitten.com/200/200', // Replace with the actual photo URL
  };

  // State to manage the visibility of the profile
  const [isPublic, setIsPublic] = useState(false);

  let keys = Object.keys(myProfile)
  let vals = Object.values(myProfile)
  let newarray = []

  keys.map((m, i) => {
    let newobj = {}
    newobj["key"] = keys[i]
    newobj["val"] = vals[i]
    newobj["editable"] = true
    newobj["visibility"] = true
    newobj["part"] = 1
    newarray.push(newobj)
  })

  newarray[0].editable = false  // id set as not editable by user 
  newarray[1].editable = false  // createdAt set as not editable by user
  newarray[2].editable = false  // publishedAt set as not editable by user
  newarray[newarray.findIndex((o => o.key == "userId"))].editable = false; // userId set as not editable by user

  newarray[newarray.findIndex((o => o.key == "l4_atoll"))].part = 2; // userId set as not editable by user
  newarray[newarray.findIndex((o => o.key == "l4_island"))].part = 2; // userId set as not editable by user
  newarray[newarray.findIndex((o => o.key == "l4_age_range_start"))].part = 2; // userId set as not editable by user
  newarray[newarray.findIndex((o => o.key == "l4_age_range_end"))].part = 2; // userId set as not editable by user
  newarray[newarray.findIndex((o => o.key == "l4_willing2relocate"))].part = 2; // userId set as not editable by user
  newarray[newarray.findIndex((o => o.key == "l4_maritalstatus"))].part = 2; // userId set as not editable by user
  newarray[newarray.findIndex((o => o.key == "l4_children"))].part = 2; // userId set as not editable by user
  newarray[newarray.findIndex((o => o.key == "l4_kids_staying_at"))].part = 2; // userId set as not editable by user
  newarray[newarray.findIndex((o => o.key == "l4_like_to_have_children"))].part = 2; // userId set as not editable by user
  newarray[newarray.findIndex((o => o.key == "l4_poligyny"))].part = 2; // userId set as not editable by user
  newarray[newarray.findIndex((o => o.key == "l4_languages"))].part = 2; // userId set as not editable by user
  newarray[newarray.findIndex((o => o.key == "l4_pray"))].part = 2; // userId set as not editable by user
  newarray[newarray.findIndex((o => o.key == "l4_origin"))].part = 2; // userId set as not editable by user
  newarray[newarray.findIndex((o => o.key == "l4_haircolor"))].part = 2; // userId set as not editable by user
  newarray[newarray.findIndex((o => o.key == "l4_bodytype"))].part = 2; // userId set as not editable by user
  newarray[newarray.findIndex((o => o.key == "l4_height"))].part = 2; // userId set as not editable by user
  newarray[newarray.findIndex((o => o.key == "l4_dresscode"))].part = 2; // userId set as not editable by user
  newarray[newarray.findIndex((o => o.key == "l4_profession"))].part = 2; // userId set as not editable by user
  newarray[newarray.findIndex((o => o.key == "l4_minimum_qualification"))].part = 2; // userId set as not editable by user
  newarray[newarray.findIndex((o => o.key == "l4_other"))].part = 2; // userId set as not editable by user

  console.log(newarray[newarray.findIndex((o => o.key == "l4_atoll"))])

  return (
    <div className="max-w-md mx-auto bg-white text-black p-8 rounded-md shadow-md mt-10">
      <div className="text-center">
        <img
          src={userData.photoUrl}
          alt={userData.name}
          className="w-32 h-32 mx-auto rounded-full object-cover"
        />
        <h2 className="text-2xl text-slate-600 font-semibold mt-4">{currentUser.fullname}</h2>
        <p className="text-gray-600">{currentUser.email}</p>
        <p className="text-gray-600">{currentUser.nid}</p>
        <p className="text-gray-600">Date of Birth: {Date(currentUser.dob)}</p>
      </div>

      <div className='flex justify-between w-full p-3'>
        <button onClick={() => setStep(1)} className='w-full bg-blue-300'>desired person's Info</button>
        <button onClick={() => setStep(2)} className='w-full bg-red-300 mr-2'>personal Info</button>
      </div>

      {step === 1 &&
        <div className=' text-black'>
          {/* {JSON.stringify(newarray)} */}
          {newarray.map(n => (
            <div className="mt-1 flex justify-between items-center">
              {n.visibility && !n.editable ? <>
                <div className=" text-white bg-green-900 w-1/3">{n.key}</div>
                <input type="text" className='border w-full bg-slate-500' name="" id="" value={n.val} />
              </> : ""}
            </div>))}

          {newarray.map(n => (
            <div className="mt-1 flex justify-between items-center">
              {n.visibility && n.editable && n.part === 1 ? <>
                <div className='border w-full bg-slate-200 mr-1'>{n.key}</div>
                <input type="text" className='border mr-2 rounded-xl w-full bg-slate-200' name="" id="" value={n.val} />
                <div class="relative inline-flex items-center cursor-pointer bg-red-900 text-white rounded">
                  <Link to={`edit?userId=${currentUser.id}&key=${n.key}&val=${n.val}`} className=''>edit</Link>
                </div>
              </> : ""}
            </div>))}

        </div>
      }

      {step === 2 &&
        <div className=' text-black'>
          {/* {JSON.stringify(newarray)} */}


          {newarray.map(n => (
            <div className="mt-1 flex justify-between items-center">
              {n.visibility && n.editable && n.part === 2 ? <>
                <div className='border w-full bg-slate-200 mr-1'>{n.key}</div>
                <input type="text" className='border mr-2 rounded-xl w-full bg-slate-200' name="" id="" value={n.val} />
                <div class="relative inline-flex items-center cursor-pointer bg-red-900 text-white rounded">
                  <Link to={`edit?userId=${currentUser.id}&key=${n.key}&val=${n.val}`} className=''>edit</Link>
                </div>
              </> : ""}
            </div>))}

        </div>
      }





    </div>
  );
};

export default MyProfile;


const partical = () => {
  return (
    <div>

    </div>
  )
}




const Togglebtn = (props) => {
  return (
    <label class="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" value="" class="sr-only peer" onChange={props.changed} />
      <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">{props.isPublic && "public"}</span>
    </label>
  )
}


