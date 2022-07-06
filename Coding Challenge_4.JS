'use strict';

// let cnt = 1;
// const data = function(input){
//     const splitdata = input.split('_');
//     const [firstletter, secondletter] = splitdata;
//     const first = firstletter[0].toLowerCase() + firstletter.slice(1);
//     const second = secondletter[0].toUpperCase() + secondletter.slice(1).toLowerCase();
//     // const final = first + second;  // can be done by this way
//     const final = [first, second].join('');   // or can be done by join method also
//     console.log(`${final.trim().padEnd(20)} ${'✅'.repeat(cnt)}`);
//     cnt++;
// }

// data('underscore_case');
// data(' first_name    ');
// data('Some_Variable  ');
// data('  calculate_AGE');
// data('delayed_departure');

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function(){
    const input = document.querySelector('textarea').value;
    const rows = input.split('\n');

    for(const [i, row] of rows.entries()){
        const [first, second] = row.toLowerCase().trim().split('_');
        const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`;
        console.log(`${output.padEnd(20)} ${'✅'.repeat(i + 1)}`);
    }
})