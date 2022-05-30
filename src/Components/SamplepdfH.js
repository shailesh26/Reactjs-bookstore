import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack';
import { Link } from 'react-router-dom';

import pdfFile from './pdf/Henry.pdf'



const HenryPdfView = () =>{


  
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  
  /*To Prevent right click on screen*/
  document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
  });
    
  /*When document gets loaded successfully*/
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }
  
  function changePage(offset) {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }
  
  function previousPage() {
    changePage(-1);
  }
  
  function nextPage() {
    changePage(1);
  }

    return(
      <div className='App-header'>

      <p> Page {pageNumber} of {numPages} <pre></pre>
      <Link to='/'><button>Home</button></Link> <span/>
          { pageNumber > 1 && 
          <button  onClick={previousPage}>Previous Page</button>
          }<span/>
          <span/>{
            pageNumber < numPages &&
             <button onClick={nextPage}>Next Page</button>
          }<span/></p>
          <Document  file={pdfFile}  onLoadSuccess={onDocumentLoadSuccess}>
          <Page height="200" width="800" pageNumber={pageNumber} />
          
    
        </Document>
     

 </div>
                

      
       
   
    )
}

export default HenryPdfView