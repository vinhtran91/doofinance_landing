import { SectionHead } from "components";
import { useRef } from "react";
import { FC } from "react";
import useDragScroll from 'use-drag-scroll';

import './Roadmap.css';

const data = [
    {
        date: "Phase 1",
        text: [
            "Research and development, community building",
            "Presale on oxbull",
            "Pancakeswap listing",
            "Own launchpad launch",
            "Coingecko/Coinmarketcap listing",
            "Start First IDO",
            "Target 5000 holders"
        ]
    },
    {
        date: "Phase 2",
        text: [
            "Staking/Farming Launch",
            "Dooswap Product Launch",
            "Start Second IDO",
            "Doo Wallet App Launch on store",
            "Nft Marketplace Launch",
            "Start Third IDO",
            "Target 10k holders"
        ]
    },
    {
        date: "Phase 3",
        text: [
            "Nft mini Game Launch",
            "Charting tools",
            "More Cex listings",
            "Target 20k Holder"
        ]
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