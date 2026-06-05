import Header from "./components/Header";
import semicircle from "./assets/semicircle.png";
import img1 from "./assets/img-1.png";
import img2 from "./assets/img-2.png";
import img3 from "./assets/img-3.png";
import img4 from "./assets/img-4.png";
import img5 from "./assets/img-5.png";
import img6 from "./assets/img-6.png";
import img7 from "./assets/img-7.png";
import img8 from "./assets/img-8.png";
import string1 from "./assets/hero-string-1.png";
import string2 from "./assets/hero-string-2.png";
import mainImg1 from "./assets/main-img-1.png";
import mainImg2 from "./assets/main-img-2.png";
import linkArrow from "./assets/link-arrow.png";
import smallArrow from "./assets/Arrow-4.png";
import commaUp from "./assets/comma-up.png";
import commaDown from "./assets/comma-down.png";
import Footer from "./components/Footer";
import mainString1 from "./assets/main-string-1.png";
import mainString2 from "./assets/main-string-2.png";
import square from "./assets/square.png";
import triangle from "./assets/triangle.png";
const offers = [
  {
    text: "Office of multiple interest content",
    heading: "Colaborative & partnership",
    link: "#",
    id: 1,
  },

  {
    text: "The hanger US Air force digital experimental",
    heading: "We talk about our weight",
    link: "#",
    id: 2,
  },

  {
    text: "Delta faucet content, social, digital",
    heading: "Piloting digital confidence",
    link: "#",
    id: 3,
  },
];
const heroStrings = [
  {
    id: 1,
    src: string1,
    alt: "string1",
    top: "40%",
    left: "5%",
  },
  {
    id: 2,
    src: string2,
    alt: "string1",
    top: "40%",
    left: "0",
  },
];
const collageImages = [
  {
    id: 1,
    src: img1,
    alt: "Creative professional",
    top: "13rem",
    left: "1rem",

    shape: "circle",
  },
  {
    id: 2,
    src: img2,
    alt: "Designer portrait",
    top: "10rem",
    left: "6.25rem",

    shape: "circle",
  },
  {
    id: 3,
    src: img3,
    alt: "Outdoor traveler",
    top: "2.25rem",
    left: "18rem",

    shape: "square",
  },
  {
    id: 4,
    src: img4,
    alt: "Smiling team member",
    top: "11rem",
    left: "22rem",

    shape: "circle",
  },
  {
    id: 5,
    src: img5,
    alt: "Studio lead",
    top: "1rem",
    left: "36.5rem",

    shape: "square",
  },
  {
    id: 6,
    src: img6,
    alt: "Research collaborator",
    top: "5.5rem",
    left: "40.5rem",

    shape: "circle",
  },
  {
    id: 7,
    src: img7,
    alt: "Portrait on white background",
    top: "0rem",
    right: "12rem",

    shape: "circle",
  },
  {
    id: 8,
    src: img8,
    alt: "Street style portrait",
    top: "6rem",
    right: "1.5rem",

    shape: "square",
  },
];

