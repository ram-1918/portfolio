import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BaseHeader, BaseTitleHeader } from "../base/Base";

import { faComputer } from "@fortawesome/free-solid-svg-icons";
import aws from '../../icons/AWS.png';
import servicenow from '../../icons/servicenow.png';
import tableau from '../../icons/tableau.png';
import ProjectDetailCard from "../projects/ProjectDetailsCard";
import CertificationCard from "./CertificationCard";

const certifications = [
    {
        id: 1,
        image: aws,
        name: 'AWS Data engineer',
        content: `Multi-device Bluetooth, wireless and USB-C charging for every passenger, 
        with enough power to fast-charge your tablets and laptop.`
    },
    {
        id: 2,
        image: servicenow,
        name: 'Service Now',
        content: `Up to 10 teraflops of processing power enables in-car gaming
         on-par with today’s newest consoles. Wireless controller compatibility 
         lets you game from any seat.`
    },
    {
        id: 3,
        image: tableau,
        name: 'Tableau',
        content: `A 22-speaker, 960-watt audio system with active noise canceling offers the best
        listening experience at home or on the road.`
    }
]


export default function Certifications() {
    return (
        <div className="px-[5%] h-fit py-10 w-full flex flex-col justify-center items-center space-y-10 bg-black">
            <BaseTitleHeader text="Certifications" />
            <BaseHeader text="Certifications & Accomplishments" type='projects' icon={<FontAwesomeIcon icon={faComputer} className="text-2xl" />} />
            <div className="flex flex-row items-start justify-center w-full h-full space-x-10">
                {
                    certifications.map(item => <CertificationCard key={item.id} image={item.image} name={item.name} content={item.content} />)
                }
            </div>
        </div>
    )
}