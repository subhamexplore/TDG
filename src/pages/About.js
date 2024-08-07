// import React from "react";
// import "../assets/styles/About.css";
// import sbs1 from "../assets/images/sbs1.png";
// import sbs2 from "../assets/images/sbs2.png";
// import sbs3 from "../assets/images/sbs3.png";
// import tick from "../assets/images/tick.png";
// import p1 from "../assets/images/p1.png";
// import p2 from "../assets/images/p2.png";
// import p3 from "../assets/images/p3.png";
// import p4 from "../assets/images/p4.png";
// import p5 from "../assets/images/p5.png";
// import { useNavigate, Link } from "react-router-dom";

// const About = () => {
//   const nav = useNavigate();
//   return (
//     <div className="about-section">
//       <div className="about-black">ABOUT US</div>
//       <div
//         className="about-black-below"
//         style={{
//           margin: "auto",
//           textAlign: "center",
//           textTransform: "uppercase",
//         }}
//       >
//       <h3>Smart & Elegant Solutions</h3>
//       </div>
//       <div className="side-by-side">
//         <div className="side-by-side-left">
//           <img src={sbs1} alt="" />
//         </div>
//         <div className="side-by-side-right">
//           <h3>Our Mission</h3>
//           <p style={{ color: "rgba(0, 0, 0, 0.75)" }}>
//             We are committed to creating smart, elegant, and innovative solutions that enrich the lives of our customers.
//             Drawing inspiration from the ever-evolving landscape of technology, we have dedicated ourselves to pushing the limits of
//             what's possible, pioneering innovative solutions that make everyday living truly exceptional.
//             Our Smart and elegant solutions simplify your daily routines and provide the best entertainment,
//             comfort, and security in any home space, creating an ideal environment for building long-lasting memories.
//           </p>
//           {/* <p style={{ fontSize: "1rem" }}>Sharon Gunther</p>
//           <p style={{ color: "#AD9A9A", fontSize: "0.95rem" }}>Fresh Design</p> */}
//         </div>
//       </div>
//       <br />
//       <br />
//       <br />
//       <div className="side-by-side">
//         <div className="side-by-side-right">
//           <h3>Our Objectives</h3>
//           <div className="d-flex align-items-start my-3">
//             <div>
//               <img src={tick} alt="" height={25} />
//             </div>
//           <div className="mx-3 mt-1" style={{ color: "rgba(0, 0, 0, 0.75)" }}>
//               We strive to develop intelligent, uncomplicated, and streamlined solutions for your household.
//               Our team will thoroughly assess your needs and challenges during the discovery process and
//               create designs to enhance your experience.
//             </div>
//             <div className="mx-3 mt-1" style={{ color: "rgba(0, 0, 0, 0.75)" }}>
//                With over 15 years of experience in the field, our team rigorously tests all high-quality smart products on the market
//               to ensure that we deliver smart, connected, and elegant solutions. Our solutions work seamlessly,
//               allowing customers to easily operate and depend on them consistently.
//             </div>
//           </div>
//           <div className="d-flex align-items-start my-3">
//             <div>
//               <img src={tick} alt="" height={25} />
//             </div>
//             <div className="mx-3 mt-1" style={{ color: "rgba(0, 0, 0, 0.75)" }}>
//               We are customer-focused and committed to surpassing your goals. We actively listen to your needs, goals, and challenges
//               and work closely with your family to bring your dreams to fruition. Witnessing your vision come to life is the ultimate reward for us.
//             </div>
//           </div>
//           </div>
//           </div>
//           <button className="wwd-btn" onClick={()=>nav("/consultation")}>REQUEST A QUOTE</button>
//       <br />
//       <br />
//       <br />
//       <div className="partners">
//         <p style={{ textAlign: "center", color: "#757575" }}>Our Partners</p>
//         <h3 style={{ textAlign: "center" }}>Lorem Ipsum is simply</h3>
//         <br />
//         <div className="parts">
//           <Link to={"https://www.denon.com/en-us/"} target="_blank"><div className="part-each">
//             <img src={p1} height={40} alt="" />
//           </div></Link>
//           <Link to={"https://www.fxl.com/"} target="_blank"><div className="part-each">
//             <img src={p2} height={40} alt="" />
//           </div></Link>
//           <Link to={"https://www.jvc.com/in/"} target="_blank"><div className="part-each">
//             <img src={p3} height={40} alt="" />
//           </div></Link>
//           <Link to={"https://international.kef.com/"} target="_blank"><div className="part-each">
//             <img src={p4} height={40} alt="" />
//           </div></Link>
//           <Link to={"https://www.klipsch.com/"} target="_blank"><div className="part-each">
//             <img src={p5} height={40} alt="" />
//           </div></Link>
//         </div>
//       </div>
//       <br />
//       <br />
//       <br />
//       <div className="about-signup">
//         <h3 style={{ textAlign: "center" }}>Sign up to receive product</h3>
//         <h3 style={{ textAlign: "center", marginTop: "-5px" }}>
//           update or discounts
//         </h3>
//         <br />
//         <div className="form-about-su">
//           <div className="flname">
//             <input
//               className="flname-text"
//               type="text"
//               placeholder="First Name"
//             />
//             <input
//               className="flname-text"
//               type="text"
//               placeholder="Last Name"
//             />
//           </div>
//           <input
//             className="flname-text my-4"
//             style={{ width: "100%" }}
//             type="email"
//             placeholder="Email Address"
//           />
//           <br />
//           <button className="btn-send-ab-su" style={{ width: "100%" }}>
//             Send
//           </button>
//         </div>
//         <br />
//         <br />
//         <br />
//       </div>
//     </div>
//   );
// };

