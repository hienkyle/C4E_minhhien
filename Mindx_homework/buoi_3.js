//4
var items=['Jean', 'T - Shirt', 'Socks']
shop: while(1){
    let task=prompt('Welcome to the shop administration page. What would you like to perform? (Please enter C, R, U, D or Q)');
    switch(task){
        case c: 
            let new_item=prompt('Please enter the name of the new item:');
            items.push(new_item);
            let len=item.length;
            break;
        case r:
            let len=item.length;
            for (let i=0; i<len; i++){
                console.log(i+1 +'. '+item[i]);
            }
            alert('Done!')
        case u:
            let position=parseInt(prompt('Please enter the position you want to add your item:'));
            let new_item=prompt('Please enter the name of the new item:');
            item.splice(i-1,0,new_item);
            alert('Done!')
            break;
        case d:
            let position=parseInt(prompt('Please enter the position of the item you want to delete::'));
            item.splice(position, 1);
            alert('Succesfully');
            break;
        case q:
            break shop;
        default:
            alert('This operation is not supported by our system! Please try again.');
    }
}

//5
let number_toAdd=prompt('Please enter the sequence of numbers you wanna add up, seperated by commas:');
let seq_num=number_toAdd.split(",");
let len=seq_num.length, s=0;
for (let i=0; i<len; i++){
    s+=seq_num[i];
}
alert('The sum of entered numbers is '+s);

//6
let number_toMin=prompt('Please enter the sequence of numbers you wanna compare, seperated by commas:');
let sq_min=number_toMin.split(',');
let min_num=Math.min.apply(null, sq_min)
alert('The smallest number is '+min_num);

//7
const numb_arr=[1, -12, 34, 429, -474, 45, 77];
let num_toIndex=parseInt(prompt('Please enter a number and we can start to search for it:'));
i=numb_arr.indexOf(num_toIndex);
if (a==-1){
    alert('The entered number does not include in our data.');
}
else{
    alert('Great. We have FOUND the number with the index of '+a);
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

