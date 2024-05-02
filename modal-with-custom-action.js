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



var modalWrap = null;
var modalWrap1 = null;

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

const showReg = (title, yesBtnLabel = 'Register', noBtnLabel = 'Cancel') => {
  if (modalWrap1 !== null) {
    modalWrap1.remove();
  }

  modalWrap1 = document.createElement('div');
  modalWrap1.innerHTML = `
    <div class="modal fade" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header bg-light">
            <h5 class="modal-title">${title}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
          <form  >
            <!-- First Name input -->
            <div data-mdb-input-init class="form-outline mb-4">
              <label class="form-label"  for="username3">First Name</label>
              <input type="email" id="username3" class="form-control" required />
            </div>
            <div data-mdb-input-init class="form-outline mb-4">
              <label class="form-label" for="password3">Last Name</label>
              <input type="password" id="password3" class="form-control" required />
            </div>
          
            <div class="btn-group">
              <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li><a class="dropdown-item" href="#">Male</a></li>
                <li><a class="dropdown-item" href="#">Female</a></li>
              </ul>
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

  var dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'))
  var dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
    return new bootstrap.Dropdown(dropdownToggleEl)
  })
  modalWrap1.querySelector('.modal-success-btn').onclick = ()=> login(document.getElementById('username3').value,document.getElementById('password3').value);

  document.body.append(modalWrap1);

  var modal1 = new bootstrap.Modal(modalWrap1.querySelector('.modal'));
  modal1.show();

}