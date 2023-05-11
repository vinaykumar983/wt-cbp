import { useForm } from "react-hook-form";
import {useDispatch,useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { userLogin } from "../slices/userSlice";
function Login(){
    const {register,handleSubmit,formState:{errors}}=useForm()
    let dispatch=useDispatch()
    let navigate=useNavigate()
    let {userObj,isError,isLoading,isSuccess,errMsg}=useSelector(
      (state)=>state.user
    )
    const onFormSubmit=(userCredentialsObject)=>{
      console.log(userCredentialsObject)
      dispatch(userLogin(userCredentialsObject))
    }
    useEffect(()=>{
      if(isSuccess){
      navigate("/dashboard")
      }
      if(isError){
        console.log(errMsg)
        alert(errMsg)
      }
    },[isSuccess,isError,errMsg]);
    return(
        <div className="container w-50 abc">
            <form className='w-50 mx-auto mt-5' onSubmit={handleSubmit(onFormSubmit)}>
                <h1 className="text-center " style={{fontFamily:'cursive'}}>Login</h1>
                <div>
                    <label className='form-label'>Username</label>
                    <input type="text" className='form-control' {...register('user')}/>
                </div>
                <div>
                    <label className='form-label'>Set password</label>
                    <input type="password" className='form-control'{...register('pass')}/>
                </div>
                <button className='btn btn-primary d-block mx-auto mt-4' type='submit'>Login</button>
            </form>
        </div>
    );
}

export default Login;