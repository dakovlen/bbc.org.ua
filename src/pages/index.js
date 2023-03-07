import Head from 'next/head'
// import Image from 'next/image'
import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <nav classNameName="Navbar">
          <div classNameName="wrapper">
            <ul className="menu">
              {/* <li className="logo"><img src="logo.png" alt="Назва логотипу"></li> */}
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Sermon</a></li>
              <li><a href="#">Blog</a></li>
              <a href="#"><button className="contact-button">Contact Us </button></a>
            </ul>
          </div>
        </nav>

        <div className="Home-Header">
          <div className="header wrapper ">
            <span>Welcome to our CHURCH</span>
            <h1>Become a part of our community</h1>
            <a href="#"><button className="button">Learn more</button></a>
            <hr />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
          </div>
          <div className="image">
            <img src="Image/woman-in-orange-coat-with-black-and-brown-scarf-5418305.jpg" />
          </div>

        </div>

      </header>
      <section className="heading wrapper">
        <div className="text1">
          <span className="subtext">sub-headline</span>
          <h2>a church that's relevant</h2>
        </div>
        <div className="block-container">
          <div className="block1">
            <img src="Image/Icon1.png" alt="Іконка 1" />
            <h4>About us</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="block2">
            <img src="Image/Icon2.png" alt="Іконка 2" />
            <h4>Get involved</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="block3">
            <img src="Image/Icon3.png" alt="Іконка 3" />
            <h4>Giving back</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
      </section>
      <section className="heading1 wrapper">
        <div className="text2">
          <span className="subtext1">sub-headline</span>
          <h2>a church that's relevant</h2>
        </div>

        <p>Lorem ipsum dolor sit amet, consectetur adipi
          scing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

        <button>Read more</button>

        <div className="image-container">
          <img src="Image/a-bearded-man-praying-5206040.jpg" alt="image 1" />
          <img src="Image/man-and-woman-reading-book-while-sitting-on-pews-8468470.jpg" alt="image 2" />
          <img src="Image/people-sitting-on-brown-pews-8674151.jpg" alt="image 3" />
        </div>

        <div className="text2">
          <span className="subtext2">our mission & vision</span>
          <h4>celebrate WITH US</h4>


          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <a href="#">Read More →</a>

        </div>
      </section>

      <section>
        <div className="my-block">
          <span>Watch and listen</span>
          <h2>THE benefits of joining our church</h2>
          <div className="image-wrapper">
            <img src="Image/fashion-man-love-people-5875438.jpg" alt="Картинка 1" />
            <h5 className="image-title">WATCH AND LISTEN TO OUR SERMONS</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
          </div>
          <div className="image-wrapper">
            <img src="Image/a-statue-holding-a-holy-book-5613134.jpg" alt="Картинка 2" />
            <h5>WATCH AND LISTEN TO OUR SERMONS</h5>
          </div>
          <div className="image-wrapper">
            <img src="Image/man-people-woman-connection-6276711.jpg" alt="Картинка 3" />
            <h5>WATCH AND LISTEN TO OUR SERMONS</h5>
          </div>
          <div className="image-wrapper">
            <img src="Image/woman-in-blue-tank-top-and-man-in-red-shirt-painting-3795022.jpg" alt="Картинка 4" />
            <h5>WATCH AND LISTEN TO OUR SERMONS</h5>
          </div>

        </div>
      </section>

      <section className="block-info wrapper">
        <span className="block-info1">Watch and listen</span>
        <h2 className="block-info2">join us and become part of something great</h2>
        <div className="info-block">

          <div className="info-text">
            <div className="date">
              <h5>20</h5>
              <span>July</span>
            </div>
            <div className="block-text">
              <span>Upcoming Event</span>
              <h5>WATCH AND LISTEN TO OUR SERMONS</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>

            <div className="icon-and-time">
              <img src="Image/Clock icon.png" alt="Icon" />
              <p>Friday 23:39 IST<br /> Saturday 11:20 ISD</p>
            </div>
            <div className="icon-and-location">
              <img src="Image/location.png" alt="Location" />
              <p>No 233 Main St. New York,<br /> United States</p>
            </div>
            <button>Register</button>
          </div>
          <img src="Image/angel.jpg" alt="Image" />

        </div>
        <a href="#">View all Sermons →</a>


      </section>

      <section className="container">
        <img src="Image/image-church.png" alt="background" className="bg-img" />
        <div className="content">
          <h2>We want to serve the world around us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
          <button>Visit</button><hr className="line" />

          <img src="Image/Quote icon.png" alt="icon" className="icon" />
        </div>
      </section>

      <section className="blocks-blog wrapper">
        <span className="blog">Read our Blog</span>
        <h2 className="blog1">SHARE, INSPIRE, INNOVATE</h2>
        <div className="blocks">
          <div className="block">
            <span>Relationship</span>
            <h5>WATCH AND LISTEN TO OUR SERMONS</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            <span>By Mathew Johnson</span>
            <p>Tuesday 13 May, 2021</p>
          </div>
          <div className="block">
            <span>Relationship</span>
            <h5>WATCH AND LISTEN TO OUR SERMONS</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            <span>By Mathew Johnson</span>
            <p>Tuesday 13 May, 2021</p>
          </div>
          <div className="block">
            <span>Relationship</span>
            <h5>WATCH AND LISTEN TO OUR SERMONS</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            <span>By Mathew Johnson</span>
            <p>Tuesday 13 May, 2021</p>
          </div>
          <div className="block">
            <span>Relationship</span>
            <h5>WATCH AND LISTEN TO OUR SERMONS</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            <span>By Mathew Johnson</span>
            <p>Tuesday 13 May, 2021</p>
          </div>
        </div>
      </section>

      <footer className="footer wrapper">
        <div className="footer-block">
          <img src="logo.png" alt="Logo" />

          <div className="content-left">
            <span>© Copyright Finsweet 2022</span>
            <br />
            <a href="tel:+380123456789">(480) 555-0103</a>
            <br />
            <span className="content-address">4517 Washington Ave. </span>
            <br />
            <a href="email:emai@.com">finsweet@example.com</a>
          </div>
        </div>
        <div className="footer-block">
          <p>Quicklinks</p>
          <span>About us</span>
          <br />
          <span>Sermons</span>
          <br />
          <span>Events</span>
          <br />
          <span>Blog</span>
        </div>
        <div className="footer-block">
          <p>Connect with Us</p>
          <a href="#"><i className="fab fa-facebook fa-lg"></i></a>
          <a href="#"><i className="fab fa-twitter fa-lg"></i></a>
          <a href="#"><i className="fab fa-instagram fa-lg"></i></a>
        </div>
        <div className="footer-block">
          <h4>Subscribe to Our Newsletter</h4>
          <form>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </footer>
    </>
  )
}
