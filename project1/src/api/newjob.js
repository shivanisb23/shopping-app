import { useState } from "react";
import swal from "sweetalert";

alert( new Date)

const Newjob = () =>{
    let[jobtitle,pickTitle] = useState("");
    let[jobcity,pickCity] = useState("");
    let[jobsalary,pickSalary] = useState("");

    let[titleError, updateTitleError] = useState("");
    let[cityError, updateCityError ] = useState("");
    let[salaryError, updateSalaryError] = useState("");


    const save = () =>{
        let formerror = false;
        if(jobtitle.trim()=="")
        {
             updateTitleError("Please Enter Job Title");
             formerror = true;
        }else{
            updateTitleError("");

        }

        //city error validation
        if(jobcity.trim()=="")
        {
            updateCityError("Please Enter Job Location");
            formerror = true;
       }else{
           updateCityError("");

       }
       //salary error

       if(jobsalary.trim()=="")
        {
            updateSalaryError("Please Enter Salary for this job !");
            formerror = true;
       }else{
           updateSalaryError("");

       }






        if(formerror == true){
            swal("Error !", "Enter Job Details","warning");
        }else{

          let url = "http://localhost:3000/joblist";

          let postdate = new Date().toLocaleString();


          let newjob = {"title":jobtitle,"salary":jobsalary,"city":jobcity, postedon:postdate};

          let postData={
              headers:{'Content-Type':'application/json'},
              method:"POST",
              body:JSON.stringify(newjob) //newjob is an array-convert from array object to json object
    
            }
            fetch(url,postData)
            .then(response =>response.json())
            .then(serverRes =>{
               swal(jobtitle + "", "Posted Successfully","sucess");
               pickTitle("");
               pickCity("");
               pickSalary("");
               window.location.href="#/api1";
            })
        } //else ends here
    }


    return(
        <section className="container" align="center">
            <h1> Enter Job Description </h1>
            <div id="newjob">
            <textarea placeholder="Enter job title" rows="5" cols="60"
            onChange={obj=>pickTitle( obj.target.value )} value={jobtitle}></textarea>
            <p className="error"> {titleError} </p>

            <br/>

            <textarea placeholder="Enter job location" rows="5" cols="60"
            onChange={obj=>pickCity( obj.target.value )} value={jobcity}></textarea>
            <p className="error"> {cityError} </p>
            <br/>

            <textarea placeholder="Enter Salary" rows="5" cols="60"
            onChange={obj=>pickSalary( obj.target.value )} value={jobsalary}></textarea>
            <p className="error"> {salaryError} </p>
            <br/>

            <button onClick={save}> Save My Job </button>
            
            </div>
        </section>
    )
}


export default Newjob;