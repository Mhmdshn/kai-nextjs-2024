
import React, { useEffect, useState } from 'react';
import { UserAuth } from '../../context/userAuth';
import { userFormFildsAll } from './userFields';
import { makeRequest } from '../../axios';

const NewUserForm = () => {
  const { currentUser, gUser, authId } = UserAuth();
  const [loading, setLoading] = useState(false);
  const [agree, setAgree] = useState(false);
  const siteData = userFormFildsAll;
  const [userData, setUserData] = useState({
    email: gUser.email,
    nid: '',
    fullname: '',
    currentaddress: '',
    currentisland: '',
    registeredaddress: '',
    registeredisland: '',
    dob: '',
    gender: '',
    userIdCopy: '',
    phone: '',
    secret: '',
    created_at: Date.now(),

  });


  const [error, setError] = useState([]);


  const handleChange = (e) => {
    e.preventDefault();
    const { id, value } = e.target;
    setUserData({
      ...userData,
      [id]: value,
    });
  };

  const [step, setStep] = useState(1);
  const nextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const steps = () => {
    if (step === 1) { return "ޢާންމު މަޢުލޫމާތު" }
    if (step === 2) { return " މަޢުލޫމާތު ކަށަވަރުކުރުން" }
    if (step === 3) { return "މަޢުލޫމާތު ފޮނުވުން" }
  }

  const handleSave = async (e) => {

    e.preventDefault();
    try {
      console.log("saving")
      const res = await makeRequest.post("/users/",
        userData,
        { withCredentials: true, }
      );
      console.log("done")
      return res;
    } catch (error) {
      console.log(error)
      console.log("error adding User to database")
    }

    // const keys = Object.keys(userData);
    // const values = Object.values(userData);
    // console.log(userData);
    // const postUrl =
    //   'https://script.google.com/macros/s/AKfycbxNurT1f56MGEyYUr1sfjRLcUzMGWBcjEBodRCPOvcuaSkXVuAYEXxhQ0A-lF1eLFuW/exec';
    // fetch(postUrl, {
    //   method: 'POST',
    //   mode: 'no-cors',
    //   cache: 'no-cache',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   redirect: 'follow',
    //   body: JSON.stringify(values),
    // });
  };

  const submitt = handleSave;

  return (
    <div className="max-w-2xl mx-auto pt-3 text-xl p-3">
      <h1 className="text-2xl font-semibold mb-4 text-center bg-blue-800 rounded-3xl">Create Account </h1>
      <div dir="rtl">
        <div className="steps flex justify-between p-4 rounded-xl text-2xl bg-gradient-to-b from-indigo-600 to-green-800 mb-8">
          <div className='text-center'>{steps()}</div>
          <div>Part: {step && step} of 3</div>
        </div>




        <div className='loading'>{loading && <p>Loading..</p>}</div>

        <div id="part1" className={`${step === 1 ? '' : 'hidden'}`}>
          {siteData?.map((item, i) =>
            item.step === 'part1' && item.type === 'select' ? (
              <SelectObj
                key={i}
                id={item.id}
                value={userData.id}
                label={item.label_dv}
                obj={item.obj}
                onChange={handleChange}
              />
            ) : (
              ''
            )
          )}
          {siteData?.map((item, i) =>
            item.step === 'part1' &&
              item.type === 'text' &&
              'password' &&
              'date' &&
              'number' ? (
              <FormInput
                key={i}
                dir={item.dir}
                type={item.type}
                id={item.id}
                value={userData.id}
                label={item.label_dv}
                onChange={handleChange}
              />
            ) : (
              ''
            )
          )}
          {siteData?.map((item, i) =>
            item.step === 'part1' && item.type === 'email' ? (
              <SelectEmail
                key={i}
                id={item.id}
                value={userData.id}
                label={item.label_dv}
                obj={item.obj}
                onChange={handleChange}
              />
            ) : (
              ''
            )
          )}
          {siteData?.map((item, i) =>
            item.step === 'part1' && item.type === 'file' ? (
              <UploadImage
                key={i}
                id={item.id}
                value={userData.id}
                label={item.label_dv}
                obj={item.obj}
                onChange={handleChange}
              />
            ) : (
              ''
            )
          )}

        </div>

        <div id="part2" className={`${step === 2 ? '' : 'hidden'}`}>
          {<>
            <div className='flex gap-3 p-3'>
              <div><input type="checkbox" name="agree" id="checkagree" checked={agree} onChange={() => { setAgree(!agree) }} /></div>
              <div>މި ޕޯޓަލްއަށް އަޅުގަނޑު މިދޭ މަޢުލޫމާތަކީ ޞައްޙަ ތެދު މަޢުލޫމާތުކަމަށް އަޅުގަނޑު އިޤްރާރުވަމެވެ.</div>

            </div>
            { }
          </>

          }

        </div>



        <div id="part3" className={`${step === 3 ? '' : 'hidden'}`}>
          {"ކައިވެނި ޕޯޓަލުގައި ރެޖިސްޓަރވުމަށް ފޯމް ފޮނުވާލައްވާ!"}

        </div>
      </div>


      {step === 3 && (
        <div className="flex justify-between m-4">
          <button
            className=" bg-red-100 hover:bg-red-300 text-white rounded-full text-xl px-3 py-3 pr-6 pl-6"
            onClick={prevStep}
          >
            ފަހަތަށް
          </button>
          <button
            dir="rtl"
            onClick={submitt}
            className="bg-blue-500 text-white px-3 py-3 pr-6 pl-6 rounded-full text-xl hover:bg-blue-900"
          >
            ފޮނުވާ!
          </button>
        </div>
      )}
      {step === 2 && (
        <div className="flex justify-between m-4">
          <button
            className=" bg-slate-500 hover:bg-red-400 rounded-full text-xl px-3 py-3 pr-6 pl-6"
            onClick={prevStep}
          >
            ފަހަތަށް
          </button>
          <button

            dir="rtl"
            onClick={nextStep}
            className={`bg-blue-500 text-white px-3 py-3 pr-6 pl-6 rounded-full text-xl hover:bg-blue-600 ${!agree && "hidden"}`}
          >
            ކުރިޔަށް
          </button>
        </div>
      )}
      {step === 1 && (
        <div dir="rtl" className="flex justify-between m-4">
          <button
            dir="rtl"
            onClick={nextStep}
            className="bg-blue-500 text-white px-3 py-3 pr-6 pl-6 rounded-full text-xl hover:bg-blue-600"
          >
            ކުރިޔަށް
          </button>
        </div>
      )}
    </div>
  );
};

