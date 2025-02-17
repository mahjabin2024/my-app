import logo from './logo.svg';
import './App.css';
import UserProfile from './components/UserProfile';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <div className="App">
     <UserProfile></UserProfile>
     <LoginForm></LoginForm>
    </div>
  );
}

export default App;
