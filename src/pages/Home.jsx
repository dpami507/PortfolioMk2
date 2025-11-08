import { useState } from 'react';
import './Home.css'
import { workList } from '../work.js';
import { getImagePath } from '../utils/helpers'
import BoxLink from '../components/BoxLink.jsx'
import PopUp from '../components/PopUp.jsx'

function Home() {

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [currentPopup, setCurrentPopup] = useState({});

    const openPopup = (data) => {
        setCurrentPopup(data);
        setIsPopupOpen(true);
        console.log(currentPopup);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    const items = [];

    for (let i = 0; i < 3; i++) {
        items.push(
            <BoxLink 
            img={workList[i].img} 
            link={() => openPopup(workList[i])} 
            title={workList[i].title} 
            description={workList[i].description}
            />
        );
    }

  return (
    <>  
        <PopUp 
            isOpen={isPopupOpen} 
            onClose={closePopup} 
            img={currentPopup.img} 
            link={currentPopup.link} 
            title={currentPopup.title} 
            description={currentPopup.description}
            />
    
        <div className='landing'>
            <h1>David Amidon</h1>
            <img src= {getImagePath('/imgs/DavidAmidon.jpg')} alt="" />
        </div>

        <div className='about'>
            <h2>About Me</h2>
            <p>
                I'm David Amidon, a Game Programming student at Champlain College.
                I work primarily in C++, C#, and Unity, building games and figuring out how to make things work the way I want them to. I like the problem-solving side of development and working with others on creative projects.
                Currently looking for internship and entry-level opportunities in game programming and software development.
            </p>
        </div>

        <div class="line"></div>

        <div className='recentwork'>
            <h2>Recent Work</h2>
            <div className='boxlink-container'>
                {items}
            </div>
        </div>
    </>
  )
}

export default Home
