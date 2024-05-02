// Learn Template literals: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
// Learn about Modal: https://getbootstrap.com/docs/5.0/components/modal/







function login(usern,password){
  
  let username = usern.toLowerCase();  
  if(username == '' | password== ''){
    alert("Enter valid Data");
  }
  else
  if(username =='admin' && password=='kongo'){
     alert(username +" Successfully logined");
   window.location.assign("admin.html");
 }
 else
   if(username.slice(-12) =='organization'){
     alert(username+" Successfully logined");
   window.location.assign("organization.html");
   }
 else{
   alert(username +" Successfully logined");
   window.location.assign("donor.html");
 }
  
 
}

function role (r){

  var modalWrapR=null;
  let roleDonor=r.toLowerCase();
  if(roleDonor=='doctor'){
    modalWrapR = document.createElement('div');
    modalWrapR.innerHTML =`
    <div class="modal fade" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header bg-light">
            <h5 class="modal-title">${roleDonor}</h5>
            <button type="button" class="btn-back" data-bs-dismiss="modal" aria-label="Back"></button>
          </div>
          <div class="modal-body">
          <form  >
          <!-- Email input -->
          <div data-mdb-input-init class="form-outline mb-4">
            <label class="form-label"  for="username3">Email address</label>
            <input type="email" id="username3"  class="form-control" required />
             
          </div>
            `;
  }
  else{
  if(roleDonor='teacher'){

    modalWrapR = document.createElement('div');
    modalWrapR.innerHTML =`
    <form>
      <div class="skills-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="skill" class="skills-control" id="exampleskills" aria-describedby="skillHelp" placeholder="Enter your skills">
        <small id="emailHelp" class="skills-text text-muted">what are you teaching.</small>
      </div>
      <div class="time-group">
        <label for="exampleInputPassword1">enter when you avaliable </label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
      </div>
      <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
            `;
  }
  else{
    modalWrapR = document.createElement('div');
    modalWrapR.innerHTML =`
    <div class="modal fade" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header bg-light">
            <h5 class="modal-title">${roleDonor}</h5>
            <button type="button" class="btn-back" data-bs-dismiss="modal" aria-label="Back"></button>
          </div>
            `;

  }
}
}


var modalWrap = null;
/**
 * 
 * @param {string} title 
 * @param {string} description content of modal body 
 * @param {string} yesBtnLabel label of Yes button 
 * @param {string} noBtnLabel label of No button 
 * @param {function} callback callback function when click Yes button
 */


const showModal = (title, yesBtnLabel = 'Login', noBtnLabel = 'Cancel') => {
  if (modalWrap !== null) {
    modalWrap.remove();
  }

  modalWrap = document.createElement('div');
  modalWrap.innerHTML = `
    <div class="modal fade" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header bg-light">
            <h5 class="modal-title">${title}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
          <form  >
          <!-- Email input -->
          <div data-mdb-input-init class="form-outline mb-4">
            <label class="form-label"  for="username3">Email address</label>
            <input type="email" id="username3"  class="form-control" required />
             
          </div>
        
          <!-- password input -->
          <div data-mdb-input-init class="form-outline mb-4">
            <label class="form-label" for="password3">Password</label>
            <input type="password" id="password3" class="form-control" required />
             
          </div>
          
          </form>
          </div>
          <div class="modal-footer bg-light">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">${noBtnLabel}</button>
            <button type="button" class="btn btn-primary modal-success-btn" >${yesBtnLabel}</button>
          </div>
        </div>
      </div>
    </div>
  `;

  modalWrap.querySelector('.modal-success-btn').onclick = ()=> login(document.getElementById('username3').value,document.getElementById('password3').value);

  document.body.append(modalWrap);

  var modal = new bootstrap.Modal(modalWrap.querySelector('.modal'));
  modal.show();
}