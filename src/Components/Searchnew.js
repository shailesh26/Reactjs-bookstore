import React, { useState } from "react";  

import Bookies from './bookies'



const BooksSearchnew=() =>{  

     
    const [result, setResult] = useState(Bookies);  
    // the value of the search field 
  const [name, setName] = useState('');
   
  
    function handleChange(event) {  
        const keyword =  event.target.value;  

      if(keyword!==''){
        const results =Bookies.filter((item)=>{

            return item.volumeInfo.title.toLowerCase().startsWith(keyword.toLowerCase());
        })
        setResult(results)
      }else{
        setResult(Bookies);
      }

      setName(keyword);
   
    }  
      



    return (  
        <form>  
            <div className="card-header">  
                <div className="row">  
                <h3 className="text-center text-success">Search the Book which you want to Purchase!!!</h3>
                <div className="col-md-4"></div>
                    <div className="col-12 col-md-4 col-xl-3">  
                        <input onChange={handleChange} value={name} className="AutoFocus form-control" placeholder="Search Books..." type="text" /> 
                         
                    </div>  
                    <div className="col-md-4"></div> 
                </div>  
            </div>  
            <div className="container">  
                <div className="row">  
                {result && result.length > 0 ? (
                result.map(book => (  
                        <div className="col-sm-2">  
                       
                            <div className='card new'>
                                            
                                            <img src={book.volumeInfo.imageLinks !== undefined ? book.volumeInfo.imageLinks.thumbnail : ''}className='card-img-top' alt=''/>
                                        <div className='card-body p-4'>
                                        <h5 class="card-title">{book.volumeInfo.title}</h5> 
                                                <h8 class="card-title">By {book.volumeInfo.authors}</h8>
                                                <button className="btn btn-success" onClick={()=>{ window.open("https://play.google.com/store/search?q=" + book.volumeInfo.title + "&c=books", "_blank");}}>Purchase</button>
                                                                                       
                                            </div>
                                            
                                        </div>
                        </div>  
                    ))):(
                        <h1>No results found!</h1>
                      )} 
                </div>  
            </div>  
        </form>  
  
    )  
}  
  
export default BooksSearchnew  