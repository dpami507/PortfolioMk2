import './Home.css'
import { workList } from '../work.js';

import Heading from '../Components/Heading.jsx'
import WorkComponent from '../components/WorkComponent.jsx';

function Art() {
    const items = [];

    for (let i = 0; i < workList.length; i++) {
        if(workList[i].type !== "art") continue;
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
        <Heading title={"Art"}/>
        <ol className='workcomp-container'>
            {items}
        </ol>
    </>
    )
}

export default Art
