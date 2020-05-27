
export const drawDataOnCanvas = (data,ctx) => {
    ctx.clearRect(0,0,1200,400)
    ctx.fillStyle ='#3273dc';
    // ctx.fillRect(100,100,100,100)
    for (let i=0; i<data.length; i++){
        ctx.fillRect(4*i,400-data[i],8,data[i])
    }
}
