import Basic from "./steps/basic";
import Address from "./steps/address";
import FileUpload from "./steps/fileupload";
import MultiFileUpload from "./steps/multifile";
import Success from "./steps/sucess";
import { useState } from "react";
import axios from "axios";
import "../index.css"
import { useNavigate } from "react-router-dom";


function Form() {
    const navigation = useNavigate()
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
      id:10,
      created_at:898,
      name: "",  
      email: "",
      phone_number: "",
      address_1: "Adress Line 1",
      address_2: "Adress Line 1",
      city: "City",
      state: "State",
      pincode:0,
      country: "Country",
      geolocation:"asdfadfas",
      single_file: {
        path: "path/to/file",
        name: "example.jpg",
        type: "image/jpeg",
        size: 1024,
        mime: "image/jpeg",
        meta: {},
        url: "https://example.com/files/example.jpg"
      },
      multi_file: [],
    });
  
    const FormTitles = ["Basic Details", "Address", "File Upload", "Multi File Upload", "Success"];
  
    const PageDisplay = () => {
      if (page === 0) {
        return <Basic formData={formData} setFormData={setFormData} />;
      } else if (page === 1) {
        return <Address formData={formData} setFormData={setFormData} />;
      } else if(page === 2) {
        return <FileUpload formData={formData} setFormData={setFormData} />;
      } else if(page === 3) {
        return <MultiFileUpload formData={formData} setFormData={setFormData} />;
      } else {
        return <Success/>
      }
    };
  
    return (
      <div className=" w-full h-full flex flex-col justify-center items-center">
        <div className=" text-center text-2xl font-bold py-2">Progress:</div>
        <div id="progressbar" className=" w-96 m-1 h-3 mb-12 bg-white rounded-lg">
          <div className=" rounded-lg"
            style={{width: page === 0 ? "20%" : page == 1 ? "40%" : page === 2 ? "60%" : page === 3 ? "80%" : "100%" }}
          ></div>
        </div>
        <div className=" flex flex-col justify-center items-center gap-3 w-96 h-2/3 rounded-lg shadow-lg bg-slate-600 p-7">
          <div className="header">
            <h1 className=" p-1 text-center text-2xl font-extrabold">{FormTitles[page]}</h1>
          </div>
          <div className=" h-full flex justify-center items-center">{PageDisplay()}</div>
          <div className=" w-full flex justify-around items-center">
            <button
              className=" btn btn-error"
              disabled={page == 0}
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
            >
              Prev
            </button>
            <button
            className=" btn btn-success"
              onClick={() => {
                if (page === FormTitles.length - 1) {
                  axios.create({
                    baseURL:"https://x8ki-letl-twmt.n7.xano.io/api:XooRuQbs",
                    headers:{
                        Authorization: `Bearer ${localStorage.getItem("APIKey")}`,
                        "Content-Type":"multipart/form-data"
                    }
                  }).post("/form",  formData).then((res)=>{
                    alert("Form has been Successfully Submitted");
                    navigation("/");
                  }).catch(err=>alert(err))

                } else {
                  setPage((currPage) => currPage + 1);
                }
              }}
            >
              {page === FormTitles.length - 1 ? "Submit" : "Next"}
            </button>
          </div>
        </div>
      </div>
    );
}
export default Form