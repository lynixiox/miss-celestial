import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import CustomButton from '../Button/Button'
import TextInput from '../textInput/TextInput'
import * as styled from './ContactForm.styles'
import { useSelector } from 'react-redux'
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify'

const ContactForm = () => {

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [instagram, setInstagram] = useState("");
  const form = useRef();
  const submitRequest = (e) => {

    e.preventDefault();
    emailjs.sendForm("service_m0qr3y7","template_bkt62at",form.current, "dK7P27QH-dMR0nbns").then((result) => {
        setName("");
        setSurname("");
        setMessage("");
        setEmail("")  
        setInstagram("");
        toast.success("Thank you! We will get back to you shortly");
        },(error)=>{
          setName("");
          setSurname("");
          setMessage("");
          setEmail("")  
          setInstagram("");
          toast.error("Request Failed, Please try a different Contact method");

        })
  }

  const isMobile = useSelector(state => state.isMobileState.isMobile);
  return (

      <>
     
        <styled.ContactContainer isMobile={isMobile}>
          <styled.ContactRow isMobile={isMobile}>
            <styled.ContactCol isMobile={isMobile}>
              <styled.ContactContent>
                <styled.ContactData ref={form} onSubmit={submitRequest} isMobile={isMobile}>
                <TextInput type="text" label='Name' name="from_name" textColor='white' borderBottomColor='white' value={name} onChange={(event) => setName(event.target.value)}/>
                <TextInput label='Surname' type="text" name="user_surname" textColor='white' borderBottomColor='white' value={surname} onChange={(event) => setSurname(event.target.value)}/>
                <TextInput label='Email' type="text" name="user_email" textColor='white' borderBottomColor='white' value={email} onChange={(event) => setEmail(event.target.value)}/>
                <TextInput label='Country' type="text" name="message"textColor='white' borderBottomColor='white'  value={message} onChange={(event) => setMessage(event.target.value)}/>
                <TextInput label='Instagram' type="text" name="instagram"textColor='white' borderBottomColor='white'  value={instagram} onChange={(event) => setInstagram(event.target.value)}/>
                <CustomButton type="submit" label="submit" onClick={e => submitRequest(e)}/>
                </styled.ContactData>
                
            </styled.ContactContent>
            </styled.ContactCol>
            <styled.ContactCol isMobile={isMobile}>
              <styled.ContactImage isMobile={isMobile} src="/images/contact.jpg" alt="" />
            </styled.ContactCol>
          </styled.ContactRow>
        </styled.ContactContainer>
      </>
  );
}
export default ContactForm

{/* <div className="contact-form">
            
  <div>
    <div className="contact-row">    
      <div className="col">
        <div className="contact-content">
          <form action="/action_page.php">
            <label>Name</label>
            <input type="text" id="fname" name="firstname" placeholder="Your name.."  
/>
            <label>Surname</label>
            <input type="text" id="lname" name="lastname" placeholder="Your last name.."
/>



            <label>Email</label>
            <input type="email" id="email" name="email" placeholder="Your email" 
/>
            <div className="form-group">
              <label htmlFor="message">Message</label>
            </div>

            <div className="contact-button">
              <Link>
                <CustomButton type="submit"  value ="submit" buttonSize='btn--medium' buttonColor='grey'>Submit</CustomButton>
              </Link>
            </div>
          </form>
        </div>
      </div>
      <div className="col">
        <img className="contact_img" src="./images/contact.png" alt=""/>
      </div>
    </div>
</div>
</div> */}
