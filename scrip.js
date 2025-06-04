"use strict";

//  check email
function isemail(email) {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
}
// khi bấm nút xác nhận

document.querySelector(".button-email").addEventListener("click", function () {
  const email = document.querySelector(".input-email").value;
  if (isemail(email)) {
    // hiện thị thông tin
    document.querySelector(".email").style.display = "none";
    document.querySelector(".hidden").style.display = "block";
  } else {
    alert("vui long nhập email hợp lệ ");
  }
});
// thêm nút view more và view less
function whenClick(btnclass, itemclass) {
  const btn = document.querySelector(btnclass);
  const item = document.querySelector(itemclass);

  btn.addEventListener("click", function () {
    if (item.style.display === "none") {
      item.style.display = "block";
      btn.textContent = "🔼 view less";
    } else {
      item.style.display = "none";
      btn.textContent = "🔽 view more";
    }
  });
}
whenClick(".btn-experience", ".experience-item");
whenClick(".btn-learn", ".learn-item");
whenClick(".btn-activity", ".activity-item");
whenClick(".btn-language", ".language-item");
whenClick(".btn-skill", ".skill-item");
// thêm nút view more và view less cho sở thich
const btnHobby = document.querySelector(".btn-hobby");
const hobbyItem = document.querySelector(".hobby-item");
btnHobby.addEventListener("click", function () {
  if (hobbyItem.style.display === "none") {
    hobbyItem.style.display = "grid";
    btnHobby.textContent = "🔼 view less";
  } else {
    btnHobby.textContent = "🔽 view more";
    hobbyItem.style.display = "none";
  }
});
