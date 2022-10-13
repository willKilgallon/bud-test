import React from "react";
import Container from "./components/Container"
import PhoneMockup from "./components/PhoneMockup";
import UI from "./components/UI";

const App = () => (
    <Container>
        <PhoneMockup>
            <UI />
        </PhoneMockup>
    </Container>
);

export default App;