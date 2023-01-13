import { Header } from "./Header";
import { Home } from "./Home";

import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeProvider from 'react-bootstrap/ThemeProvider'


function App() {
  return (
    <ThemeProvider
    breakpoints={['xxl', 'xl', 'lg', 'md', 'sm', 'xs']}
    minBreakpoint="xs"
    >
      <Header />
      <Home />
    </ThemeProvider>
  )
}

export default App;
