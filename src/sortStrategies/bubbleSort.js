import {drawDataOnCanvas} from  '../utils/DrawData';
export default  (ctx,chartData) => {
    let temp;
    let data = chartData;
    for (let x = 0; x < data.length; x++){
        setInterval(()=>{
            data = chartData;
            let changed = false;
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