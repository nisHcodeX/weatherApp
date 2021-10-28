import "bootstrap/dist/css/bootstrap.css"
import "./index.scss"
import { Link } from 'react-router-dom'
// import { useState } from 'react'

import { BsFillPersonFill, BsFillPersonLinesFill,BsFillTelephoneFill,BsChatTextFill } from "react-icons/bs";
import { useFormik} from 'formik'
import * as Yup from 'yup'
// import 'yup-phone';
const rePhoneNumber = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;
const ContactUs = () => {
    // const [firstName, setFisrtName] = useState('');
    // const [lastName, setLastName] = useState('');
    // const [email, setEmail] = useState('');
    // const [message, setMessage] = useState('');

    // const onSubmit = (e) => {
    //     e.preventDefault()
    //     if (!firstName || !lastName || !email || !message) {
    //         alert('fill the form')
    //     }
    //     const details = { firstName, lastName, email, message }
    //     console.log(details)
    //     setFisrtName('')
    //     setLastName('')
    //     setEmail('')
    //     setMessage('')
    // }
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            phoneNumber: '',
            message:'',
        },
        onSubmit: (values, {resetForm}) => {
            // alert(JSON.stringify(values, null, 2))
            console.log(values)
            resetForm(values = '')
        },
        validationSchema : Yup.object({
            firstName : Yup.string()
            .max(10, '* Must be 15 characters or less')
            .required('* Required'),
            lastName : Yup.string()
            .max(15, '* Must be 20 characters or less')
            .required('* Required'),
            message : Yup.string()
            .max(200, '* Must be 200 characters or less')
            .required('* Required'),
            phoneNumber : Yup.string()
            .matches(rePhoneNumber, 
            {message: "* Please enter valid number", excludeEmptyString: false})
            .max(10,'* Numbers Must be 10 characters or less')
        })
    })
    return (
        <div className="contactUs">
            <div className="contactUs-Main">
                <div>
                    <h2>CONTACT US</h2>
                    <h6>FEEL FREE TO DROP A MESSAGE</h6>
                </div>
                <div>
                    <form onSubmit={formik.handleSubmit}>
                        <div>
                            <label className="icon">
                                <BsFillPersonFill />
                            </label>
                            <label>
                                FIRST NAME
                             </label>
                            <br />
                            <input
                                id='firstName'
                                // name='firstName'
                                type='text'
                                placeholder='FIRST NAME'
                                // value={formik.values.firstName}
                                // onChange={formik.handleChange}
                                {...formik.getFieldProps('firstName')}
                            />
                        </div>
                        {
                            formik.touched.firstName && formik.errors.firstName ? (<div className="validationFields">{formik.errors.firstName}</div>) : null
                        }
                        <div>
                            <label className="icon">
                                <BsFillPersonLinesFill />
                            </label>
                            <label>
                                LAST NAME
                             </label>
                            <br />
                            <input
                                id='lastName'
                                // name='lastName'
                                type='text'
                                placeholder='LAST NAME'
                                // value={formik.values.lastName}
                                // onChange={formik.handleChange}
                                {...formik.getFieldProps('lastName')}
                            />
                        </div>
                        {
                            formik.touched.lastName && formik.errors.lastName ? (<div className="validationFields">{formik.errors.lastName}</div>) : null
                        }
                        <div>
                            <label className="icon">
                                <BsFillTelephoneFill />
                            </label>
                            <label>
                                PHONE NUMBER
                        </label>
                            <input
                                id='phoneNumber'
                                // name='email'
                                type='text'
                                placeholder='Phone Number'
                                // value={formik.values.email}
                                // onChange={formik.handleChange}
                                {...formik.getFieldProps('phoneNumber')}
                            />
                        </div>
                        {
                            formik.touched.phoneNumber && formik.errors.phoneNumber ? (<div className="validationFields">{formik.errors.phoneNumber}</div>) : null
                        }
                         <div>
                            <label className="icon">
                                <BsChatTextFill />
                            </label>
                            <label>
                                MESSAGE
                            </label>
                            <textarea
                                id='message'
                                // name='message'
                                type='text'
                                placeholder='MESSAGE'
                                // value={formik.values.message}
                                // onChange={formik.handleChange}
                                {...formik.getFieldProps('message')}
                            />
                        </div>
                        {
                            formik.touched.message && formik.errors.message ? (<div className="validationFields">{formik.errors.message}</div>) : null
                        }
                        <div>
                            <button className='btn' type='submit'>SEND</button>
                        </div>
                    </form>
                </div>
                <div>
                    <Link to="/"><button className="btn">BACK</button></Link>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
