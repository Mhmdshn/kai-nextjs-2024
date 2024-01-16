
import React, { useEffect, useState } from 'react';
import { UserAuth } from '../../context/userAuth';
import { userFields } from './fields';
import { profileFormFildsAll } from './profileFields';
const NewProfileForm = () => {
  const { addProfile, currentUser } = UserAuth();
  const [loading, setLoading] = useState(false);
  const siteData = profileFormFildsAll;
  const [userData, setUserData] = useState({
    userId: currentUser.id,
    nickname: '',
    livingIn: '',
    aboutme: '',
    photo: '',
    education: '',
    job: '',
    salary: '',
    willing2relocate: '',
    profilepostedby: '',
    maritalstatus: '',
    noofmarriages: '',
    children: '',
    kids_staying_at: '',
    like_to_have_children: '',
    polygyny: '',
    health: '',
    pray: '',
    languages: '',
    origin: '',
    haircolor: '',
    bodytype: '',
    height: '',
    dresscode: '',
    l4_atoll: '',
    l4_island: '',
    l4_age_range_start: '',
    l4_age_range_end: '',
    l4_willing2relocate: '',
    l4_maritalstatus: '',
    l4_children: '',
    l4_kids_staying_at: '',
    l4_like_to_have_children: '',
    l4_poligyny: '',
    l4_languages: '',
    l4_pray: '',
    l4_origin: '',
    l4_haircolor: '',
    l4_bodytype: '',
    l4_height: '',
    l4_dresscode: '',
    l4_profession: '',
    l4_minimum_qualification: '',
    l4_other: '',
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
    if (step === 2) { return "ދިރިއުޅުމާއި ގުޅޭ އަމިއްލަ މަޢުލޫމާތު" }
    if (step === 3) { return " ބޭނުންވާ ފަރާތުގެ މަޢުލޫމާތު" }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userData)
    try {
      const status = await addProfile(userData)
      console.log(status)
      window.location.replace("/")
    } catch (error) {
      console.log("error creating profile")
    }

  }
  const handleSave = (e) => {
    e.preventDefault();
    const keys = Object.keys(userData);
    const values = Object.values(userData);
    console.log(values);
    const postUrl =
      'https://script.google.com/macros/s/AKfycbxNurT1f56MGEyYUr1sfjRLcUzMGWBcjEBodRCPOvcuaSkXVuAYEXxhQ0A-lF1eLFuW/exec';
    fetch(postUrl, {
      method: 'POST',
      mode: 'no-cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow',
      body: JSON.stringify(values),
    });
  };

  const submitt = handleSubmit;

  return (
    <div className="max-w-2xl mx-auto pt-3 text-xl">
      <h1 className="text-2xl font-semibold mb-4 text-center bg-blue-800 rounded-3xl">Create My Profile</h1>
      <div dir="rtl">
        <div className="steps flex justify-between p-4 rounded-xl text-2xl bg-gradient-to-b from-indigo-600 to-green-800 mb-8">
          <div className='text-center'>{steps()}</div>
          <div>Part: {step && step}</div>
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
          Page:{step && step}
        </div>
        <div id="part2" className={`${step === 2 ? '' : 'hidden'}`}>
          {siteData?.map((item, i) =>
            item.step === 'part2' && item.type === 'select' ? (
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
            item.step === 'part2' &&
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
            item.step === 'part2' && item.type === 'email' ? (
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
          Page:{step && step}
        </div>
        <div id="part3" className={`${step === 3 ? '' : 'hidden'}`}>
          {siteData?.map((item, i) =>
            item.step === 'part3' && item.type === 'select' ? (
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
            item.step === 'part3' &&
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
            item.step === 'part3' && item.type === 'email' ? (
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
          Page:{step && step}
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
            className="bg-blue-500 text-white px-3 py-3 pr-6 pl-6 rounded-full text-xl hover:bg-blue-600"
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

export default NewProfileForm;

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
