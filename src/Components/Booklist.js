import React from 'react'

import Book from './Book'

function BookList({books}) {

    return(
        <div className='text-center'>
            <section>
                <div className='container-fluid bg-success mt-4 text-white'>
                <h2>Free Books to Read Online</h2>
                                </div>
           
          {
              books.books.map((bookinfo,index)=>{

               
                  return(
                     <Book key={bookinfo.id} {...bookinfo}/>
                      
                  )
              })
          }
            
            </section>
         
        </div>
    )
}

export default BookList