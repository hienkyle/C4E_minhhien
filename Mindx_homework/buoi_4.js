//4
var dev_dict={
    debug: 'The process of figuring out why your program has a certain error and how to fix it.',
    done: 'When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed).',
    defect: "The formal word for ‘error’.",
    pm: 'The short version of Project Manager, the person in charge of the final result of a project.',
    ui_ux: 'UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels.'
}
alert('Hi there, this is the dev dictionary.');
var dev_key=prompt('Enter a keyword:');
var explanation=dev_dict.dev_key;
if (explanation=='undefined'){
    explanation=prompt('We cannot find the word: '+dev_key+', please leave your explanation:');
    while(explanation=='undefined'){
        explanation=prompt('Please leave your explanation:');
    }
    alert('Done!');
    var dev_key=prompt('Enter a keyword:');
    var explanation=dev_dict.dev_key;
    console.log(explanation);
}
else{
    console.log(explanation);
}

//5
var products=[
    {
        name: 'Xiaomi portable charger 20000mah',
        brand: 'Xiaomi',
        price: 428,
        color: 'White',
        category: 'Charger',
        provider: 'phukienzero dientucc',
    },
    {
        name: 'VSmart Active 1',
        brand: 'VSmart',
        price: 5487,
        color: 'Black',
        category: 'Phone',
        provider: 'tgdd ddghn vhstore',
    },
    {
        name: 'IPhone X',
        brand: 'Apple',
        price: 21490,
        color: 'Gray',
        category: 'Phone',
        provider: 'tgdd',
    },
    {
        name: 'Samsung Galaxy A9',
        brand: 'Samsung',
        price: 8490,
        color: 'Blue',
        category: 'Phone',
        provider: 'tgdd',
    }
];
var len=products.length;
for(let i=0; i<len; i++){
    console.log('-----------');
    console.log('#'+(i+1)+'. Name: ' +products[i].name);
    console.log('    Price: '+products[i].price);
}

let position=parseInt(prompt("Enter product's position"));
console.log(products[position-1]);

let cate=prompt('Enter your category:');
for(i=0; i<len; i++){
    if(products[i].category==cate){
        console.log('-----------');
        console.log('#'+(i+1)+'. Name: ' +products[i].name);
        console.log('    Price: '+products[i].price);
    }
    else{
        console.log('Sorry, we do not have that kind of product.');
    }
}

for(i=0; i<len; i++){
    console.log('-----------');
    console.log('#'+(i+1)+'. Name: ' +products[i].name);
    console.log('    Price: '+products[i].price);
    console.log('    Provider: '+products[i].provider);
}

let provi=prompt('Enter your desired provider:');
for(i=0; i<len; i++){
    if(products[i].provider.includes(provi)){
        console.log('-----------');
        console.log('#'+(i+1)+'. Name: ' +products[i].name);
        console.log('    Price: '+products[i].price);
        console.log('    Provider: '+products[i].provider);
    }
    else{
        console.log('Sorry, we do not have that any products from that provider.');
    }
}

//6
console.log('Hi there, here is your task:');
var task=[
    {
        name: 'HTML',
        status: false,
    },
    {
        name: 'CSS',
        status: false,
    },
    {
        name: 'Basics of JS',
        status: false,
    },
    {
        name:'Node Package Manager (npm)',
        status:false,
    },
    {
        name: 'Git',
        status: false,
    }
]
function print_course(task){
    let len=task.length;
    for(i=0; i<len; i++){
        console.log((i+1)+', ['+(task[i].status? x:null)+'] '+task[i].name);
    }
}
let command=prompt('What would you like to do (New, Delete, Update, Complete):');
switch(command){
    case 'new':
        let new_task=prompt('Enter new task:');
        task.push({
            name: new_task,
            status: false,
        });
        print_course(task);
        break;
    case 'update':
        let position=parseInt(prompt('Enter position:'));
        let new_title=prompt('Enter new title:');
        task[position-1].name=new_title;
        print_course(task);
        break;
    case 'complete':
        let position=parseInt(prompt('Enter position:'));
        task[position-1].status=!task[position-1].status;
        print_course(task);
        break;
    case 'delete':
        let position=parseInt(prompt('Enter position:'));
        task.splice(position-1,1);
        print_course(task);
        break;
    default:
        console.log('We do not support that command!');
}