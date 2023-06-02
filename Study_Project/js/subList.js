$(function(){
  menuView("#ml1", "#sub_menu1");
  menuView("#ml2", "#sub_menu2");
  menuView("#ml3", "#sub_menu3");
  menuView("#ml4", "#sub_menu4");
  menuView("#ml5", "#sub_menu5");
  menuView("#sub_menu1", "#sub_menu1");
  menuView("#sub_menu2", "#sub_menu2");
  menuView("#sub_menu3", "#sub_menu3");
  menuView("#sub_menu4", "#sub_menu4");
  menuView("#sub_menu5", "#sub_menu5");
  //menuView(".sub_list", ".sub_list");
  //menuView("#horizontal-underline", ".sub_list");
});
/* ************** 하위 메뉴 ************** */
function menuView(main, sub){
  $(main).mouseover(function(){
    $(sub).css("display", "block");
  });
  $(main).mouseout(function(){
    $(sub).css("display", "none");
  });
}

/* $("#ml1").mouseover(function(){
  $("#sub_menu1").css("display", "block");
});
$("#ml1").mouseout(function(){
  $("#sub_menu1").css("display", "none");
  $("#horizontal-underline").css("width", 0);
});

$("#ml2").mouseover(function(){
  $("#sub_menu2").css("display", "block");
});
$("#ml2").mouseout(function(){
  $("#sub_menu2").css("display", "none");
  $("#horizontal-underline").css("width", 0);
});

$("#ml3").mouseover(function(){
  $("#sub_menu3").css("display", "block");
});
$("#ml3").mouseout(function(){
  $("#sub_menu3").css("display", "none");
  $("#horizontal-underline").css("width", 0);
});

$("#ml4").mouseover(function(){
  $("#sub_menu4").css("display", "block");
});
$("#ml4").mouseout(function(){
  $("#sub_menu4").css("display", "none");
  $("#horizontal-underline").css("width", 0);
});

$("#ml5").mouseover(function(){
  $("#sub_menu5").css("display", "block");
});
$("#ml5").mouseout(function(){
  $("#sub_menu5").css("display", "none");
  $("#horizontal-underline").css("width", 0);
});

$(".sub_list").on("mouseover", function(){
    $(this).css("display", "block");
});

$(".sub_list").on("mouseout", function(){
    $(this).css("display", "none");
}); 


$("#horizontal-underline").on("mouseover", function(){
    $("#sub_list").css("display", "block");
}); */

/* **************************************** */
/* main_list underline 효과 */

let horizontalBar = document.getElementById("horizontal-underline");
let horizontalMenus = document.querySelectorAll(".main_list > a");


/* 요소의 위치값을 반환받는 함수 생성 */
function horizontalIndicator(e) {
  horizontalBar.style.left = e.offsetLeft + "px";
  horizontalBar.style.width = e.offsetWidth + "px";
  horizontalBar.style.top = e.offsetTop + e.offsetHeight + 27 + "px";
}

horizontalMenus.forEach((menu) =>
  menu.addEventListener("mouseover", (e) =>
    horizontalIndicator(e.currentTarget)
  )
);

/* ************************************************ */