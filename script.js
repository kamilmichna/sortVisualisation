let data = [];
console.log(data)
const canvas_bubble = document.querySelector('#canvas_bubble');
const ctx = canvas_bubble.getContext('2d');
const fillData = () => {
    data = [...Array(100)].map(() => Math.floor(Math.random() * 100));
}
const displayDataOnCanvas = (data) => {
    ctx.clearRect(0,0,800,400)
    ctx.fillStyle ='white';
    for (let i=0; i<data.length; i++){
        ctx.fillRect(8*i,400-data[i],8,data[i])
    }
}

const bubbleSort = (data) => {
    let changed;
    let temp;
    for (let x = 0; x < data.length; x++){
        setInterval(()=>{
            changed = false;
            for (let i = 0; i < data.length; i++){
                if (data[i-1] > data[i]){
                    temp = data[i];
                    data[i] = data[i-1];
                    data[i-1] = temp;
                    changed = true;
                }
            }
            displayDataOnCanvas(data);
        },2000*x+100)

    }
    console.log(data)
}
fillData();
displayDataOnCanvas(data);
document.querySelector('#bubble_sort_start').addEventListener('click',()=>{
    bubbleSort(data);
})

document.querySelector('.random').addEventListener('click',()=>{
    fillData();
    displayDataOnCanvas(data);
})

