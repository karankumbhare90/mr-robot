import { useContext } from 'react';
import { assets } from '../../assets/assets';
import './Main.css';
import { Context } from '../../context/Context';
import { IoCompassOutline } from "react-icons/io5";
import { FaRegLightbulb } from "react-icons/fa";
import { LuMessageSquare } from "react-icons/lu";
import { IoCodeSlash } from "react-icons/io5";
import { RiSendPlane2Line } from "react-icons/ri";

const Main = () => {
    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);

    return (
        <div className='main'>
            <div className="nav">
                <p>Mr. Robot</p>
                <img src={`https://wallpaper.forfun.com/fetch/fd/fd71a4ebe212b20efba988189d3b5cec.jpeg`} alt="User Icon" />
            </div>
            <div className="main-container">
                {!showResult
                    ? <>
                        <div className="greet">
                            <p><span>Hello, Developer,</span></p>
                            <p className='sub-heading'>How can I help you today ?</p>
                        </div>

                        <div className="cards">
                            <div className="card">
                                <p>Suggest beautiful places to see on an upcoming road trip.</p>
                                <IoCompassOutline className='img' />
                            </div>
                            <div className="card">
                                <p>Briefly summarize the concept : Urban planning</p>
                                <FaRegLightbulb className='img' />
                            </div>
                            <div className="card">
                                <p>Brainstorm team bonding activities for our work retreat.</p>
                                <LuMessageSquare className='img' />
                            </div>
                            <div className="card">
                                <p>Improve readability of the following code.</p>
                                <IoCodeSlash className='img' />
                            </div>
                        </div>
                    </>
                    : <div className='result'>
                        <div className="result-title">
                            <img src={`https://wallpaper.forfun.com/fetch/fd/fd71a4ebe212b20efba988189d3b5cec.jpeg`} alt="Icon" />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="result-data">
                            <img src={assets.gemini_icon} alt="Icon" />
                            {loading
                                ? <div className='loader'>
                                    <hr />
                                    <hr />
                                    <hr />
                                </div>
                                : <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                            }
                        </div>
                    </div>
                }
                <div className="main-bottom">
                    <div className="search-box">
                        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder='Enter a prompt here' />
                        <div>
                            {input ? <RiSendPlane2Line className='img' onClick={() => onSent()} /> : null}
                        </div>
                    </div>
                    <div className="bottom-info">
                        Robot may display inaccurate info, including about people, so double check its response. Your privacy and robot apps.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;