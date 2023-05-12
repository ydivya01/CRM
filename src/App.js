import React from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import {Headercomp} from "./Layout/Header"
import { Defaultlayout } from "./Layout/Defaultlayout";
import { Dashboard } from "./Page/entry/Dashboard";
import { Entry } from "./Page/entry/Entry.page";
import { NewTicketform } from "./Component/NewTicketform";
import { TicketList } from "./Page/entry/Ticketlist";
import { OneTicket } from "./Page/entry/oneTicket";
import { Footercomp } from "./Layout/Footer";

function App() {
  return (
    <Container className="App">
      <Headercomp />
      <Entry />
      <Footercomp />
    

    </Container>
  );
}

export default App;
