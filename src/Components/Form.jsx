import React, { useState } from 'react'
import { Button, TextField,Stack } from '@mui/material'

function Form() {
    const [firstname,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")
    const [address,setAddress] = useState("")
    const [mobileNumber,setMobileNumber] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [gender, setGender] = useState("");
    const [options,setOptions] = useState({
        course: '',
      });
    const [dateOptions,setDateOptions] = useState({
        dates: '',
        month: '',
        year:'',
      });
     


    const [isFirstNameInValid,setIsFirstNameInValid] = useState(false)
    const [isLastNameInValid,setIsLastNameInValid] = useState(false)
    const [isAddressInValid,setIsAddressInValid] = useState(false)
    const [isMobileNumberInValid,setIsMobileNumberInValid] = useState(false)
    const [isEmailInValid,setIsEmailInvalid] = useState(false)
    const [isPasswordInValid,setIsPasswordInValid] = useState(false)
    // const [isDOBInValid,setIsDOBInValid] = useState(false)
    // const [isGenderInValid,setIsGenderInValid] = useState(false)
    // const [isCourseInValid,setIsCourseInValid] = useState(false)

    // const handleChange = ()=>
    // {
    //     console.log("nb");
    // }

    const handleInputValidation= (tag)=>
    {
        const {name,value} = tag
        // console.log(name,value);
        console.log(/^[a-zA-Z]+ [a-zA-Z]+$/);
        // console.log(!!value.match(/^[a-zA-Z]+ [a-zA-Z]+$/));
        // Name validation
        if(!!value.match(/^[a-zA-Z ]{2,30}$/))
        {
            if(name=='firstName')
            {
                setFirstName(value)
                setIsFirstNameInValid(false)
            }
            else if(name=='lastName'){
                setLastName(value)
                setIsLastNameInValid(false)   
            }
        }
        else{
            if(name=='firstName')
            {
                setFirstName(value)
                setIsFirstNameInValid(true)
            }
            else if(name=='lastName'){
                setLastName(value)
                setIsLastNameInValid(true)   
            }
        }
        // address validation
        if(!!value.match(/^[a-zA-Z0-9\s,'-]*$/))
        {
            if(name=='address')
            {
                setAddress(value)
                setIsAddressInValid(false)
            }
        }
        else{
            if(name=='address')
            {
                setAddress(value)
                setIsAddressInValid(true)
            }
        }
        // mobilenumber validation
        if(!!value.match(/^\+?([0-9]{0,3})\)?[-. ]?([0-9]{5})[-. ]?([0-9]{5})$/))
        {
            if(name=='mobilenumber')
            {
                setMobileNumber(value)
                setIsMobileNumberInValid(false)
            }
        }
        else{
            if(name=='mobilenumber')
            {
                setMobileNumber(value)
                setIsMobileNumberInValid(true)
            }
        }
        // password validation
        // console.log(/^[a-zA-Z0-9!@#$%^&*]{6,16}$/);
        if (!!value.match(/^.*(?=.{6,16})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/))
        {
            if(name=='password')
            {
                setPassword(value)
                setIsPasswordInValid(false)
            }
        }
        else
        {
            if(name=='password')
            {
                setPassword(value)
                setIsPasswordInValid(true)
            }
        }
        // email validation
        if(!!value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/))
        {
            if(name=='email')
            {
                setEmail(value)
                setIsEmailInvalid(false)
            }
        }
        else{
            if(name=='email')
            {
                setEmail(value)
                setIsEmailInvalid(true)
            }
        }
  
        
        // if(!!value.match(/^[a-zA-Z]+ [a-zA-Z]+$/))

        // {
        //     if(name=='firstName')
        //     {
        //         setFirstName(value)
        //         setIsFirstNameInValid(false)
        //     }
        //     else if(name=='lastName')
        //     {
        //         setLastName(value)
        //         setIsLastNameInValid(false)
        //     }
        //     else if(name=='address')
        //     {
        //         setAddress(value)
        //         setIsAddressInValid(false)
        //     }
        //     else if(name=='mobileNumber')
        //     {
        //         setMobileNumber(value)
        //         setIsMobileNumberInValid(false)
        //     }
        //     else if(name=='email')
        //     {
        //         setEmail(value)
        //         setIsEmailInvalid(false)
        //     }
        //     else if(name=='password')
        //     {
        //         setPassword(value)
        //         setIsPasswordInValid(false)
        //     }
        //     else if(name=='dob')
        //     {
        //         setDOB(value)
        //         setIsDOBInValid(false)
        //     }
        //     else if(name=='gender')
        //     {
        //         setGender(value)
        //         setIsGenderInValid(false)
        //     }
        //     else(name=='course')
        //     {
        //         setCourse(value)
        //         setIsCourseInValid(false)
        //     }

        // }
        // else
        // {
        //     if(name=='firstName')
        //     {
        //         setFirstName(value)
        //         setIsFirstNameInValid(true)
        //     }  
        //     else if(name=='lastName')
        //     {
        //         setLastName(value)
        //         setIsLastNameInValid(true)
        //     }
        //     else if(name=='address')
        //     {
        //         setAddress(value)
        //         setIsAddressInValid(true)
        //     }
        //     else if(name=='mobilenumber')
        //     {
        //         setMobileNumber(value)
        //         setIsMobileNumberInValid(true)
        //     }
        //     else if(name=='email')
        //     {
        //         setEmail(value)
        //         setIsEmailInvalid(true)
        //     }
        //     else if(name=='password')
        //     {
        //         setPassword(value)
        //         setIsPasswordInValid(true)
        //     }
        //     else if(name=='dob')
        //     {
        //         setDOB(value)
        //         setIsDOBInValid(true)
        //     }
        //     else if(name=='gender')
        //     {
        //         setGender(value)
        //         setIsGenderInValid(true)
        //     }
        //     else(name=='course')
        //     {
        //         setCourse(value)
        //         setIsCourseInValid(true)
        //     }
        // }
    }
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setOptions({
          ...options,
          [name]: value,
        });
      };

    const handleDateChange = (e) =>
    {
        const {name, value} = e.target;
        setDateOptions({
            ...dateOptions,
            [name]:value,
        })
    }

  function onChangeValue(event) {
    setGender(event.target.value);
    console.log(event.target.value);
  }

    const handleRegister=()=>{


        // console.log("Button clicked");
        if(firstname && lastName && address && mobileNumber && email && password && dateOptions.dates && dateOptions.dates && dateOptions.dates && gender && options.course)
        {
        // console.log("ok");
        alert( 
            `   SUCCESSFULLY REGISTERED!!!
                            STUDENT DETAILS  
                        FIRST NAME :${firstname}
                        LAST NAME : ${lastName}
                        ADDRESS :${address}
                        MOBILE NUMBER :${mobileNumber}
                        EMAIL : ${email}
                        PASSWORD : ${password}
                        D.O.B : ${dateOptions.dates}/${dateOptions.month}/${dateOptions.year}
                        GENDER : ${gender}
                        COURSE  : ${options.course}
           `      
        
        )
       
        }
        else
        {
            alert("Please fill the Form Completely!!!")
        }
      
       }
       const handleCancel = ()=>

       {

        setFirstName("")
        setLastName("")
        setAddress("")
        setMobileNumber("")
        setEmail("")
        setPassword("")
        setOptions("")
        setGender("")
        setDateOptions("")
        setIsFirstNameInValid(false)
        setIsLastNameInValid(false)
        setIsAddressInValid(false)
        setIsMobileNumberInValid(false)
        setIsEmailInvalid(false)
        setIsPasswordInValid(false)

       }
      
  return (
<div style={{minHeight:'100vh',width:'100%'}} className='d-flex flex-column pt-3 align-items-center'>
    
    <div  className=" bg-transperant innerdiv p-5 rounded">

            <form >
                <h6>Name</h6>
                <div className="mb-3 d-flex justify-content-between">
                
                <TextField value={firstname || ""} onChange={e=>handleInputValidation(e.target)} name='firstName' id="outlined-basic" label="First Name" variant="outlined"/>
                { isFirstNameInValid &&
                <div className="ps-2 text-danger">Invalid first Name</div>
                }
                <TextField value={lastName || ""} onChange={e=>handleInputValidation(e.target)} name='lastName' id="outlined-basic" label="Last Name" variant="outlined" />
                { isLastNameInValid &&
                <div className="ps-2 text-danger">Invalid last Name</div>
                }
                </div>
               
                <h6>Address</h6>
                <div className="mb-3">
                <TextField value={address || ""} onChange={e=>handleInputValidation(e.target)}  name='address' id="outlined-basic" label="Address" variant="outlined" className='w-100' />
                { isAddressInValid &&
                    <div className="ps-2 text-danger">Invalid Address</div>
                }
                </div>
                <h6>Mobile Number</h6>
                <div className="mb-3">
                <TextField value={mobileNumber || ""} onChange={e=>handleInputValidation(e.target)} name='mobilenumber' id="outlined-basic" label="Mobile Number" variant="outlined" className='w-100' />
                { isMobileNumberInValid &&
                    <div className="ps-2 text-danger">Include Country code(optional) (10 digits)</div>
                }
                </div>
                <h6>Email</h6>
                <div className="mb-3">
                <TextField value={email || ""} onChange={e=>handleInputValidation(e.target)} name='email' id="outlined-basic" label="Email" variant="outlined" className='w-100' />
                { isEmailInValid &&
                    <div className="ps-2 text-danger">Invalid Email!!!</div>
                }
                </div>
                <h6>Password</h6>
                <div className="mb-3">
                <TextField value={password || ""} onChange={e=>handleInputValidation(e.target)} name='password' type='password' id="outlined-basic" label="Password" variant="outlined" className='w-100' />
                { isPasswordInValid &&
                    <div className="ps-2 text-danger">Password should contain atleast one number(0-9),one alphabet and one special character(!@#$%^&*),length must from 6 to 16 </div>
                }
                </div>
                <h6>Date of Birth</h6>
                <div className="mb-3 d-flex justify-content-evenly">
                    {/* day selection */}
                <label htmlFor="dates" ></label>
                    <select className='border bg-transparent border-secondary rounded-1' style={{height:'50px'}}
                        id="dates"
                        name="dates"
                        value={dateOptions.dates || ""}
                        onChange={handleDateChange}
                        required
                    >
                        <option hidden value="">Day</option>
                        <option value="Sunday">Sunday</option>
                        <option value="Monday">Monday</option>
                        <option value="Tuesday">Tuesday</option>
                        <option value="Wednesday">Wednesday</option>
                        <option value="Thursday">Thursday</option>
                        <option value="Friday">Friday</option>
                        <option value="Saturday">Saturday</option>
                    </select>
                    {/* month selection */}
                    <label htmlFor="month" ></label>
                    <select className='border bg-transparent border-secondary  rounded-1' style={{height:'50px'}}
                        id="month"
                        name="month"
                        value={dateOptions.month || ""}
                        onChange={handleDateChange}
                        required
                    >
                        <option hidden value="">Month</option>
                        <option value="January">January</option>
                        <option value="February">February</option>
                        <option value="March">March</option>
                        <option value="April">April</option>
                        <option value="May">May</option>
                        <option value="June">June</option>
                        <option value="July">July</option>
                        <option value="August">August</option>
                        <option value="Septemper">Septemper</option>
                        <option value="October">October</option>
                        <option value="November">November</option>
                        <option value="December">December</option>
                    </select>
                    {/* year selection */}
                    <label htmlFor="year" ></label>
                    <select className='bg-transparent border   border-secondary  rounded-1' style={{height:'50px'}}
                        id="year"
                        name="year"
                        value={dateOptions.year || ""}
                        onChange={handleDateChange}
                        required
                    >
                        <option hidden value="">Year</option>
                        <option value="1990">1990</option>
                        <option value="1991">1991</option>
                        <option value="1992">1992</option>
                        <option value="1993">1993</option>
                        <option value="1994">1994</option>
                        <option value="1995">1995</option>
                        <option value="1996">1996</option>
                        <option value="1997">1997</option>
                        <option value="1998">1998</option>
                        <option value="1999">1999</option>
                        <option value="2000">2000</option>
                        <option value="2001">2001</option>
                        <option value="2002">2002</option>
                        <option value="2003">2003</option>
                        <option value="2004">2004</option>
                        <option value="2005">2005</option>
                        <option value="2006">2006</option>
                    </select>

                </div>
         

                <h6>Gender</h6>
                <div className="mb-3">
                    <div onChange={onChangeValue}>
                        <input className='ms-3' type="radio" value="Male" name="gender" checked={gender === "Male"} /> Male
                        <input className='ms-3' type="radio" value="Female" name="gender" checked={gender === "Female"}/> Female
                        <input className='ms-3' type="radio" value="Other" name="gender" checked={gender === "Other"} /> Other
                    </div>
                </div>
                <h6>Course</h6>
                <div className="mb-3">
                <label htmlFor="course" ></label>
                    <select className='w-100  bg-transparent border border-1 border-secondary rounded-1' style={{height:'50px'}}
                        id="course"
                        name="course"
                        value={options.course || ""}
                        onChange={handleInputChange}
                        required
                    >
                        <option hidden value="">Select Course</option>
                        <option value="Mathematics">Biology</option>
                        <option value="Science">Computer Science</option>
                        <option value="History">Commerce</option>
                        <option value="History">Humanities</option>
                    </select>
                </div>

                <Stack direction="row" spacing={2}>
                <Button disabled={isFirstNameInValid || isLastNameInValid || isAddressInValid || isEmailInValid || isMobileNumberInValid || isPasswordInValid } onClick={handleRegister} color='success' style={{width:'50%',height:'70px' }} variant="contained">REGISTER</Button>
                <Button style={{width:'50%',height:'70px' }} onClick={handleCancel} color='error' variant="outlined">CANCEL</Button>
                </Stack>
    
            </form>
    </div>

</div>
  )
}

export default Form
