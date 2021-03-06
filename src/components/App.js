import React, { Component } from "react";
import "./App.css";
import { Grid, Message } from "semantic-ui-react";
import ColorPanel from "./ColorPanel/ColorPanel";
import SidePanel from "./SidePanel/SidePanel";
import Messages from './Messages/Messages';
import MetaPanel from "./MetaPanel/MetaPanel";

class App extends Component {
  render() {
    return (
      <Grid columns="equal" style={{ background: '#eee' }}>
        <ColorPanel />
        <SidePanel />

         <Grid.Column style={{ marginLeft: 320 }}>
           <Messages />
         </Grid.Column>

         <Grid.Column width={4}>
           <MetaPanel />
         </Grid.Column>

       </Grid>
      // <div>Dec</div>
    )
  }
}


export default App;
