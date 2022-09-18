import Link from "next/link";
import { Formstate } from "../form";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { TailSpin } from "react-loader-spinner";
import {create as IPFSHTTPClient} from "ipfs-http-client";


const projectId = '2EFZSrxXvWgXDpOsDrr4cQosKcl';
const ProjectSecret = 'b84c6cb2eec9c4536a0b6424ca709f9d';

const auth = 'Basic ' + Buffer.from(projectId +  ":" + ProjectSecret).toString('base64')

const client = IPFSHTTPClient({
    host: 'ipfs.infura.io',
    port: 5001,
    protocol: 'https',
    headers: {
        authorization: auth,
    }
});
client.add("Hello World").then((res) => {
  console.log(res);
});

export default function AddEmpForm() {

  const Handler = useContext(Formstate);

  const [Uploading,setuploading] = useState(false);
  const [uploaded , setuploaded] = useState(false);
  const  uploadfiles  =async (e)=>{
    e.preventDefault();
    setuploading(true);
    if(Handler.Image!==null){
      try{
        console.log("11111111");
        console.log(Handler.Image);
        const added = await client.add(Handler.Image);
        console.log(added);

        await Handler.setImageurl(added.path);
      }
      catch(error){
        toast.warn("Error uploading image");
      }
    }
    setuploading(false);
    setuploaded(true);
    Handler.setuploaded(true);
    toast.success("Files uploaded sucessfully");
  }

    return (
      <>
      <div className="add-conatiner">
        <h2>Add employe form</h2>
        <div className="form-container">
          <form>
            <div className="inpiut-name">
              <input onChange={Handler?.FormHandler} value = {Handler?.form?.FirstName} type ="text" placeholder ="First Name" className="name" name = "FirstName" />
              <span>
              <input  onChange={Handler?.FormHandler} value = {Handler?.form?.LastName} type ="text" placeholder ="Last Name" className="name" name ="LastName"/>
              </span>
            </div>
            <div className="inpiut-name">
              <input onChange={Handler?.FormHandler} value = {Handler?.form?.WallletAddress}  type ="text" placeholder ="Wallet Address" className="text-name"name ="WallletAddress" />
            </div>
            <div className="inpiut-name">
              <i class = "fa fa-useer lock"></i>
                            <select onChange={Handler?.FormHandler} value = {Handler?.form?.Position} className="text-name" name ="Position">
                <option>Position</option>
                <option>Intern</option>
                <option>H.R</option>
                <option>S.D.E-2</option>
                <option>Web Developer</option>
              </select>
              <div className="arrow"></div>
            </div>

            <div className="inpiut-name">
              <select onChange={Handler?.FormHandler} value = {Handler?.form?.Country}  className="text-name" name = "Country">
                <option>select a country</option>
                <option>India</option>
                <option>USA</option>
                <option>England</option>
                <option>Brazil</option>
              </select>
              <div className="arrow"></div>
            </div>
            <div className="inpiut-name">
             <label className = "name1">select image</label>
             <input  onChange={Handler?.ImageHandler}  type ="file" accept="image/*" className="name2"/>
            </div>
            <div className="inpiut-name">
              {Uploading == true ?<button className="button"><TailSpin color="#fff" height={20}/></button> :uploaded == false?
              <button onClick={uploadfiles} className="button">Upload to IPFS</button> :<button style = {{cursor:"no-drop"}} className="button">Files uploaded sucessfully</button> }
            </div>
            <div className="inpiut-name">
              <button  className="button" onClick={Handler?.Addemp}>ADD EMPLOYEE</button>
            </div>
          </form>
        </div>
      </div>
      </>
    )
  }
