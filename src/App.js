// import logo from './logo.svg';
import './App.css';
import { GoogleLogin } from '@react-oauth/google';
import { useLinkedIn } from 'react-linkedin-login-oauth2';
import linkedin from 'react-linkedin-login-oauth2/assets/linkedin.png';
import "bootstrap/dist/css/bootstrap.min.css"
import Auth from './component/login/auth';
import Gpt from './component/chatbot/chatbot';
import Dashboard from './component/chatbot/dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import VoiceText from './component/voice/voice_text';
import SpeechApp from './component/speech/speech';
function App() {
  const responseMessage = (response) => {
    console.log(response);
};
const errorMessage = (error) => {
    console.log(error);
};

const { linkedInLogin } = useLinkedIn({
  clientId: '86vhj2q7ukf83q',
  redirectUri: `${window.location.origin}/linkedin`, // for Next.js, you can use `${typeof window === 'object' && window.location.origin}/linkedin`
  onSuccess: (code) => {
    console.log(code);
  },
  onError: (error) => {
    console.log(error);
  },
});



return(
  <BrowserRouter>
    <Routes>
        <Route path='/' element = {<Auth />} />
        <Route path='/dashboard' element = {<Gpt />}/>
        <Route path='/msg' element = {<Dashboard />}/>
        <Route path='/voice' element = {<VoiceText />}/>
        {/* <Route path='/speech' element = {<SpeechApp />}/> */}
    </Routes>
  </BrowserRouter>
)
}

export default App;
