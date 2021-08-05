import { Button } from 'components'
import './Contact.css'
export const Contact = () => {
    return (
        <section id="contact" className="contact">
            <div className="container contact__wrapper" >
                <div className="contact__wrapper__left">
                    <div className="contact__wrapper__left__subtitle" >CONTACT</div>
                    <div className="contact__wrapper__left__title">Get In Touch</div>
                    <p className="contact__wrapper__left__p">
                        <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.75 0H2.25C0.984375 0 0 1.03125 0 2.25V15.75C0 17.0156 0.984375 18 2.25 18H21.75C22.9688 18 24 17.0156 24 15.75V2.25C24 1.03125 22.9688 0 21.75 0ZM21.75 2.25V4.17188C20.6719 5.0625 18.9844 6.375 15.4219 9.1875C14.625 9.79688 13.0781 11.2969 12 11.25C10.875 11.2969 9.32812 9.79688 8.53125 9.1875C4.96875 6.375 3.28125 5.0625 2.25 4.17188V2.25H21.75ZM2.25 15.75V7.07812C3.28125 7.92188 4.82812 9.14062 7.125 10.9688C8.15625 11.7656 9.98438 13.5469 12 13.5C13.9688 13.5469 15.75 11.7656 16.8281 10.9688C19.125 9.14062 20.6719 7.92188 21.75 7.07812V15.75H2.25Z" fill="#00A3BB"/>
                        </svg>
                        <span>info@yourcompany.com</span>
                    </p>
                    <p className="contact__wrapper__left__p">
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.625 0.328125L2.125 11.5781C0.484375 12.5156 0.625 14.9062 2.35938 15.6094L7.75 17.8125V21.75C7.75 23.9531 10.5156 24.8438 11.7812 23.1094L13.8438 20.3438L19.0938 22.5C19.375 22.6406 19.6562 22.6875 19.9375 22.6875C20.3125 22.6875 20.6875 22.5938 21.0625 22.4062C21.6719 22.0312 22.0469 21.4688 22.1875 20.7656L24.9531 2.625C25.2344 0.75 23.2188 -0.609375 21.625 0.328125ZM10 21.75V18.75L11.6875 19.4531L10 21.75ZM19.9375 20.4375L12.7188 17.4375L19.3281 7.96875C19.7969 7.21875 18.8594 6.375 18.2031 6.98438L8.26562 15.6094L3.25 13.5L22.75 2.25L19.9375 20.4375Z" fill="#00A3BB"/>
                        </svg>
                        <span>Join us on Telegram</span>
                    </p>
                </div>
                <div className="contact__wrapper__right">
                    <form className="contact__wrapper__right__form" >
                        <input className="contact__wrapper__right__form__name" type="text" placeholder="Name" />
                        <input className="contact__wrapper__right__form__email" type="email" placeholder="Email" />

                        <input className="contact__wrapper__right__form__subject" type="text" placeholder="Subject" />
                        <textarea className="contact__wrapper__right__form__message" placeholder="Message" />

                        <Button bgColor="#00A3BB" >Send Massage</Button>
                    </form>
                </div>
            </div>
        </section>
    )
}
