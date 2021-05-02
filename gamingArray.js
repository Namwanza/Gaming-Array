*
 * Complete the 'gamingArray' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function gamingArray(arr) {
    // Write your code here
    let counter = 1;
    let maxInt = arr[0];
    if(arr.length === 1) {
        return ('BOB');
    }

    for (let i=0; i<arr.length; i++) {
    if(arr[i] > maxInt) {
        maxInt = arr[i];
        counter++;
    }
    }

    if(counter % 2 === 0) {
        return ('ANDY');
    } else {
        return ('BOB')
    }
}