import { createContext, useState } from "react";
import { TailSpin } from "react-loader-spinner";
import AddEmpForm from "./component/Addemp";
import Script from "next/script";
import { toast } from "react-toastify";
const Formstate = createContext();
import allemp from "../../artifacts/contracts/Sal.sol/allemp.json"
import {ethers} from "ethers";


export default function  Form(){
    const [form , setForm] = useState({
    FirstName: "",
    LastName: "",
    WallletAddress:"",
    Position:"Intern",
    Country:"India",
  });

  const[loading,setLoading] = useState(false);
  const[address , setAddress] = useState("");

  const [uploaded , setuploaded] = useState(false);

  const[imageurl,setImageurl] = useState();

  const  FormHandler = (e)=>{
    setForm({
      ...form,
      [e.target.name]: e.target.value
   })
  }


  const [Image , setImage] = useState(null);
  const ImageHandler = (e)=>{
    setImage(e.target.files[0]);
  }



  const Addemp=async (e)=>{
    e.preventDefault();
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send('eth_requestAccounts', []);
    const signer = provider.getSigner();
  //   if(typeof window.ethereum =="undefined"){
  //     console.log("PLease install the metamask");
  // }
  // let web3 = await new Web3(window.ethereum);
  if(form.FirstName == ""){
    toast.warn("First Name filed is empty");
  }
  else if(form.LastName == ""){
    toast.warn("Last Name filed is empty");
  }
  else if(form.WallletAddress== ""){
    toast.warn("Wallet Address filed is empty");
  }
  else if(uploaded == false){
    toast.warn("Files upload required");
  }
  else if(uploaded == false){
    toast.warn("Files upload required");
  }
  else{
    setLoading(true);


    const contract = new ethers.Contract(
      "0x1681F1676cb3685bD28a3ea2D0BA56D42eEAe564",
      allemp.abi,
      signer
    );
    const adde = await contract.addemp(
       form.FirstName,
       form.LastName,
       form.WallletAddress,
       form.Country,
       imageurl,
       form.Position
     );
     await adde.wait();
     setAddress(adde.to);
  //   const signer = web3.eth.accounts.privateKeyToAccount(
  //     "0x85af3a27ba32f9df3bb6f3bfb9d48119417ba85ff5fddd464c54e5457e99d8f7"
  //   );
  //   const contract = new web3.eth.Contract(
  //     [
  //       {
  //         "anonymous": false,
  //         "inputs": [
  //           {
  //             "indexed": false,
  //             "internalType": "string",
  //             "name": "FirstName",
  //             "type": "string"
  //           },
  //           {
  //             "indexed": false,
  //             "type": "string"
  //             "internalType": "string",
  //             "name": "LastName",
  //           },
  //           {
  //             "indexed": true,
  //             "internalType": "address",
  //             "name": "owner",
  //             "type": "address"
  //           },
  //           {
  //             "indexed": false,
  //             "internalType": "address",
  //             "name": "salAddress",
  //             "type": "address"
  //           },
  //           {
  //             "indexed": false,
  //             "internalType": "string",
  //             "name": "image",
  //             "type": "string"
  //           },
  //           {
  //             "indexed": true,
  //             "internalType": "uint256",
  //             "name": "timestamp",
  //             "type": "uint256"
  //           },
  //           {
  //             "indexed": true,
  //             "internalType": "string",
  //             "name": "Posotion",
  //             "type": "string"
  //           }
  //         ],
  //         "name": "salcreated",
  //         "type": "event"
  //       },
  //       {
  //         "inputs": [
  //           {
  //             "internalType": "uint256",
  //             "name": "",
  //             "type": "uint256"
  //           }
  //         ],
  //         "name": "deployedSal",
  //         "outputs": [
  //           {
  //             "internalType": "address",
  //             "name": "",
  //             "type": "address"
  //           }
  //         ],
  //         "stateMutability": "view",
  //         "type": "function"
  //       },
  //       {
  //         "inputs": [
  //           {
  //             "internalType": "string",
  //             "name": "_FirstName",
  //             "type": "string"
  //           },
  //           {
  //             "internalType": "string",
  //             "name": "_LastName",
  //             "type": "string"
  //           },
  //           {
  //             "internalType": "string",
  //             "name": "_wallet_ddress",
  //             "type": "string"
  //           },
  //           {
  //             "internalType": "string",
  //             "name": "_Country",
  //             "type": "string"
  //           },
  //           {
  //             "internalType": "string",
  //             "name": "_image",
  //             "type": "string"
  //           },
  //           {
  //             "internalType": "string",
  //             "name": "_Posotion",
  //             "type": "string"
  //           }
  //         ],
  //         "name": "addemp",
  //         "outputs": [],
  //         "stateMutability": "nonpayable",
  //         "type": "function"
  //       }
  //     ],
  //     "0x8765d32Ad9907e2371409a17f194e713E8f4e19a",signer
  //   );
  //   const accounts = await web3.eth.requestAccounts();
  //  const adde = await contract.methods.addemp(
  //    form.FirstName,
  //    form.LastName,
  //    form.WallletAddress,
  //    form.Country,
  //    form.imageurl,
  //    form.Position
  //  );
  //  // console.log(typeof(imageurl);
  //  // console.log(imageurl);
  //  // const a  = await web3.eth.accounts.wallet.add(signer);
  //  // await sleep(2000);
  //  // console.log(adde);
  //  // await adde.wait();
  // //  await as.then(function (resp){
  // //   alert(resp);
  // //   console.log(resp);
  // //  })
  // // adde.wait();
  // // const ac = await contract.methods.owner().call({gas:35000})
  // console.log(adde);
  //   setAddress(signer. address);
  }
}




  return (
    <>
    // <Script src="https://cdnjs.cloudflare.com/ajax/libs/web3/1.2.7-rc.0/web3.min.js"></Script>
    // <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></Script>
    <Formstate.Provider value = {{form,setForm,Image,setImage,ImageHandler,FormHandler,setImageurl ,Addemp,setuploaded}}>
        {loading == true ?
        address == "" ?
          <div className="Spinner">
            <TailSpin height={60}/>
            </div>:
            <div className="Address">
              <h1>welcome TO LOGO !</h1>
              <h1>{address}</h1>
              <button className="button">ADD EMPLOYEE</button>
          </div>:
      <AddEmpForm/>
        }
    </Formstate.Provider>
    </>
  )
}

export {Formstate};
