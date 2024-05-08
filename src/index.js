
document.addEventListener("DOMContentLoaded", function(){
    alert("Welcome to Nii's Pinterest Clone🤗🤗");

const bellIcon = document.getElementById("bell-lg");
const bellPane = document.getElementById("bell-lg-pane");
const bellIconFill = document.getElementById("bell-icon-lg");
const messageIcon = document.getElementById("message-lg");
const messagePane = document.getElementById("message-lg-pane");
const messageIconFill = document.getElementById("message-icon-lg");
const Createbutton = document.getElementById('create');
const Createdropdown = document.getElementById('create-menu');

Createbutton.addEventListener('click', function() {
    Createdropdown.classList.remove('hidden');
    Createdropdown.classList.add('flex-col');
});

Createbutton.addEventListener('mouseover', function() {
    Createdropdown.classList.remove('hidden');
    Createdropdown.classList.add('flex-col');
});

document.addEventListener('click', function(event) {
    const targetElement = event.target;

    // Check if the click target is not within the Createbutton or the Createdropdown
    if (!Createbutton.contains(targetElement) && !Createdropdown.contains(targetElement)) {
        Createdropdown.classList.add('hidden');
    }
});



bellIcon.addEventListener('click', function(){
  bellPane.classList.toggle('hidden');
  bellPane.classList.toggle('lg:flex');
  bellIconFill.classList.toggle('fill-black')
  bellIconFill.classList.toggle('fill-gray-500')
});

messageIcon.addEventListener('click', function(){
  messagePane.classList.toggle('hidden');
  messagePane.classList.toggle('lg:flex');
  messageIconFill.classList.toggle('fill-black')
  messageIconFill.classList.toggle('fill-gray-500')
});

document.addEventListener('click', function(event) {
  const targetElement = event.target;
    // Check if the click target is not within the button or the dropdown
    if (!bellIcon.contains(targetElement) && !bellPane.contains(targetElement)) {
        bellPane.classList.remove('lg:flex');
        bellPane.classList.add('hidden');
        bellIconFill.classList.remove('fill-black')
        bellIconFill.classList.add('fill-gray-500')
    }

    if (!messageIcon.contains(targetElement) && !messagePane.contains(targetElement)) {
        messagePane.classList.remove('lg:flex');
        messagePane.classList.add('hidden');
        messageIconFill.classList.remove('fill-black');
        messageIconFill.classList.add('fill-gray-500');
    }
    });
})