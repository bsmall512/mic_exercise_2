// Exercise #2: Look and Say
function lookAndSay(arr){
    return recurse(arr, [])
}
  
function recurse(arr, result){
    if(arr.length === 0){
        return result;
    } else {
        let curNum = arr.shift();
        let count = 1;
        for(let i = 0, len = arr.length; i<len; i++){
        if(curNum === arr[i]){
            count++;
        } else {
            break;
        }
        }
        result.push([count, curNum])
        return recurse(arr.splice(count - 1), result);
    }
}