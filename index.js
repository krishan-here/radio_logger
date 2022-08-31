$("#menu-toggle").click(function (e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

function myFunction(x) {
    x.classList.toggle("change");
    document.getElementById("mySidebar").style.width = "150px";
    document.getElementById("content").style.marginLeft = "150px";
}

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})

// Dark Mode - Light Mode Toggle switch FA Icon
var icon = $('.fa-toggle');
var icon_fa_icon = icon.attr('data-icon');

if (icon_fa_icon === "alarm-clock") {
    icon.attr('data-icon', 'fa-toggle-off');
} else {
    icon.attr('data-icon', 'fa-toggle-on');
}

var modal = document.querySelector(".modal");
var container = modal.querySelector(".container");

document.querySelector("button").addEventListener("click", function (e) {
  modal.classList.remove("hidden")
});

document.querySelector(".modal").addEventListener("click", function (e) {
  if (e.target !== modal && e.target !== container) return;     
  modal.classList.add("hidden");
});

document.addEventListener("DOMContentLoaded", function(){
    document.querySelectorAll('.sidebar .nav-link').forEach(function(element){
      
      element.addEventListener('click', function (e) {
  
        let nextEl = element.nextElementSibling;
        let parentEl  = element.parentElement;	
  
          if(nextEl) {
              e.preventDefault();	
              let mycollapse = new bootstrap.Collapse(nextEl);
              
              if(nextEl.classList.contains('show')){
                mycollapse.hide();
              } else {
                  mycollapse.show();
                  // find other submenus with class=show
                  var opened_submenu = parentEl.parentElement.querySelector('.submenu.show');
                  // if it exists, then close all of them
                  if(opened_submenu){
                    new bootstrap.Collapse(opened_submenu);
                  }
              }
          }
      }); // addEventListener
    }) // forEach
  }); 
  // DOMContentLoaded  end

document.addEventListener('DOMContentLoaded',function()
{
	darkmode_init();
});

function changeMode() {
  let mode = document.getElementById("body");
  if (mode.classList.contains("lightMode")) {
    mode.classList.add("darkMode").remove("lightMode");
  } else if (mode.classList.contains("lightMode")) {
    mode.classList.remove("darkMode").add("lightMode");
  }
}

let buttonChangeMode = document.querySelector("#buttonChangeMode");
buttonChangeMode.addEventListener("click", changeMode);

const setColorMode = (mode) => {
	// Mode was given
	if (mode) {
		// Update data-* attr on html
		document.documentElement.setAttribute('data-force-color-mode', mode);
		// Persist in local storage
		window.localStorage.setItem('color-mode', mode);
		// Make sure the checkbox is up-to-date
		document.querySelector('#toggle-darkmode').checked = (mode === 'dark');
	}
	
	// No mode given (e.g. reset)
	else {
		// Remove data-* attr from html
		document.documentElement.removeAttribute('data-force-color-mode');
		// Remove entry from local storage
		window.localStorage.removeItem('color-mode');
		// Make sure the checkbox is up-to-date, matching the system preferences
		document.querySelector('#toggle-darkmode').checked = window.matchMedia('(prefers-color-scheme: dark)').matches;
	}
}

document.querySelector('#toggle-darkmode').addEventListener('click', (e) => {
	setColorMode(e.target.checked ? 'dark' : 'light');
});

document.querySelector('#reset-darkmode').addEventListener('click', (e) => {
	e.preventDefault();
	setColorMode(false);
});

// Keep an eye out for System Light/Dark Mode Changes
function selectDarkMode(){
  if (!window.matchMedia) return;
  
// const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

if (this._mediaQuery) {
	// Ignore change if there's an override set
	if (document.documentElement.getAttribute('data-force-color-mode')) {
		return;
	}
}
	// Make sure the checkbox is up-to-date
 	document.querySelector('#toggle-darkmode').checked = ('mediaQuery.matches');
};

