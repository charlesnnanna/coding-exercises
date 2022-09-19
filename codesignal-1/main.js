function countingSort(arr) {
    // Write your code here
    const frequencyArr = []
    let counter
    let index
    let checkArr = []
    let prevIndex = 0
    for (let i = 0; i < 100; i++){
        counter = 0
        index = i
        checkArr = arr.slice(0, i)
        if (checkArr.indexOf(arr[i]) !== -1){
            prevIndex = checkArr.indexOf(arr[i])
            frequencyArr.push[frequencyArr[prevIndex]]
            continue;
        }
        while (index !== -1){
            index = arr.indexOf(arr[i], index + 1)
            if (index !== -1){
                counter++
            }
        } 
        frequencyArr.push(counter)
    }
    return frequencyArr
}
