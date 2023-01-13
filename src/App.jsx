import { Header } from "./Header";
import { Home } from "./Home";
import { Footer } from "./Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeProvider from 'react-bootstrap/ThemeProvider'


function App() {
  return (
    <ThemeProvider
    breakpoints={['xxl', 'xl', 'lg', 'md', 'sm', 'xs']}
    minBreakpoint="xs"
    >
    <div>
      <Header />
      <Home />
      <Footer />
    </div>
    </ThemeProvider>
  )
}

export default App;
