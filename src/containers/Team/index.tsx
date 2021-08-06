import { SectionHead } from "components"
import "./Team.css"

import phuoc from 'assets/img/phuoc.png';
import phuoc1 from 'assets/img/phuoc-1.png';
import duyen from 'assets/img/duyen.png';
import duy from 'assets/img/duy.png';
import vinh from 'assets/img/vinh.png';
import dat from 'assets/img/dat.png';
import { FC } from "react";
import { Link } from "react-router-dom";

const data = [
    {
        avatar: vinh,
        name: "Tran Van Vinh",
        role: "CEO of ZoziTech and CX Exchange",
        linkid: "",
        twiter: ""
    },
    {
        avatar: phuoc,
        name: "Huynh Van Phuoc",
        role: "Blockchain & NodeJS Developer",
        linkid: "",
        twiter: ""
    },
    {
        avatar: duy,
        name: "Ngo Nhat Duy",
        role: "Reactjs Developer",
        linkid: "",
        twiter: ""
    },
    {
        avatar: duyen,
        name: "Nguyen T Ha Duyen",
        role: "Designer",
        linkid: "",
        twiter: ""
    },
    {
        avatar: phuoc1,
        name: "Huynh Van Phuoc",
        role: "Blockchain & NodeJS Developer",
        linkid: "",
        twiter: ""
    },
    
    {
        avatar: dat,
        name: "Le Thanh Dat",
        role: "Blockchain & NodeJS Developer",
        linkid: "",
        twiter: ""
    },
]

export const Team = () => {
    return (
        <section id="team" className="team">
            <SectionHead behindText="MEET THE TEAM" frontText="Executive Team" />
            <p className="container team__description" >The Circleex Team combines a passion for esports, industry experise & proven record in finance, development, marketing & licensing.</p>
            <div className="container team__grid" >
            {data.map(_e => <Member key={_e.avatar} {..._e} />)}
            </div>
        </section>
    )
}

interface MemberProps{
    avatar: any;
    name: string;
    role: string;
    linkid?: string;
    twiter?: string;
}

const Member:FC<MemberProps> = ({
    avatar, name, role, linkid="#", twiter="#",
}) => {

    return (
        <div className="member" >
            <img className="member__avatar" src={avatar} alt="" />
            <div className="member__info" >
                <span className="member__info__name" >{name}</span>
                <p className="member__info__role">{role}</p>
                <div className="member__info__socials" >
                    <Link to={twiter}>
                        <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.5508 2.90625C13.0977 2.49609 13.5898 2.00391 13.9727 1.42969C13.4805 1.64844 12.9062 1.8125 12.332 1.86719C12.9336 1.51172 13.3711 0.964844 13.5898 0.28125C13.043 0.609375 12.4141 0.855469 11.7852 0.992188C11.2383 0.417969 10.5 0.0898438 9.67969 0.0898438C8.09375 0.0898438 6.80859 1.375 6.80859 2.96094C6.80859 3.17969 6.83594 3.39844 6.89062 3.61719C4.51172 3.48047 2.37891 2.33203 0.957031 0.609375C0.710938 1.01953 0.574219 1.51172 0.574219 2.05859C0.574219 3.04297 1.06641 3.91797 1.85938 4.4375C1.39453 4.41016 0.929688 4.30078 0.546875 4.08203V4.10938C0.546875 5.50391 1.53125 6.65234 2.84375 6.92578C2.625 6.98047 2.35156 7.03516 2.10547 7.03516C1.91406 7.03516 1.75 7.00781 1.55859 6.98047C1.91406 8.12891 2.98047 8.94922 4.23828 8.97656C3.25391 9.74219 2.02344 10.207 0.683594 10.207C0.4375 10.207 0.21875 10.1797 0 10.1523C1.25781 10.9727 2.76172 11.4375 4.40234 11.4375C9.67969 11.4375 12.5508 7.08984 12.5508 3.28906C12.5508 3.15234 12.5508 3.04297 12.5508 2.90625Z" fill="#44BBEA"/>
                        </svg>
                    </Link>
                    <Link to={linkid}>
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.73438 13V4.82422H0.191406V13H2.73438ZM1.44922 3.73047C2.26953 3.73047 2.92578 3.04688 2.92578 2.22656C2.92578 1.43359 2.26953 0.777344 1.44922 0.777344C0.65625 0.777344 0 1.43359 0 2.22656C0 3.04688 0.65625 3.73047 1.44922 3.73047ZM12.2227 13H12.25V8.51562C12.25 6.32812 11.7578 4.63281 9.1875 4.63281C7.95703 4.63281 7.13672 5.31641 6.78125 5.94531H6.75391V4.82422H4.32031V13H6.86328V8.95312C6.86328 7.88672 7.05469 6.875 8.36719 6.875C9.67969 6.875 9.70703 8.07812 9.70703 9.03516V13H12.2227Z" fill="#44BBEA"/>
                    </svg>
                    </Link>
                </div>
            </div>
        </div>
    )
}