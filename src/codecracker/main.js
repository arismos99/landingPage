import React from 'react';
import './main.css';

function Main() {
  return (  
  <div className='body'>

      <section className='container'>

        <h3>code crackers</h3>
        <h4>membership registration form</h4>
        <form>
            <label for="User name" Value="User name">User name</label>
            <input type="text" name='User tname' id='' placeholder='enter your user name here'/>
             
             <label for="Email" Value="Email">Email:</label>
            <input type="text" name='Email' id='' placeholder='Input your email here'/>
              
             <label for="Passward" Value="Passward">Passward:</label>
            <input type="text" name='Passward' id='' placeholder='Input your passward here'/>
              
              <label for="Confirm Passward" Value="Passward">Passward:</label>
            <input type="text" name='Email' id='' placeholder='Input your user name here'/>
              
              <label for="Date of birth" Value="Date of birth ">Passward:</label>
            <input type="text" name='date of birth' id='' placeholder='mm/dd/yyyy'/>
              

              <span>Gender
                <input type="radio" name="Gender" id="Male" value="Male"/>
                <label for="Male">Male</label>

                <input type="radio" name="Gender" id="Female" value="Famale"/>
                <label for="Female">Female</label>

                <input type="radio" name="Gender" id="Others" value="Others"/>
                <label for="Others">Others </label>
              </span>
            
            
            <textarea Name='' Id='' cols='30' rows='5' >lorem ipsisg vtbjwhgd wbwwgdm sndghg</textarea>

            <button type='submit'>submit here</button>
        </form>
    </section>

  </div>
  );
}

export default Main;
