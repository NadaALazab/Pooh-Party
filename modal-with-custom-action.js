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

  var dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'))
    var dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
        return new bootstrap.Dropdown(dropdownToggleEl)
    })
  

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
              <input type="email" id="password3" class="form-control" required />
            </div>
          
            <div class="dropdown mb-4">
  <label for="gender">Gender:</label>
  <select name="gender" id="gender" class="form-select">
    <option value="male">Male</option>
    <option value="female">Female</option>
  </select>
</div>

<div class="dropdown mb-4">
  <label for="occupation">Occupation:</label>
  <select name="occupation" id="occupation" class="form-select" onchange="navigate()">
    <option value="regular_donor">Regular Donor</option>
    <option value="doctor">Doctor</option>
    <option value="teacher">Teacher</option>
  </select>
</div>
<!-- Hidden File Input -->
<div id="documentUpload" class="d-none">
  <label for="document">Upload Document:</label>
  <input type="file" id="document" name="document" accept=".pdf,.doc,.docx">
</div>

<script>
  function navigate() {
    var selectElement = document.getElementById("occupation");
    var selectedOption = selectElement.value;

    if (selectedOption === "regular_donor") {
      window.location.href = "regular_donor.html";
    } else if (selectedOption === "doctor") {
      window.location.href = "doctor.html";
    } else if (selectedOption === "teacher") {
      window.location.href = "teacher.html";
    }
  }
</script>

<div class="form-outline mb-4">
  <label class="form-label" for="email">Email</label>
  <input type="email" id="email" class="form-control" required />
</div>

<div class="form-outline mb-4">
  <label class="form-label" for="contact">Contact Number</label>
  <input type="text" id="contact" class="form-control" required />
</div>

<div class="form-outline mb-4">
  <label class="form-label" for="password">Password</label>
  <input type="password" id="password" class="form-control" required />
</div>

<div class="form-outline mb-4">
  <label class="form-label" for="address">Address</label>
  <input type="text" id="address" class="form-control" required />
</div>

<div class="form-outline mb-4">
  <label class="form-label" for="area">Area</label>
  <input type="text" id="area" class="form-control" required />
</div>

<div class="form-outline mb-4">
  <label class="form-label" for="governorate">Governorate</label>
  <input type="text" id="governorate" class="form-control" required />
</div>
<div id="teacherFields" class="d-none">
 <div class="form-group">
    <label for="subjects">Subjects:</label>
    <select class="form-control" id="subjects" multiple>
      <option value="math">Math</option>
      <option value="science">Science</option>
      <option value="history">History</option>
      <!-- Add more subjects as needed -->
    </select>
 </div>

 <div class="form-group">
    <label for="proBonoClasses">Number of Pro-Bono Classes:</label>
    <input type="number" class="form-control" id="proBonoClasses" min="0">
 </div>

 <div class="form-group">
    <label for="privateTutoring">Number of Private Tutoring Sessions:</label>
    <input type="number" class="form-control" id="privateTutoring" min="0">
 </div>
</div>
<div id="doctorFields" class="d-none">
  <div class="form-group">
    <label for="clinicLocation">Clinic Location:</label>
    <input type="text" id="governorate" class="form-control" required />
  </div>

  <div class="form-group">
    <label for="specialty">Specialty:</label>
    <select class="form-control" id="specialty">
      <option value="">Select Specialty</option>
      <option value="cardiology">Cardiology</option>
      <option value="orthopedics">Orthopedics</option>
      <!-- Add more specialties as needed -->
    </select>
  </div>
  <div class="form-group">
    <label for="proBonoCases">Number of Pro-Bono Cases:</label>
    <input type="number" class="form-control" id="proBonoCases" min="0">
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

  modalWrap1.querySelector('.modal-success-btn').onclick = ()=> login(document.getElementById('username3').value,document.getElementById('password3').value);

  document.body.append(modalWrap1);

  var modal1 = new bootstrap.Modal(modalWrap1.querySelector('.modal'));
  modal1.show();

}
function navigate() {
  var occupation = document.getElementById('occupation').value;
  var documentUpload = document.getElementById('documentUpload');
  var doctorFields = document.getElementById('doctorFields'); // Doctor-specific fields
  var teacherFields = document.getElementById('teacherFields'); // Teacher-specific fields
 
  // Show or hide the document upload section based on occupation
  if (occupation === 'doctor' || occupation === 'teacher') {
     documentUpload.classList.remove('d-none');
  } else {
     documentUpload.classList.add('d-none');
  }
 
  // Show or hide the doctor-specific fields based on occupation
  if (occupation === 'doctor') {
     doctorFields.classList.remove('d-none');
     teacherFields.classList.add('d-none'); // Ensure teacher fields are hidden when doctor is selected
  } else {
     doctorFields.classList.add('d-none');
  }
 
  // Show or hide the teacher-specific fields based on occupation
  if (occupation === 'teacher') {
     teacherFields.classList.remove('d-none');
     doctorFields.classList.add('d-none'); // Ensure doctor fields are hidden when teacher is selected
  } else {
     teacherFields.classList.add('d-none');
  }

  
 }
 


