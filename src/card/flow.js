import React from 'react';
import Chairs from "../asset/chairs.jpg"
import "./flow.css"
function Flow() {
  return (
    <>
       <section className='flow-section'>
          <div className='flow-container'>
           <div className='flow-first'>
             <h3>join the <span>fast growing</span> market place</h3>
             <img src={Chairs} alt=''/>
           </div>

           <div className='flow-second'>
             <div className='navbar'>
              <h4>splitmulti</h4>
              <h5>register</h5>
              <ol>
                <li>seller account</li>
                <li>busines information</li>
                <li>bank account</li>
                <li>summary</li>
             </ol>
             </div>
             
              <div className='flow-form'>
                <form className='first-form'>
                  <ul>
                    <li>
                        <label for="country" Value="country">country</label>
                      <input type="text" name='country' id=''/>
                    </li>
                  
                    <li>
                        <label for="first name" Value="first name">first name</label>
                      <input type="text" name='first name' id=''/>
                    </li>
                     
                      <li>
                          <label for="email address" Value="email address">email address</label>
                        <input type="text" name='email address' id=''/>
                      </li>
                     
                      <li>
                          <label for="Passward" Value="Passward">Passward</label>
                        <input type="text" name='Email' id=''/>
                      </li>
                      
                      <li>
                          <label for="password" Value="password">password</label>
                        <input type="text" name='password' id=''/>
                      </li>
                  </ul>
                </form>

                <form className='second-form'>
                  <ul>
                    <li>
                        <label for="business name" Value="business name">business name</label>
                      <input type="text" name='business name' id=''/>
                    </li>
                  
                    <li>
                        <label for="last name" Value="last name">last name</label>
                      <input type="text" name='last name' id=''/>
                    </li>
                    
                    <li>
                        <label for="phone number" Value="phone number">phone number</label>
                      <input type="text" name='phone number' id=''/>
                    </li>
                    
                    <li>
                        <label for="password" Value="password ">password</label>
                      <input type="text" name='password' id=''/>
                    </li>
                   
                    <li>
                        <label for="password" Value="password">Password</label>
                      <input type="text" name='password' id=''/>
                    </li>
                   
                  </ul>
                </form>
              </div>
            
              <div className='flow-footer'>
                
                <input type="checkbox" name="checkbox" id="" value=""/>
                    <label for="Female">i agree to the <span>
                      <a href="">terms and condition</a>
                      </span> and privacy policy</label>

                <button type='submit'>submit here</button>

                <p>already have an accout? login</p>

                <a href="#">forgot password</a>
              </div>
           </div>
         </div>
       </section>

       
    </>
  );
}

export default Flow;
