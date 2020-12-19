let product1=document.getElementById("pro1");
let product2=document.getElementById("pro2");
let product3=document.getElementById("pro3");

let filter=document.getElementById('filter');
let remove_btn=document.getElementById("remove_btn");

let products=document.querySelector('ul');
product1.addEventListener('click',addProduct1);
product2.addEventListener('click',addProduct2);
product3.addEventListener('click',addProduct3);
products.addEventListener('click',removeProduct);
remove_btn.addEventListener('click',clearAll);
filter.addEventListener('keyup',Filter);
document.addEventListener("DOMContentLoaded",getProducts);

function addProduct1(e)
{
    let list=document.getElementById('fp').innerText;
    let li=document.createElement('li');
    li.appendChild(document.createTextNode(""+list));
    let cross=document.createElement('a');
    cross.setAttribute('href','#');
    cross.setAttribute('id','cross');
    cross.innerHTML=' x';
    cross.style.color="red";
    li.appendChild(cross);
   document.querySelector('ul').appendChild(li);

storeProductsInLocalStorage(list);
   
    e.preventDefault();
    
}
function addProduct2(e){
    {
        let list=document.getElementById('sp').innerText;
        let li=document.createElement('li');
        li.appendChild(document.createTextNode(""+list));
        let cross=document.createElement('a');
        cross.setAttribute('href','#');
        cross.setAttribute('id','cross');
        cross.innerHTML=' x';
        cross.style.color="red";
        li.appendChild(cross);
       document.querySelector('ul').appendChild(li);
       storeProductsInLocalStorage(list);
    
       
        e.preventDefault();
        
    }
}
function addProduct3(e){
    {
        let list=document.getElementById('tp').innerText;
        let li=document.createElement('li');
        li.appendChild(document.createTextNode(""+list));
        let cross=document.createElement('a');
        cross.setAttribute('href','#');
        cross.setAttribute('id','cross');
        cross.innerHTML=' x';
        cross.style.color="red";
        li.appendChild(cross);
       document.querySelector('ul').appendChild(li);
    
    
       storeProductsInLocalStorage(list);
        e.preventDefault();
        
    }
}
function removeProduct(e){
    if(e.target.hasAttribute('href'))
    {
        if(confirm('Are you sure?')){
            let ele=e.target.parentElement;
            ele.remove();
            removeFromLS(ele);
        }
        
    }

    e.preventDefault();
}
function clearAll(e){
    if(confirm('Are you sure?')){
        products.innerHTML=' ';
       localStorage.clear();
    }



    e.preventDefault();
}
function Filter(e){
   
        let text = e.target.value.toLowerCase();
    
        document.querySelectorAll('li').forEach(products => {
            let item = products.firstChild.textContent;
            if (item.toLowerCase().indexOf(text) != -1) {
                products.style.display = 'block';
            } else {
                products.style.display = 'none';
            }
        });
    
    
    e.preventDefault();
}
function storeProductsInLocalStorage(i)
{
    let products;
    if(localStorage.getItem('products')===null)
    {
        products=[];
    }
    else{
        products=JSON.parse(localStorage.getItem('products'));
    }
  products.push(i);
  localStorage.setItem('products',JSON.stringify(products));

}
function getProducts(){
    let products;
    if(localStorage.getItem('products')===null)
    {
        products=[];
    }
    else{
        products=JSON.parse(localStorage.getItem('products'));
    }
    products.forEach(x=>{
        let li=document.createElement('li');
        li.appendChild(document.createTextNode(""+x));
        let cross=document.createElement('a');
        cross.setAttribute('href','#');
        cross.setAttribute('id','cross');
        cross.innerHTML=' x';
        cross.style.color="red";
        li.appendChild(cross);
       document.querySelector('ul').appendChild(li);
    });
}
function removeFromLS(LSItem){
    let products;
    if(localStorage.getItem('products')===null)
    {
        products=[];
    }
    else{
        products=JSON.parse(localStorage.getItem('products'));
    }
    let li = LSItem;
    li.removeChild(li.lastChild);

    products.forEach((product, index) =>{
        if(li.textContent.trim() === product) {
            products.splice(index, 1);
        }
    });

    localStorage.setItem('products', JSON.stringify(products));
}