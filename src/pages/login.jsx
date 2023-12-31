import React from 'react'
import { useFormik } from 'formik'
import { basicSchema } from '../schemas'
import "../index.css"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Login() {
  const navigate = useNavigate()
  const onSubmit = async (values, actions)=>{
    console.log(values);
    axios.create({
      baseURL:"https://x8ki-letl-twmt.n7.xano.io/api:XooRuQbs", 
      headers:{
        Accept: "application/json",
        "Content-Type": "application/json",
      }}).post("/auth/login", {email:values.email, password:values.password}).then((res)=>{
        localStorage.setItem("APIKey", res.data.authToken)
        navigate("/home")
      }).catch(err=>{
        alert("Enter Correct Credentials");
        actions.resetForm();
      })
    
  }

  const {values, isSubmitting, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
    initialValues:{
      email:"",
      password:"",
    },
    validationSchema: basicSchema,
    onSubmit
  })
  console.log(errors);
  return (
    <div className=' flex flex-col gap-5 justify-center items-center h-screen'>
      <h1 className=' text-center text-4xl font-extrabold'>Login</h1>
      <form onSubmit={handleSubmit} className=' flex flex-col gap-1' autoComplete='off' action="">
        
        <label htmlFor='email'>Email</label>
        <input value={values.email} onBlur={handleBlur} onChange={handleChange} id='email' type="email" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" /><br/>
        {errors.email && touched.email && <p className=' text-red-500'>{errors.email}</p>}

        <label htmlFor='password'>Password</label>
        <input value={values.password} onBlur={handleBlur} onChange={handleChange} id='password' type="password" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" /><br/>
        {errors.password && touched.password && <p className=' text-red-500'>{errors.password}</p>}
        <button disabled={isSubmitting} type='submit' className="btn btn-success">Log-In</button>
      </form>
      <button onClick={()=>navigate("/forgot")} className=' text-center text-red-600'>Forgot Password?</button>
    </div>
  )
}

export default Login
