import './App.css';

import Img2 from './assets/img2.jpg';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';

function App() {
  return (
    <div className="App">
      <h1>Avançando em React</h1>
      <div>
        <img src="/img1.jpg" alt="" />
      </div>
      <div>
        <img src={Img2} alt="" />
      </div>
      <ManageData />
      <ListRender />
    </div>
  );
}

export default App;
