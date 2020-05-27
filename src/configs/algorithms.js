import bubbleSort from '../sortStrategies/bubbleSort'
import selectionSort from '../sortStrategies/selectionSort';
export default  [{
    name: 'Bubble Sort',
    performance: 'O(n^2)',
    sortingFunction: bubbleSort
},
{
    name: 'Selection Sort',
    performance: 'O(n^2)',
    sortingFunction: selectionSort
}]