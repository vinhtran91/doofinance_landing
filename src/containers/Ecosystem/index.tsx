import { FC } from 'react';
import {/*  Button, */ SectionHead } from 'components';

import launchpad from 'assets/img/launchpad.svg';
import liquidity from 'assets/img/liquidity.svg';
import farming from 'assets/img/farming.svg';
import market from 'assets/img/market.svg';

import './Ecosystem.css';
/* import { Link } from 'react-router-dom'; */


export const Ecosystem = () => {
    return (
        <section id="ecosystem" className="ecosystem">
            <SectionHead frontText="Ecosystem" behindText="Ecosystem" />
            <p className="ecosystem__subtitle" >Part of the DooFinance Ecosystem</p>
            <div className="container ecosystem__grid" >
                <GridItem
                    icon={launchpad}
                    title="Launchpad"
                    description="The IDO will give community members the chance to get in on the ground floor and claim a new token on the launchpad."
                />
                <GridItem
                    icon={liquidity}
                    title="Liquidity Aggregator"
                    description="Traders use liquidity aggregators to find the best possible price across a variety of liquidity pools."
                />
                <GridItem
                    icon={farming}
                    title="Farming/Staking"
                    description="With each IDO launched on our platform, a new farming pool will be deployed based on the launched token."
                />
                <GridItem
                    icon={market}
                    title="NFT Marketplace"
                    description="Users can easily create as many collectibles as they wish, sell them, or decide not to sell on this network."
                />
            </div>
            {/* <Link to="#"  className="ecosystem__joinnow">
                <Button bgColor="#00A3BB" >JOIN NOW!</Button>
            </Link> */}
            
        </section>
    )
}

/** Grid Item */

interface GridItemProps{
    icon: any;
    title: string;
    description: string;
}

const GridItem:FC<GridItemProps> = ({
    icon, title, description,
}) => {
    
    return (
        <div className="grid-item" >
            <img className="grid-item__icon" src={icon} alt={title} />
            <div className="grid-item__content" >
                <h3 className="grid-item__content__title" >{title}</h3>
                <p className="grid-item__content__description">{description}</p>
            </div>
        </div>
    )
}