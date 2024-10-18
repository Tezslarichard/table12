let array = [
    {
        firstname1: 'Géza',
        firstname2: 'Ferenc',
        lastname: 'Kocsis',
        married: true,
        pet: 'kutya'
    },
    {
        firstname1: 'Mária',
        firstname2: 'Júlia',
        lastname: 'Horváth',
        married: false,
        pet: 'macska'
    },
    {
        firstname1: 'Ferenc',
        lastname: 'Balogh',
        married: false,
        pet: 'teknős'
    },
    {
        firstname1: 'Gábor',
        firstname2: 'Attila',
        lastname: 'Horváth',
        married: true,
        pet: 'macska'
    },
]

 
const table = document.createElement('table');
document.body.appendChild(table);
 
const thead = document.createElement('thead');
table.appendChild(thead);
 
const tr = document.createElement('tr');
thead.appendChild(tr);
 
//th_firstname.colSpan=2;
 
const tbody = document.createElement('tbody');
table.appendChild(tbody);

createTableCell("th",'Vezetéknév',tr);
createTableCell("th",'Keresztnév',tr);
createTableCell("th",'Házas',tr);
createTableCell("th",'Állat',tr);


function validatefields(lastnamehtml,firstname1html,pethtml){
    let result=true
   if(lastnamehtml.value === ""){
    const apa = lastnamehtml.parentElement;
 
    const errorka=apa.querySelector(`.error`);
    errorka.innerHTML="Kötelező!";
     result=false;
   }
   if(firstname1html.value === ""){
    const apa = firstname1html.parentElement;
 
    const errorka=apa.querySelector(".error");
    errorka.innerHTML="Kötelező!";
     result=false;
   }
   if(pethtml.value === ""){
    const apa = pethtml.parentElement;
 
    const errorka=apa.querySelector(".error");
    errorka.innerHTML="Kötelező!";
     result=false;
   }
   return result;

}
/**
 * 
 * @param {'td' | 'th'} tagName 
 * @param {string} innerHTML 
 * @param {HTMLTableRowElement} parentElement 
 */
function createTableCell(tagName, innerHTML, parentElement){
    const element = document.createElement(tagName);
    element.innerHTML = innerHTML;
    parentElement.appendChild(element);
}

const form = document.getElementById("form");
form.addEventListener("submit", function(e){
    e.preventDefault();
    const lastname =document.getElementById("lastname");
    const firstname1 =document.getElementById("firstname1");
    const firstname2 =document.getElementById("firstname2");
    const married =document.getElementById("married");
    const pet =document.getElementById("pet");

    const lastnamevalue=lastname.value;
    const firstname1value=firstname1.value;
    let firstname2value=firstname2.value;
    const marriedvalue=married.checked;
    const petvalue=pet.value;

    if(validatefields(lastname, firstname1, pet)){
        if (firstname2value===""){
            firstname2value=undefined;
        }
        const newperson={
            firstname1: firstname1value,
            firstname2: firstname2value,
            lastname: lastnamevalue,
            married: marriedvalue,
            pet: petvalue
        }
    
        array.push(newperson);
        console.log(array);
        rendertable();
    }
    
})
rendertable();
function rendertable(){
    tbody.innerHTML="";
    for(const pers of array){
        const tbody_tr = document.createElement('tr');
        tbody.appendChild(tbody_tr);
     
        const tbody_td_lastname = document.createElement('td');
        tbody_tr.appendChild(tbody_td_lastname);
       
        tbody_td_lastname.innerHTML = pers.lastname;
     
        const tbody_td_firstname = document.createElement('td');
        tbody_tr.appendChild(tbody_td_firstname);
       
        tbody_td_firstname.innerHTML = pers.firstname1;
    
  

        if(pers.firstname2 === undefined){
            tbody_td_firstname.colSpan = 2;
        }
        else{
            const tbody_td_firstname = document.createElement('td');
            tbody_tr.appendChild(tbody_td_firstname);
           
            tbody_td_firstname.innerHTML = pers.firstname2;
        }
        tbody_tr.addEventListener('click', function(e){
            //console.log('clicked');
            const selected = tbody.querySelector('.selected');
            e.currentTarget.classList.add('selected');
            
    
            if (selected != undefined){
                selected.classList.remove('selected');
            }
              
        })
    
        const td_married= document.createElement('td');
        tbody_tr.appendChild(td_married);
        td_married.innerHTML = pers.married;
    
        const td_pet= document.createElement('td');
        tbody_tr.appendChild(td_pet);
        td_pet.innerHTML = pers.pet;
    
        if(pers.married===true){
            td_married.innerHTML="Igen"
        }
        else{
            td_married.innerHTML="Nem"
        }
     

     
    }
}