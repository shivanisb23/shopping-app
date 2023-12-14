import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";

const Myhook9 = () => {
  let [joblist, updatejoblist] = useState([]);

  const getjob = () => {
    fetch("http://localhost:1234/joblist")
      .then((Response) => Response.json())
      .then((jobArray) => {
        updatejoblist(jobArray.reverse());
       // swal( "  Avilable Jobs - "+ jobArray.length ,"Loaded Successfully!","success");
      });
  };

  useEffect(() => {
    getjob();
  }, [1]);

  const deljob = (id,title) =>{
    let url= "http://localhost:1234/joblist/"+id;
    let postData={method:"DELETE"};
    fetch(url,postData)
    .then(Response=>Response.json())
    .then(emptyres=>{
swal(title +"","Deleted Successfully!", "success");
getjob();//for reload the list

    })
  }


  let [jobinfo,updateInfo] = useState( {title:"",salary:"",city:"",postedon:""} );
  const jobdetails =(jobid) =>{
    let url = "http://localhost:1234/joblist/"+jobid;
    fetch(url)
    .then(response =>response.json())
    .then(jobdata =>{
        console.log( jobdata );
    })
  }


  return (
    <section className="container">
      <h1> Total Jobs : {joblist.length}</h1>
      <p align="center">
        <Link to="/api1"> Post New Job </Link>
      </p>
      <table align="center" cellPadding="10" width="70%">
        <thead>
          <tr align="left" bgcolor="orange">
            <th>Job Id </th>
            <th>Job Title</th>
            <th>Job Location</th>
            <th>Salary</th>
            <th>Post Date</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {joblist.map((job, index) => {
            return (
              <tr key={index}>
                <td>{job.id}</td>
                <td onClick={jobdetails.bind(this,job.id)}> {job.title} </td>
                <td>{job.city}</td>
                <td>{job.salary}</td>
                <td>{job.postedon}</td>
                <td>
                 <Link to={`/editjob/${job.id}`}>Edit</Link>
                  </td>
                <td>
                  <button onClick={deljob.bind(this, job.id,job.title)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <table align="right" cellPadding="10" width="25%" >
           <tr>
            <td> (jobinfo.id) </td>
           </tr>
           <tr>
            <td> (jobinfo.title) </td>
           </tr>
           <tr>
            <td> (jobinfo.city) </td>
           </tr>
           <tr>
            <td> (jobinfo.salary) </td>
           </tr>
           <tr>
            <td> (jobinfo.postedon) </td>
           </tr>
      </table>
    </section>
  )
}

export default Myhook9;
