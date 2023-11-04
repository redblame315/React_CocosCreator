import { useEffect } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';

function CocosApp() {
  const navigate = useNavigate();
  const init = ()=>{
    const iframe:any = document.getElementById("cocos-app-iframe");
    if(iframe)
    {
      console.log(iframe.tagName);
      iframe.src = "https://playtworobots.web.app?token=3da2bc3dddd";
    }
  };

  useEffect(()=>{
    init();
  }, [navigate])
  return (
    <div className="App">
      <iframe title="TwoRobots" id="cocos-app-iframe" width="100%" height="100%"/>
    </div>
  );
}

export default CocosApp;
