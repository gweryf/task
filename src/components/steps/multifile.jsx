import useGeoLocation from "../useGeolocation"
import { useEffect, useState } from "react"
function MultiFileUpload({formData, setFormData}){
    const location = useGeoLocation()
    const [files, setFiles] = useState([])
    useEffect(() => {
        setFormData({ ...formData, multi_file: files });
    }, [files]);
    return(
        <div>
            <div onClick={()=>document.getElementById("file-input").click()} className=" h-full flex flex-col justify-center items-center border-2 border-dashed cursor-pointer rounded-md border-blue-400">
                <input multiple onChange={(e)=>{
                    const selectedFiles = Array.from(e.target.files);
                    setFiles(selectedFiles);
                }} id="file-input" type="file" accept="image/*, .pdf" />
            </div>
            <div>
                {location.loaded ? JSON.stringify(location):"Location Data Not Available"}
            </div>
        </div>
    )
}
export default MultiFileUpload