
const btn1 = document.querySelector('.light'),
      btn2 = document.querySelector('.dark'),
      body = document.querySelector('body')

    function changetolight(){
    body.style.background = '#ffffff'
    body.style.color = 'green'
    }

    function changetodark(){
    body.style.background = 'black'
    body.style.color = '#ffffff'
    }

btn1.addEventListener('click', changetolight)
btn2.addEventListener('click', changetodark)

/*--------------------------- task ----------------------*/

function netsallery(sallery , tax){
   let net = sallery - (sallery * tax);
   console.log(net)
}
netsallery(1000 , 0.1)

/*--------------------------- task2 ----------------------*/
let students= ['Ahmed','Sara','Moheb']

students.push('Mohamed')
students.unshift('gamal')
students.pop()
students.shift()
console.table(students)

/*--------------------------- task3 ----------------------*/
let names= ['Ahmed','Sara','Moheb','Ahmed','Sara','Moheb']
    for(let i=0; i<names.length; i++){
        console.log(names[i])
    }

/*--------------------------- task4 ----------------------*/
let sallery= [10000,20000,30000],
    doubledsallery=[]

    for(let s of sallery){
        doubledsallery.push(2*s)
    }





