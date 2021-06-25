//4
var items=['Jean', 'T - Shirt', 'Socks']
let task=prompt('Welcome to the shop administration page. What would you like to perform? (Please enter C(reate), R(ead), U(update), D(elete) or Q(uit))');
switch(task){
    case 'c': 
        let new_item_c=prompt('Please enter the name of the new item:');
        items.push(new_item_c);
        let len_c=items.length;
        for (let i=0; i<len_c; i++){
            console.log(i+1 +'. '+items[i]);
        }
        alert('Done!')
        break;
    case 'r':
        let len_r=items.length;
        for (let i=0; i<len_r; i++){
            console.log(i+1 +'. '+items[i]);
        }
        alert('Done!')
        break;
    case 'u':
        let position_u=parseInt(prompt('Please enter the position you want to add your item:'));
        let new_item_u=prompt('Please enter the name of the new item:');
        items.splice(position_u-1,0,new_item_u);
        let len_u=items.length;
        for (let i=0; i<len_u; i++){
            console.log(i+1 +'. '+items[i]);
        }
        alert('Done!')
        break;
    case 'd':
        let position_d=parseInt(prompt('Please enter the position of the item you want to delete::'));
        items.splice(position_d, 1);
        alert('Succesfully');
        let len_d=items.length;
        for (let i=0; i<len_d; i++){
            console.log(i+1 +'. '+items[i]);
        }
        break;
    case 'q':
        break;
    default:
        alert('This operation is not supported by our system! Please try again.');
}




//5
let number_toAdd=prompt('Please enter the sequence of numbers you wanna add up, seperated by commas:');
let seq_num=number_toAdd.split(",");
let len=seq_num.length, s=0;
for (let i=0; i<len; i++){
    s+=parseInt(seq_num[i]);
}
alert('The sum of entered numbers is '+s);

//6
let number_toMin=prompt('Please enter the sequence of numbers you wanna compare, seperated by commas:');
let sq_min=number_toMin.split(',');
let min_num=Math.min.apply(null, sq_min)
alert('The smallest number is '+min_num);

// min=sq_num[0];
// len=sq_num.length;
// for(let i=0; i<len;i++){
//     if(min>sq_num[i]){
//         min=sq_num[i];
//     }
// }


//7
const numb_arr=[1, -12, 34, 429, -474, 45, 77];
let num_toIndex=parseInt(prompt('Please enter a number and we can start to search for it:'));
let i=numb_arr.indexOf(num_toIndex);
if (i==-1){
    alert('The entered number does not include in our data.');
}
else{
    alert('Great. We have FOUND the number with the index of '+i+'.');
}

//8
let sheep_size=[1,2,30,44,300,91,35,37,200,141];
console.log('Hi there. My name is Hien and these are my sheeps:');
console.log(...sheep_size);

function sheep_shave(sheep_size){
    let max_sheep=Math.max.apply(null, sheep_size);
    console.log("Now my biggest sheep has size "+max_sheep+", let's shave it.");

    let index=sheep_size.indexOf(max_sheep);
    sheep_size[index]=8;

    console.log('After sheaving, these are my sheeps:');
    console.log(...sheep_size);

}

sheep_shave(sheep_size);

for (let month=1; month<=4; month++){
    console.log('MONTH '+month);

    let len=sheep_size.length;
    for (let j=0; j<len; j++){
        sheep_size[j]+=50;
    }

    console.log('One month has passed, and these are my sheeps:');
    console.log(...sheep_size);

    sheep_shave(sheep_size);
}

let len=sheep_size.length, sum_sheep=0;
for (let i=0; i<len; i++){
    sum_sheep+=sheep_size[i];
}
console.log('My sheeps have the total size of '+s);
console.log('I should get '+ sum_sheep + '* $2 = ' +sum_sheep*2);

//10
let na_me=prompt('Enter a list of names, seperated by commas:')
let name_arr=na_me.split(',');
let len_name=name_arr.length;
for (let i=0; i<len_name; i++){
    name_arr[i]='<'+name_arr[i]+'>';
}
alert(na_me +'=>'+name_arr);

//11
let num=prompt('Enter a list of numbers, seperated by commas:');
let num_arr=num.split(',');
let len_num=num_arr.length;
let odd_arr=[];
for (let i=0; i<len_num; i++){
    if(num_arr[i]%2==1){
        odd_arr.push(num_arr[i]);
    }
}
console.log(num +'=>'+odd_arr);

