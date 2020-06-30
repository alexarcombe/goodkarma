import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {
  ThemeProvider,
  createMuiTheme,
  responsiveFontSizes,
} from '@material-ui/core/styles';

import Header from '../Header';
import Footer from '../Footer';
import Home from '../Home';
import Truck from '../Truck';
import Cafe from '../Cafe';
import About from '../About';
import Events from '../Events';
import FAQ from '../FAQ';

let theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ddaa34',
    },
    secondary: {
      main: '#193659',
    },
  },
});
theme = responsiveFontSizes(theme);

function App() {
  return (
    <div className="App">
      <Router>
        <ThemeProvider theme={theme}>
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/truck" component={Truck} />
          <Route exact path="/cafe" component={Cafe} />
          <Route exact path="/about" component={About} />
          <Route exact path="/events" component={Events} />
          <Route exact path="/faq" component={FAQ} />
          <Footer />
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
