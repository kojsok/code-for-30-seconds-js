
function arrayDiff332(arr1: Array<number>, arr2: Array<number>): Array<number> {
    const result: Array<number> = [];
    for (let i = 0; i < arr1.length; i++) {
        let found = false;
        for (let j = 0; j < arr2.length; j++) {
            if(arr1[i] === arr2[j] ) {
                found = true;
                break;
            }
        }

        if(!found && arr1.length > 0 && typeof arr1[i] === 'number'){
            console.log(typeof arr1[i]);
            // result.push(arr1[i] as number); 
            const el = arr1[i];
            if(el){
            result.push(el)
            }

        }
    }
    return result;
}

console.log(arrayDiff332([1, 2, 3], [1])); //[2,3]
