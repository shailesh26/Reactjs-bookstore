import React from 'react'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import pic from './bbb.jpg'

const HeaderPage = ()=>{


    let navigate = useNavigate();

 
  
    
const  logout= () =>{
      localStorage.clear();
    navigate('/Login');
    
     window.location.reload();
 }

 

 if(localStorage.getItem('Newusername')!=null){
 

 

    return(

        
      
        <div>
         <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
                        <div class="container-fluid">
                               <Link className="navbar-brand" to="/">NEWBOOKS</Link>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                            <span class="navbar-toggler-icon"></span>
                            </button>

                            <div className=" col-md-9 text-center">
                            <img src={pic} class="rounded" alt="" width="85%" height="120"/>
                             </div>
                            <div class="collapse navbar-collapse" id="mynavbar">
                                <ul class="navbar-nav me-auto">
                                <li class="nav-item m-2 p-2">
                                  <Link className="nav-link" to="/BooksSearchnew">Purchase Books</Link>
                                </li>
                                <li class="nav-item m-2 p-2">
                                  <Link className="nav-link" to="/AddBooks">Add Books</Link>
                                </li>
                             
                                <a className="nav-link" href='#/' onClick={logout}>
                                 Welcome - {localStorage.getItem('Newusername')}  <pre><i>LogOut</i></pre>
                        </a>
                               
                             </ul>
                            

                            </div>
                        </div>
                    </nav>
   </div>
   
    )
}else {
    return(
      
        <div>
         <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
                        <div class="container-fluid">
                               <Link className="navbar-brand" to="/">NEWBOOKS</Link>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                            <span class="navbar-toggler-icon"></span>
                            </button>

                            <div className=" col-md-9 text-center">
                            <img src={pic} class="rounded" alt="" width="85%" height="120"/>
                             </div>
                            <div class="collapse navbar-collapse" id="mynavbar">
                                <ul class="navbar-nav me-auto">
                                <li class="nav-item m-2 p-2">
                                  <Link className="nav-link" to="/AddBooks">Add Books</Link>
                                </li>
                                <li class="nav-item m-2 p-2">
                                <Link className="nav-link" to="/Login">Sign Up</Link>
                                </li>
                                
                               
                             </ul>
                            
                                    
                            </div>
                        </div>
                    </nav>
   </div>
   
    )
}



}



export default HeaderPage