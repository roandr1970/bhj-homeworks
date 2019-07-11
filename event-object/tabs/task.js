const tab = document.getElementsByClassName('tab');
const navTab = Array.from(tab);
const tab_content = document.getElementsByClassName('tab__content');
const tabContent = Array.from(tab_content);
let per = 0;
for (let i = 0; i < navTab.length; i++) {
    navTab[i].addEventListener('click', function() {
        let flag = navTab[i].className.indexOf("tab_active");
        if (flag == -1) {
            navTab[i].className = 'tab tab_active';
            tabContent[i].className = 'tab__content tab__content_active';
            navTab[per].className = 'tab';
            tabContent[per].className = 'tab__content';
            per = i;
       } 
    });
}