import React from "react";
//Using React component to display a timeline
import { 
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

//Function contains all School and Work Experience I have
//Using VerticalTimeline and VerticalTimelineElement
function Experience() {
    return (
        <div className="experience">
            <VerticalTimeline lineColor="#3e497a">
                <VerticalTimelineElement 
                    className="vertical-timeline-element--education"
                    date="2012 - 2016"
                    iconStyle={{background: "#3e497a", color: "#fff"}}
                        
                >
                    <h3 className="vertical-timeline-element-title">
                        Corona High School, Corona, California
                    </h3>
                    <p>High School Diploma</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement 
                    className="vertical-timeline-element--education"
                    date="2016 - 2018"
                    iconStyle={{background: "#ef881a", color: "#fff"}}
                    
                >
                    <h3 className="vertical-timeline-element-title">
                        Astro Electric, Azusa, California
                    </h3>
                    <p>Electrician</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement 
                    className="vertical-timeline-element--education"
                    date="2018 - 2022"
                    iconStyle={{background: "#ef881a", color: "#fff"}}
                   
                >
                    <h3 className="vertical-timeline-element-title">
                        Miguels Jr, Norco, California
                    </h3>
                    <p>Assitant Kitchen Manager</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement 
                    className="vertical-timeline-element--education"
                    date="2019 - 2022"
                    iconStyle={{background: "#3e497a", color: "#fff"}}
                    
                >
                    <h3 className="vertical-timeline-element-title">
                        Norco Communiy College, Norco, California
                    </h3>
                    <p>Computer Science Associates Degree</p>
                    <p>Math and Science Associates Degree</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement 
                    className="vertical-timeline-element--education"
                    date="2023"
                    iconStyle={{background: "#3e497a", color: "#fff"}}
                    
                >
                    <h3 className="vertical-timeline-element-title">
                        Fedex, Chino, California
                    </h3>
                    <p>Package Handler</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement 
                    className="vertical-timeline-element--education"
                    date="January 2023 - December 2024"
                    iconStyle={{background: "#ef881a", color: "#fff"}}
                    
                >
                    <h3 className="vertical-timeline-element-title">
                        California State University of Fullerton, Fullerton, California
                    </h3>
                    <p>Expected Computer Science Bachelors Degree</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
}

export default Experience;