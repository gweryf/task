function Basic({ formData, setFormData }){
    return(
        <div>
            <label htmlFor='name'>name</label>
            <input value={formData.name} onChange={(event)=>{setFormData({...formData, name:event.target.value})}} id='name' type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" /><br/>
            <label htmlFor='email'>Email</label>
            <input value={formData.email} id='email' onChange={(event)=>{setFormData({...formData, email:event.target.value})}} type="email" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" /><br/>
            <label htmlFor='phone_number'>Phone</label>
            <input value={formData.phone_number} id='password' onChange={(event)=>{setFormData({...formData, phone_number:event.target.value})}} type="number" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" /><br/>
        </div>
    )
}
export default Basic