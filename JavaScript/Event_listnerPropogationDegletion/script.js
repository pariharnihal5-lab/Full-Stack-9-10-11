const showAssBtn = document.getElementById("showAssignmentNotification");
const showAttBtn = document.getElementById("showAttendanceNotification");
const stopAssBtn = document.getElementById("stopAssignmentNotification");

const assPara = document.getElementById("AssignmentNotification");
const attPara = document.getElementById("AttendanceNotification");

function ShowAssingment() {
assPara.textContent = "Your assignment deadline is approaching!";
}
showAssBtn.addEventListener("click", ShowAssingment) ;



showAttBtn.addEventListener("click", () => {
attPara.textContent = "Please check your attendance status!";
});



stopAssBtn.addEventListener("click", () => {
        // showAssBtn.removeEventListener("click", ShowAssingment) ;
    showAttBtn.removeEventListener("click", () => {
        attPara.textContent = "Please check your attendance status!";
    });

assPara. textContent = "Your assignment Notification is Stopped!";
});
