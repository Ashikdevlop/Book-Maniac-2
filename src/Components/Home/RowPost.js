import React,{useState, useEffect} from 'react'
import axios from 'axios'
import './Rowpost.css'
const RowPost = () => {
  const [data, setData] = useState([])
  useEffect (()=> {
 const fetchUsers = async ()=> {
   const response = await axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${process.env.REACT_APP_BOOKS_API_KEY}`)
 console.log(response.data);
 
  }    
fetchUsers();
  },[])
  return (
    <div className="rowpost">
        <div className='poster'>
            <div className="card">
                <h3 className="card-title">
newnfijnef iefi wefiwejfiw
                </h3>
                <p className="card-author">nednfwefkmcnwvwenwe</p>
            </div>   
        </div>
 
   </div>
  )
}

export default RowPost