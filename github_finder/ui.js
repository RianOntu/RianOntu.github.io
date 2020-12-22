class UI{
    constructor(){

    }
   showProfile(user,inp){
    this.clearAlert();
    
    inp.value='';
        this.profile=document.querySelector('#profile');
          this.profile.innerHTML=`
          <div class="card card-body mb-3">
          <div class="row">
            <div class="col-md-3">
              <img class="img-fluid mb-2" src="${user.avatar_url}">
              <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
            </div>
            <div class="col-md-9">
              <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
              <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
              <span class="badge badge-success">Followers: ${user.followers}</span>
              <span class="badge badge-info mt-2">Following: ${user.following}</span>
              <br><br>
              <ul class="list-group">
                <li class="list-group-item">Company: ${user.company}</li>
                <li class="list-group-item">Website/Blog: ${user.blog}</li>
                <li class="list-group-item">Location: ${user.location}</li>
                <li class="list-group-item">Member Since: ${user.created_at}</li>
              </ul>
            </div>
          </div>
        </div>
          `;
          
    }

 showAlert(message,className){
   this.clearAlert();
   this.clearProfile();

   let div=document.createElement('div');
   div.className=className;
   let container=document.querySelector('.searchContainer');
   let search=document.querySelector('.search');
   div.appendChild(document.createTextNode(message));
   container.insertBefore(div,search);

 }
 clearAlert(){
   let current_alert=document.querySelector('.alert');
   if(current_alert){
     current_alert.remove();
   }
 }
 clearProfile(){
  if(this.profile.value!=" "){
     this.profile.innerHTML="";
     
  }

}


}