import React from "react";

import styled from "styled-components";

import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

// import Card from "./component/Card";

import Button from "./component/Button";

import { PuffLoader } from "react-spinners";

import { ColorPicker } from "./theme";

import { toast } from "react-toastify";

export default function SpeechApp() {
  const { transcript, resetTranscript, listening } = useSpeechRecognition();

  const microphoneOn = () => {
    SpeechRecognition.startListening({ continuous: true });
    console.log('start')
    toast.success("Microphone On", { autoClose: 1500 });
  };

  const microphoneOff = () => {
    SpeechRecognition.stopListening();
    toast.error("Microphone Off", { autoClose: 1500 });
    console.log('stop')
  };

  const resetParagraph = () => {
    resetTranscript();
    toast.info("Paragraph was reseted", { autoClose: 1500 });
    console.log('reset')
  };

  const Microphone = () => {
    return (
      <Button
        color={!listening ? "success" : "danger"}
        onClick={!listening ? microphoneOn : microphoneOff}
      >
        {/* <box-icon
          name={!listening ? "microphone" : "microphone-off"}
          color="white"
        /> */}
      </Button>
    );
  };

  return (
    <div>Hello</div>
    // <Container>
    //   <Card.Container>
    //     <Card.Top>
    //       <Title>Speech To Text</Title>
    //     </Card.Top>
    //     <Card.Content>
    //       <Paragraph>
    //         {transcript
    //           ? transcript
    //           : "Press to microphone button and start to speech."}
    //       </Paragraph>
    //     </Card.Content>
    //     <Card.Bottom>
    //       <BottomContainer>
    //         <LoadingBox>
    //           <PuffLoader
    //             size={50}
    //             loading={listening}
    //             color={`rgb(${ColorPicker("primary")})`}
    //           />
    //         </LoadingBox>

    //         <ButtonBox>
    //           <Microphone />
    //           <Button color="primary" onClick={resetParagraph}>
    //             {/* <box-icon name="reset" color="white" /> */}
    //           </Button>
    //         </ButtonBox>
    //       </BottomContainer>
    //     </Card.Bottom>
    //   </Card.Container>
    // </Container>
  );
}

const Container = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;

  justify-content: center;
`;

const Title = styled.h2`
  padding: 0.5rem;
`;

const Paragraph = styled.p`
  padding: 0.5rem;
`;

const ButtonBox = styled.div`
  display: flex;
  column-gap: 0.5rem;
  padding: 0.5em;
`;

const BottomContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
`;

const LoadingBox = styled.div``;
