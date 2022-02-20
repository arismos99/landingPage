import React from 'react';
import "./about.css"
import Chairs from "../asset/chairs.jpg"
import myelf from "../asset/myself.jpg"

function about() {
  return (
  <div className='container'>
      <section className="navbar">
          <h1>M.</h1>
          <ul>
            <li>home</li>
            <li>about us</li>
            <li>service</li>
            <li>outcome</li>
            <li>portfolio</li>
            <li>news</li>
            <li>contact</li>
          </ul>
      </section>

      <section className='banner-body'>
        <div className='banner-content'>
          <div className='banner-text'>
            <h4>hello</h4>
            <h1>i'm micheal</h1>
            <p>freelance web & mobile ui/ux designer</p>
            <button className='banner-btn'>hire me</button>
          </div>
          <div className='banner-image'>
            <img src={myelf} alt="" />
            <div className='color-box'></div>
          </div>
        </div>
      </section>

      <section className='about-body'>
        <div className='about-content'>
            <div className='about-image'>
              <h2>about me</h2>
            </div>
            
            <div className='short-text'>
              <p>from the beginning of the world the world was with god 
              and the world was god. look not unto the kiniquities of the world,
              but by your infinit mercy lord! show mercy.from the world the world was with god 
              and the world was god. look not unto the kiniquities of the world,
              mercy.</p>
              <br/>
              <p>from the beginning of the world the world was with god 
              and the world was god.from the beginning of the world the world was with god 
              </p>
              <div className='second-btn'>
                <button id='btn-one'>view works</button>
                <button id='btn-two'>download cv</button>
              </div>
            </div>
        </div>
      </section>

       <section className='section-three'>
          <div className='sales'>
            <h2>services</h2>
            <p>from the beginning of the world the world was with god 
            and the world was god. look not unto the kiniquities of the world,
            but by your infinit mercy lord! show mercy.</p>
          </div>

          <div className='image-gallery'>
            <div className='only'>
              <div className='inline-one'>
                <div className='image-color1'>
                  <h3>ux reserch</h3>
                  <p>from the beginning of the world the world was with god 
                  and the world was god.</p>
                 </div>
              
              </div>

              
              <div className='inline-one1'>
                <div className='image-color2'>
                  <h3>web development</h3> 
                  <p>from the beginning of the world the world was with god 
                  and the world was god.</p>
                </div>
              </div>
            </div>

            <div className='only'>
              <div className='inline-one'>
                <div className='image-color3'>
                  <h3>app design</h3> 
                  <p>from the beginning of the world the world was with god 
                  and the world was god.</p>
                </div>
              </div>

              
              <div className='inline-one1'>
                <div className='space'>
                  <div className='image-color4'>
                    <h3>web design</h3> 
                    <p>from the beginning of the world the world was with god 
                    and the world was god.</p>
                  </div>
                </div>
                
              </div>
              
             
            </div>
           
        </div>
      </section> 
  </div>
  );
}

export default about;
