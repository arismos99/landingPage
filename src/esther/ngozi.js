import React from 'react';
import Chairs from "../asset/chairs.jpg"
import "./ngozi.css"

function ngozi() {
  return (
  <>
    <header>
        
        <ul>
            <li>home</li>
            <li>about us</li>
            <li>contact us</li>
            <li>our product</li>
            <li>our services</li>
        </ul>

        <form>
            <input type='text' id='' placeholder='search' />
        </form>
    </header>

    <main>
        <div className='first-div'>
            <div className='chi-boy'>
                <img src={Chairs} alt='' width="30px" height="30px"/>
            </div>
            <div className='chi-boy'>
                <h3>dashboard</h3>
            </div>
            <div className='chi-boy'>
                <h3>settings</h3>
            </div>
            <div className='chi-boy'>
                <h3>log in</h3>
            </div>
            <div className='chi-boy'>
                <h3>admin</h3>
            </div>
            <div className='chi-boy'>
                <h3>quality</h3>
            </div>
        </div>

        <div className='second-div'>
            <header>
                <ul>
                    <li>popular stories</li>
                    <li>recent headlines</li>
                </ul>
            </header> 
            <div className='home-content'>
                <div className='home-one'>
                    <div>
                        <img src={Chairs} alt='' width="240px" height="200px" borderBottomRightRadius="250px 100px" className="card-image"/>
                        <div className='who'>
                        <img src={Chairs} alt='' width="30px" height="30px"/>
                        </div>
                    </div>
                    <div>
                        <h3>south of france</h3>
                        <p>this is a new biggening of an era in the paradise 
                            of england an the sun .</p>
                        <div className='btn'>
                            <p>we are here</p>
                            <button>click here</button>
                        </div>
                    </div>
                </div>
                <div className='home-one'>
                    <img src={Chairs} alt=''  width="240px" height="200px"/>
                    <div className='who'>
                    <img src={Chairs} alt='' width="30px" height="30px"/>
                    </div>
                    <h3>housing in scotland</h3>
                    <p>this is a new biggening of an era in the paradise 
                        of england an the sun .</p>
                    <div className='btn'>
                        <p>we are here</p>
                        <button>click here</button>
                    </div>
                </div>
                <div className='home-one'>
                    <img src={Chairs} alt='' width="240px" height="200px"/>
                    <div className='who'>
                    <img src={Chairs} alt='' width="30px" height="30px"/>
                    </div>
                    <h3>walking in monphis</h3>
                    <p>this is a new biggening of an era in the paradise 
                        of england an the sun </p> 
                    <div className='btn'>
                        <p>we are here</p>
                        <button>click here</button>
                    </div>
                </div>
            </div>

            <div className='home-content'>

                <div className='home-one'>
                    <img src={Chairs} alt=''  width="240px" height="200px"/>
                    <div className='who'>
                    <img src={Chairs} alt='' width="30px" height="30px"/>
                    </div>
                    <h3>walking in monphis</h3>
                    <p>this is a new biggening of an era in the paradise 
                        of england an the sun </p> 
                    <div className='btn'>
                        <p>we are here</p>
                        <button>click here</button>
                    </div>
                </div>
                <div className='home-one'>
                    <img src={Chairs} alt=''  width="240px" height="200px"/>
                    <div className='who'>
                    <img src={Chairs} alt='' width="30px" height="30px"/>
                    </div>
                    <h3>walking in monphis</h3>
                    <p>this is a new biggening of an era in the paradise 
                        of england an the sun .</p>
                    <div className='btn'>
                        <p>we are here</p>
                        <button>click here</button>
                    </div>
                </div>
                <div className='home-one'>
                    <img src={Chairs} alt=''  width="240px" height="200px"/>
                    <div className='who'>
                    <img src={Chairs} alt='' width="30px" height="30px"/>
                    </div>
                    <h3>walking in monphis</h3>
                    <p>this is a new biggening of an era in the paradise 
                        of england an the sun .</p>
                    <div className='btn'>
                        <p>we are here</p>
                        <button>click here</button>
                    </div>
                </div>
            </div>
        </div>

        <div className='third-div'>
            <div className='cas'>
                <img src={Chairs} alt='' width="30px" height="30px"/>
                <h5>our landing page</h5>
            </div>

            <div className='man'>
            <img src={Chairs} alt=''  width="240px" height="200px"/>
            <h3>our work overflow</h3>
            <p>this is a new biggening of an era in the paradise 
            of england an the sun rises very early to out shine 
            every bad thing tht has  be taking control of the  
            world at large.</p>
            </div>
            
            <div className='img'>
                <img src={Chairs} alt='' width="40px" height="40px"/>
                <img src={Chairs} alt='' width="40px" height="40px"/>
                <img src={Chairs} alt='' width="40px" height="40px"/>
            </div>

            <div className='formal'>
            <h5>watch youtube</h5>
            <img src={Chairs} alt='' width="240px" height="200px"/>
            </div>

            
            <div className='true'>
                <div>
                    <p>busy line</p>
                    <h3>march 28</h3>
                </div>
                <div>
                    <p>consumable</p>
                    <h3>may 04</h3>
                </div>
            </div>
            <div className='false'>
                <button>prev</button>
                <button>next</button>
            </div>
            
            
        </div>
    </main>
  </>
    );
}

export default ngozi;
