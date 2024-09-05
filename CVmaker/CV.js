function validateForm() {
    const form = document.getElementById('cvForm');
    if (form.checkValidity()) {
        generateCV();
        return false;
    } else {
        form.reportValidity();
        return false; 
    }
}

function generateCV() {
    const Name = document.getElementById('Name').value;
    const Profession = document.getElementById('Profession').value;
    const Email = document.getElementById('Email').value;
    const Phone = document.getElementById('Phone').value;
    const Address = document.getElementById('Address').value;
    const Course = document.getElementById('Course').value;
    const Institute = document.getElementById('Institute').value;
    const Year = document.getElementById('Year').value;
    const Course2 = document.getElementById('Course-2').value;
    const Institute2 = document.getElementById('Institute-2').value;
    const Year2 = document.getElementById('Year-2').value;
    const Skill1 = document.getElementById('Skill1').value;
    const Skill2 = document.getElementById('Skill2').value;
    const Skill3 = document.getElementById('Skill3').value;
    const Skill4 = document.getElementById('Skill4').value;
    const Skill5 = document.getElementById('Skill5').value;
    const Skill6 = document.getElementById('Skill6').value;
    const Profile = document.getElementById('Profile').value;
    const Job = document.getElementById('Job').value;
    const Job2 = document.getElementById('Job-2').value;
    const Company = document.getElementById('Company').value;
    const Company2 = document.getElementById('Company-2').value;
    const Duration = document.getElementById('Duration').value;
    const Duration2 = document.getElementById('Duration-2').value;
    const Description = document.getElementById('Description').value;
    const Description2 = document.getElementById('Description-2').value;

    document.getElementById('hidden-part').hidden = true;

    let html = `<div class="CV">
        <div class="bar"></div>
        <div class="Data-Show">
            <h1 class="Name">${Name}</h1>
            <h4 class="Profession">${Profession}</h4>
            <div class="body-part">
                <div class="Personal-Info">
                    <div class="contact-Info">
                        <h2 class="CONTACT-ME">CONTACT ME</h2>
                        <p class="PHONE-NO"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="22" width="22"><path fill="#000051" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg> ${Phone}</p>
                        <p class="EMAIL"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="22" width="22"><path fill="#000051" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg> ${Email}</p>
                        <p class="ADDRESS"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" height="22" width="22"><path fill="#000051" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg> ${Address}</p>
                    </div>
                    <div class="education-info">
                        <h2 class="Education">Education</h2>
                        <p class="Degree"><b>${Course}</b></p>
                        <p><b>${Institute}</b></p>
                        <p>${Year}</p>
                        <p class="Degree-1"><b>${Course2}</b></p>
                        <p><b>${Institute2}</b></p>
                        <p>${Year2}</p>
                    </div>
                    <div class="skill-info">
                        <h2 class="SKILLS">SKILLS</h2>
                        <ul class="skill-list">
                            <li>${Skill1}</li>
                            <li>${Skill2}</li>
                            <li>${Skill3}</li>
                            <li>${Skill4}</li>
                            <li>${Skill5}</li>
                            <li>${Skill6}</li>
                        </ul>
                    </div>
                </div>
                <div class="Right-Side">
                    <div class="Profile-Info">
                        <h2 class="Profile">Profile</h2>
                        <p class="Profile-Details">${Profile}</p>
                    </div>
                    <div class="EXPERIENCE">
                        <h2 class="WORK-EXPERIENCE">WORK-EXPERIENCE</h2>
                        <div class="Position-Duration">
                            <p class="Position"><b>${Job}</b></p>
                            <p>${Duration}</p>
                        </div>
                        <h3 class="Company-Name">${Company}</h3>
                        <p class="Company-Details">${Description}</p>
                        <div class="Position-Duration Position-Duration-2">
                            <p class="Position"><b>${Job2}</b></p>
                            <p>${Duration2}</p>
                        </div>
                        <h3 class="Company-Name">${Company2}</h3>
                        <p class="Company-Details">${Description2}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;

    document.querySelector('.container').innerHTML = html;

    let b = `<button class="Print" onclick="PRINT()">Print CV</button>`

    document.querySelector('.Print-btn').innerHTML = b;

    return false;
}

function PRINT() {
    window.print();
}
