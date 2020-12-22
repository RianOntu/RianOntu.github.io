let inp=document.querySelector('#searchUser'); 
let srchBtn=document.querySelector('#searchBtn') ;
let clearAll=document.querySelector('#ca');
let ui=new UI();
clearAll.addEventListener('click',()=>{
    ui.profile.innerHTML="";
});




srchBtn.addEventListener('click',(e)=>{
    let user_inp=inp.value;
    if(user_inp!=' '){
        fetch(`https://api.github.com/users/${user_inp}`).then(result=>
            result.json()
        ).then(data=>{
         
            if(data.message=='Not Found')
            {
               
          ui.showAlert('User Not Found !','alert alert-danger');
          
            }
            else{
                ui.showProfile(data,inp);
            
            }
        });
    }
else{
    ui.showAlert('Input Required !','alert alert-danger');
}
 
});