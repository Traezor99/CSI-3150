const home = {
    size: 1000,
    address: "123 Main St.",
    city: "New York",
    state: "New York",
    zip: 48042,
};

const { size } = home;
console.log(size);

const array = [1, 2, 3, 4, 5];
array.push(6);
array.pop();
array.unshift(0);

array.forEach((x) => console.log(x));
const evens = array.filter((x) => x % 2 == 0);
const doubled = array.map((x) => x * 2);
