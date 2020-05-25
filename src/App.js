import React, {useRef,useEffect,useState} from 'react';
import logo from './logo.svg';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Navbar,Section,Button, NavbarBrand } from 'react-bulma-components';
import './App.css';
import { drawDataOnCanvas } from './utils/DrawData';
import alghoritms from './configs/algorithms';
function App() {
  const canvasRef = useRef(null);
  const [chartData, setChartData] = useState([...Array(100)].map(() => Math.floor(Math.random() * 300 + 40)));
  const [sortingMethod, setSortingMethod] = useState(alghoritms[0])
  let ctx = '';
  useEffect(() => {
    ctx = canvasRef.current.getContext('2d');
    drawDataOnCanvas(chartData,ctx);
  }, [])
  const sort = () => {
    let changed;
    let temp;
    let data = chartData;
    for (let x = 0; x < data.length; x++){
        setInterval(()=>{
            data = chartData;
            changed = false;
            for (let i = 0; i < data.length; i++){
                if (data[i-1] > data[i]){
                    temp = data[i];
                    data[i] = data[i-1];
                    data[i-1] = temp;
                    changed = true;
                }
            }
            drawDataOnCanvas(data,ctx);
        },2000*x+100)

    }
    console.log(data)
  }
  return (
    <div className="App">
      <Navbar className='navbar' color='link'>
        <h1>Sort alghoritms visualised</h1>
      </Navbar>
      <h2>{sortingMethod.name}</h2>
      <h3>Performance: {sortingMethod.performance}</h3>
      <Section className='main'>
        <canvas width='800' height='400' className='canvasElement' ref={canvasRef}></canvas>
      </Section>
      <Button className='button' onClick={sort} color='link'>Sort using: {sortingMethod.name} </Button>
    </div>
  );
}

export default App;
