import { useNavigate } from 'react-router-dom';
import './App.css';

function App() {
  const navigate = useNavigate();

  const handleButtonClicked = () => {
    navigate("/game");
  };

  
  return (
    <div className="container flex justify-center items-center h-screen">
      <button 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded align-h-center"
        onClick={handleButtonClicked}>
        Find Match
      </button>
    </div>
  );
}

export default App;
