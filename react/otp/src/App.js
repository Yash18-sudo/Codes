import './App.css';
import OtpLength from './components/OtpInput';

function App() {
  const otpLengthfromBack = 4;
  return (
    <div className="App">
      <OtpLength  otpLength={otpLengthfromBack}/>
    </div>
  );
}

export default App;
