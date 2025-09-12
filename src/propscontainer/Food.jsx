import React,{useState} from 'react'
 //`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30&calories=591-722&health=alcohol-free`
 //8aecf864
 //b460ca299374805ea2ad4be4f6ea081a
const Food = () => {
    const [search, setSearch] = useState("");
    const YOUR_APP_ID = '8aecf864';
    const YOUR_APP_KEY = 'fde944ca87a133ca0101c7e57679e399';

  const  submitHandler=(p)=>{
        p.preventDefault();
        console.log(search);
        fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30&calories=591-722&health=alcohol-free`)
        .then(Response => Response.json())
        .then(data => console.log(data));

    }
   
  return (
    <div>
        <center style={{marginTop:"30px"}}>
            <h3>Find Your Favorite Food</h3>
            <form onSubmit={submitHandler}>

                <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} style={{marginTop:"30px"}}/><br></br>
                <input type="submit" value="search" className='mt-3' />

            </form>
        </center>
      
    </div>
  )
}

export default Food
