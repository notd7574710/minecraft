/**
 * nav 태그를 출력해 주는 자바스크립트파일
 */
var nav, div1, div2;

//=====================================================================================
function button() {//반응형 웹페이지 구현
   var button = document.createElement("button");
   button.setAttribute('type', 'button');
   button.setAttribute('class', 'navbar-toggler');
   button.setAttribute('type', 'button');
   button.setAttribute('data-toggle', 'collapse');
   button.setAttribute('data-target', '#navbarNav');
   button.setAttribute('aria-controls', 'navbarNav');
   button.setAttribute('aria-expanded', 'false');
   button.setAttribute('aria-label', 'Toggle navigation');
   button.innerHTML += "<span class='navbar-toggler-icon'></span>"
   nav.appendChild(button);
}

function pageList() {//탭목록 구현
   var div = document.createElement('div');
   div.setAttribute('class', 'collapse navbar-collapse');
   div.setAttribute('id', 'navbarNav');
   var ul = document.createElement('ul');
   ul.setAttribute('class', 'nav nav-tabs mr-auto');

   var A = document.createElement('li');

   A.setAttribute('class', 'nav-item');
   A.innerHTML += "<a class='nav-link' href='javascript:void(0);' onclick='createNav()'>포션</a>";

   ul.appendChild(A);
   div.appendChild(ul);

   var temp = document.createElement('button');
   temp.setAttribute('class', 'btn btn-primary');
   temp.setAttribute('type', 'button');
   temp.setAttribute('onclick', "help();");
   temp.innerHTML += "도움말";

   div.appendChild(temp);


   nav.appendChild(div);
}
//==================================================================================

function createNav() { // nav를 생성하는 함수
   nav = document.getElementById("nav");
   nav.innerHTML = "";
   nav.setAttribute('class', 'navbar navbar-expand-lg navbar-light fixed-top');

   nav.innerHTML += "<a class='navbar-brand' href='https://github.com/notd7574710/minecraft'>ㅇㅇ</a>";
   button();//function
   createTable();
}
