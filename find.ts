let input = [200,100,102,101,300,103,201,202]
let sort = input.sort((a, b) => a - b)
let output = []
let last_number = 0;
let long = 1;
let long_memory = 0;
let index_memory = 0;
for (let i = 0; i < sort.length; i++) {
    if (i == 0) {
        last_number = sort[i]
    }
    if (i > 0) {
        if (sort[i] == last_number + 1) {
            last_number = sort[i]
            long++
            if (long > long_memory) {
                long_memory = long
                index_memory = i
            }
        } else {
            last_number = sort[i]
            long = 1
        }
    }
}

for (let i = index_memory; i > index_memory - long_memory; i--) {
    output.push(sort[i])
}

console.log(output)
console.log(output.reverse())