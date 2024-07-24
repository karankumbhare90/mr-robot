import './Sidebar.css';
import { useContext, useState } from 'react';
import { Context } from '../../context/Context';
import { FaBars } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { LuMessageSquare } from "react-icons/lu";

const Sidebar = () => {

    const [extended, setExtended] = useState(false);
    const { onSent, prevPrompt, setRecentPrompt, newChat } = useContext(Context);

    const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt)
        await onSent(prompt);
    }

    return (
        <div className='sidebar'>
            <div className="top">
                <FaBars alt="Menu Icon" className='menu img' onClick={() => setExtended(!extended)} />
                <div onClick={() => newChat()} className="new-chat">
                    <FaPlus className='img' />
                    {extended ? <p className='new-c-text'>New Chat</p> : null}
                </div>
                {
                    extended
                        ? <div className="recent">
                            <p className="recent-title">Recent</p>
                            {prevPrompt.map((item, index) => {
                                return (
                                    <div onClick={() => loadPrompt(item)} className="recent-entry" key={index}>
                                        <LuMessageSquare className='img' />
                                        <p>{item.slice(0, 18)}...</p>
                                    </div>
                                )
                            })}
                        </div>
                        : null
                }
            </div>
            {/* <div className="bottom">
                <div className="bottom-item recent-entry">
                    <img src={assets.question_icon} alt="" />
                    {extended ? <p>Help</p> : null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.history_icon} alt="" />
                    {extended ? <p>Activity</p> : null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.setting_icon} alt="" />
                    {extended ? <p>Settings</p> : null}
                </div>
            </div> */}
        </div>
    )
}

export default Sidebar