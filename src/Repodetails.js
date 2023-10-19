
import React from 'react';
import { FaRegStar, FaRegEye,  FaCodeBranch} from "react-icons/fa";
import { TbGitFork } from "react-icons/tb";
import { useParams } from "react-router-dom";
import { useState, useEffect} from "react";

function RepoDetails() {
 const { id } = useParams()
 const [details, setDetails] = useState({})
 const [branch, setBranch] = useState({})
 const [deployment, setDeployment] = useState({})



//  const { id } = useParams()
//   const [details, setDetails] = useState({})
//   const [branch, setBranch] = useState({})
//   // const [deployment, setDeployment] = useState({})
//   const {deployment, setDeployment} = useState({})


 useEffect(() => {
  fetch(`https://api.github.com/repos/divineenofua/${id}`)
  .then((response) => (response.json()))
  .then((data) => {
    setDetails(data)
  })
}, []) 
 
useEffect(() => {
  fetch(`https://api.github.com/repos/divineenofua/${id}/branches`)
  .then((response) => (response.json()))
  .then((data) => {
    setBranch(data)
  })
}, []) 

useEffect(() => {
  fetch(`https://api.github.com/repos/divineenofua/${id}/deployments`).then((response) => (response.json())).then((data) => {
    setDeployment(data)
  })
}, [])


return (
  <div id="repodetail">
      <div className="repodetail-card">
          <h2 className="repo-name">{details.name}</h2>
          <div className="repo-mini-details">
            <div className="flex"> 
            <p><FaRegStar className="icons" /> Stars: {details.stargazers_count}</p>
            <p><TbGitFork className="icons" /> Forks: {details.forks}</p>
            <p>Main Language: {details.language === null ? "none": details.language}</p>
            </div>
            <div className="flex"> 
            <p>  <FaRegEye className="icons" /> Watch: {details.watchers}</p>
            <p><FaCodeBranch className="icons" /> Branches: {branch.length}</p> 
          <p>Live site: {deployment.length === 0 ? `none` : <a href={`https://divineenofua.github.io/${details.name}`}>divineenofua.github.io/{details.name}</a>}</p>
          </div>
          </div>
          <p className='view-git'><a href={`https://github.com/${details.full_name}`}>View on Github</a></p>
      </div>
  </div>
)

}

export default RepoDetails
