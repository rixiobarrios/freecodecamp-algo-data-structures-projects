let index = 4;

changeIndex(index);
changeIndex(index);

if (index > 5) {
    console.log('Index bigger than 5');
} else {
    console.log('Index less than or equal to 5');
}

function changeIndex(index) {
    return index + 1;
}
