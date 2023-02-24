import NavbarMain from './components/NavbarMain'
import Preview from './components/Preview';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './components/Login';
import SignUpM from './components/SignUpM';
function App() {
  return (
    <>
    <NavbarMain/>
    <Preview/>
    <Login/>
    <SignUpM/>
    </>
  );
}

export default App;