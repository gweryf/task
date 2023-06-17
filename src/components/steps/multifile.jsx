import useGeoLocation from "../useGeolocation"
import { useEffect, useState } from "react"
function MultiFileUpload({formData, setFormData}){
    const location = useGeoLocation()
    const [files, setFiles] = useState([])
    useEffect(() => {
        setFormData({ ...formData, multi_file: files });
    }, [files]);

    const loc = ()=>{
        return(
            <div>
                <h1 className=" text-center font-bold">Your Location is:</h1>
                <div className=" text-center">Latitude:
                    {location.coordinates.lat}
                </div>
                <div className=" text-center">
                    Longitude:
                    {location.coordinates.lng}
                </div>
            </div>
        )        
    }

    return(
        <div className=" flex flex-col gap-5 h-full">
            <div onClick={()=>document.getElementById("file-input").click()} className=" h-full flex flex-col justify-center items-center border-2 border-dashed cursor-pointer rounded-md border-blue-400">
                <input multiple onChange={(e)=>{
                    const selectedFiles = Array.from(e.target.files);
                    setFiles(selectedFiles);
                }} id="file-input" type="file" accept="image/*, .pdf" />
            </div>
            <div className=" bg-slate-500 p-3 rounded-md text-white flex justify-center items-center">
                {location.loaded ? loc():"Location Data Not Available"}
            </div>
        </div>
    )
}
export default MultiFileUpload