
document.getElementById("themeBtn").onclick = function () {
    document.body.classList.toggle("dark-mode");
};


document.getElementById("editJobBtn").onclick = function () {
    let newJob = prompt("Enter new job title:");
    if (newJob) {
        document.getElementById("jobTitle").textContent = newJob;
    }
};


document.getElementById("toggleSkillsBtn").onclick = function () {
    let skills = document.getElementById("skillsSection");
    if (skills.style.display === "none") {
        skills.style.display = "block";
        this.textContent = "Hide Skills";
    } else {
        skills.style.display = "none";
        this.textContent = "Show Skills";
    }
};


document.getElementById("msgBox").onkeyup = function () {
    let remaining = 200 - this.value.length;
    document.getElementById("counter").textContent = remaining;
};


function validateForm() {
    let name = document.getElementById("nameField").value;
    let email = document.getElementById("emailField").value;

    if (name === "" || email === "") {
        alert("Name and Email are required!");
        return false;
    }

    alert("Message sent successfully!");
    return true;
}


document.getElementById("dateDisplay").textContent =
    "Today is: " + new Date().toDateString();


