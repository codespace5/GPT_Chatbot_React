import { useEffect, useState } from 'react';
import getMessage from './getMessage'

import './dash.css'
function Dashboard () {
    // cosnt [state1, setState] = useState('')

    const [contentText, setText ] = useState('')
    const [answer, setAnswer] = useState('')
//     const [dataText, setdataText] = useState([
//         {   textid :1,
//             sendid: 1,
//             text2:'Hello'},
//         {   textid :2,
//             sendid: 1,
//             text2:'How are you?'},
//         {   textid :3,
//             sendid: 2,
//             text2:'I am good'},
//         {   textid :4,
//             sendid: 2,
//             text2:'Great'},
//         {   textid :5,
//             sendid: 1,
//             text2:'What can I help you?'},
// ])
    const [dataText, setdataText] = useState([

    ])

    function addAnswer(){
        let text4 = answer
        console.log('the anser is 111', answer)
        let len_data1 = Object.keys(dataText).length +1;
        const dataText2 = [
            ...dataText,
            {
                textid: len_data1,
                sendid: 2,
                text2: text4
            }
        ]
        scrollToBottom()
        setdataText(dataText2);
    }

    function AddDic(){
        let text3 = contentText
        let len_data = Object.keys(dataText).length +1;
        const dataText1 = [
            ...dataText,
            {
                textid: len_data,
                sendid: 1,
                text2: text3
            }
        ]
        scrollToBottom()
        setdataText(dataText1);
    }
    
    const HandleSubmit = async (e) => {
        e.preventDefault()
        AddDic()
        e.target.reset()
        const value = await getMessage.Ans({ prompt: contentText });
        setAnswer(value)
       
    }
    const HandleChange = (e)=>{
        e.preventDefault()
        setText(e.target.value)
    }
    const scrollToBottom = () => {
        const chat = document.getElementById("chatList");
        chat.scrollTop = chat.scrollHeight;
      };
    useEffect(() => {
        addAnswer()
    }, [answer])


    return(
        <div>
            <div className="chatWindow">
                <ul className="chat" id="chatList">
                    {dataText.map(data => (
                        <div key={data.textid}>
                        {data.sendid ===1 ? (
                            <li className="self">
                            <div className="msg">
                                <p>Me</p>
                                <div className="message"> {data.text2}</div>
                            </div>
                            </li>
                        ) : (
                            <li className="other">
                            <div className="msg">
                                <p>Answer</p>
                            <div className="message"> {data.text2} </div>
                            </div>
                            </li>
                        )}
                        </div>
                    ))}
                </ul>
                <div className="chatInputWrapper">
                    <form onSubmit={HandleSubmit}>
                        <input
                        className="textarea input"
                        type="text"
                        placeholder="Enter your message..."
                        onChange={HandleChange}
                        />
                    </form>
                </div>
            </div>
        </div>
    )

}

export default Dashboard;