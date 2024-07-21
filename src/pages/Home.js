import React from "react";
import "../assets/styles/Home.css";
import caro from "../assets/images/caro.png";
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";
import pic1 from "../assets/images/pic1.png";
import pic2 from "../assets/images/pic2.png";
import pic3 from "../assets/images/pic3.png";
import l1 from "../assets/images/l1.png";
import l2 from "../assets/images/l2.png";
import l3 from "../assets/images/l3.png";
import l4 from "../assets/images/l4.png";
import l5 from "../assets/images/l5.png";
import tab from "../assets/images/tab.png";
import cctv from "../assets/images/cctv.png";
import f1 from "../assets/images/f1.png";
import f2 from "../assets/images/f2.png";
import f3 from "../assets/images/f3.png";
import f4 from "../assets/images/f4.png";
import golf from "../assets/images/golf.png";
import golfb from "../assets/images/golfb.png";
import golfr from "../assets/images/golfr.png";
import person from "../assets/images/person.png";
import blog1 from "../assets/images/blog1.png";
import blog2 from "../assets/images/blog2.png";
import blog3 from "../assets/images/blog3.png";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const nav = useNavigate();
  return (
    <div>
      <div className="home-caro">
        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={caro} className="d-block w-100" alt="..." />
              <div className="carousel-caption caro-text">
                <h5>Elevate Your Living: Smart Homes, Smarter Life</h5>
                <p>
                  Experience the Future of Living with Our Cutting-Edge Smart
                  Systems and Lifestyle Solutions
                </p>
                <button
                  className="btn-caro-1"
                  onClick={() => nav("/consultation")}
                >
                  SCHEDULE A CALL <GoArrowRight />
                </button>
                <a href="#section-2">
                  <button className="btn-caro-2 mx-2">
                    EXPLORE <GoArrowRight />
                  </button>
                </a>
              </div>
            </div>
            <div className="carousel-item">
              <img src={caro} className="d-block w-100" alt="..." />
              <div className="carousel-caption caro-text">
                <h5>Smart Homes, Crafted for You</h5>
                <p>
                  Experience the Future of Living with Our Cutting-Edge Smart
                  Systems and Lifestyle Solutions
                </p>
                <button className="btn-caro-1">
                  SCHEDULE A CALL <GoArrowRight />
                </button>
                <a href="#section-2">
                  <button className="btn-caro-2 mx-2">
                    EXPLORE <GoArrowRight />
                  </button>
                </a>
              </div>
            </div>
            <div className="carousel-item">
              <img src={caro} className="d-block w-100" alt="..." />
              <div className="carousel-caption caro-text">
                <h5>Experience the Difference with Smart Home Appliances</h5>
                <p>
                  Experience the Future of Living with Our Cutting-Edge Smart
                  Systems and Lifestyle Solutions
                </p>
                <button className="btn-caro-1">
                  SCHEDULE A CALL <GoArrowRight />
                </button>
                <button className="btn-caro-2 mx-2">
                  EXPLORE <GoArrowRight />
                </button>
              </div>
            </div>
            <div className="carousel-item">
              <img src={caro} className="d-block w-100" alt="..." />
              <div className="carousel-caption caro-text">
                <h5>Revolutionize Your Space with Smart Home Appliances</h5>
                <p>
                  Experience the Future of Living with Our Cutting-Edge Smart
                  Systems and Lifestyle Solutions
                </p>
                <button className="btn-caro-1">
                  SCHEDULE A CALL <GoArrowRight />
                </button>
                <button className="btn-caro-2 mx-2">
                  EXPLORE <GoArrowRight />
                </button>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <div className="caro-btn">
              <GoArrowLeft className="lr-btn" />
            </div>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <div className="caro-btn">
              <GoArrowRight className="lr-btn" />
            </div>
          </button>
        </div>
      </div>
      <section id="section-2">
        <div className="text-4">
          <div className="row my-5" style={{ margin: "0" }}>
            <div className="col-lg-3 col-md-4 col-sm-6 px-5 mx-auto">
              <h5>Cutting-Edge Technology</h5>
              <p style={{ color: "#A7A9AB" }}>
                We provide the latest smart home appliances to enhance your
                living experience.
              </p>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 px-5 mx-auto">
              <h5>Expert Installation</h5>
              <p style={{ color: "#A7A9AB" }}>
                Our talented integrators, designers, engineers, and programmers
                ensure flawless installation and integration.
              </p>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 px-5 mx-auto">
              <h5>Customized Solutions</h5>
              <p style={{ color: "#A7A9AB" }}>
                We tailor smart home systems to fit your unique lifestyle, from
                smart kitchens to automated home theaters.
              </p>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 px-5 mx-auto">
              <h5>Ongoing Support</h5>
              <p style={{ color: "#A7A9AB" }}>
                We offer continuous support and maintenance to keep your systems
                up-to-date and functioning seamlessly.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="pics-4">
        <h3 className="h-pics" style={{ textAlign: "center" }}>
          Get Started Today
        </h3>
        <br />
        <div className="row pics-4-row" style={{ margin: "0" }}>
          <div className="col-xl-4 col-lg-6 col-md-6 d-flex pic1-card" sty>
            <div>
              <div className="pos-rel-pic">
                <img src={pic1} alt="" height={220} />
                {/* <p className="pos-abs-pic">Lorem Ipsum is simply</p> */}
              </div>
              <p
                className="pic1-text mt-3"
                style={{ textAlign: "justify", color: "#4B4B4B" }}
              >
                Personalize your life and bring your house to a whole advanced
                level with our smart appliances. It could be the lights,
                security, or even your home theater, and everything is
                controlled by your fingertips. Advanced technology turns your
                abode into a plush, seamlessly integrated, cooperatingly high on
                functionality space. Go easy on down the road of convenience to
                sophisticated living with devices designed for everyday
                functionality. Experience the future of an American home through
                our top-of-the-line smart solution
              </p>
              <button className="wwd-btn" onClick={()=>nav('/support')}>
                WHAT WE DO <GoArrowRight style={{ fontSize: "1rem" }} />
              </button>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 d-flex justify-content-center"
            sty
          >
            <div>
              <div className="pos-rel-pic">
                <img src={pic2} alt="" height={450} />
                {/* <p className="pos-abs-pic">Lorem Ipsum is simply</p> */}
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 d-flex align-items-end pic3-card mx-auto">
            <div>
              <p
                className="pic2-text"
                style={{ textAlign: "justify", color: "##4B4B4B" }}
              >
                Want to catch the big game outside or get your listening room
                ready for a crazy day unwinding? We've got you covered. Bring
                your home to the next level with incomparable audio and video
                solutions for fun family time, personal relaxation, or
                everything in between. TDG provides the best smart home products
                to take your free and "me" time to the next level of ease.
                Experience top-of-the-line entertainment at home and change the
                face of your living space today.
              </p>
              <div className="pos-rel-pic">
                <img src={pic3} alt="" height={275} />
                {/* <p className="pos-abs-pic">Lorem Ipsum is simply</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="features-home">
        <h6 style={{ color: "#757575", textAlign: "center" }}>
          Smart Home Applications
        </h6>
        <h3 className="" style={{ textAlign: "center" }}>
          Our Technology
        </h3>
        <br />
        <div className="logos-circle">
          <div style={{ textAlign: "center" }}>
            <div className="logo-circle mx-auto">
              <img src={l1} height={45} alt="" />
            </div>
            <p className="mt-2">Home Control</p>
          </div>
          <div style={{ textAlign: "center" }} onClick={()=>nav('/product/Entertainment_&_Lifestyle')}>
            <div className="logo-circle mx-auto">
              <img src={l2} height={45} alt="" />
            </div>
            <p className="mt-2">Entertainment & Lifestyle</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <div className="logo-circle mx-auto">
              <img src={l3} height={45} alt="" />
            </div>
            <p className="mt-2">Comfort</p>
          </div>
          <div style={{ textAlign: "center" }} onClick={()=>nav('/service')}>
            <div className="logo-circle mx-auto">
              <img src={l4} height={45} alt="" />
            </div>
            <p className="mt-2">Security & Surveillance</p>
          </div>
          <div style={{ textAlign: "center" }} onClick={()=>nav('/product/Lighting')}>
            <div className="logo-circle mx-auto">
              <img src={l5} height={45} alt="" />
            </div>
            <p className="mt-2">Lighting</p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="products-home">
        <div className="row ph" style={{ margin: "0" }}>
          <div
            className="col-lg-7 col-md-7 tab mx-auto"
            style={{ height: "530px" }}
          >
            <div style={{ textAlign: "center" }}>
              <img className="tab-img" src={tab} alt="" />
              <h6 className="mt-3">Secuity System</h6>
              <button className="wwd-btn" style={{ color: "black" }} onClick={()=>nav('/service')}>
                CHECK PRODUCTS{" "}
                <GoArrowRight style={{ fontSize: "1rem", color: "black" }} />
              </button>
            </div>
          </div>
          <div
            className="col-lg-5 col-md-5 cctv mx-auto"
            style={{ height: "500px" }}
          >
            <div style={{ position: "relative" }}>
              <img className="cctv-img" src={cctv} alt="" />
              <div className="box-abs" style={{ textAlign: "center" }}>
                <h6 className="mt-3">Smart Home Surveillance</h6>
                <button className="wwd-btn" style={{ color: "black" }} onClick={()=>nav('/service')}>
                  VIEW PRODUCTS{" "}
                  <GoArrowRight style={{ fontSize: "1rem", color: "black" }} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="pic4-flex">
        <h6 style={{ color: "#757575", textAlign: "center" }}>
          Lorem Ipsum is simply
        </h6>
        <h3 className="" style={{ textAlign: "center" }}>
          Lorem Ipsum is simply
        </h3>
        <br />
        <div className="row pic4-pad" style={{ margin: "0" }}>
          <div
            className="col-lg-3 col-md-4 col-sm-6 mx-auto"
            style={{ height: "400px" }}
          >
            <div style={{ textAlign: "center" }}>
              <img src={f1} height={270} alt="" />
              <p className="mt-3">Lorem Ipsum</p>
              <p style={{ marginTop: "-15px" }}>Lorem Ipsum is simply</p>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-4 col-sm-6 mx-auto"
            style={{ height: "400px" }}
          >
            <div style={{ textAlign: "center" }}>
              <img src={f2} height={270} alt="" />
              <p className="mt-3">Lorem Ipsum</p>
              <p style={{ marginTop: "-15px" }}>Lorem Ipsum is simply</p>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-4 col-sm-6 mx-auto"
            style={{ height: "400px" }}
          >
            <div style={{ textAlign: "center" }}>
              <img src={f3} height={270} alt="" />
              <p className="mt-3">Lorem Ipsum</p>
              <p style={{ marginTop: "-15px" }}>Lorem Ipsum is simply</p>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-4 col-sm-6 mx-auto"
            style={{ height: "400px" }}
          >
            <div style={{ textAlign: "center" }}>
              <img src={f4} height={270} alt="" />
              <p className="mt-3">Lorem Ipsum</p>
              <p style={{ marginTop: "-15px" }}>Lorem Ipsum is simply</p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="golf">
        <div className="golf-row" style={{ margin: "0" }}>
          <div className="golf-img d-flex justify-content-center">
            <img src={golf} alt="" />
          </div>
          <div className="">
            <p
              style={{
                color: "#282866",
                fontSize: "0.85rem",
                fontWeight: "600",
              }}
            >
              Lorem Ipsum is simply
            </p>
            <h3>Golf Simulation</h3>
            <p
              style={{
                textAlign: "justify",
                color: "rgba(0, 0, 0, 0.5)",
                fontSize: "0.9rem",
              }}
            >
              Transform your outdoor spaces into vibrant hubs of music and entertainment, or convert your spare rooms into a world-class indoor golf escape. Whether you seek to seamlessly integrate the outdoors with your indoor spaces or create indoor environments that rival the outdoors, TDG cater to your vision. Our solutions redefine home living by harmonizing advanced technology with unparalleled comfort, delivering an exceptional experience tailored to your lifestyle.
            </p>
            <button className="wwd-btn" style={{ color: "black" }} onClick={()=>nav('/product/golf-simulation')}>
              VIEW THE CATALOGUE{" "}
              <GoArrowRight style={{ fontSize: "1rem", color: "black" }} />
            </button>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="golf-sim">
        <div className="row" style={{ margin: "0" }}>
          <div className="col-lg-7 golfb-div">
            <div className="golfb">
              <img src={golfb} alt="" />
              <div>
                <div className="box-abs-2">
                  <h2>Learn more about Golf Simulation</h2>
                  <p className="mt-3" style={{ color: "#969696", fontSize:'0.9rem' }}>
                  An indoor golf simulator simply brings the golf course right into your living room. You'll have a virtual golf course indoors where you can practice, no matter the weather, and play anytime. It's very entertaining to have effectively lifelike graphics and ball-tracking abilities, which will help you develop your swing as you have fun playing with friends and family. This way, you will get a feel of the excitement attached to golf without having to move out from your home very convenient.
                  </p>
                  <button
                    className="wwd-btn"
                    style={{ color: "black", padding: "5px 30px" }}
                    onClick={()=>nav('/product/golf-simulation')}
                  >
                    EARLY ACCESS{" "}
                    <GoArrowRight
                      style={{ fontSize: "1rem", color: "black" }}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 golfr">
            <div style={{ width: "max-content" }}>
              <img src={golfr} alt="" />
              <p className="mt-2" style={{ textAlign: "center" }}>
                Lorem Ipsum
              </p>
              <p style={{ textAlign: "center" }}>Lorem Ipsum is simply</p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="home-caro">
        <p style={{ textAlign: "center", color: "#282866" }}>TESTIMONIALS</p>
        <h3 style={{ textAlign: "center" }}>
          Here is what our satisfied clients say
        </h3>
        <br />
        <div id="carouselExampleCaptions2" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <p
                style={{
                  color: "#6B6866",
                  width: "70%",
                  margin: "auto",
                  textAlign: "center",
                }}
              >
                "TDG Home made our dream home a reality! Their attention to
                detail and commitment to quality craftsmanship exceeded our
                expectations. We couldn't be happier with the result."{" "}
              </p>
              <br />
              <div style={{ textAlign: "center" }}>
                <img src={person} alt="" />
              </div>
              <p
                className="mt-2"
                style={{ color: "#6B6866", textAlign: "center" }}
              >
                Sarah T.
              </p>
            </div>
            <div className="carousel-item">
              <p
                style={{
                  color: "#6B6866",
                  width: "70%",
                  margin: "auto",
                  textAlign: "center",
                }}
              >
                "TDG Home made our dream home a reality! Their attention to
                detail and commitment to quality craftsmanship exceeded our
                expectations. We couldn't be happier with the result."{" "}
              </p>
              <br />
              <div style={{ textAlign: "center" }}>
                <img src={person} alt="" />
              </div>
              <p
                className="mt-2"
                style={{ color: "#6B6866", textAlign: "center" }}
              >
                Sarah T.
              </p>
            </div>
            <div className="carousel-item">
              <p
                style={{
                  color: "#6B6866",
                  width: "70%",
                  margin: "auto",
                  textAlign: "center",
                }}
              >
                "TDG Home made our dream home a reality! Their attention to
                detail and commitment to quality craftsmanship exceeded our
                expectations. We couldn't be happier with the result."{" "}
              </p>
              <br />
              <div style={{ textAlign: "center" }}>
                <img src={person} alt="" />
              </div>
              <p
                className="mt-2"
                style={{ color: "#6B6866", textAlign: "center" }}
              >
                Sarah T.
              </p>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions2"
            data-bs-slide="prev"
          >
            <div
              className="caro-btn"
              style={{ color: "black", border: "1px solid black" }}
            >
              <GoArrowLeft className="lr-btn" />
            </div>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions2"
            data-bs-slide="next"
          >
            <div
              className="caro-btn"
              style={{ color: "black", border: "1px solid black" }}
            >
              <GoArrowRight className="lr-btn" />
            </div>
          </button>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="rooms">
        <div className="row" style={{ margin: "0" }}>
          <div
            className="col-lg-4 col-md-6 mx-auto room1 d-flex align-items-end p-5"
            style={{ height: "450px" }}
          >
            <div>
              {/* <p style={{ color: "white" }}>Lorem Ipsum</p> */}
              <h5
                className="mb-4"
                style={{
                  textTransform: "uppercase",
                  color: "white",
                  marginTop: "-8px",
                }}
              >
                Outdoor Entertainment
              </h5>
              <button
                className="wwd-btn"
                style={{ color: "white", border: "1px solid white" }}
              >
                LEARN MORE{" "}
                <GoArrowRight style={{ fontSize: "1rem", color: "white" }} />
              </button>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 mx-auto room2 d-flex align-items-end p-5"
            style={{ height: "450px" }}
          >
            <div>
              {/* <p style={{ color: "white" }}>Lorem Ipsum</p> */}
              <h5
                className="mb-4"
                style={{
                  textTransform: "uppercase",
                  color: "white",
                  marginTop: "-8px",
                }}
              >
                GAMING ROOMS
              </h5>
              <button
                className="wwd-btn"
                style={{ color: "white", border: "1px solid white" }}
              >
                LEARN MORE{" "}
                <GoArrowRight style={{ fontSize: "1rem", color: "white" }} />
              </button>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 mx-auto room3 d-flex align-items-end p-5"
            style={{ height: "450px" }}
          >
            <div>
              {/* <p style={{ color: "white" }}>Lorem Ipsum</p> */}
              <h5
                className="mb-4"
                style={{
                  textTransform: "uppercase",
                  color: "white",
                  marginTop: "-8px",
                }}
              >
                Media / Theater Rooms
              </h5>
              <button
                className="wwd-btn"
                style={{ color: "white", border: "1px solid white" }}
              >
                LEARN MORE{" "}
                <GoArrowRight style={{ fontSize: "1rem", color: "white" }} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      {/* <div className="blogs">
        <p style={{ textAlign: "center", color: "#E6AF5D" }}>BLOGS</p>
        <h3 style={{ textAlign: "center" }}>
          Latest articles directly from the blog
        </h3>
        <br />
        <div className="blog-row">
          <div className="">
            <div className="blog-card">
              <img src={blog1} width={400} alt="" />
              <h5 className="mt-3">
                Lorem Ipsum is simply dummy text of the printing...
              </h5>
              <span
                style={{
                  color: "#7C7E7C",
                  textTransform: "uppercase",
                  fontSize: "0.8rem",
                }}
              >
                April 5,2023{" "}
                <span
                  className="mx-2"
                  style={{ color: "#282866", textTransform: "capitalize" }}
                >
                  Apollo Theme
                </span>
              </span>
            </div>
          </div>
          <div className=" mid-card">
            <div className="blog-card">
              <img src={blog2} width={400} alt="" />
              <h5 className="mt-3">
                Lorem Ipsum is simply dummy text of the printing...
              </h5>
              <span
                style={{
                  color: "#7C7E7C",
                  textTransform: "uppercase",
                  fontSize: "0.8rem",
                }}
              >
                April 5,2023{" "}
                <span
                  className="mx-2"
                  style={{ color: "#282866", textTransform: "capitalize" }}
                >
                  Apollo Theme
                </span>
              </span>
            </div>
          </div>
          <div className="">
            <div className="blog-card">
              <img src={blog3} width={400} alt="" />
              <h5 className="mt-3">
                Lorem Ipsum is simply dummy text of the printing...
              </h5>
              <span
                style={{
                  color: "#7C7E7C",
                  textTransform: "uppercase",
                  fontSize: "0.8rem",
                }}
              >
                April 5,2023{" "}
                <span
                  className="mx-2"
                  style={{ color: "#282866", textTransform: "capitalize" }}
                >
                  Apollo Theme
                </span>
              </span>
            </div>
          </div>
        </div>
      </div> */}
      <br />
      <br />
      <br />
    </div>
  );
};

export default Home;
