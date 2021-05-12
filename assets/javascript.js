document.getElementById('accessibility').addEventListener('click', function () {
    document.getElementById('accessibilityDisp').style.display="flex";
    document.getElementById('themeDisp').style.display="none";
    document.getElementById('profileDisp').style.display="none";
    document.getElementById('comingDisp').style.display="none";
    document.getElementById('accessibilityLink').style.display="flex";
    document.getElementById('themeLink').style.display="none";
    document.getElementById('profileLink').style.display="none";
    document.getElementById('comingLink').style.display="none";
}); 

document.getElementById('theme').addEventListener('click', function () {
    document.getElementById('accessibilityDisp').style.display="none";
    document.getElementById('themeDisp').style.display="flex";
    document.getElementById('profileDisp').style.display="none";
    document.getElementById('comingDisp').style.display="none";
    document.getElementById('accessibilityLink').style.display="none";
    document.getElementById('themeLink').style.display="flex";
    document.getElementById('profileLink').style.display="none";
    document.getElementById('comingLink').style.display="none";
}); 

document.getElementById('profile').addEventListener('click', function () {
    document.getElementById('accessibilityDisp').style.display="none";
    document.getElementById('themeDisp').style.display="none";
    document.getElementById('profileDisp').style.display="flex";
    document.getElementById('comingDisp').style.display="none";
    document.getElementById('accessibilityLink').style.display="none";
    document.getElementById('themeLink').style.display="none";
    document.getElementById('profileLink').style.display="flex";
    document.getElementById('comingLink').style.display="none";
}); 

document.getElementById('coming').addEventListener('click', function () {
    document.getElementById('accessibilityDisp').style.display="none";
    document.getElementById('themeDisp').style.display="none";
    document.getElementById('profileDisp').style.display="none";
    document.getElementById('comingDisp').style.display="flex";
    document.getElementById('accessibilityLink').style.display="none";
    document.getElementById('themeLink').style.display="none";
    document.getElementById('profileLink').style.display="none";
    document.getElementById('comingLink').style.display="flex";
}); 
