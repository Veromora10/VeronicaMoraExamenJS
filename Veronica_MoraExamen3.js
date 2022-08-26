martiz_1 = [3, 2, 1, 1, 2, 3, 2, 3, 1]
martiz_2 = [1, 1, 2, 2, 1, 1, 1, 2, 1]

console.log("Arreglo 1: ", martiz_1 )
console.log("--------------------------")


console.log("Arreglo 2: ", martiz_2 )
console.log("--------------------------")


for (let i in martiz_1){
  console.log(martiz_1[i] + " + " + martiz_2[i] + " = " + (martiz_1[i]+martiz_2[i]))
  console.log(martiz_1[i] + " * " + martiz_2[i] + " = " + (martiz_1[i]*martiz_2[i]))
  console.log("--------------------------")
}
