import { FC, useEffect } from "react";
import AOS from "aos";

import "aos/dist/aos.css";
import "./SectionHead.css";

interface SectionHeadProps {
    frontText: string;
    behindText: string;
}

export const SectionHead: FC<SectionHeadProps> = ({
    frontText,
    behindText,
}) => {
    useEffect(() => {
        AOS.init({
            mirror: true
        });
    }, []);

    return (
        <div className="section-head">
            <span className="section-head__behind">{behindText}</span>
            <div className="section-head__front">
                <h2 data-aos="fade-up">
                    {frontText}
                </h2>
            </div>            
        </div>
    );
};
