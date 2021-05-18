// When you click the Horiseon card, the image of the site comes up as well as its link, while turning off all other images and links.
document.getElementById('accessibility').addEventListener('click', function () {
    document.getElementById('passwordDisp').style.display="none";
    document.getElementById('accessibilityDisp').style.display="flex";
    document.getElementById('themeDisp').style.display="none";
    document.getElementById('profileDisp').style.display="none";
    document.getElementById('comingDisp').style.display="none";
    document.getElementById('passwordLink').style.display="none";
    document.getElementById('accessibilityLink').style.display="flex";
    document.getElementById('themeLink').style.display="none";
    document.getElementById('profileLink').style.display="none";
    document.getElementById('comingLink').style.display="none";
}); 
// This does the same thing for the theme site.
document.getElementById('theme').addEventListener('click', function () {
    document.getElementById('passwordDisp').style.display="none";
    document.getElementById('accessibilityDisp').style.display="none";
    document.getElementById('themeDisp').style.display="flex";
    document.getElementById('profileDisp').style.display="none";
    document.getElementById('comingDisp').style.display="none";
    document.getElementById('passwordLink').style.display="none";
    document.getElementById('accessibilityLink').style.display="none";
    document.getElementById('themeLink').style.display="flex";
    document.getElementById('profileLink').style.display="none";
    document.getElementById('comingLink').style.display="none";
}); 
// This does the same thing for my prework site.
document.getElementById('profile').addEventListener('click', function () {
    document.getElementById('passwordDisp').style.display="none";
    document.getElementById('accessibilityDisp').style.display="none";
    document.getElementById('themeDisp').style.display="none";
    document.getElementById('profileDisp').style.display="flex";
    document.getElementById('comingDisp').style.display="none";
    document.getElementById('passwordLink').style.display="none";
    document.getElementById('accessibilityLink').style.display="none";
    document.getElementById('themeLink').style.display="none";
    document.getElementById('profileLink').style.display="flex";
    document.getElementById('comingLink').style.display="none";
}); 
// This does the same thing for a place holder image, and the link takes you to my github acct.
document.getElementById('coming').addEventListener('click', function () {
    document.getElementById('passwordDisp').style.display="none";
    document.getElementById('accessibilityDisp').style.display="none";
    document.getElementById('themeDisp').style.display="none";
    document.getElementById('profileDisp').style.display="none";
    document.getElementById('comingDisp').style.display="flex";
    document.getElementById('passwordLink').style.display="none";
    document.getElementById('accessibilityLink').style.display="none";
    document.getElementById('themeLink').style.display="none";
    document.getElementById('profileLink').style.display="none";
    document.getElementById('comingLink').style.display="flex";
}); 

document.getElementById('password').addEventListener('click', function () {
    document.getElementById('passwordDisp').style.display="flex";
    document.getElementById('accessibilityDisp').style.display="none";
    document.getElementById('themeDisp').style.display="none";
    document.getElementById('profileDisp').style.display="none";
    document.getElementById('comingDisp').style.display="none";
    document.getElementById('passwordLink').style.display="flex";
    document.getElementById('accessibilityLink').style.display="none";
    document.getElementById('themeLink').style.display="none";
    document.getElementById('profileLink').style.display="none";
    document.getElementById('comingLink').style.display="none";
});
