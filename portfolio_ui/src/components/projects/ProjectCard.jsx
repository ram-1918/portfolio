import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BaseHeader, BaseTitleHeader } from "../base/Base";
import ProjectDetailCard from "./ProjectDetailsCard";
import { faComputer } from "@fortawesome/free-solid-svg-icons";
import project1 from '../../images/project1.png';
import project2 from '../../images/project2.png';
import project3 from '../../images/project3.png';

const projects = [
    {
        id: 1,
        image: project1,
        name: 'Recomendation System',
        content: `Multi-device Bluetooth, wireless and USB-C charging for every passenger, 
        with enough power to fast-charge your tablets and laptop.`
    },
    {
        id: 2,
        image: project2,
        name: 'House Price Prediction',
        content: `Up to 10 teraflops of processing power enables in-car gaming
         on-par with today’s newest consoles. Wireless controller compatibility 
         lets you game from any seat.`
    },
    {
        id: 3,
        image: project3,
        name: 'Wine Quality Data analysis & Visualizations',
        content: `A 22-speaker, 960-watt audio system with active noise canceling offers the best
        listening experience at home or on the road.`
    }
]


export default function ProjectCard() {
    return (
        <div className="px-[5%] h-fit py-10 w-full flex flex-col justify-center items-center space-y-10 bg-black">
            <BaseTitleHeader text="Projects" />
            <BaseHeader text="Academic & Personal Projects" type='projects' icon={<FontAwesomeIcon icon={faComputer} className="text-2xl" />} />
            <div className="w-full h-full flex flex-col justify-center items-start space-y-1">
                {
                    projects.map(item => <ProjectDetailCard key={item.id} image={item.image} name={item.name} content={item.content} />)
                }
            </div>
        </div>
    )
}