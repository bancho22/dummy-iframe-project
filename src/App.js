import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Find button in iFrame below:
        </p>
        <iframe src="https://platform.twitter.com/widgets/tweet_button.html" title="dummy-iframe" id="dummy-iframe-id" data-testid="dummy-iframe-testid"></iframe>
      </header>
    </div>
  );
}

export default App;
