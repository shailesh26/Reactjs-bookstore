import BookList from './Booklist';
import booksdata from './data'
import { Link } from 'react-router-dom'


function HomePage() {

  return (

    
    <div className="container">
      <div className='row'>
      
      
        <div className='col-lg-10'>
        <BookList  books={booksdata}/>
        </div>

        <div className='col-lg-2 mt-5 mb-4'>
         <h3 className='text-center mt-3'>Latest articles</h3>
            <Link className="nav-link mb-2 offset-md-1" to="/HowToRem">How to remember what you read in books?</Link>
            <Link className="nav-link mb-2 offset-md-1" to="/Articalone">The Best Books of 2018 on ReadAnyBook?</Link>
        </div>

      </div>
    
    </div>
  );
}

export default HomePage;