import React from 'react'
import './CommunityInfo.css'

const CommunityInfo = () => {
  return (
    <>
    
    <div className="container">

      <div className="leftside">

       
        <h2>LATEST AT EXCOLT</h2>
        <hr />
        <div className="content">
          <h3>December 02, 2024</h3>
          <img src="data:image/jpeg;base64,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" alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, placeat.</p>
          <span>Lorem ipsum dolor sit amet.</span>
          <hr />
          <p>READ MORE</p>
        </div>
       
      </div>

      <div className="middle">
      <h2>INVESTOR UPDATES</h2>
      <hr />
      <div className="content">
          <h3>December 02, 2024</h3>
          <img src="" alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, placeat.</p>
          <span>Lorem ipsum dolor sit amet.</span>
          <hr />
          <p>READ MORE</p>
        </div>
      </div>

      <div className="rightside">
      <h2>CSR INITIATIVES</h2>
      <hr />
      <div className="content">
          <h3>December 02, 2024</h3>
          <img src="" alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, placeat.</p>
          <span>Lorem ipsum dolor sit amet.</span>
          <hr />
          <p>READ MORE</p>
        </div>
      </div>
      </div>
    
    </>
  )
}

export default CommunityInfo