// Switch FA Icons 
document.addEventListener('DOMContentLoaded', function () {
  $('.icon').on('click', function () {
    if ($(this).find('svg').attr('data-icon') == 'minus-square' ) {
      $(this).find('svg').attr('data-icon', 'plus-square');
    } else {
      $(this).find('svg').attr('data-icon', 'minus-square');
    };
  });
});


// select dom items
const menuBtn =
document.querySelector(".menu-btn");

const menu =
document.querySelector(".menu");

const menuNav =
document.querySelector(".menu-nav");

const menuBranding =
document.querySelector(".menu-branding");

const navItems =
document.querySelectorAll(".nav-item");

// Set the initial state of the menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach((item) =>
        item.classList.add("show"));

    // Reset the menu state
    showMenu = true;
} else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach((item) =>
        item.classList.remove("show"));

    // Reset the menu state
    showMenu = false;
}
}

//For Follow button functionality
$(document).ready(function(){				

  $("#follow-button").click(function(){
    if ($("#follow-button").text() == "+ Follow"){
      // *** State Change: To Following ***      
      // We want the button to squish (or shrink) by 10px as a reaction to the click and for it to last 100ms    
      $("#follow-button").animate({ width: '-=10px' }, 100, 'easeInCubic', function () {});
      
      // then now we want the button to expand out to it's full state
      // The left translation is to keep the button centred with it's longer width
      $("#follow-button").animate({ width: '+=45px', left: '-=15px' }, 600, 'easeInOutBack', function () { 
        $("#follow-button").css("color", "#fff");
        $("#follow-button").text("Following");

        // Animate the background transition from white to green. Using JQuery Color
        $("#follow-button").animate({
          backgroundColor: "#2EB82E",
          borderColor: "#2EB82E"
        }, 1000 );
      });
    }else{
      
      // *** State Change: Unfollow ***     
      // Change the button back to it's original state
      $("#follow-button").animate({ width: '-=25px', left: '+=15px' }, 600, 'easeInOutBack', function () { 
        $("#follow-button").text("+ Follow");
        $("#follow-button").css("color", "#3399FF");
        $("#follow-button").css("background-color", "#ffffff");
        $("#follow-button").css("border-color", "#3399FF");
      });
    }
  }); 
});

var countF = 0;
var btnText = "Unfollow";
var countButton = document.getElementById("followButton");
var displayCount = document.getElementById("followers");
countButton.onclick = function() {
countF++;
followers.innerHTML = countF;
var countButton = document.getElementById("followButton");
countButton.innerHTML = btnText;
if(countButton.innerHTML = btnText) {
countF--;
countButton.innerHTML = "Follow";
}
}

// Follow Counter
let followers = 0;
$(document).ready(function () {
  // ajax to get current followers
  // let followers from server are 10
  // assign the current followers to variable
  followers = 10;
  setfollowers(followers);
});

$('body').on('click', '.followBtn', function () {
  // ajax to post a current followers
  // in success add increment to followers
  followers++;
  setfollowers(followers);
});

function setfollowers(count) {
  $('.totalfollowers').text(count);
}

// Create User
const createUser = (user) => { axios.post('https://reqres.in/api/users', user) .then(response => { const addedUser = response.data; console.log(`POST: user is added`, addedUser);// append to DOM
 appendToDOM([addedUser]);
 })
 .catch(error => console.error(error));
};

const getUsers = () => {
  axios
    .get('https://reqres.in/api/users')
    .then((response) => {
      const users = response.data.data;
      console.log(`GET users`, users);
    })
    .catch((error) => console.error(error));
};

// Delete User
const deleteUser = (elem, id) => {axios.delete(`https://reqres.in/api/users/${id}`).then(response => {
console.log(`DELETE: user is removed`, id);// remove elem from DOM
elem.remove();
})
.catch(error => console.error(error));};

const createLi = (user) => {
  const li = document.createElement('li'); // add user details to `li`
  li.textContent = `${user.id}: ${user.first_name} ${user.last_name}`; // attach onclick event
  li.onclick = (e) => deleteUser(li, user.id);
  return li;
};