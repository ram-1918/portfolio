import { useContext } from "react";
import { colors } from "../../data";
import Animation from "../Animations";
import { ScreenContext } from "../../contexts";

export default function About() {
    return (
        <div className="relative flex flex-col items-center justify-center w-full h-full ">
            <div className="w-full bg-red-400 h-fit">
                <BGText />
                <Animation />
            </div>
        </div>
    );
}

const BGText = () => {
    const screen = useContext(ScreenContext);
    return (
        <div className="absolute top-[35%] left-[20%] w-[50%] leading-7 tracking-wider h-fit flex flex-col justify-start items-start space-y-4 z-20">

            <span className="">{screen}</span>
            <span style={{color: colors.main_title}} className="text-[4rem] font-[cursive]">
                Preetham Bhavirisetty
            </span>
            <span className="whitespace-pre-line text-wrap">
            Improved Visibility: CloudWatch provides a unified view of your entire AWS environment, including applications, infrastructure, and operational health.
Proactive Monitoring: CloudWatch alarms enable you to identify and address potential issues before they impact your applications.
Optimized Resource Utilization: By monitoring resource usage, you can identify potential bottlenecks and optimize your infrastructure for cost-efficiency
            </span>
        </div>
    )
}