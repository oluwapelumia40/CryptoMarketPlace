import React from 'react'
import { Helmet } from 'react-helmet-async'
import Footer from './Components/Footer'
import Header from './Components/Header'
import './support.css'
import Button from '@mui/material/Button';
import supportImage from "./images/AiImage.jpg"
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Checkbox from '@mui/material/Checkbox';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function Support() {
    //Routes 
    //CheckBox Terms 
    const label = { inputProps: { 'aria-label': 'Checkbox' } };

    //Formik Logics
    const formik = useFormik({
        initialValues: {
            username: "",
            email:"",
            country: "United Kingdom",
            checked:"",
        },

        
        //validation
        validationSchema: Yup.object().shape({
            username: Yup.string()
                .max(20, "Username must be 20 character or less.")
                .required("username is required"),
            email: Yup.string()
                .email("Please enter a valid email")
                .required("Input a valid email"),
            terms: Yup.array()
                .required("Terms of service must be checked"),
        }),

        //submit formik
        onSubmit: () => {
            console.log("Submitted");
        }

    });

    console.log(formik.errors);

  return (
    <div className='supportPage'>
        <Helmet>
            <title> Contact us </title>
            <meta name='Crypto Market Place' content='Buy with your coin'/>
        </Helmet>
        <Header/>
    <div className="supportHead">
        <div className="leftForm">

            <form onSubmit={formik.handleSubmit} className='formPage' autoComplete="on">

            {/* fill username */}
                <label
                    htmlFor='username' 
                    className='label'
                >
                  Username
                </label>
                <input
                    className= "inputBox"
                    type="text" 
                    name="username" 
                    placeholder="Enter your username"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    id={formik.errors.username && formik.touched.username ? "inputBox" : " "}
                />
                {formik.errors.username && formik.touched.username && <p className="errors">{formik.errors.username}</p>}
                
                {/* fill email */}
                <label
                    htmlFor='email' 
                    className='label'
                >
                   Email
                </label>
                <input
                    className="inputBox"
                    type="email" 
                    name="email" 
                    placeholder="Enter your email address"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    id={formik.errors.email && formik.touched.email ? "inputBox" : ""
                }
                 />
                {formik.errors.email && formik.touched.email && <p className="errors">{formik.errors.email}</p>}
                
                {/* Select your country */}
                    <label
                        htmlFor='country' 
                        className='label'
                    >
                        Country
                    </label>
                    <select
                     name='country'
                     value={formik.values.country}
                     onChange={formik.handleChange} 
                     onBlur={formik.handleBlur}
                     className='checkBox'> 
                        <option> United Kingdom </option>
                        <option> United State </option>
                        <option> Scotland </option>
                        <option> France </option>
                    </select>

                {/* Terms of services */}
                <label
                    htmlFor='terms'
                    className='label'
                > 
                    Terms of services
                </label>
                <Checkbox {...label} 
                    name="terms" 
                    type="checkbox" 
                    value="checked"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}/>
                    <p className='termText'> I agree to the terms and service that my data will be taken. </p>

                {formik.username && formik.email && formik.country && formik.checked === "" ? formik.errors : <Button className='submit' variant="contained" color="primary"> 
                Submit </Button> }
        </form>
        
    </div>
    <div className="rightForm">
        <LazyLoadImage src={supportImage} className="formImage"/>
    </div>
        </div>
        <Footer/>
    </div>
  )
}
