let arrayNeww = [];
for (let i = 0; i < 21; i++) {
    arrayNeww.push(i);
}
console.log(arrayNeww)
let new_arr = arrayNeww.map(function(el) {
    // return el.name;
    if (el == 2 || el == 3) {
        return el
    } else {
        if (el % 2 > 0 && el % 3 > 0) {
            if (el == 1) {
                console.log('Not good number)))');
            } else {
                return el;
            }
        }
    }

});
console.log(new_arr)

let end = new_arr.filter(function(el, i, arr) {
    // return el.length > 4;
    return typeof el !== 'undefined';
});
console.log(end);