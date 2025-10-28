import './WorkContainer.css'
import { workList } from '../work.js';

import Heading from '../Components/Heading.jsx'
import WorkComponent from '../components/WorkComponent.jsx';

function Game() {
    const items = [];

    for (let i = 0; i < workList.length; i++) {
        if(workList[i].type !== "game") continue;
        items.push(
            <WorkComponent 
            img={workList[i].img} 
            link={workList[i].link} 
            title={workList[i].title} 
            description={workList[i].description}
            />
        );
    }

    return (
    <>
        <Heading title={"Games"}/>
        <ol className='workcomp-container'>
            {items}
        </ol>
    </>
    )
}

export default Game
