import { Contact, Ecosystem, Footer, Introduce, Protocol, Roadmap, Team, Tokenomics } from 'containers';

export const Home = () => {
    return (
        <>
            <Introduce />
            <main>
                <Ecosystem />
                <Tokenomics />
                <Protocol />
                <Roadmap />
                <Team />
                <Contact />
                <Footer />
            </main>
        </>
    )
}
