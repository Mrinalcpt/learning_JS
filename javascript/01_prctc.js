const names = ['John', 'Jane', 'Jack', 'Jill', 'Jack'];

const new_names = ['Ram', 'Shyam', 'Jitu', 'Janki', 'Dhanu'];

// names.push(new_names);
// console.log(names);

const name1= names.concat(new_names);
console.log(name1);

const name2= [...names,...new_names];
