// function Home(){
//     return(
//         <div>
            
//         </div>
//     );
// }

// export default Home;


import React from 'react';

import './home.css'

function Home(){

let servicesList=[
    {
        name:"Air conditioner",
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy8nOBp8nOzwdxLajmh4KSN94j-IAZfTYnmgRoAmuPuQ&usqp=CAU&ec=48665701'
    },
    {
        name:"Home Appliances",
        image:'https://thumbs.dreamstime.com/z/cartoon-home-appliance-card-19570988.jpg'
    },
    {
        name:"Furniture",
        image:'https://rukminim1.flixcart.com/image/150/150/jm9hfgw0/bed/h/g/g/king-na-rosewood-sheesham-bkwl05nhbs0401d1p-flipkart-perfect-original-imaf97cwhvgnwg95.jpeg?q=70'
    },
    {
        name:"Electrical Service",
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLzc0GSWGA_D_uRAzMNxppMOt8yXztJa8GfA&usqp=CAU'
    },
    {
        name:"Plumbing",
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXvPFJtTYHcq7M1ZmGCsUwfmxdN8ogVa3ZOSJeA393mg&usqp=CAU&ec=48665701'
    },
    {
        name:"computer services",
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9wSHS8xBpyHC8801GQjzzdwXoOW16pdr8UlSwlcAuqA&usqp=CAU&ec=48665701'
    }

]
return(
<div className='text-center container'>
            <p className="display-2 text-info" style={{fontFamily:'cursive'}}>Our Services</p>

            <div className=" container text-center">
                
                     <div className="text-center mt-5">
                     <div className='row'>
                       <div className="col-6">
                    
                       <div className='card card-body'>
                            <img src={servicesList[0].image} alt="" width="500px" className='d-block mx-auto'/>
                            <h2 style={{fontFamily:'cursive'}}>{servicesList[0].name}</h2>
                       </div>

                       </div>


                       <div className="col-6">
                    
                       <div className='card card-body'>
                            <img src={servicesList[1].image} alt="" width="350px" className='d-block mx-auto'/>
                            <h2 style={{fontFamily:'cursive'}}>{servicesList[1].name}</h2>
                       </div>

                       </div>
                       </div>    
                      <div className='row mt-3'>
                       <div className="col-6">
                    
                       <div className='card card-body'>
                            <img src={servicesList[2].image} alt=""  width="360px" className='d-block mx-auto'/>
                            <h2 style={{fontFamily:'cursive'}}>{servicesList[2].name}</h2>
                       </div>

                       </div>

                       
                       <div className="col-6">
                    
                       <div className='card card-body'>
                            <img src={servicesList[3].image} alt="" width="500px" className='d-block mx-auto'/>
                            <h2 style={{fontFamily:'cursive'}}>{servicesList[3].name}</h2>
                       </div>

                       </div>
                       </div>    
                       <div className='row mt-3'>
                       <div className="col-6">
                    
                       <div className='card card-body'>
                            <img src={servicesList[4].image} alt=""  width="360px" className='d-block mx-auto'/>
                            <h2 style={{fontFamily:'cursive'}}>{servicesList[4].name}</h2>
                       </div>

                       </div>

                       
                       <div className="col-6">
                    
                       <div className='card card-body'>
                            <img src={servicesList[5].image} alt="" width="260px" className='d-block mx-auto'/>
                            <h2 style={{fontFamily:'cursive'}}>{servicesList[5].name}</h2>
                       </div>

                       </div>
                       </div> 
            </div>
        </div>
        </div>
    )
}
export default Home;