export default NewUserForm;

const eachContainer = `mb-4 mt-2`;
const inputstyle = `w-full border rounded-md p-2 mt-2 hover:bg-green-100 text-black`;


const SelectObj = (props) => {
  return (
    <div className={eachContainer}>
      <label htmlFor={props.id} className="">
        {props.label}
      </label>
      <select
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        className={inputstyle}
      >
        <option value="choose">{props.label} ޚިޔާރުކުރައްވާ! </option>

        {props.obj &&
          eval(props.obj).map((item, i) => (
            <option key={i} id={item.id}>
              {item.body}
            </option>
          ))}
      </select>
    </div>
  );
};

function FormInput(props) {
  return (
    <>
      <div className={eachContainer}>
        <label htmlFor="title" className="block font-medium">
          {props.label}
        </label>
        <input
          dir={props.dir}
          type={props.type}
          id={props.id}
          value={props.value}
          className={inputstyle}
          onChange={props.onChange}
        />
      </div>
    </>
  );
}

const SelectEmail = (props) => {
  const { gUser } = UserAuth();
  return (
    <div className={eachContainer}>
      <label htmlFor={props.id} className="">
        {props.label}
      </label>
      <select
        id={props.id}
        dir={props.dir}
        value={props.value}
        onChange={props.onChange}
        className={inputstyle}
      >
        <option value="choose">...</option>
        <option value={`${gUser ? gUser.email : 'nomail'}`}>{gUser?.email}</option>
        {props.obj &&
          eval(props.obj).map((item, i) => (
            <option key={i} id={item.id}>
              {item.body}
            </option>
          ))}
      </select>
    </div>
  );
};

function UploadImage(props) {
  return (
    <>

      <div className={eachContainer}>
        <label htmlFor="title" className="block font-medium">
          {props.label}
        </label>
        <input
          name="image"
          accept="image/*"
          dir={props.dir}
          type="file"
          id={props.id}
          value={props.value}
          className={`${inputstyle} text-white hover:text-black`}
          onChange={props.onChange}
        />
      </div>
    </>
  );
}

const createNewUser = async (inputs) => {
  console.log(inputs)
  try {
    const res = await makeRequest.post(
      "/users/",
      inputs,
      { withCredentials: true, }
    );
    console.log("done")
    return res;
  } catch (error) {
    return error
  }

};