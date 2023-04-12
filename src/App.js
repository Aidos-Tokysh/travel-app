import './All.css';
import Header from './components/Header';
import Video from './components/Video';
import Form from './components/Form';
import Recomendation from './components/Recomendation';
import Footer from './components/Footer';
function App() {
  
  return (
    <div className="App">
      <Header/>
      <Video/>
      <Form/>
      {/* {hotTours.map(item=><Data item={item}/>)} */}
      <div className='recomendations'>
      <h2>Часто посещаемые курорты</h2>
      <Recomendation/>
      </div>
      <Footer/>
      
    </div>
  );
}

export default App;
