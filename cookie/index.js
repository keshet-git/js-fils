const firstText = document.querySelector("#firstText");
const lastText = document.querySelector("#lastText");
const submitBtn = document.querySelector("#submitBtn");
const cookieBtn = document.querySelector("#cookieBtn");

submitBtn.addEventListener("click", () => {
  setCookie("firstName", firstText.value, 365);
  setCookie("lastName", lastText.value, 365);
});
cookieBtn.addEventListener("click", () => {
  firstText.value = getCookie("firstName");
  lastText.value = getCookie("lastName");
});

//deleteCookie("firstName");
//deleteCookie("lastName");

//console.log(navigator.cookieEnabled);
//document.cookie = "firstName=Patrick; expires=Sun, 1 january 2023 20:00:00 UTC; path=/";
//document.cookie = "lastName=Star; expires=Sun, 1 january 2023 20:00:00 UTC; path=/";
//console.log(document.cookie);

//deleteCookie("firstName");
//deleteCookie("lastName");
//deleteCookie("email");

//setCookie("email", "232378@gmail.com", 365);

//console.log(document.cookie);

//setCookie("firstName", "Sandy", 364);
//setCookie("lastName", "Scooby-Doo", 365);

//console.log(getCookie("firstName"));
//console.log(getCookie("lastName"));

function setCookie(name, value, daysToLive){
  const date = new Date();
  date.setTime(date.getTime() + daysToLive * 24 * 60 * 60 * 1000);
  let expires = "expires=" + date.toUTCString();
  document.cookie =`${name}=${value}; ${expires}; path/`;
}
function deleteCookie(name){
  setCookie(name, null, null);
}
function getCookie(name){
  const cDecoded = decodeURIComponent(document.cookie);
  const cArray = cDecoded.split("; ");
  let result = null;

  cArray.forEach(element => {
    if(element.indexOf(name) == 0){
      result = element.substring(name.length +1)
    }
  })
  return result;
}