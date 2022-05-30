import React,{ useState } from "react"

import { useNavigate } from 'react-router-dom';


const Loginpage = () =>{

    let navigate = useNavigate();

    const[Newusername,pickNewusername]=useState("");
    const[Newemail,pickNewemail]=useState("");
    const[Newpassword,pickNewpassword]=useState("");
    const [msg,updatemessage]=useState("");
    

    const save = () =>{

    

        if(Newusername===""||Newemail===""||Newpassword===""){

            updatemessage("UserName, EmailID and Password is Mandatory!!!")
        }else{

            const regex =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
          
            if(!Newemail || regex.test(Newemail) === false){
          //  if (validator.isEmail(Newemail)) {

            updatemessage("Enter valid Email!!!!")

            }else{

                updatemessage("Logged in Successfully!!!")
                localStorage.setItem('Newemail', Newemail);
                localStorage.setItem('Newusername', Newusername);
             
                navigate('/');
                pickNewemail('')
                pickNewpassword('')
            
                window.location.reload();
          

            }

        }

    }

    return(
        <div className='container-fluid'>
            
        <div className='row'>
         
            
            <div className='col-lg-4 offset-4 mt-3 mb-4'>
            <p className='text-danger text-center'>{msg}</p>

                <h2 className='text-center text-primary'>Login Page</h2>
                <div className='mb-3'>
                    <label>Full Name</label>
                    <input type="text" className='form-control' onChange={(obj)=>pickNewusername(obj.target.value)} value={Newusername} required/>
                </div>
                <div className='mb-3'>
                    <label>Email Id</label>
                    <input type="text" className='form-control' onChange={(obj)=>pickNewemail(obj.target.value)} value={Newemail} />
                </div>
                <div className='mb-3'>
                    <label>Password</label>
                    <input type="password" className='form-control' onChange={(obj)=>pickNewpassword(obj.target.value)} value={Newpassword}/>
                </div>
                
                <div className='text-center'>
                <button className='btn btn-primary' onClick={save}>Login</button>
                
                </div>
                    
            </div>

        </div>

    </div>
    )


}

export default  Loginpage