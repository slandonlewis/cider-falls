import { guestList } from "./guests.js"
import { serviceList } from "./services.js"
import { parkAreaList } from "./parkareas.js"

const body = document.querySelector('body')

body.innerHTML = `
<div id="top">
    <img src="img/logo.png" height="150" width="250">
    <h3>Cider Falls State Park</h3>
    
</div>
<div id="services">
    <ul id="ul-left-to-right">
        ${serviceList()}
    </ul>
</div>


<div id="content">
    <section class="areas-section-box">
        <h3>Areas</h3>
        <div id="area-list" class="areas-container">
            ${parkAreaList()}
        </div>
    </section>

    <section class="section-box">
        <h3>Current Guests</h3>
        <ul id="guestlist">
            ${guestList()}
        </ul>
    </section>
</div>


<div id="bottom">
    <h4>☎️(123)-456-7890 • ✉️ciderfalls@gmail.com • 📍123 Cider Falls, TN</h4>
</div>
`
