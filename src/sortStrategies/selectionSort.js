import {drawDataOnCanvas} from  '../utils/DrawData';

Array.prototype.swap = function (x, y) {
    var b = this[x];
    this[x] = this[y];
    this[y] = b;
    return this;
};

export default (ctx,chartData) => {
    let data = chartData;
    for (let i = 0; i < data.length - 1; i++) {
        setInterval(()=>{       
            var min = i;
            for (var j = i + 1; j < data.length; j++) {
                if (data[j] < data[min]) {
                    min = j;
                }
            }
            if (min !== i) {
                data.swap(i, min);
            }
            drawDataOnCanvas(data,ctx);
        },500*i)
    }
}