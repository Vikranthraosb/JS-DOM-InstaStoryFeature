var arr=[
    {
        dp:"https://images.unsplash.com/photo-1505968409348-bd000797c92e?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2071",story:"https://images.unsplash.com/photo-1628076674561-6e9a0b56f2c3?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D&w=500"
    },
    {
        dp:"https://images.unsplash.com/photo-1512236393941-3d6da97e56bc?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&w=500",story:"https://images.unsplash.com/photo-1586810724476-c294fb7ac01b?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D&w=500"
    },
   { dp:"https://images.unsplash.com/photo-1532170579297-281918c8ae72?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D&w=500",story:"https://images.unsplash.com/photo-1578645635737-6a88e706e0f1?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D&w=500"},
   {dp:"https://images.unsplash.com/photo-1582015752624-e8b1c75e3711?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZWwlMjBtYWxlfGVufDB8fDB8fHww&w=500",
story:"https://images.unsplash.com/photo-1487147264018-f937fba0c817?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG90cmFpdCUyMG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D&w=500"
   },
   {
    dp:"https://images.unsplash.com/photo-1517245986441-76374adeb316?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1vZGVsJTIwbWFsZXxlbnwwfHwwfHx8MA%3D%3D&w=500",
    story:"https://images.unsplash.com/photo-1536231450280-744420a90f55?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBvdHJhaXQlMjBuYXR1cmV8ZW58MHx8MHx8fDA%3D&w=500"
   },

]


var clutter=""
arr.forEach(function(dets, index){ 
   clutter +=` <div class="story">
                <img id="${index}"src="${dets.dp}">
                   </div>`
})
// second parameter in function"index" is a variable that reperesents which index refering. for example for first iteration it is 1, for second it is 2 etc
document.querySelector(".storys").innerHTML=clutter

var abc=document.querySelector(".storys")
abc.addEventListener("click",function(dets){
   var val= arr[dets.target.id].story
   document.querySelector("#fullscreen").style.display= "block"
   document.querySelector("#fullscreen").style.backgroundImage = `url(${val})`
   setInterval(function(){
    document.querySelector("#fullscreen").style.display= "none"
   },3000)
})