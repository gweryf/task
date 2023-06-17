function Address({ formData, setFormData }){
    return(
        <div className=" flex flex-col gap-5">
            <input value={formData.address_1} onChange={(event)=>{setFormData({...formData, address_1:event.target.value})}} id="address_1" type="text" placeholder="Address Line 1" className="input input-bordered input-primary w-full max-w-xs" />
            <input value={formData.address_2} onChange={(event)=>{setFormData({...formData, address_2:event.target.value})}} id="address_2" type="text" placeholder="Address Line 2" className="input input-bordered input-primary w-full max-w-xs" />
            <div className=" flex gap-3">
                <input value={formData.city} onChange={(event)=>{setFormData({...formData, city:event.target.value})}} id="city" type="text" placeholder="City" className="input input-bordered input-primary w-full max-w-xs" />
                <input value={formData.state} onChange={(event)=>{setFormData({...formData, state:event.target.value})}} id="state" type="text" placeholder="State" className="input input-bordered input-primary w-full max-w-xs" />
            </div>
            <div className=" flex gap-3">
                <input value={formData.pincode} onChange={(event)=>{setFormData({...formData, pincode:event.target.value})}} id="pincode" type="number" placeholder="Pincode" className="input input-bordered input-primary w-full max-w-xs" />
                <input value={formData.country} onChange={(event)=>{setFormData({...formData, country:event.target.value})}} id="country" type="text" placeholder="Country" className="input input-bordered input-primary w-full max-w-xs" />
            </div>
        </div>
    )
}
export default Address