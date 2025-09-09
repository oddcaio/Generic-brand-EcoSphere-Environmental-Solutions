import './App.css';
import Video from '../../../src/assets/images/video.mp4'

function App() {
  return (
    <video src={Video} autoPlay loop muted width="300" className='video'></video>
  );
}

export default App;
