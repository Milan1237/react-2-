import logo from './logo.svg';
import './App.css';
import {ErrorBoundary} from 'react-error-boundary'
import First from './First';
import Parent from './Parent';

function ErrorFallback({ error }) {
  return <div>An error occurred: {error.message}</div>;
}

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Parent />
    </ErrorBoundary>
  );
}

export default App;