// export default About;
import React from "react";
import "../assets/styles/About.css";
import sbs1 from "../assets/images/sbs1.png";
import sbs2 from "../assets/images/sbs2.png";
import sbs3 from "../assets/images/sbs3.png";
import tick from "../assets/images/tick.png";
import p1 from "../assets/images/p1.png";
import p2 from "../assets/images/p2.png";
import p3 from "../assets/images/p3.png";
import p4 from "../assets/images/p4.png";
import p5 from "../assets/images/p5.png";
import { useNavigate, Link } from "react-router-dom";

const About = () => {
  const nav = useNavigate();
  return (
    <div className="about-section">
      <div className="about-black">ABOUT US</div>
      <div
        className="about-black-below"
        style={{
          margin: "auto",
          textAlign: "center",
          textTransform: "uppercase",
        }}
      >
        <p>Bringing Innovation Home</p>
        <h3>Elevate Your Lifestyle with TDG Smart</h3>
        <p>Crafting Smart Solutions for Modern Living</p>
      </div>
      <div className="side-by-side">
        <div className="side-by-side-left">
          <img src={sbs1} alt="" />
        </div>
        <div className="side-by-side-right">
          {/* <p style={{ color: "#282866", fontSize: "0.9rem" }}>
            Company Background
          </p> */}
          <h3>Our Mission</h3>
          <p style={{ color: "rgba(0, 0, 0, 0.75)" }}>
            We are committed to creating smart, elegant, and innovative
            solutions that enrich the lives of our customers. Drawing
            inspiration from the ever-evolving landscape of technology, we have
            dedicated ourselves to pushing the limits of what's possible,
            pioneering innovative solutions that make everyday living truly
            exceptional. Our Smart and elegant solutions simplify your daily
            routines and provide the best entertainment, comfort, and security
            in any home space, creating an ideal environment for building
            long-lasting memories.
          </p>
          {/* <p style={{ fontSize: "1rem" }}>Sharon Gunther</p>
          <p style={{ color: "#AD9A9A", fontSize: "0.95rem" }}>Fresh Design</p> */}
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="side-by-side">
        <div className="side-by-side-right">
          {/* <p style={{ color: "#282866", fontSize: "0.9rem" }}>Our Purpose</p> */}
          <h3>Our Objectives</h3>
          <div className="d-flex align-items-start my-3">
            <div>
              <img src={tick} alt="" height={25} />
            </div>
            <div className="mx-3 mt-1" style={{ color: "rgba(0, 0, 0, 0.75)" }}>
              We strive to develop intelligent, uncomplicated, and streamlined
              solutions for your household. Our team will thoroughly assess your
              needs and challenges during the discovery process and create
              designs to enhance your experience.
            </div>
          </div>
          <div className="d-flex align-items-start my-3">
            <div>
              <img src={tick} alt="" height={25} />
            </div>
            <div className="mx-3 mt-1" style={{ color: "rgba(0, 0, 0, 0.75)" }}>
              With over 15 years of experience in the field, our team rigorously
              tests all high-quality smart products on the market to ensure that
              we deliver smart, connected, and elegant solutions. Our solutions
              work seamlessly, allowing customers to easily operate and depend
              on them consistently.
            </div>
          </div>
          <div className="d-flex align-items-start my-3">
            <div>
              <img src={tick} alt="" height={25} />
            </div>
            <div className="mx-3 mt-1" style={{ color: "rgba(0, 0, 0, 0.75)" }}>
              We are customer-focused and committed to surpassing your goals. We
              actively listen to your needs, goals, and challenges and work
              closely with your family to bring your dreams to fruition.
              Witnessing your vision come to life is the ultimate reward for us.
            </div>
          </div>
        </div>
        <div className="side-by-side-left">
          <img src={sbs2} alt="" />
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="side-by-side">
        <div className="side-by-side-left-o">
          <img src={sbs3} alt="" />
        </div>
        <div className="side-by-side-right">
          {/* <p style={{ color: "#282866", fontSize: "0.9rem" }}>Our Approach</p> */}
          <h3>Steps To Follow</h3>
          <div className="d-flex align-items-start my-3">
            <div>
              <img src={tick} alt="" height={25} />
            </div>
            <div className="mx-3 mt-1" style={{ color: "rgba(0, 0, 0, 0.75)" }}>
              Our discovery process is not just about getting to know you, but
              about understanding your unique needs. We introduce our company
              and its members, and explain our business approach. This session,
              which may include a product demo, ensures we leave with a clear
              understanding of your requirements, ready to implement the right
              system for you.
            </div>
          </div>
          <div className="d-flex align-items-start my-3">
            <div>
              <img src={tick} alt="" height={25} />
            </div>
            <div className="mx-3 mt-1" style={{ color: "rgba(0, 0, 0, 0.75)" }}>
              In the design phase, we don't just put together ideas, products,
              and designs. We collaborate with you, sharing our proposals and
              seeking your feedback. This unique approach allows us to finalize
              a solution that meets your needs and expectations.
            </div>
          </div>
          <div className="d-flex align-items-start my-3">
            <div>
              <img src={tick} alt="" height={25} />
            </div>
            <div className="mx-3 mt-1" style={{ color: "rgba(0, 0, 0, 0.75)" }}>
              The installation process is exciting. The team arrives with all
              your equipment and devices pre-tested and configured and will work
              to assemble everything. Once the setup is up and running, the
              quality check will be completed before the solution is shared with
              you. The team will then schedule your three check-in sessions to
              educate you on any part of the system, answer any questions, and
              address any issues.
            </div>
          </div>
          <div className="d-flex align-items-start my-3">
            <div>
              <img src={tick} alt="" height={25} />
            </div>
            <div className="mx-3 mt-1" style={{ color: "rgba(0, 0, 0, 0.75)" }}>
              Our maintenance team offers plans to cover your investment and
              ensure periodic system reviews for software upgrades, tuning, and
              issues. Our comprehensive plans include full remote support, so
              you don't have to wait for someone to arrive.
            </div>
          </div>
          <button className="wwd-btn" onClick={() => nav("/consultation")}>
            REQUEST A QUOTE
          </button>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="partners">
        <p style={{ textAlign: "center", color: "#757575" }}>Our Partners</p>
        <h3 style={{ textAlign: "center" }}>Lorem Ipsum is simply</h3>
        <br />
        <div className="parts">
          <Link to={"https://www.denon.com/en-us/"} target="_blank">
            <div className="part-each">
              <img src={p1} height={40} alt="" />
            </div>
          </Link>
          <Link to={"https://www.fxl.com/"} target="_blank">
            <div className="part-each">
              <img src={p2} height={40} alt="" />
            </div>
          </Link>
          <Link to={"https://www.jvc.com/in/"} target="_blank">
            <div className="part-each">
              <img src={p3} height={40} alt="" />
            </div>
          </Link>
          <Link to={"https://international.kef.com/"} target="_blank">
            <div className="part-each">
              <img src={p4} height={40} alt="" />
            </div>
          </Link>
          <Link to={"https://www.klipsch.com/"} target="_blank">
            <div className="part-each">
              <img src={p5} height={40} alt="" />
            </div>
          </Link>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="about-signup">
        <h3 style={{ textAlign: "center" }}>Sign up to receive product</h3>
        <h3 style={{ textAlign: "center", marginTop: "-5px" }}>
          update or discounts
        </h3>
        <br />
        <div className="form-about-su">
          <div className="flname">
            <input
              className="flname-text"
              type="text"
              placeholder="First Name"
            />
            <input
              className="flname-text"
              type="text"
              placeholder="Last Name"
            />
          </div>
          <input
            className="flname-text my-4"
            style={{ width: "100%" }}
            type="email"
            placeholder="Email Address"
          />
          <br />
          <button className="btn-send-ab-su" style={{ width: "100%" }}>
            Send
          </button>
        </div>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default About;
