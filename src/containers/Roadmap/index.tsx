import { SectionHead } from "components";
import { useRef } from "react";
import { FC } from "react";
import useDragScroll from 'use-drag-scroll';

import './Roadmap.css';

const data = [
    {
        date: "5th August 2021",
        text: [
            "Smart Contact create",
            "Website Launch"
        ]
    },
    {
        date: "5th August 2021",
        text: ["Initial Liquidity Even on Unicrypt"]
    },
    {
        date: "20th August 2021",
        text: ["Presale start on Unicrypt"]
    },
    {
        date: "Q4 2021",
        text: [
            "Liquidity Lock with Unicrypt",
            "Launch on Pancakeswap"
        ]
    },
    {
        date: "December 2021",
        text: [
            "Launch NFT Marketplace inder BSC",
            "Launch Doo Swap Product"
        ]
    },
    {
        date: "Q1 2022",
        text: ["Launch NFT MiniGame"]
    }
]

export const Roadmap = () => {

    const ref = useRef(null);
    useDragScroll({
        sliderRef: ref
    })

    return (
        <section id="roadmap" className="roadmap">
            <SectionHead frontText="Our Roandmap" behindText="ROADMAP" />

            <div className="roadmap__timeline" >
                <div className="container roadmap__timeline__wrapper" ref={ref} >
                    <div className="roadmap__timeline__wrapper__top" >
                        {data.filter((e, i) => i % 2 === 0).map((_e, i) => <TimelineNode key={i} {..._e} />)}
                    </div>
                    <div className="roadmap__timeline__wrapper__bottom" >
                        {data.filter((e, i) => i % 2 === 1).map((_e, i) => <TimelineNode key={i} {..._e} />)}
                    </div>
                </div>
            </div>
        </section>
    )
}


interface TimelineNodeProps {
    date: string;
    text: string[];
}

const TimelineNode: FC<TimelineNodeProps> = ({ date, text }) => {

    return (
        <div className="timeline_node" >
            <span className="timeline_node__date" >{date}</span>
            {text.map(l => <span key={l} className="timeline_node__text">{l}</span>)}
        </div>
    )
}