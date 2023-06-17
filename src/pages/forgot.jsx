import { useNavigate } from "react-router-dom"

function Forgot(){
    const navigate = useNavigate()
    return(
        <div className=" flex justify-center items-center h-screen">
            <div className=" flex justify-center items-center flex-col gap-5 w-96">
                <h1 className=" font-extrabold text-3xl">Levitation</h1>
                <h3 className=" text-lg text-center">Enter the email address associated with your account and we will send you a link to reset your password</h3>
                <input type="text" placeholder="Type here" className="input input-bordered input-success w-full max-w-xs" />
                <button onClick={()=>navigate("/")} className="btn btn-info">Continue</button>
            </div>
        </div>
    )
}
export default Forgot