import "./chatbot.css";
import { useState } from "react";
import getMessage from './getMessage'

function Gpt() {
  const [text, setText] = useState("");
  const [summarizedtext, setsummarizedtext] = useState("");
  const [loading, setLoading] = useState(false);
  const HandleSubmit = async (e) => {
    e.preventDefault();
    const value = await getMessage.Ans({ prompt: text });
    setsummarizedtext(value)
  };

  function generatePrompt(text) {
    return `Summarize this ${text}. and break them into seperate lines`;
  }

  return (
    <div className="App_">
      <div className="header">
        <h1 className="header_text">
          <span className="text_active">MedChat AI</span>
        </h1>
        <h2 className="header_summary">
          {" "}
          What is your medical health concern?
        </h2>
      </div>
      <div className="container">
        <div className="text_form">
          <form>
            <label>Enter your question</label>
            <textarea
              rows={5}
              cols={80}
              placeholder="Put your text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </form>
        </div>
        <div>
          <button type="button" onClick={HandleSubmit}>
            {loading ? "loading..." : "Ask AI Doctor Now"}
          </button>
        </div>
        <div className="summarized_text">
          <label>Doctor Answers</label>
          <textarea
            placeholder="Summarized text"
            cols={80}
            rows={14}
            value={summarizedtext}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default Gpt;