const App = () => {
  return (
    <>
      {/* HEADER SECTION STARTS */}
      <Header />
      {/* HEADER SECTION ENDS */}

      {/* HERO SECTION STARTS */}
      <section className="py-5 position-relative" id="hero">
        {heroStrings.map((img) => {
          return (
            <img
              key={img.id}
              className="position-absolute string-img"
              style={{ top: img.top, left: img.left }}
              src={img.src}
              alt={img.alt}
            />
          );
        })}

        <div className="hero-cnt text-center">
          <h1>
            The <span className="scribble">thinkers</span> and doers were ch
            <span className="changing-highlight">anging</span>
            the <span className="status-highlight">status</span> Quo with
          </h1>
          <p className="my-3">
            We are a team of strategists, designers communicators, researchers.
            Togeather, <br /> we belive that progress only hghappens when you
            refuse to play things safe.
          </p>
          <div className="hero-collage" aria-hidden="true">
            {collageImages.map((image) => (
              <div
                key={image.id}
                className={`collage-item ${image.shape} img-${image.id}`}
                style={{
                  top: image.top,
                  left: image.left,
                  right: image.right,
                  width: "7.75rem",
                  height: "7.75rem",
                }}
              >
                <img src={image.src} alt={image.alt} />
              </div>
            ))}
          </div>
        </div>
        <img
          className="semicircle position-absolute"
          src={semicircle}
          alt="semicircle image"
        />
      </section>
      {/* HERO SECTION ENDS */}

      {/* MAIN SECTION STARTS */}
      <section className="py-5 main-section  position-relative">
        <img src={square} alt="" className="position-absolute square-img" />
        <img
          src={triangle}
          alt=""
          className="position-absolute triangle-img-1 position-absolute"
        />
        <img
          src={triangle}
          alt=""
          className="position-absolute triangle-img-2 position-absolute"
        />
        <img
          className="position-absolute main-string-1"
          src={mainString1}
          alt="Main string 1"
        />
        <img
          className="position-absolute main-string-2"
          src={mainString2}
          alt="Main string 2"
        />
        <div className="container">
          <div className="row m-0">
            <div className="col-md-7 order-1 order-md-0">
              <h2>
                <span className="scribble">Tomorrow</span> should be better than
                <span className="status-highlight">today</span>
              </h2>
              <p className="my-3">
                We are a team of strategists, designers communicators,
                researchers. <br /> Togeather, we belive that progress only
                happens when you refuse <br /> to play things safe.
              </p>
              <a className="text-decoration-none text-black" href="#">
                Read More <img src={linkArrow} alt="arrow image" />
              </a>
            </div>
            <div className="col-md-5 order-0 order-md-1">
              <img
                className="main-img w-100"
                src={mainImg1}
                alt="Person image 1"
              />
            </div>
          </div>
          <div className="py-5">
            <div className="row m-0">
              <div className="col-md-5 col-lg-7 order-0 order-md-0">
                <img
                  className="w-100 main-img"
                  src={mainImg2}
                  alt="Person image 2"
                />
              </div>
              <div className="col-md-7 col-lg-5 order-1 order-md-1">
                <h2>
                  <span className="status-highlight">See</span> how we can help
                  you <span className="scribble">progress</span>
                </h2>
                <p className="my-3">
                  We add a layer of fearless insights and action that allows
                  change <br /> makers to accelerate their progress in areas
                  such as brand, design <br /> digital, comms and social
                  research.
                </p>
                <a className="text-decoration-none text-black" href="#">
                  Read More <img src={linkArrow} alt="arrow image" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* MAIN SECTION ENDS */}

      {/* WHAT WE OFFER STARTS */}
      <section id="what-we-offer" className="py-5">
        <div className="container">
          {" "}
          <h2>
            What we <span className="status-highlight">can</span>
            <br />
            <span className="scribble">offer</span> you!
          </h2>
          <ul className="list-unstyled py-5">
            {offers.map((offer) => {
              return (
                <li className="py-5" key={offer.id}>
                  <a
                    className="text-decoration-none text-black d-block"
                    href={offer.link}
                  >
                    <div className="row m-0 align-items-center">
                      <div className="col-md-2">
                        {" "}
                        <p>{offer.text}</p>
                      </div>
                      <div className="col-md-9">
                        <h3>{offer.heading}</h3>
                      </div>
                      <div className="col-md-1">
                        {" "}
                        <img src={smallArrow} alt="arrow image" />
                      </div>
                    </div>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      {/* WHAT WE OFFER ENDS */}
      {/* FEEDBACK SECTION STARTS */}
      <section className="pb-5 position-relative" id="feedback-section">
        <h2 className="text-center">
          <span className="status-highlight">What</span> our customer <br />
          says <span className="scribble">About Us</span>
        </h2>
        <div className="feedback-cnt position-absolute  text-center p-5 rounded-5">
          <img
            className="position-absolute comma-up"
            src={commaUp}
            alt="comma up"
          />
          <p>
            Elementum delivered the site with inthe timeline as they requested.
            Inthe end, the client found a 50% increase in traffic with in days
            since its launch. They also had an impressive ability to use
            technologies that the company hasn`t used, which have also proved to
            be easy to use and reliable{" "}
          </p>
          <img
            className="position-absolute comma-down"
            src={commaDown}
            alt="comma Down"
          />
        </div>
      </section>
      {/* FEEDBACK SECTION ENDS */}

      {/* FOOTER SECTION STARTS */}
      <Footer />
      {/* FOOTER SECTION ENDS */}
    </>
  );
};

export default App;
