import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
    <div>
      <h1>Dentist Website</h1>
       <p>
         Welcome to my dentist website.
       </p>

      <hr />
      <h1>Contact</h1>
      <p>
        Call, email or drop by any time. We are open Monday through Friday
        from 9AM until 5PM. If you call during our off hours and leave a
        message then we will get back to you.
      </p>

      <p>
        frontdesk@dentistoffice.com
      </p>

      <p>
        1 (800) MY-TEETH <br/>
        1 (800) 698-3384
      </p>

      <p>
        123 Main Street <br/>
        Dental Town, USA 99555
      </p>

      <hr />
      <h1>Procedures</h1>

      <p>
        Here at Dentist Office we provide a wide variety of procedures. We
        accept all sorts of insurance and have competitive uninsured payment
        plans. Find the service you need and visit our contact page to find
        out how to reach out to us to make the appointment you need!
      </p>

      <ul>
        <li>General Checkups</li>
        <li>Teeth Cleaning</li>
        <li>Cavity Screenings</li>
        <li>Cavity Fillings</li>
        <li>Chipped Tooth Fixings</li>
        <li>Tooth Removal</li>
        <li>Root Canals</li>
      </ul>

    </div>
    )
  }
}

export default App;
