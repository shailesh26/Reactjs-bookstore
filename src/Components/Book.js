import React from "react"
import {  useNavigate } from "react-router-dom"

const Book = (props) =>{
    let navigate = useNavigate();

  const save = () =>{

    if(localStorage.getItem('Newusername')!=null){
     

      if(id===1){

       
        navigate('/PdfViewA');
      }else if (id===2)
      {
        navigate('/PdfviewD');
      }else if (id===3)
      {
        navigate('/PdfviewH');
      }else if (id===4)
      {
        navigate('/PdfviewRow');
      }else if (id===5)
      {
        navigate('/PdfviewR');
      }else if (id===6)
      {
        navigate('/PdfviewRobin');
      }else if (id===7)
      {
        navigate('/PdfViewB');
      }else if (id===8)
      {
        navigate('/PdfviewNepolean');
      }else{
        navigate('/');
      }
    }else{

      alert('You need to Login first to View the Books !!!')
      navigate('/Login');

    }

  }
  
  const {Title,images,Rating,Auther,id} = props
     
      return(
         <div className='card new' onClick={save}>
             
             <img src={images}className='card-img-top' alt=''/>
          <div className='card-body p-4'>
           <h5 class="card-title">{Title}</h5> 
                  <h8 class="card-title">By {Auther}</h8>
                  <p className='card-text'>⭐{Rating}</p>
                 
         </div>
        
      </div>
      )
  }

  export default Book;