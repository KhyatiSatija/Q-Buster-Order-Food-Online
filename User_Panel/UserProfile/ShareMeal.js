import React from 'react'
import './ShareMeal.css'



const ShareMeal = () => {
  return (
    <div className='sharemeal'>
      <h1 className='mainhead1'>Share Your Meal</h1>

      
      <p>##With our latest initiative, 'Share Meal', aimed at reducing food waste and supporting those in need. Now, if you have leftover food from your order or want to donate a meal to someone in need, simply contact us. We'll ensure that your food reaches those who can benefit from it. 
        Let's work together to reduce food waste and support our community. </p>

      <div className='form'>
        <div className='form-group'>
        <h4  label htmlFor='name'>Contact Us:- </h4> <a href="tel:+91 123456789">  +91 123456789</a> 
          
        </div>



        {/* <div className='form-group'>
          <label htmlFor='phone'>Phone/Mobile <span>*</span></label>
          <input type='text' name='phone' id='phone'

          />
        </div> */}
        {/* <div className='f1'>
          <img src={logo} alt='budget' className='budget' /> */}


        

      
      </div>

     
    </div>
  )
}

export default ShareMeal