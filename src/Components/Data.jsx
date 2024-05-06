import React from 'react';
import './Data.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck,faTimes} from '@fortawesome/free-solid-svg-icons';

function Data() {
    let pct=[
        {
          plan:"FREE",
        pricepm:"$0/month",
        user:{values:" Single User" ,icon:true},
        userStorage:{values:"50GB Storage" ,icon:true},
        publicProjects:{values:"Unlimited Public Projects" ,icon:true},
        communityaccess: {values:"Community Access" ,icon:true},
        privateProjects: {values:"Unlimited Private Projects" ,icon:false},
        support:{values:"Dedicated Phone Support",icon:false},
        subdomain:{values:"Free Subdomain",icon:false},
       reports:{values:"Monthly Status Report",icon:false}},
      
       {
        plan:"PLUS",
      pricepm:"$9/month",
      user:{values:"Single User" ,icon:true},
      userStorage:{values:"50GB Storage" ,icon:true},
      publicProjects:{values:"Unlimited Public Projects" ,icon:true},
      communityaccess: {values:"Community Access" ,icon:true},
      privateProjects: {values:"Unlimited Private Projects" ,icon:true},
      support:{values:"Dedicated Phone Support",icon:true},
      subdomain:{values:"Free Subdomain",icon:true},
     reports:{values:"Monthly Status Report",icon:false}},
    
     {
        plan:"PRO",
      pricepm:"$49/month",
      user:{values:"Single User" ,icon:true},
      userStorage:{values:"50GB Storage" ,icon:true},
      publicProjects:{values:"Unlimited Public Projects" ,icon:true},
      communityaccess: {values:"Community Access" ,icon:true},
      privateProjects: {values:"Unlimited Private Projects" ,icon:true},
      support:{values:"Dedicated Phone Support",icon:true},
      subdomain:{values:"Free Subdomain",icon:true},
     reports:{values:"Monthly Status Report",icon:true}}
    
      
      ]
      // console.log(pct);
    return (
        <>
       <div className='fullbody'>
        {pct.map((ele,index)=>{
               return (
            <div className='card w-100 rounded-4 ' key={index}>
                <div className='card-title'>
                  <p className='plan'> {ele.plan}</p> 
                  <p className='price'>{ele.pricepm}</p> 
                    
                </div>
                <hr className='mx-3 '/>
                <div className='card-body'>

                    <p className={ele.user.icon ?'body':"body_value"}><span> <FontAwesomeIcon icon={ele.user.icon?faCheck:faTimes} /></span> {ele.user.values}</p>
                    <p className={ele.userStorage.icon ?'body':"body_value"}><span> <FontAwesomeIcon icon={ele.userStorage.icon?faCheck:faTimes} /></span> {ele.userStorage.values}</p>
                    <p className={ele.publicProjects.icon ?'body':"body_value"}><span> <FontAwesomeIcon icon={ele.publicProjects.icon?faCheck:faTimes} /></span> {ele.publicProjects.values}</p>
                    <p className={ele.communityaccess.icon ?'body':"body_value"}><span> <FontAwesomeIcon icon={ele.communityaccess.icon?faCheck:faTimes} /></span> {ele.communityaccess.values}</p>
                    <p className={ele.privateProjects.icon ?'body':"body_value"}><span> <FontAwesomeIcon icon={ele.privateProjects.icon?faCheck:faTimes} /></span> {ele.privateProjects.values}</p>
                    <p className={ele.support.icon ?'body':"body_value"}><span> <FontAwesomeIcon icon={ele.support.icon?faCheck:faTimes} /></span> {ele.support.values}</p>
                    <p className={ele.subdomain.icon ?'body':"body_value"}><span> <FontAwesomeIcon icon={ele.subdomain.icon?faCheck:faTimes} /></span> {ele.subdomain.values}</p>
                    <p className={ele.reports.icon ?'body':"body_value"}><span> <FontAwesomeIcon icon={ele.reports.icon?faCheck:faTimes} /></span> {ele.reports.values}</p>

                    <button className='btn w-100 rounded-5 submit '>BUTTON</button>
                </div>
            </div>
            )}
            

        )}
        </div>
        </>
    );
};

export default Data;