
export const drawDataOnCanvas = (data,ctx) => {
    ctx.clearRect(0,0,800,400)
    ctx.fillStyle ='#3273dc';
    // ctx.fillRect(100,100,100,100)
    console.log(data)
    for (let i=0; i<data.length; i++){
        console.log(data[i])
        ctx.fillRect(8*i,400-data[i],8,data[i])
    }
}
