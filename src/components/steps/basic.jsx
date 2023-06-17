import { useEffect, useState } from "react"
import PhoneInput from "react-phone-input-2"
import 'react-phone-input-2/lib/style.css'
function Basic({ formData, setFormData }){
    const [value, setValue] = useState()
    useEffect(()=>{
        setFormData({...formData, phone_number:value})
    },[value])
    return(
        <div className=" flex flex-col gap-1">
            <label htmlFor='name'>Name</label>
            <input required value={formData.name} onChange={(event)=>{setFormData({...formData, name:event.target.value})}} id='name' type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
            <label htmlFor='email'>Email</label>
            <input required value={formData.email} id='email' onChange={(event)=>{setFormData({...formData, email:event.target.value})}} type="email" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
            <label htmlFor='phone_number'>Phone</label>
            < PhoneInput
            className="phoneInput"
                country={'in'}
                value={formData.phone_number}
                onChange={(value)=>setValue(value)}
                placeholder="Enter your phone number"
            />
        </div>
    )
}
export default Basic