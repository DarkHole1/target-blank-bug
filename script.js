var button;
function inital(){
  button = document.getElementsByTagName('button')[0];
  button.addEventListener('click', buttonClick);
}
function buttonClick(){
  try {
    window.opener.location;
    alert('Hack');
  } catch(error) {
    alert('No hack')
  }
}
window.addEventListener('load', inital);
