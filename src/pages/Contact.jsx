import './Contact.css'
import Heading from '../Components/Heading.jsx'

function Contact() {
    return (
    <>
        <Heading title={"Contact"}/>
        <div className='contact'>
            <div className='info'>
                <p>You can reach me by email or by sending me a message on LinkedIn</p>
                <h3>Email:</h3>
                <a href="">david.amidon@mymail.champlain.edu</a>

                <h3>LinkedIn</h3>
                <a href="">Click to View</a>
            </div>

            <div className="border_line"></div>

            <a href="https://docs.google.com/document/d/1-_TowS3IwQnTeMnhOMAtZvo4yRy4kjvAhN3BFHFZuaU/edit?usp=sharing" className="resume" target="_blank">
              <img src="imgs/Resume.png" alt="" />
            </a>
        </div>
    </>
    )
}

export default Contact
