import React from 'react';
import './style.css';
import { useState, useEffect} from "react";
import { Link } from "react-router-dom"

function Home() {

  const [repo, setRepo] = useState([]);
  const [page, setPage] = useState(1);
  


  const getRepos =  () => {
    fetch(`https://api.github.com/users/divineenofua/repos?per_page=3&page=${page}`).then((response)
    => (response.json())).then((data) => {
 
        setRepo([ ...data])
        
      
       
      // setTotalPages(Math.ceil(data.length / 3));
      console.log(data);
    })
   
  }
   
  useEffect(() => {
    getRepos()
     console.log(page + 1 )
  },  [page] )
   

  const handleClickNext = (e) => {
    
      setPage(page + 1);
    
  }
  const handleClickPrev = () => {
    
    setPage(page - 1)
  
  }

  const userRepos = repo.map((repoItem, index) => {
    return (
      <div className="rep-content"  key={index}>

     <Link className="link" to={`/repodetails/${repoItem.name}`}><h2 className="rep-name"><em>Repo Name </em>: {repoItem.name}</h2></Link> 
       <p className="language"><em>Language </em>: {repoItem.language}</p>
       <p className="visibility"><em>Visibility </em>: {repoItem.visibility}</p>
       <p className="date"><em>Repo was created on</em>: {repoItem.created_at}</p>
       <p className="details"><em>Details</em>: {repoItem.description}</p>

    </div>
    )
  })

  return (
     <>
     <section className="repo-container">
       {userRepos}
     </section>
     <div className="btn"> 
     <p className="prev-page" onClick={handleClickPrev}> Prev </p>
     <p className="next-page" onClick={handleClickNext}>Next</p>
      </div>
     </>
  )
}

export default Home
