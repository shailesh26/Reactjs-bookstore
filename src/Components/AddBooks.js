import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';




const AddNewBooks = () =>{
    let navigate = useNavigate();
    

   
    const[bnmae,pickbname]=useState("")
    const[yname,pickyname]=useState("")
    const[aname,pickaname]=useState("")
    const[rate,pickratee]=useState("")
    const[bimages,pickbimages]=useState("")
    const[bdescrp,pickbdescrp]=useState("")

    const[bookdetails,Setbookdetails]=useState([{
        "id":1,
        "images":"https://cdn.asaha.com/assets/thumbs/653/653f249a58f438ef343c5da5f023203d.jpg",
        "Title":"Give and Take: WHY HELPING OTHERS DRIVES OUR SUCCESS",
        "Auther":"Adam Grant",
        "Rating":"9/10",
       },{
        "id":2,
        "images":"https://cdn.asaha.com/assets/thumbs/2b0/2b0d9a4f533872d9c6f68e6767da1ce8.jpg",
        "Title":"You Are Not So Smart:",
        "Auther":"David North",
        "Rating":"8.9/10",
        },{
        "id":3,
        "images":"https://cdn.asaha.com/assets/thumbs/436/4363a573dce18de6452986dcee9e54eb.jpg",
        "Title":"Boundaries",
        "Auther":"Henry Cloud",
        "Rating":"6.5/10",
        },{
        "id":4,
        "images":"https://cdn.asaha.com/assets/thumbs/9b8/9b88b7c17f496a61fc78505130af288e.jpg",
        "Title":"Living in the Light",
        "Rating":"8/10",
        "Auther":"Joanne RowlingDavid Sargent",
         },{
        "id":5,
        "images":"https://cdn.asaha.com/assets/thumbs/f09/f093c203496024043455817fd7a7ef3f.jpg",
        "Title":"The Purpose-Driven Life",
        "Rating":"6/10",
        "Auther":"Rick Warren",
       },{
        "id":6,
        "images":"https://cdn.asaha.com/assets/thumbs/ed5/ed59854c54d482b0efb0ee9bebbd7a72.jpg",
        "Title":"Braiding Sweetgrass",
        "Rating":"6/10",
        "Auther":"Robin",
       },{
        "id":7,
        "images":"https://cdn.asaha.com/assets/thumbs/4c9/4c902e862c6dd971cd9ff782f319dd94.jpg",
        "Title":"Just Mercy",
        "Rating":"6/10",
        "Auther":"Brayan",
       },{
        "id":8,
        "images":"https://cdn.asaha.com/assets/thumbs/cbc/cbccfdcf43fe538b39780f4f00ef21a9.jpg",
        "Title":"Napoleon",
        "Rating":"6/10",
        "Auther":"Frank",
       }]);
   
    const[message, Setmessage]=useState("Please Enter the New Book Details !!!")

    const Save = (e) =>{

        if(localStorage.getItem('Newusername')!=null){
          
            e.preventDefault();    
        
            if(bnmae===""||aname===""||rate===""||bdescrp===""||bimages===""){
                alert('All fields are Mandatory to fill !!!')
               Setmessage("All fields are Mandatory to fill !!!")
               return false;
            }
    
           const newbookdetails = {
    
           "images":bimages,
            "Title":bnmae,
            "Auther":aname,
            "Rating":rate,
            "Description":bdescrp
        }
    
        Setbookdetails(bookdetails=>[...bookdetails,newbookdetails])
        Setmessage(bnmae+"New Book Details Added Successfully!!!")
        pickbname("")
        pickyname("")
        pickaname("")
        pickratee("")
        pickbimages("")
        pickbdescrp("")
        Setmessage("")
        }
        else{
           
            alert('You need to Login first to Add New Books !!!')
            navigate('/Login');
        }
       


    }

    return(
        <div className='container-fluid'>
             
            <div className='row'>
               

            <div className='col-lg-3'>
            <h3 className='text-center mt-3'>Add books</h3>
            <p className='text-danger'>{message}</p>

            
                <div className='form-group mb-3'>
                        <label >Book Name</label>
                        <input type="text" class="form-control"  onChange={obj=>pickbname(obj.target.value)} value={bnmae} />
                </div>
                <div className='form-group  mb-3'>
                        <label >You Name</label>
                        <input type="text" class="form-control"  onChange={obj=>pickyname(obj.target.value)} value={yname}/>
                </div>
                <div className='form-group  mb-3'>
                        <label >Author Name</label>
                        <input type="text" class="form-control"  onChange={obj=>pickaname(obj.target.value)} value={aname}/>
                </div>
                <div className='form-group  mb-3'>
                        <label >Book Images</label>
                        <input type="text" class="form-control"  onChange={obj=>pickbimages(obj.target.value)} value={bimages}/>
                </div>
                <div className='form-group  mb-3'>
                        <label >Book Rating</label>
                        <input type="text" class="form-control"  onChange={obj=>pickratee(obj.target.value)} value={rate}/>
                </div>
                <div className='form-group  mb-3'>
                        <label for="Bookdesp">Book Description</label>
                        <textarea  class="form-control"  onChange={obj=>pickbdescrp(obj.target.value)} value={bdescrp}/>
                </div>
                
                <button type="submit" class="btn btn-primary" onClick={Save}>Submit</button>
              
            

            </div>
            <div className='col-lg-9 mt-3'>
             <div>
                
                <table className='table'>
                        <thead>
                            <tr>
                                <th>S No.</th>
                                <th>Title</th>
                                <th>Author</th>
                                <th>Images</th>
                                <th>Rating</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                           { 
                               bookdetails.map((bookinfo,index)=>{
                                    return(

                                        <tr key={index}>
                                        <td>{index}</td>
                                        <td>{bookinfo.Title}</td>
                                        <td>{bookinfo.Auther}</td>
                                        <td><img src={bookinfo.images}  alt='' width="80"/></td>
                                        <td>{bookinfo.Rating}</td>
                                       
                                    </tr>

                                    )
                              
                               })
                            } 

                        </tbody>
                    </table>
                      
                  
             
            </div>
             </div>

            </div>
           
         
        </div>
    )
}

export default AddNewBooks