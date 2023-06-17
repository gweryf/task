import Basic from "./steps/basic";
import Address from "./steps/address";
import FileUpload from "./steps/fileupload";
import MultiFileUpload from "./steps/multifile";
import Success from "./steps/sucess";
import { useState } from "react";
import axios from "axios";
import "../index.css"

function Form() {
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
      id:10,
      created_at:898,
      name: "",  
      email: "",
      phone_number: "",
      address_1: "asdf",
      address_2: "afdsf",
      city: "mumbai",
      state: "ninas",
      pincode:12,
      country: "",
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
        <div id="progressbar" className=" w-96 m-1 h-3 mb-12 bg-white">
          <div
            style={{width: page === 0 ? "20%" : page == 1 ? "40" : page === 2 ? "60%" : page === 3 ? "80%" : "100%" }}
          ></div>
        </div>
        <div className="form-container">
          <div className="header">
            <h1>{FormTitles[page]}</h1>
          </div>
          <div className="body">{PageDisplay()}</div>
          <div className="footer">
            <button
              disabled={page == 0}
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
            >
              Prev
            </button>
            <button
              onClick={() => {
                if (page === FormTitles.length - 1) {
                  alert("FORM SUBMITTED");
                  axios.create({
                    baseURL:"https://x8ki-letl-twmt.n7.xano.io/api:XooRuQbs",
                    headers:{
                        Authorization: `Bearer ${localStorage.getItem("APIKey")}`,
                        "Content-Type":"multipart/form-data"
                    }
                  }).post("/form",  formData).then((res)=>console.log(res)).catch(err=>alert(err))

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