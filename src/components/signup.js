import { useState } from 'react';
import {useForm} from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './signup.css';
function Signup(){
    const [flag,setFlag]=useState(-1);
    const navigate=useNavigate();
    const {register,handleSubmit,formState:{errors}}=useForm();
    const onFormSubmit1=(obj)=>{
       axios.post("http://localhost:4000/user-api/create-user",obj)
        .then((response)=>{
          alert(response.data.message)
          if(response.data.message=="Registeration successful..."){
            navigate("/login")
          }
          console.log(response.data.message)
        })
        .catch((error)=>{
          alert("error occured",error.message)
        })
    }
    const onFormSubmit2=(obj)=>{
       // console.log(obj);
       axios.post("http://localhost:4000/user-api/create-provider",obj)
        .then((response)=>{
          alert(response.data.message)
          if(response.data.message=="Registeration successful..."){
            navigate("/login")
          }
          console.log(response.data.message)
        })
        .catch((error)=>{
          alert("error occured",error.message)
        })
    }
    return(
        
          <div className='container w-75 abc'>
           <center><div className='mt-3  d-flex xz w-50'>
                <div>
                <button className='btn btn-primary d-block mx-auto' onClick={()=>{
        setFlag(0);
    }}>Sign up as user</button>
    </div>
    <div>
                <button className='btn btn-primary d-block mx-auto' onClick={()=>{
        setFlag(1);
    }}>Signup as service provider</button></div>
            </div></center> 
            <div>
            {!flag ? <form className='w-75 mx-auto mt-5' onSubmit={handleSubmit(onFormSubmit1)}>
                <h1 className='text-center' style={{fontFamily:'cursive'}}>Signup as user</h1>
                <div>
                    <label className='form-label'>Username</label>
                    <input type="text" className='form-control' {...register('user',{required:true})}/>
                    {errors.user?.type=='required' && <p className='text-danger'>*username is required</p>}
                </div>
                <div>
                    <label className='form-label'>Set password</label>
                    <input type="password" className='form-control'{...register('pass',{required:true})}/>
                    {errors.pass?.type=='required' && <p className='text-danger'>*password is required</p>}
                </div>
                <div>
                    <label className='form-label'>Area</label>
                    <input type="text" className='form-control'{...register('city',{required:true})}/>
                    {errors.city?.type=='required' && <p className='text-danger'>*Area is required</p>}
                </div>
                <div>
                    <label className='form-label'>Phone number</label>
                    <input type="number" className='form-control'{...register('ph_no',{required:true})}/>
                    {errors.ph_no?.type=='required' && <p className='text-danger'>*Phone no is required</p>}
                </div>
                <button className='btn btn-primary d-block mx-auto mt-4' type='submit'>Signup</button>
            </form> :
             <form className='w-75 mx-auto mt-5' onSubmit={handleSubmit(onFormSubmit2)}>
                    <h1 className='text-center' style={{fontFamily:'cursive'}}>Signup as service provider</h1>
                    <div>
                    <label className='form-label'>Username</label>
                    <input type="text" className='form-control'{...register('user',{required:true})}/>
                    {errors.user?.type=='required' && <p className='text-danger'>*username is required</p>}

                </div>
                <div>
                    <label className='form-label'>Set password</label>
                    <input type="password" className='form-control'{...register('pass',{required:true})}/>
                    {errors.pass?.type=='required' && <p className='text-danger'>*password is required</p>}

                </div>
                <div>
                    <label className='form-label'>Area</label>
                    <input type="text" className='form-control'{...register('city',{required:true})}/>
                    {errors.city?.type=='required' && <p className='text-danger'>*Area is required</p>}

                </div>
                <div>
                    <label className='form-label'>Phone number</label>
                    <input type="number" className='form-control'{...register('ph_no',{required:true})}/>
                    {errors.ph_no?.type=='required' && <p className='text-danger'>*Phone no is required</p>}

                </div>
                <div>
                <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" {...register("services")}>
                <option selected >Select the service</option>
                <option value="Air conditioner">Air conditioner</option>
                <option value="Home appliance">Home appliance</option>
                <option value="Furniture">Furniture</option>
                <option value="Electrical service">Electrical service</option>
                <option value="Plumbing">Plumbing</option>
                <option value="Computer services">Computer services</option>
            </select>
                </div>
                <button className='btn btn-primary d-block mx-auto mt-4' type='submit'>Signup</button>
                </form>}
            </div>
        </div>
        
    );
}

export default Signup;