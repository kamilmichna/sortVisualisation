import React, {useRef,useEffect,useState} from 'react';
import logo from './logo.svg';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Navbar, Section, Button, Field, Control, Label } from 'react-bulma-components';
import './App.css';
import { drawDataOnCanvas } from './utils/DrawData';
import alghoritms from './configs/algorithms';
function App() {
  const canvasRef = useRef(null);
  const [chartData, setChartData] = useState([...Array(300)].map(() => Math.floor(Math.random() * 380 + 5)));
  const [sortingMethod, setSortingMethod] = useState(alghoritms[0])
  let ctx = '';
  useEffect(() => {
    ctx = canvasRef.current.getContext('2d');
    drawDataOnCanvas(chartData,ctx);
  }, [ctx,sortingMethod])

  const onSelectChange = (e) => {
    console.log(ctx)
    let algo = alghoritms.filter(el=>el.name===e.target.value)[0];
    setSortingMethod(algo);
  }
  return (
    <div className="App">
      <Navbar className='navbar' color='link'>
        <h1>Sort alghoritms visualised</h1>
      </Navbar>
      <div className='dataContainer'>
        <h2>{sortingMethod.name}</h2>
        <h3>Performance: {sortingMethod.performance}</h3>
        <label>Select sort type: </label>
        <select onChange={onSelectChange}>
          { alghoritms.map(el=>{
              return (
                <option>{el.name}</option>
              )
          })}
        </select>
      </div>
      <Section className='main'>
        <canvas width='1200' height='400' className='canvasElement' ref={canvasRef}></canvas>
      </Section>
      <Button className='button' onClick={() => sortingMethod.sortingFunction(ctx,chartData)} color='link'>Sort using: {sortingMethod.name} </Button>
    </div>
  );
}

export default App;
