import './Contact.css'
import Heading from '../components/Heading.jsx'

function Contact() {
    return (
    <>
        <Heading title={"Contact"}/>
        <div className='contact'>
            <div className='info'>
                <p>You can reach me by email or by sending me a message on LinkedIn, There are also other contact methods on my Resume.</p>
                <h3>Email:</h3>
                <a href="mailto:david.amidon@mymail.champlain.edu">david.amidon@mymail.champlain.edu</a>

                <h3>LinkedIn</h3>
                <a href="https://www.linkedin.com/in/dpamidon/" target="_blank">Click to View</a>
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
