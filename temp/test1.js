// const x = 1
// let y = 5

// console.log(x, y)   // 1 5 are printed
// y += 10
// console.log(x, y)   // 1 15 are printed
// y = 'sometext'
// console.log(x, y)   // 1 sometext are printed
// // x = 4               // causes an error

function flab(x) {return x + 1.5} 

let z = [2,3,4,5.5]
z.push(1.234)
// z.push('blah')
// let zz = z.forEach(v => {return v+1.5})
// let zz = z.map(v => {return v+1.5})
let zz = z.map(flab)
let zzz = z.map(v => '<p>' + v + '</p>')

let [a, b, ...c] = [1, 2, 3, 4, 5, 6, 7, 8]


