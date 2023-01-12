import { Header } from "./Header";
import { Example } from "./Home";
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
      <Example />
      <Footer />
    </div>
    </ThemeProvider>
  )
}

export default App;
