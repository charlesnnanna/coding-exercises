
function solution(numbers) {
    const arr = []

    for (let i = 0; i < numbers.length - 2; i++){
        if ((numbers[i] < numbers[i+1] && numbers[i+1] > numbers[i+2]) || (numbers[i] > numbers[i+1] && numbers[i+1] < numbers[i+2])) {
            arr.push(1)
        } else {
            arr.push(0)
        }
    }
    console.log(arr)
    return arr
}


const arr = [4, 1, 3, 0, 5]
solution(arr)