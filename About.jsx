import React from "react";
import '../About.css';
import { NavLink } from 'react-router-dom';

const About = () => {
  return (
    <>
      <div className="container text-center pb-5  ">
        <img className="img_about" src="/assets/mymain.jpg"/>
        <h1 className="mt-lg-5 word pt-5">LUXARY</h1>
        <p className="text-white w-50 m-auto myword pt-2">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean.
        </p>
      </div>
      <section className="py-5 mt-5" data-aos="fade-up">
        <div className="container text-center">
          <h2>Diticated Team</h2>
          <hr />
          <div className="row p-3" data-aos="fade-up">
            <div className="col-md-4 col-sm-6 mb-4" data-aos="fade-up">
              <div className="card card2 p-3 text-center">
                <img
                  src="/assets/1.jpg"
                  alt=""
                  className="w-50 rounded-circle mx-auto  wow rotateIn"
                  data-wow-duration="3s"
                />
                <h3>Sohila</h3>

                <h5>student</h5>
                <p>3rd year medical informatics student</p>
                <div className="d-flex justify-content-around my-5">
                  <a href="#travelfacebook">
                    <i className="fa fa-facebook text-dark fa-2x"></i>
                  </a>
                  <a href="#traveltwitter">
                    <i className="fa fa-twitter text-dark fa-2x"></i>
                  </a>
                  <a href="#travelinstgram">
                    <i className="fa fa-instagram  text-dark fa-2x"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 mb-4" data-aos="fade-up">
              <div className="card card2 p-3 text-center">
                <img
                  src="/assets/2.jpg"
                  alt=""
                  className="w-50 rounded-circle mx-auto wow rotateIn"
                  data-wow-duration="3s"
                />
                <h3>Mona</h3>
                <h5>student</h5>
                <p>3rd year medical informatics student</p>
                <div className="d-flex justify-content-around my-5">
                  <a href="#travelfacebook">
                    <i className="fa fa-facebook text-dark fa-2x"></i>
                  </a>
                  <a href="#traveltwitter">
                    <i className="fa fa-twitter text-dark fa-2x"></i>
                  </a>
                  <a href="#travelinstgram">
                    <i className="fa fa-instagram text-dark fa-2x"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 mb-4" data-aos="fade-up">
              <div className="card card2 p-3 text-center">
                <img
                  src="/assets/3.jpg"
                  alt=""
                  className="w-50 rounded-circle mx-auto wow rotateIn"
                  data-wow-duration="3s"
                />
                <h3>Doaa</h3>
                <h5>student</h5>
                <p>3rd year medical informatics student.</p>
                <div className="d-flex justify-content-around my-5">
                  <a href="#travelfacebook">
                    <i className="fa fa-facebook text-dark fa-2x"></i>
                  </a>
                  <a href="#traveltwitter">
                    <i className="fa fa-twitter  text-dark fa-2x"></i>
                  </a>
                  <a href="#travelinstgram">
                    <i className="fa fa-instagram  text-dark fa-2x"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer p-5" data-aos="fade-up">
        <section className="container">
          <div className="row">
            <div className="col-md-4 pb-1 col-sm-6 text-center footerpages">
              <h6 className="footer-h6">Pages : </h6>
              <ul>
                <li>
                  <NavLink to="/home">Home </NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
            </div>

            <div className="col-md-4 pb-1 col-sm-6 text-center footerContact">
              <h6 className="footer-h6" id="contact">
                Contact Us :{" "}
              </h6>
              <div className="">
                <p>
                  {" "}
                  <i className="fa fa-map-marker-alt p-1"></i> Damietta-New
                  Damietta
                </p>
                <p>
                  {" "}
                  <i className="fa fa-envelope p-1"></i> Exploretheworld@mail.com
                </p>
                <p>
                  {" "}
                  <i className="fa fa-phone-alt p-1"></i> +201326849112{" "}
                </p>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 text-center footerfollow">
              <h6 className="footer-h6">Follow Us : </h6>
              <ul className="">
                <li>
                  <a href="https://www.facebook.com/">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/i/flow/login">
                    <i className=" fa fa-twitter"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
};

export default About;
