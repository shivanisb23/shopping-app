import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import swal from "sweetalert";

const EditJob = () =>{
let[jobtitle,pickTitle] = useState("");
let[jobcity,pickCity] = useState("");
let[jobsalary,pickSalary] = useState("");

    let [jobid] = useParams();

    const getJobdetails = () =>{
        let url = "http://localhost:1234/joblist/"+jobid;
        fetch(url)
        .then(response =>response.json())
        .then(jobinfo=>{
            pickTitle( jobinfo.title );
            pickCity( jobinfo.city );
            pickSalary( jobinfo.salary );
        })
    };

    useEffect(() =>{
        getJobdetails();
    },[1]);

    const save = () =>{
        if(jobtitle=="" || jobsalary=="" || jobcity==""){
            swal("Error !", "Enter Job Details","warning");
        }else{

          let url = "http://localhost:3000/joblist/"+jobid;
          let newjob = {"title":jobtitle,"salary":jobsalary,"city":jobcity};
          let postData={
              headers:{'Content-Type':'application/json'},
              method:"PUT",
              body:JSON.stringify(newjob) //newjob is an array-convert from array object to json object
    
            }
            fetch(url,postData)
            .then(response =>response.json())
            .then(serverRes =>{
               swal(jobtitle + "", "Updated Successfully","sucess");
               window.location.href="#/api1";
            })
        } //else ends here
    }

    return(
        <section className="container">
        <h1> Edit job No  -  {jobid} </h1>
        <p> <Link to="/api1"> Post New Job </Link> </p>
        <div align="center">
            <textarea placeholder="Enter job title" rows="5" cols="60"
            onChange={obj=>pickTitle( obj.target.value )} value={jobtitle}></textarea>

            <br/><br/>

            <textarea placeholder="Enter job location" rows="5" cols="60"
            onChange={obj=>pickCity( obj.target.value )} value={jobcity}></textarea>

            <br/><br/>

            <textarea placeholder="Enter Salary" rows="5" cols="60"
            onChange={obj=>pickSalary( obj.target.value )} value={jobsalary}></textarea>
            <br/><br/>

            <button onClick={save}> Update Job </button>
            
            </div>

        </section>
    )

}
export default EditJob;