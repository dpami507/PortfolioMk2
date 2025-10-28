import headShot from '/imgs/DavidAmidon.jpg'
import './Home.css'
import { workList } from '../work.js';

import BoxLink from '../Components/BoxLink.jsx'

function Home() {

    const items = [];

    for (let i = 0; i < 3; i++) {
        items.push(
            <BoxLink 
            img={workList[i].img} 
            link={workList[i].link} 
            title={workList[i].title} 
            description={workList[i].description}
            />
        );
    }

  return (
    <>  
        <div className='landing'>
            <h1>David Amidon</h1>
            <img src={headShot} alt="" />
        </div>

        <div className='about'>
            <h2>About Me</h2>
            <p>
                I'm David Amidon, a Game Programming student at Champlain College.
                I work primarily in C++, C#, and Unity, building games and figuring out how to make things work the way I want them to. I like the problem-solving side of development and working with others on creative projects.
                My portfolio has games and art I've made, plus some community service stuff. Currently looking for internship and entry-level opportunities in game programming and software development.
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
