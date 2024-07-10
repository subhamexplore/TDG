import React, { useState } from "react";
import "../assets/styles/Schedule.css";
import axios from "axios";

const Schedule = () => {
  const [c, setC] = useState(false);
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    phone: "",
    email: "",
    dob: "",
    mode: "",
    reason: "",
    question: "",
    hear: "",
    comment: "",
  });
  const handleChange = (e) => {
    if (e.target.name === "mode") {
      setFormData({
        mode: e.target.value,
      });
    }
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    try {
      const response = await fetch("http://localhost:5000/api/consult", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
    } catch (error) {
      alert("Failed! Try again.")
    }
  };
  console.log(formData);
  return (
    <div className="schedule-section" style={{ color: "white" }}>
      <div className="sch row" style={{ margin: "0" }}>
        <div className="left-sch col-lg-6" style={{ position: "relative" }}>
          <div className="top-job-post d-flex align-items-center"></div>
          <h3 className="mb-4" style={{ textTransform: "uppercase" }}>
            SCHEDULE a consultation
          </h3>
          <div className="job-desc my-3">
            <p style={{ fontWeight: "600" }}>
              Welcome to Our Consultation Booking Page!
            </p>
            <p style={{ color: "white" }}>
              At TDG SMART, we understand the importance of personalized advice
              and solutions tailored to your unique needs. Whether you're
              looking for expert guidance, strategic planning, or simply have
              some questions, we're here to help. Booking a consultation with
              our team is quick and easy. Follow the steps below to get started!
            </p>
          </div>
          <div className="job-resp my-2">
            <p style={{ fontWeight: "600" }}>
              Why Book a Consultation with Us?
            </p>
            <ul>
              <li>
                <strong>Expert Advice:</strong> Our experienced professionals
                are ready to provide you with insights and solutions.
              </li>
              <li>
                <strong>Personalized Service:</strong> Every consultation is
                tailored to address your specific needs and goals.
              </li>
              <li>
                <strong>Flexible Scheduling:</strong> Choose a time that works
                best for you with our easy online booking system.
              </li>
              <li>
                <strong>Confidentiality Assured:</strong> Your privacy is our
                priority. All consultations are conducted with the utmost
                discretion.
              </li>
            </ul>
          </div>
          <div className="job-resp my-2">
            <p style={{ fontWeight: "600" }}>How It Works</p>
            <ul>
              <li>
                <strong>Fill Out the Form:</strong> Provide us with some basic
                information about yourself and your needs.
              </li>
              <li>
                <strong>Choose a Time:</strong> Select a date and time that
                suits your schedule.
              </li>
              <li>
                <strong>Confirm Your Booking:</strong> Receive a confirmation
                email with all the details.
              </li>
              <li>
                <strong>Consultation Day:</strong> Meet with our expert at your
                scheduled time, either in-person or virtually.
              </li>
            </ul>
          </div>
          <p>
            Ready to get started? Fill out the form below to book your
            consultation now!
          </p>
        </div>
        <div className="right-sch col-lg-6">
          <form action="" className="form-sch" onSubmit={handleSubmit}>
            <div className="d-flex" style={{ gap: "10px" }}>
              <input
                name="fname"
                onChange={(e) => handleChange(e)}
                type="text"
                placeholder="Full Name"
              />
              <input
                name="lname"
                onChange={(e) => handleChange(e)}
                type="text"
                placeholder="Last Name"
              />
            </div>
            <input
              name="phone"
              onChange={(e) => handleChange(e)}
              type="number"
              placeholder="+1 | Enter your mobile number"
            />
            <br />
            <input
              name="email"
              onChange={(e) => handleChange(e)}
              type="email"
              placeholder="Enter your Email"
            />
            <br />
            <input
              name="dob"
              onChange={(e) => handleChange(e)}
              type="date"
              placeholder="Preferred Consultation Date"
            />
            <br />
            <input
              name="time"
              onChange={(e) => handleChange(e)}
              type="time"
              placeholder="Preferred Consultation Time"
            />
            <br />
            <label className="mt-1" htmlFor="">
              Mode of Consultation
            </label>
            <br />
            <div className="d-flex align-items-center mt-2">
              <input
                type="checkbox"
                style={{ width: "max-content" }}
                name="mode"
                value={"In-Person"}
                onChange={(e) => handleChange(e)}
              />
              <label htmlFor="" className="mx-2">
                In-Person
              </label>
            </div>
            <div className="d-flex align-items-center mt-2 mb-1">
              <input
                type="checkbox"
                style={{ width: "max-content" }}
                name="mode"
                value={"Virtual (via Zoom, Skype, etc.)"}
                onChange={(e) => handleChange(e)}
              />
              <label htmlFor="" className="mx-2">
                Virtual (via Zoom, Skype, etc.)
              </label>
            </div>
            <textarea
              type="text"
              placeholder="Please provide a brief description of the reason for your consultation"
              style={{
                width: "100%",
                height: "70px",
                padding: "5px 10px",
                borderRadius: "5px",
              }}
              name="reason"
              onChange={(e) => handleChange(e)}
            />
            <br />
            <textarea
              type="text"
              placeholder="Specific questions or topics you would like to cover"
              style={{
                width: "100%",
                height: "50px",
                padding: "5px 10px",
                borderRadius: "5px",
              }}
              name="question"
              onChange={(e) => handleChange(e)}
            />
            <br />
            <select
              onChange={(e) => {
                setC(true);
                handleChange(e);
              }}
              style={{ color: c ? "black" : "grey" }}
              name="hear"
            >
              <option value="" disabled selected>
                How did you hear about us?
              </option>
              <option value="Linkedin">Linkedin</option>
              <option value="Whatsapp">Whatsapp</option>
              <option value="Advertisement">Advertisement</option>
            </select>
            <br />
            <textarea
              type="text"
              placeholder="Any additional comments or requirements"
              style={{
                width: "100%",
                height: "50px",
                padding: "5px 10px",
                borderRadius: "5px",
              }}
              name="comment"
              onChange={(e) => handleChange(e)}
            />
            <br />
            <div className="d-flex align-items-center mt-2">
              <input type="checkbox" style={{ width: "max-content" }} />
              <label htmlFor="" className="mx-2">
                I agree to the Terms and Conditions and Privacy Policy.
              </label>
            </div>
            <br />
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Schedule;