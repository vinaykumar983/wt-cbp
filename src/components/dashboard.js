import {useState,useEffect} from 'react'
import {useForm} from 'react-hook-form';
import axios from 'axios';

function Dashboard(){
    const {register,handleSubmit}=useForm();
    const [ob,setob]=useState([]);
    const onFormSubmit=(obj)=>{
         //console.log(obj);
         
        axios.get('/user-api/get-data'+obj.service)
        .then((response)=>{
            setob(response.data.payload)
            
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    return(
        <div className='container w-75 abc'>
            <h2 className='text-center' style={{fontFamily:'cursive'}}>Choose the service you need</h2>
            <center><form className="w-50 text-center mt-5" onSubmit={handleSubmit(onFormSubmit)}>
            <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" {...register("service")}>
                <option selected >Select the service</option>
                <option value="Air conditioner">Air conditioner</option>
                <option value="Home appliance">Home appliance</option>
                <option value="Furniture">Furniture</option>
                <option value="Electrical service">Electrical service</option>
                <option value="Plumbing">Plumbing</option>
                <option value="Computer services">Computer services</option>
            </select>
            <button className="btn btn-primary" type='submit'>submit</button>
            </form>
            {!ob.length==0 ? <table className='table mt-5 container'>
                <thead>
                    <th>Name</th>
                    <th>phone number</th>
                    <th>Area</th>
                    <th>Service</th>
                </thead>
                <tbody>
                    {ob.map((obobj,ind)=>
                        <tr>
                            <td>{obobj.user}</td>
                            <td>{obobj.ph_no}</td>
                            <td>{obobj.city}</td>
                            <td>{obobj.services}</td>
                        </tr>
                    )}
                </tbody>
            </table>:<div>
                <h1 style={{fontFamily:'cursive'}}>Service providers appear here</h1>
                </div>}
            </center>
        </div>
    );
}

export default Dashboard;