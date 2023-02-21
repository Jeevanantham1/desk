import React from "react";
//import HeaderMenu from "../../shared/header";
import HeaderMenu from "../../pages/shared/header";
import './index.scss'

function AboutPage() {

    return (
        <div className="t">

            <HeaderMenu />

            <div className="at">
                <h3>happy help desk</h3>
                <h4>What's behind the boards.</h4>
                </div>
                <div className="ta">
               <h6>The way your team works is unique — so is happy help desk</h6>
                <p>happy help desk is the flexible work management tool where teams can ideate plans, collaborate on projects, organize workflows, and track progress in a visual, productive, and rewarding way.</p>
                <p> From brainstorm to planning to execution, Trello manages the big milestones and the day-to-day tasks of working together and getting things done.</p>
            </div>

        </div>
    )



}

export default AboutPage;
