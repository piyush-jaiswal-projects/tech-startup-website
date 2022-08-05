import React from "react";
import '../styles/shopsection.css';

function ShopSection(){
    return(
        <div className="shop-section">

        <h1 className="team-section-heading">Our Services</h1>

<div className="team-grid">

<div className="member-card">
<img className="member-img" src="media/member/2.png" alt="Member Pic"></img>
<h2 className="member-name">Cyber Security Services</h2>
<h3 className="member-desg">Rs 50,000</h3>
</div>

<div className="member-card">
<img className="member-img" src="media/member/1.png" alt="Piyush Jaiswal"></img>
<h2 className="member-name">Internet Services</h2>
<h3 className="member-desg">Rs 2,000</h3>
</div>

</div>

<h1 className="team-section-heading">Our Products</h1>

<div className="team-grid">

<div className="member-card">
<img className="member-img" src="media/member/2.png" alt="Member Pic"></img>
<h2 className="member-name">Alex Stark</h2>
<h3 className="member-desg">Co-Founder | Cyber Security Specialist</h3>
</div>

<div className="member-card">
<img className="member-img" src="media/member/1.png" alt="Piyush Jaiswal"></img>
<h2 className="member-name">Piyush Jaiswal</h2>
<h3 className="member-desg">CEO & Founder | Web Developer</h3>
</div>

<div className="member-card">
<img className="member-img" src="media/member/2.png" alt="Member Pic"></img>
<h2 className="member-name">Jim Wheeler</h2>
<h3 className="member-desg">CTO | Backend Developer</h3>
</div>

<div className="member-card">
<img className="member-img" src="media/member/2.png" alt="Member Pic"></img>
<h2 className="member-name">Alex Stark</h2>
<h3 className="member-desg">Co-Founder | Cyber Security Specialist</h3>
</div>

<div className="member-card">
<img className="member-img" src="media/member/1.png" alt="Piyush Jaiswal"></img>
<h2 className="member-name">Piyush Jaiswal</h2>
<h3 className="member-desg">CEO & Founder | Web Developer</h3>
</div>

<div className="member-card">
<img className="member-img" src="media/member/2.png" alt="Member Pic"></img>
<h2 className="member-name">Jim Wheeler</h2>
<h3 className="member-desg">CTO | Backend Developer</h3>
</div>

</div>

        </div>
    );
}

export default  ShopSection;