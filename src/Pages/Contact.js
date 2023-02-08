import React, { useState } from 'react'
import './Contact.css'


const Contact = () => {

  const initialForm = {
      name: '',
      email: '',
      message: ''
  };
   
   const [formState, setFormState ] = useState(initialForm)
   const {name, email, message} = formState
   const [buttonMessage, setButtonMessage] = useState('Send Message')
   const [loading, setIsLoading] = useState(false)

  //  const onSubmit = (e) => {
  //   e.preventDefault()
  //   console.log(formState)
  //   setTimeout(() => {
  //     setIsLoading(false)
  //     setButtonMessage('Message Sent!')
  //     setFormState(initialForm)
  //   }, 1000)
  //  }

   const onChange = (e) => {
      const { name, value } = e.target;
      setFormState({...formState, [name]: value})
   }

  return (
    <div className='service-top'>
      <div className='title'>Contact</div>
      <div className='sub'>
        Feel free to reach out for hiring opportunities, collaborations, questions..etc. <br />
      

    </div>
      <form 
          method='POST' 
          action='https://formsubmit.co/7c74cee4bcfc42539c9145aa371ed1f3' 
          encType='multipart/form-data' 
      >
        <div className='input-row'>
          <div className='side' >
            <label htmlFor='name'>Your Name</label>
            <input
                type='text'
                name='name'
                placeholder='State your name for the record'
                value={name}
                onChange={onChange}
                required
            />
          </div>
          <div className='side' >
            <label htmlFor='name'></label>
            <input
                type='email'
                name='email'
                placeholder='Email'
                value={email}
                onChange={onChange}
                required
            />
          </div>
          </div>
          <div className='textarea' >
            <label htmlFor='message'></label>
            <textarea
                type='message'
                id='message'
                name='message'
                placeholder='Message'
                value={message}
                onChange={onChange}
                required
            />
          </div>
        

        <button type='submit' >{loading ? '': buttonMessage}</button>
      

      </form>
    
    </div>
  )
}

export default Contact