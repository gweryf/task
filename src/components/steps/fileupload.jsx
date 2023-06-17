import { MdCloudUpload, MdDelete } from 'react-icons/md'
import { AiFillFileImage } from 'react-icons/ai'
import { useState } from 'react'


function FileUpload({formData, setFormData}){

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
        setFormData({...formData, single_file:selectedFile})
    };

    console.log(formData);
    return(
        <div onClick={()=>document.getElementById("file-input").click()} className=" p-5 flex flex-col justify-center h-full items-center border-2 border-dashed cursor-pointer rounded-md border-blue-400">
            <input className='file-input file-input-bordered file-input-success w-full max-w-xs' id="file-input" type="file" onChange={(e)=>{
                setFormData({...formData, single_file:e.target.files[0]})
                console.log(formData);
            }} accept="image/*" />
        </div>
    )
}
export default FileUpload