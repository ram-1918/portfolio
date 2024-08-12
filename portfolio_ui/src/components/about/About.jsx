import { useContext } from "react";
import { colors } from "../../data";
import Animation from "../Animations";
import { ScreenContext } from "../../contexts";

export default function About() {
    return (
        <div className="relative flex flex-col items-center justify-center w-full h-full">
            <div className="flex items-center justify-center w-full h-full">
                <BGText />
            </div>
            <div className="absolute w-full h-full">
                <Animation />
            </div>
        </div>
    );
}

const BGText = () => {
    const screen = useContext(ScreenContext);
    return (
        <div className="z-10 flex flex-col items-start justify-center -space-y-4 select-none h-fit">
            <span className="text-[3rem]">I'm</span>
            <span  className={`text-[8rem] font-[play] font-light ${colors.main_title}`}>
                Preetham Bhavirisetty
            </span>
        </div>
    )
}


{/* <span className="whitespace-pre-line text-wrap">
Improved Visibility: CloudWatch provides a unified view of your entire AWS environment, including applications, infrastructure, and operational health.
Proactive Monitoring: CloudWatch alarms enable you to identify and address potential issues before they impact your applications.
Optimized Resource Utilization: By monitoring resource usage, you can identify potential bottlenecks and optimize your infrastructure for cost-efficiency
</span> */}