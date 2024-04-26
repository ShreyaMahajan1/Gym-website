import { Link } from "react-router-dom";


export default function Home(){
    return(
    
    <>
    {/* ======= Hero Section ======= */}
    <section
      id="hero"
      className="d-flex justify-content-center align-items-center"
    >
      <div
        className="container position-relative"
        data-aos="zoom-in"
        data-aos-delay={100}
      >
        <h1>
          Learning Today,
          <br />
          Leading Tomorrow
        </h1>
        <h2>
          We are team of fitness freak lookibg to build your future with us 
        </h2>
        <Link to={"/Course"} className="btn-get-started">
          Get Started
        </Link>
      </div>
    </section>
    {/* End Hero */}
    <main id="main">
      {/* ======= About Section ======= */}
      <section id="about" className="about">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div
              className="col-lg-6 order-1 order-lg-2"
              data-aos="fade-left"
              data-aos-delay={100}
            >
              <img src="assets/img/gym.jpg.jpg" className="img-fluid" alt="" />
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
              <h3>
               Fitnness Bringing fitness close to you
              </h3>
              <p className="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul>
                <li>
                  <i className="bi bi-check-circle" /> Power lifting
                </li>
                <li>
                  <i className="bi bi-check-circle" /> Cardio
                </li>
                <li>
                  <i className="bi bi-check-circle" /> Personal Training
                </li>
              </ul>
              <p>
               Work Sweat achieve 
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* End About Section */}
      {/* ======= Counts Section ======= */}
      <section id="counts" className="counts section-bg">
        <div className="container">
          <div className="row counters">
            <div className="col-lg-3 col-6 text-center">
              <span
                data-purecounter-start={0}
                data-purecounter-end={1232}
                data-purecounter-duration={1}
                className="purecounter"
              />
              <p>Students</p>
            </div>
            <div className="col-lg-3 col-6 text-center">
              <span
                data-purecounter-start={0}
                data-purecounter-end={64}
                data-purecounter-duration={1}
                className="purecounter"
              />
              <p>wellness programs</p>
            </div>
            <div className="col-lg-3 col-6 text-center">
              <span
                data-purecounter-start={0}
                data-purecounter-end={42}
                data-purecounter-duration={1}
                className="purecounter"
              />
              <p>Events</p>
            </div>
            <div className="col-lg-3 col-6 text-center">
              <span
                data-purecounter-start={0}
                data-purecounter-end={15}
                data-purecounter-duration={1}
                className="purecounter"
              />
              <p>Trainers</p>
            </div>
          </div>
        </div>
      </section>
      {/* End Counts Section */}
      {/* ======= Why Us Section ======= */}
      <section id="why-us" className="why-us">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-4 d-flex align-items-stretch">
              <div className="content">
                <h3>Why Choose Fitness?</h3>
                <p>
                  Its not about havong time ,its about making time .Nothing will work unless you do. we provide professional and personal training to 
                  everyone who needs us . we our bunch of fittness freak and work on the clients demands.
                </p>
                <div className="text-center">
                  <Link to={"/About"} className="more-btn">
                    Learn More <i className="bx bx-chevron-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-8 d-flex align-items-stretch"
              data-aos="zoom-in"
              data-aos-delay={100}
            >
              <div className="icon-boxes d-flex flex-column justify-content-center">
                <div className="row">
                  <div className="col-xl-4 d-flex align-items-stretch">
                    <div className="icon-box mt-4 mt-xl-0">
                      <i className="bx bx-receipt" />
                      <h4>Fitness</h4>
                      <p>
                        Fitness is therepy 
                      </p>
                    </div>
                  </div>
                  <div className="col-xl-4 d-flex align-items-stretch">
                    <div className="icon-box mt-4 mt-xl-0">
                      <i className="bx bx-cube-alt" />
                      <h4>personal training </h4>
                      <p>
                        we ptovide personal trainings and let you grow with us 
                        we have team to fullfill your fitnness demands 
                      </p>
                    </div>
                  </div>
                  <div className="col-xl-4 d-flex align-items-stretch">
                    <div className="icon-box mt-4 mt-xl-0">
                      <i className="bx bx-images" />
                      <h4>Cardio machines</h4>
                      <p>
                        provide cardio for your workout sessions 
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* End .content*/}
            </div>
          </div>
        </div>
      </section>
      {/* End Why Us Section */}
      {/* ======= Features Section ======= */}
      <section id="features" className="features">
        <div className="container" data-aos="fade-up">
          <div className="row" data-aos="zoom-in" data-aos-delay={100}>
            <div className="col-lg-3 col-md-4">
              <div className="icon-box">
                <i className="ri-store-line" style={{ color: "#ffbb2c" }} />
                <h3>
                  <a href="">Team work</a>
                </h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
              <div className="icon-box">
                <i
                  className="ri-bar-chart-box-line"
                  style={{ color: "#5578ff" }}
                />
                <h3>
                  <a href="">Personalized training</a>
                </h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
              <div className="icon-box">
                <i
                  className="ri-calendar-todo-line"
                  style={{ color: "#e80368" }}
                />
                <h3>
                  <a href="">diet charts</a>
                </h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
              <div className="icon-box">
                <i
                  className="ri-paint-brush-line"
                  style={{ color: "#e361ff" }}
                />
                <h3>
                  <a href="">Workout sessions</a>
                </h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <i
                  className="ri-database-2-line"
                  style={{ color: "#47aeff" }}
                />
                <h3>
                  <a href="">Helping individuals</a>
                </h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <i
                  className="ri-gradienter-line"
                  style={{ color: "#ffa76e" }}
                />
                <h3>
                  <a href="">Power lifting</a>
                </h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <i
                  className="ri-file-list-3-line"
                  style={{ color: "#11dbcf" }}
                />
                <h3>
                  <a href="">Guranteed support</a>
                </h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <i
                  className="ri-price-tag-2-line"
                  style={{ color: "#4233ff" }}
                />
                <h3>
                  <a href="">Less expence</a>
                </h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <i className="ri-anchor-line" style={{ color: "#b2904f" }} />
                <h3>
                  <a href="">Workout Vibes</a>
                </h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <i className="ri-disc-line" style={{ color: "#b20969" }} />
                <h3>
                  <a href="">Personalized Trainers</a>
                </h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <i
                  className="ri-base-station-line"
                  style={{ color: "#ff5828" }}
                />
                <h3>
                  <a href="">Gym membership</a>
                </h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <i
                  className="ri-fingerprint-line"
                  style={{ color: "#29cc61" }}
                />
                <h3>
                  <a href="">Best Training</a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Features Section */}
      {/* ======= Popular Courses Section ======= */}
      <section id="popular-courses" className="courses">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Programs</h2>
            <p>Popular Wellness programs</p>
          </div>
          <div className="row" data-aos="zoom-in" data-aos-delay={100}>
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
              <div className="course-item">
                <img
                  src="assets/img/well.png"
                  className="img-fluid"
                  alt="..."
                />
                <div className="course-content">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4>Morning yoga sessions </h4>
                    <p className="price">$10</p>
                  </div>
                  <h3>
                    <Link to="/CourseDetail">Personmalized training </Link>
                  </h3>
                  <p>
                    work sweat and train with out best trainers 
                  </p>
                  <div className="trainer d-flex justify-content-between align-items-center">
                    <div className="trainer-profile d-flex align-items-center">
                      <img
                        src="assets/img/trainers/trainer-1.jpg"
                        className="img-fluid"
                        alt=""
                      />
                      <span>Antonio</span>
                    </div>
                    <div className="trainer-rank d-flex align-items-center">
                      <i className="bx bx-user" />
                      &nbsp;50 &nbsp;&nbsp;
                      <i className="bx bx-heart" />
                      &nbsp;65
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* End Course Item*/}
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
              <div className="course-item">
                <img
                  src="assets/img/lift.jpg"
                  className="img-fluid"
                  alt="..."
                />
                <div className="course-content">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4>Body Building</h4>
                    <p className="price">$250</p>
                  </div>
                  <h3>
                    <a href="course.html">Building future fitness freak</a>
                  </h3>
                  <p>
                    Fitness is not destination its way of life
                  </p>
                  <div className="trainer d-flex justify-content-between align-items-center">
                    <div className="trainer-profile d-flex align-items-center">
                      <img
                        src="assets/img/trainers/trainer-2.jpg"
                        className="img-fluid"
                        alt=""
                      />
                      <span>Lana</span>
                    </div>
                    <div className="trainer-rank d-flex align-items-center">
                      <i className="bx bx-user" />
                      &nbsp;35 &nbsp;&nbsp;
                      <i className="bx bx-heart" />
                      &nbsp;42
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* End Course Item*/}
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
              <div className="course-item">
                <img
                  src="assets/img/online.jpg"
                  className="img-fluid"
                  alt="..."
                />
                <div className="course-content">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4>Online trainings</h4>
                    <p className="price">$180</p>
                  </div>
                  <h3>
                    <a href="course-details.html">Online Cources</a>
                  </h3>
                  <p>
                    provide online trainings for those who couldn't come in person 
                  </p>
                  <div className="trainer d-flex justify-content-between align-items-center">
                    <div className="trainer-profile d-flex align-items-center">
                      <img
                        src="assets/img/trainers/trainer-3.jpg"
                        className="img-fluid"
                        alt=""
                      />
                      <span>Brandon</span>
                    </div>
                    <div className="trainer-rank d-flex align-items-center">
                      <i className="bx bx-user" />
                      &nbsp;20 &nbsp;&nbsp;
                      <i className="bx bx-heart" />
                      &nbsp;85
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* End Course Item*/}
          </div>
        </div>
      </section>
      {/* End Popular Courses Section */}
      {/* ======= Trainers Section ======= */}
      <section id="trainers" className="trainers">
        <div className="container" data-aos="fade-up">
          <div className="row" data-aos="zoom-in" data-aos-delay={100}>
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
              <div className="member">
                <img
                  src="assets/img/trainers/trainer-1.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="member-content">
                  <h4>Walter White</h4>
                  <span>personal Trainer</span>
                  <p>
                    Finding strength in every part of journey
                  </p>
                  <div className="social">
                    <a href="">
                      <i className="bi bi-twitter" />
                    </a>
                    <a href="">
                      <i className="bi bi-facebook" />
                    </a>
                    <a href="">
                      <i className="bi bi-instagram" />
                    </a>
                    <a href="">
                      <i className="bi bi-linkedin" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
              <div className="member">
                <img
                  src="assets/img/trainers/trainer-2.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="member-content">
                  <h4>Sarah Jhinson</h4>
                  <span>body building</span>
                  <p>
                    Repellat fugiat adipisci nemo illum nesciunt voluptas
                    repellendus. In architecto rerum rerum temporibus
                  </p>
                  <div className="social">
                    <a href="">
                      <i className="bi bi-twitter" />
                    </a>
                    <a href="">
                      <i className="bi bi-facebook" />
                    </a>
                    <a href="">
                      <i className="bi bi-instagram" />
                    </a>
                    <a href="">
                      <i className="bi bi-linkedin" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
              <div className="member">
                <img
                  src="assets/img/trainers/trainer-3.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="member-content">
                  <h4>William Anderson</h4>
                  <span>Online trainings</span>
                  <p>
                    Voluptas necessitatibus occaecati quia. Earum totam
                    consequuntur qui porro et laborum toro des clara
                  </p>
                  <div className="social">
                    <a href="">
                      <i className="bi bi-twitter" />
                    </a>
                    <a href="">
                      <i className="bi bi-facebook" />
                    </a>
                    <a href="">
                      <i className="bi bi-instagram" />
                    </a>
                    <a href="">
                      <i className="bi bi-linkedin" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Trainers Section */}
    </main>
    {/* End #main */}
    
    {/* <div id="preloader" /> */}
    <a
      href="#"
      className="back-to-top d-flex align-items-center justify-content-center"
    >
      <i className="bi bi-arrow-up-short" />
    </a>
  </>
)

    
}