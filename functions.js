/**
 * 
 * @param {'td' | 'th'} tagName 
 * @param {string} innerHTML 
 * @param {HTMLTableRowElement} parentElement 
 * @returns {HTMLTableCellElement}
 */
function createTableCell(tagName, innerHTML, parentElement){
    const element = document.createElement(tagName);
    element.innerHTML = innerHTML;
    parentElement.appendChild(element);
    return element
}
/**
 * 
 * @param {*} tag 
 * @param {*} id 
 * @param {*} parentElement 
 */
function createHTMLElement(tag, id, parentElement){
        const htmlelement = document.createElement(tag);
        htmlelement.id = id;
        parentElement.appendChild(htmlelement);
        
}

function createHTMLElementWithParentId(tag, id ,parentid){
  const parentelemnt = document.getElementById(parentid);
  if(parentelemnt != undefined){
    createHTMLElement(tag, id,parentelemnt);
  }
}


function createTableHeaderCell(){
    const tabelheadrow = document.getElementById("persontr")
    createTableCell("th",'Vezetéknév',tabelheadrow);
    const keresztnev_createtablecell= createTableCell("th",'Keresztnév',tabelheadrow);
    createTableCell("th",'Házas',tabelheadrow);
    createTableCell("th",'Állat',tabelheadrow);

    keresztnev_createtablecell.colSpan=2;


}

function rendertable(personarray){
    const tbody =document.getElementById("persontbody")
    tbody.innerHTML = ""
    for(const pers of personarray){
        const tbody_tr = document.createElement('tr');
        tbody.appendChild(tbody_tr);


        createTableCell("td",pers.lastname,tbody_tr);
        const firstname1_createtablecell= createTableCell("td",pers.firstname1,tbody_tr);

        if(pers.firstname2 === undefined){
            firstname1_createtablecell.colSpan = 2;
        }
        else{
            createTableCell("td",pers.firstname2,tbody_tr);
        }



        
        tbody_tr.addEventListener('click', function(e){
            //console.log('clicked');
            const selected = tbody.querySelector('.selected');
            e.currentTarget.classList.add('selected');
            
    
            if (selected != undefined){
                selected.classList.remove('selected');
            }
              
        })
    
        createTableCell("td", pers.married ? "Igen" : "Nem", tbody_tr );
        createTableCell("td", pers.pet, tbody_tr);

     

     
    }
}