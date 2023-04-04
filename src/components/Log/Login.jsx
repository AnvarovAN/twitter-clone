import {  useState, useRef } from "react";
import { Link } from "react-router-dom";
import {BiShow,BiHide, BiLockAlt} from "react-icons/bi"
import { BsTwitter } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import swal from "sweetalert";
import { useUserContext } from "../../Context";
const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const emailRef = useRef();
    const psdRef = useRef();
    const { signInUser, forgotPassword, error } = useUserContext();
  
    const handleLogin = async (e) => {
      e.preventDefault();
      const email = emailRef.current.value;
      const password = psdRef.current.value;
      if (email && password){
           signInUser(email, password)
        }else if (email && password && !error) {
            signInUser(email, password)  
            swal("Good job!", "You have successfully logged in", "success");
            
        }
    };
  
    const forgotPasswordHandler = () => {
      const email = emailRef.current.value;
      if (email){
          forgotPassword(email).then(() => {
              emailRef.current.value = "";
            });
            swal("Good job!", "Password reset code has been sent to your email", "success");
        }else if(!email){
            swal("Ooops..", "Write your email in this input, to get a reset code", "error");
        }
        }
  const toggleShowPassword = () => {
      setShowPassword((prev)=> !prev)
  }
  return (
    <div className="h-[100vh] flex flex-col items-center justify-center gap-10">
        {}
      <BsTwitter className="text-[#00acee] w-14 h-14" />
      <div class="w-[500px] ">
        <h2 className="text-[50px] ml-8 mb-8 font-bold">Log in to Twitter </h2>
        <form onSubmit={handleLogin} class="w-full bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">
            <label class="relative w-full">
              <AiOutlineUser className="absolute top-[50%] left-[1rem] translate-y-[-50%] text-[#757575] h-5 w-5" />
              <input className="text-xl shadow appearance-none border rounded w-full py-4 px-12 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Email" type="email"  ref={emailRef}  />
            </label>
          </div>
          <div class="mb-4">
            <label class="relative w-full">
              <BiLockAlt className="absolute top-1/2 left-4 translate-y-[-50%] text-[#757575] h-5 w-5" />
              <input className="text-xl shadow appearance-none border rounded w-full py-4 px-12 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Password" type={showPassword ? 'text' : 'password'} ref={psdRef} />
              <button type="button" className="absolute top-1/2 translate-y-[-50%] right-4 " onClick={toggleShowPassword}>{showPassword ? <BiShow className="text-[#757575] h-6 w-6"/> :<BiHide className="text-[#757575] h-6 w-6"/> }</button>
            </label>
          </div>
          <p class="text-red-500 text-xl italic my-8 ">{error}</p>
          <div class="flex flex-col gap-3">
            <button class="bg-[#1DA1F2] hover:bg-sky-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Login
            </button>
            <span className="flex justify-between">Already have an account?
              <Link className="bg-[#1DA1F2] hover:bg-sky-500 text-white font-bold px-[15px] py-[3px] rounded focus:outline-none focus:shadow-outline text-center" to='/signup'>Sign up</Link>
            </span>
            <span className="flex justify-between">Forgot password?
              <Link className="bg-[#1DA1F2] hover:bg-sky-500 text-white font-bold px-[15px] py-[3px] rounded focus:outline-none focus:shadow-outline text-center" onClick={forgotPasswordHandler}>Forgot Password</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login