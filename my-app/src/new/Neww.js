import React, { useState } from 'react'
import './new.scss'
import Sidebar from "../components/sidebar/sidebar"
import Navbar from '../components/navbar/navbar'
import ImageIcon from '@mui/icons-material/Image';
import UploadFileIcon from '@mui/icons-material/UploadFile';

const Neww = ({inputs, title}) => {

  const [file,setFile] = useState('')

  return (
    <div className="neww">
      <Sidebar/>
      
      <div className="new-container">
        <Navbar/>

        <div className="top">
          <span className="title">Add New User</span>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={file ? URL.createObjectURL(file): "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} alt=""/>
          </div>
          <div className="right">
            <form action="">
            <div className="form-input image">
              {/* giving htmlfor and id to same name means they are connected */}
                <label htmlFor="file">Image: <UploadFileIcon/></label>
                <input type="file" id='file'onChange={(e)=>setFile(e.target.files[0])} style={{display:"none"}}/>
              </div>
              {
                inputs.map((input)=>(
                  <div className="form-input" key={input.key}>
                  <label htmlFor="">{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder}/>
                </div>
                ))
              }
              {/* <div className="form-input">
                <label htmlFor="">Username</label>
                <input type="text" placeholder='Your username' />
              </div> */}
              
              {/* <div className="form-input">
                <label htmlFor="">Full Name</label>
                <input type="text" placeholder='Your name' />
              </div>

              <div className="form-input">
                <label htmlFor="">Email</label>
                <input type="email" placeholder='Your email' />
              </div>

              <div className="form-input">
                <label htmlFor="">Phone No.</label>
                <input type="text" placeholder='Your phone number' />
              </div>
              <div className="form-input">
                <label htmlFor="">Password</label>
                <input type="password"  />

              </div>

              <div className="form-input">
                <label htmlFor="">Address</label>
                <input type="text" placeholder='Your address' />
              </div>
              <div className="form-input">
                <label htmlFor="">Country</label>
                <input type="text" placeholder='Your country' />
              </div> */}

              <button type="button">Submit</button>
            </form>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Neww