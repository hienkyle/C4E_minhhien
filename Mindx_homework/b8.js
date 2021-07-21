const item=['Backpack', "MiBand watch",'Ring'];
var add=document.getElementById('add');
var ip=document.getElementById('ip');


function display(){
    let item_list=document.getElementById('item_list');
    let len=item.length;
    strHTML=''
    for (let i=0;i<len;i++){
        strHTML+="<li><span id='"+(i+1)+"'>"+item[i]+"</span> <button>Remove</Button> </li> ";
    }
    item_list.innerHTML=strHTML;
}
display();

add.onclick=function(){
    let new_item=ip.value;
    item.push(new_item);
    display();
    ip.value=''
}

// btn[1].onclick=function(){
//     let rm_item_html=document.getElementById('list1');
//     let rm_item_index=item.indexOf(rm_item_html.innerHTML);
//     console.log(rm_item_index);
//     item.splice(rm_item_index,1)
//     console.log(item)
// }

var btn=document.getElementsByTagName('button');
let len=btn.length;
for(let i=1;i<len;i++){
    btn[i].onclick=function(){
        let id=i.toString();
        let rm_item_html=document.getElementById(id);
        let rm_item_index=item.indexOf(rm_item_html.innerHTML);
        item.splice(rm_item_index,1);
        display();
    };
}




