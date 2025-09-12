import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
  const [search, setSearch] = useState("");
  const [data,setData] = useState([]);
  const submitHandler = (m) =>{
    m.preventDefault();
    console.log(data);
   
    fetch(`http://www.omdbapi.com/?s=${search}&apikey=263d22d8`)
    .then(Response => Response.json())
    .then(value => setData(value.Search))
   

  }
  return (
    <div>
      <center>
        <h2>
          Search Your Movie here
        </h2>
        <form onSubmit={submitHandler}>
          <input type='text' value={search} onChange={(e) => setSearch(e.target.value)}></input><br></br>
          <input type='submit' value="search" style={{marginTop:"30px"}}></input>
        </form>
        
       {data.map(movie=>
       <div className="row">

      <div className="col-md-4" key={movie.imdbID}>
       <div className="card" style={{"width" : "16rem"}}>
       <img src={movie.Poster} className="card-img-top" alt={movie.Title}></img>
       <div class="card-body">
         <h4 className="card-title">{movie.Title}</h4>
        <a href="" class='btn btn-primary'>Download</a>
         </div>
         </div>
         

       </div>
     </div>
       )}

      </center>
          
      
    </div>
  )
}

export default Contact
