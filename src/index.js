
document.addEventListener("DOMContentLoaded", function(){
    alert("Welcome to Nii's Pinterest Clone🤗🤗");
    let userName;
    do{
        userName = prompt("Please enter a username👇🏽👇🏽:");
    }while (userName === null || userName.trim() === "");
    const firstLetter =  userName.charAt(0).toUpperCase();

    alert(`Have fun exploring ${userName}`);

const bellIcon = document.getElementById("bell-lg");
const bellPane = document.getElementById("bell-lg-pane");
const bellIconFill = document.getElementById("bell-icon-lg");
const messageIcon = document.getElementById("message-lg");
const messagePane = document.getElementById("message-lg-pane");
const messageIconFill = document.getElementById("message-icon-lg");
const createButton = document.getElementById('create');
const createDropdown = document.getElementById('create-menu');
const toggleColorMode = document.getElementById('mode-toggle');
const profileMobile = document.getElementById('profile-name-mobile')
const profileLarge = document.getElementById('profile-name-lg')

profileMobile.textContent = `${firstLetter}`;
profileLarge.textContent = `${firstLetter}`;

toggleColorMode.addEventListener('click', function(){
    document.body.classList.toggle('dark');
    toggleColorMode.classList.toggle('rotate-180');
});

createButton.addEventListener('click', function() {
    createDropdown.classList.remove('hidden');
    createDropdown.classList.add('flex-col');
});

createButton.addEventListener('mouseover', function() {
    createDropdown.classList.remove('hidden');
    createDropdown.classList.add('flex-col');
});

document.addEventListener('click', function(event) {
    const targetElement = event.target;

    // Check if the click target is not within the createButton or the createDropdown
    if (!createButton.contains(targetElement) && !createDropdown.contains(targetElement)) {
        createDropdown.classList.add('hidden');
    }
});



bellIcon.addEventListener('click', function(){
  bellPane.classList.toggle('hidden');
  bellPane.classList.toggle('lg:flex');
  bellIconFill.classList.toggle('fill-black')
  bellIconFill.classList.toggle('fill-gray-500')
  if (document.body.classList.contains('dark')) {
    bellIconFill.classList.add('fill-white');
    }
});

bellIcon.addEventListener('mouseover', function(){
    if (document.body.classList.contains('dark')) {
        bellIconFill.classList.add('fill-black');
        }
});

messageIcon.addEventListener('click', function(){
  messagePane.classList.toggle('hidden');
  messagePane.classList.toggle('lg:flex');
  messageIconFill.classList.toggle('fill-black')
  messageIconFill.classList.toggle('fill-gray-500')
  if (document.body.classList.contains('dark')) {
    messageIconFill.classList.add('fill-white');
    }
});

document.addEventListener('click', function(event) {
  const targetElement = event.target;
    // Check if the click target is not within the button or the dropdown
    if (!bellIcon.contains(targetElement) && !bellPane.contains(targetElement)) {
        bellPane.classList.remove('lg:flex');
        bellPane.classList.add('hidden');
        bellIconFill.classList.remove('fill-black')
        bellIconFill.classList.add('fill-gray-500')
        if (bellIconFill.classList.contains('fill-white')) {
            bellIconFill.classList.remove('fill-white');
        }
    }

    if (!messageIcon.contains(targetElement) && !messagePane.contains(targetElement)) {
        messagePane.classList.remove('lg:flex');
        messagePane.classList.add('hidden');
        messageIconFill.classList.remove('fill-black');
        messageIconFill.classList.add('fill-gray-500');
        if (messageIconFill.classList.contains('fill-white')) {
            messageIconFill.classList.remove('fill-white');
        }
    }
    });
})
