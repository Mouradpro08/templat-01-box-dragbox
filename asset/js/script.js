//Interaction: alert, prompt, confirm
// Interaction prompt **** result = prompt(title, [default]);
 /*let result = prompt('hi', [100]);
 alert(`good luck ${result} mi hart `);
*/
//Interaction confirm*** result = confirm(question);
/*result = confirm('you are');

alert(result);


// التفريع الشرطي: if, '?'***let result = condition ? value1 : value2;
*/
let btn = document.getElementById('btn');
let inp = document.getElementById('inp');
let boxs = document.querySelectorAll('.box');
let drag = null;
btn.onclick = function (){
    if ( inp.value != ''){
        boxs[0].innerHTML += `
        <p class="item" draggable="true"> ${inp.value}</p>
        `
       inp.value =''; 
      
    }dragItem();
}



function dragItem(){
    let items = document.querySelectorAll('.item');
    items.forEach(item=>{
        item.addEventListener('dragstart', function(){
           drag = item;
           item.style.opacity = '0.5';
            
            //console.log('darg start')

    })

        item.addEventListener('dragend', function(){
          drag = null;
          item.style.opacity = '1';
            //console.log('darg end')
        })
        boxs.forEach(box=>{
            box.addEventListener('dragover', function (e){
                e.preventDefault()
               this.style.background = '#090';
               this.style.color = '#fff';
    
                // console.log('drag over');
            })
            box.addEventListener('dragleave', function (){
                this.style.background = '#fff';
                this.style.color = '#000';
        })

        box.addEventListener('drop', function (){

            box.append(drag);


})
        })



        
    })
    }








