import React, { useState, useEffect } from "react";
import UserService from "../services/user.service";
import tutorialService from "../services/tutorial.service";

const Home = () => { 
  const [count,setCount] = useState(0); 
  const [tutorials,setTutorials,tutorial] = useState({});
  const [use,setuse] = useState(0); 
  const [ User,setusers] = useState({});
  
  useEffect(() => {
    tutorialService.getAll()
      .then((res) => {
        console.log('--------------------------------')
        console.log(res.data.length)
        console.log('--------------------------------')
        setTutorials(res.data);
        console.log(res.data.length);
        setCount(res.data.length)
      }).catch((err)=>{console.log(err)})
  }, []);
  useEffect(() => {
    UserService.getPublicContent()
      .then((res) => {
        console.log('--------------------------------')
        console.log(res.data.length)
        console.log('--------------------------------')
        setusers(res.data);
        console.log(res.data.length);
        setuse(res.data.length)
      }).catch((err)=>{console.log(err)})
  }, []);

  return (
    
    <div className="content-body">
    <div className="page-titles">
    <ol className="breadcrumb">
      <li className=""><a href="">Home /</a></li>
      <li className="breadcrumb-item active"><a href="">Projet</a></li>
    </ol>
          </div>

          <div className="container-fluid">  
<div className="row">
  <div className="col-xl-3 col-sm-6">
    <div className="card box-hover">
      <div className="card-body">
        <div className="d-flex align-items-center">
          <div className="icon-box icon-box-lg bg-success-light rounded-circle">
            <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M22.9715 29.3168C15.7197 29.3168 9.52686 30.4132 9.52686 34.8043C9.52686 39.1953 15.6804 40.331 22.9715 40.331C30.2233 40.331 36.4144 39.2328 36.4144 34.8435C36.4144 30.4543 30.2626 29.3168 22.9715 29.3168Z" stroke="#3AC977" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M22.9714 23.0537C27.7304 23.0537 31.5875 19.1948 31.5875 14.4359C31.5875 9.67694 27.7304 5.81979 22.9714 5.81979C18.2125 5.81979 14.3536 9.67694 14.3536 14.4359C14.3375 19.1787 18.1696 23.0377 22.9107 23.0537H22.9714Z" stroke="#3AC977" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div className="total-projects ms-3">
            <h3 className="text-success count">{count}</h3> 
            <span>Total Projet</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="col-xl-3 col-sm-6">
    <div className="card box-hover">
      <div className="card-body">
        <div className="d-flex align-items-center">
          <div className="icon-box icon-box-lg bg-primary-light rounded-circle">
            <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M32.8961 26.5849C34.1612 26.5849 35.223 27.629 35.0296 28.8783C33.8947 36.2283 27.6026 41.6855 20.0138 41.6855C11.6178 41.6855 4.8125 34.8803 4.8125 26.4862C4.8125 19.5704 10.0664 13.1283 15.9816 11.6717C17.2526 11.3579 18.5553 12.252 18.5553 13.5605C18.5553 22.4263 18.8533 24.7197 20.5368 25.9671C22.2204 27.2145 24.2 26.5849 32.8961 26.5849Z" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M41.1733 19.2019C41.2739 13.5059 34.2772 4.32428 25.7509 4.48217C25.0877 4.49402 24.5568 5.04665 24.5272 5.70783C24.3121 10.3914 24.6022 16.4605 24.764 19.2118C24.8134 20.0684 25.4864 20.7414 26.341 20.7907C29.1693 20.9526 35.4594 21.1736 40.0759 20.4749C40.7035 20.3802 41.1634 19.8355 41.1733 19.2019Z" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

          </div>
          <div className="total-projects ms-3">
            <h3 className="text-primary count">{use}</h3> 
            <span>Total Persones</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="col-xl-3 col-sm-6">
    <div className="card box-hover">
      <div className="card-body">
        <div className="d-flex align-items-center">
          <div className="icon-box icon-box-lg bg-purple-light rounded-circle">
            <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M22.9717 41.0539C22.9717 41.0539 37.3567 36.6983 37.3567 24.6908C37.3567 12.6814 37.878 11.7439 36.723 10.5889C35.5699 9.43391 24.858 5.69891 22.9717 5.69891C21.0855 5.69891 10.3736 9.43391 9.21863 10.5889C8.0655 11.7439 8.58675 12.6814 8.58675 24.6908C8.58675 36.6983 22.9717 41.0539 22.9717 41.0539Z" stroke="#BB6BD9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M26.4945 26.4642L19.4482 19.4179" stroke="#BB6BD9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M19.4487 26.4642L26.495 19.4179" stroke="#BB6BD9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div className="total-projects ms-3">
            <h3 className="text-purple count">07</h3> 
            <span>Total Qiuz</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="d-flex justify-content-between align-items-center mb-3">
    <h5 className="mb-0">That Is project </h5>
   
  </div>
  {/* {tutorials &&
              tutorials.map((tutorial) => (
  <div className="col-xl-3 col-sm-6">
    <div className="card box-hover">
      <div className="card-header">
        <h5 className="mb-0">{tutorial.title}</h5>
      </div>
      <div className="card-body">
        <div className="products style-1">
          <img src="images/contacts/pic2.jpg" className="avatar avatar-lg rounded-circle" alt=""/>
          <div>
            <h6>{tutorial.NomEntriprise}</h6>
            <span>{tutorial.description}</span>	
          </div>	
        </div>
        <p className="my-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
        <div>
          <p className="text-secondary mb-1 font-w500">Team</p>
          <div className="avatar-list avatar-list-stacked">
            <img src="images/contacts/pic666.jpg" className="avatar rounded-circle" alt=""/>
            <img src="images/contacts/pic555.jpg" className="avatar rounded-circle" alt=""/>
            <img src="images/contacts/pic1.jpg" className="avatar rounded-circle" alt=""/>
            <img src="images/contacts/pic555.jpg" className="avatar rounded-circle" alt=""/>
            <img src="images/contacts/pic666.jpg" className="avatar rounded-circle" alt=""/>
          </div>
        </div>
        <div className="progress mt-4">
        <div className="progress-bar bg-purple" style={{width: '60%', height: '5px', borderRadius: '4px'}} role="progressbar"></div>

        </div>
      </div>
    </div>
  </div>
 
 ))} */}
</div>

</div>
</div>
  );
};


      

export default Home
