import './App.css';
import HomePage from './Components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

import {HashRouter, Routes,Route} from 'react-router-dom'
import AddNewBooks from './Components/AddBooks';
import HowToRem from './Components/HowToRem';
import Articalone from './Components/Arts';
import Loginpage from './Components/Login';
import PdfViewA from './Components/Samplepdf';
import PdfviewB from './Components/SamplepdfB';
import PdfviewD from './Components/SamplepdfD';
import PdfviewH from './Components/SamplepdfH';
import PdfviewR from './Components/SamplepdfR';
import PdfviewRobin from './Components/SamplepdfRobin';
import PdfviewRow from './Components/SamplepdfRow';
import PdfviewNepolean from './Components/SamplepdfNepolean'
import HeaderPage from './Components/Header';
import BooksSearchnew  from './Components/Searchnew';



function App() {

 
  return (

    <HashRouter>
    
        <HeaderPage />
      <Routes>
      <Route exact path='/AddBooks' element={< AddNewBooks />}></Route>
       <Route exact path='/BooksSearchnew' element={< BooksSearchnew />}></Route>
      <Route exact path='/HowToRem' element={< HowToRem />}></Route>
      <Route exact path='/Articalone' element={< Articalone />}></Route>
      <Route exact path='/PdfViewA' element={< PdfViewA />}></Route>
      <Route exact path='/PdfViewB' element={< PdfviewB />}></Route>
      <Route exact path='/PdfviewD' element={< PdfviewD />}></Route>
       <Route exact path='/PdfviewH' element={< PdfviewH />}></Route>
      <Route exact path='/PdfviewR' element={< PdfviewR />}></Route>
      <Route exact path='/PdfviewRobin' element={< PdfviewRobin />}></Route>
      <Route exact path='/PdfviewRow' element={< PdfviewRow />}></Route>
      <Route exact path='/PdfviewNepolean' element={< PdfviewNepolean />}></Route>
      <Route exact path='/Login' element={< Loginpage />}></Route>
        <Route exact path='/' element={< HomePage />}></Route>
      
      </Routes>
    </HashRouter>
  
  );
}

export default App;
