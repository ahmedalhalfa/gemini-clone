import './Main.css';
import assets from '../../assets/assets';
import { useContext } from 'react';
import { Context } from '../../context/Context';

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
    conversationHistory
  } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Dev.</span>
              </p>
              <p>How can i help you?</p>
            </div>
            <div className="cards">
              <div onClick={() => onSent('Suggest beautiful places to see on an upcoming road trip')} className="card">
                <p>Suggest beautiful places to see on an upcoming road trip</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div onClick={() => onSent('Briefly describe the most important things about the following document')} className="card">
                <p>Briefly describe the most important things about the following document</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div onClick={() => onSent('Brainstorm a list of 10 possible business names for a new company')} className="card">
                <p>Brainstorm a list of 10 possible business names for a new company</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div onClick={() => onSent('Improve the style of the following website')} className="card">
                <p>Improve the style of the following website</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="result">
              {conversationHistory.map((entry, index) => (
                <div key={index} className="conversation-entry">
                  <div className="result-title">
                    <img src={assets.user_icon} alt="" />
                    <p>{entry.prompt}</p>
                  </div>
                  <div className="result-data">
                    <img src={assets.gemini_icon} alt="" />
                    <p dangerouslySetInnerHTML={{ __html: entry.response }}></p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt here"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  onSent();
                }
              }}
            ></input>
            <div>
              {/* <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" /> */}
              {input ? (<>
                <img
                  onClick={() => {
                    onSent();
                  }}
                  src={assets.send_icon}
                  alt=""
                />
              </>) : null}
            </div>
          </div>
          <p className="bottom-info">Gemini may display inaccurate info, incorect facts, or biased content.</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
