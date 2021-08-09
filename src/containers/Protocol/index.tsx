import './Protocol.css';

import rebase from 'assets/img/rebase.png';
import burn_rate from 'assets/img/burn-rate.png'
import burn_cycle from 'assets/img/burning-cycle.png'

export const Protocol = () => {
    return (
        <section id="protocol" className="protocol">
            <h2 className="protocol__title" >Deflationary Token</h2>
            <p className="container protocol__description" >Doo Finance has a unique burning mechanism automatically sent to burn address with every transaction. Burning tokens essentially eliminate them from the available stock, making them more expensive.</p>
            <div className="container protocol__cards" >

                <div className="protocol__card" >
                    <div className="protocol__card__image" >
                        <img src={burn_cycle} alt="Burning Cycle" />
                    </div>                    
                    <h3 className="protocol__card__title" >
                        4% LOCKED IN LIQUIDITY <br /> POOL
                    </h3>
                    <p className="protocol__card__description" >
                        We depend on Pancake swap liquidity pools to have a market and to guarantee it we will auto add 4% tax that will be used to add DOO Token and BNB back to the pancake liquidity pool.
                    </p>
                </div>

                <div className="protocol__card" >
                    <div className="protocol__card__image" >
                        <img src={burn_rate} alt="Burning Rate" />
                    </div>
                    <h3 className="protocol__card__title" >
                        4% AUTOMATIC BURNING BY THE REFLECTIONS
                    </h3>
                    <p className="protocol__card__description" >
                        Our dead wallet is like a holder, and it receives a part of 4% that is redistributed to all holders in every transaction but instead of keeping the tokens it just burns 🔥 automatically, which means we are a deflationary token.
                    </p>
                </div>
                
                <div className="protocol__card" >
                    <div className="protocol__card__image" >
                        <img src={rebase} alt="Burning Cycle" />
                    </div>
                    <h3 className="protocol__card__title" >
                        2% REDISTRIBUTED TO ALL HOLDERS
                    </h3>
                    <p className="protocol__card__description" >
                        Holders of our token can be rewarded simply by holding the token by 2% of every transaction, which is a form of in-wallet staking that does not require tokens to be locked.
                    </p>
                </div>
                
            </div>
        </section>
    )
}
