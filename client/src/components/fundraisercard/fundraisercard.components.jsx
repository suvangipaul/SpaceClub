import React from "react";
import "./fundraisercard.styles.css";

const Fundraisercard = () => {
  return (
    <div className="fundraiser-container">
      <img
        className="fundraiser-pic"
        src={`https://cimages.milaap.org/milaap/image/upload/c_fill,g_faces,h_452,w_603/v1654950286/production/images/campaign/513370/WhatsApp_Image_2022-06-11_at_5.51.25_PM_tposq1_1654950291.jpg`}
        alt=""
      />
      <div className="fundraiser-details">
        <h1>38 Years Old Hemant Pawar Needs Your Help Undergo Liver Transplant</h1>
        <div className="fund-actions">
          <div className="fund-raised">
              <div className="circle"></div>
              <p>Raised <br/>Rs.10,20,020 of Rs.25,00,000</p>
          </div>
          <button className="fund-donate-btn">Donate</button>  
        </div>
    </div>
    </div>
  );
};

export default Fundraisercard;
