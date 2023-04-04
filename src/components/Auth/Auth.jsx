import { useRef } from "react";
import { useUserContext } from "../../Context";
import { Link } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai"
import { BiLockAlt } from "react-icons/bi"
import { BsTwitter } from "react-icons/bs"
import {CiMail} from "react-icons/ci"
import swal from "sweetalert";
const Auth = () => {
  const emailRef = useRef();
  const nameRef = useRef();
  const psdRef = useRef();
  const checkPsdRef = useRef();
  const { registerUser, error, setError} = useUserContext();
  const handleRegister = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const name = nameRef.current.value;
    const password = psdRef.current.value;
    const checkPassword = checkPsdRef.current.value;
    if (!email && !password && !checkPsdRef) {
      setError('Please fill all fields')
    }else if (password !== checkPassword) {
      setError('Password does not match')
    }else
    {
      registerUser(email, password, name)
      swal("Good job!", "you have successfully registered", "success");
    }

  };
  return (
    <div className="h-[100vh] flex flex-col items-center justify-center gap-10">
      <BsTwitter className="text-[#00acee] w-14 h-14" />
      <div class="w-[500px] ">
        <h2 className="text-[50px] ml-8 mb-8 font-bold">Create an account </h2>
        <form onSubmit={handleRegister} class="w-full bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">
            <label class="relative w-full">
              <CiMail className="absolute top-[50%] left-[1rem] translate-y-[-50%] text-[#757575]" />
              <input className="text-xl shadow appearance-none border rounded w-full py-4 px-12 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Email" type="email" ref={emailRef} /**value={email} onChange={(e) => setEmail(e.target.value)} */ />
            </label>
          </div>
          <div class="mb-4">
            <label class="relative w-full">
              <AiOutlineUser className="absolute top-[50%] left-[1rem] translate-y-[-50%] text-[#757575]" />
              <input className="text-xl shadow appearance-none border rounded w-full py-4 px-12 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Name" type="text" ref={nameRef} /**value={email} onChange={(e) => setEmail(e.target.value)} */ />
            </label>
          </div>
          <div class="mb-4">
            <label class="relative w-full">
              <BiLockAlt className="absolute top-[50%] left-[1rem] translate-y-[-50%] text-[#757575]" />
              <input className="text-xl shadow appearance-none border rounded w-full py-4 px-12 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Password" type="password" ref={checkPsdRef} /**value={password} onChange={(e) => setPassword(e.target.value)} */ />
            </label>
          </div>
          <div class="mb-4">
            <label class="relative w-full">
              <BiLockAlt className="absolute top-[50%] left-[1rem] translate-y-[-50%] text-[#757575]" />
              <input className="text-xl confirm shadow appearance-none border rounded w-full py-4 px-12 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Confirm password" type="password" ref={psdRef} /*value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}*/ />
            </label>
          </div>
          <p class="text-red-500 text-xl italic my-8 ">{error}</p>
          <div class="flex flex-col gap-3">
            <button class="bg-[#1DA1F2] hover:bg-sky-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Sign Up
            </button>
            <span className="flex justify-between">Already have an account?
              <Link className="bg-[#1DA1F2] hover:bg-sky-500 text-white font-bold px-[15px] py-[3px] rounded focus:outline-none focus:shadow-outline text-center" to='/login'>Login</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Auth