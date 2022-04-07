import React from 'react';

import './App.css';
import { ChainId, DAppProvider } from '@usedapp/core';
import { Header } from "./components/Header"
import { Container } from "@material-ui/core"

function App() {
  return (
    <DAppProvider config={{
      supportedChains: [ChainId.Kovan]
    }}>
      <div className="App">
        <Header />
        <Container maxWidth="md">
          <h1>Token Market</h1>
        </Container>

      </div>
    </DAppProvider>
  );
}

export default App;
