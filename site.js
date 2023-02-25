// Adiciona o evento de clique em todos os itens do menu com submenu
var items = document.querySelectorAll("nav ul li");
for (var i = 0; i < items.length; i++) {
  var item = items[i];
  var submenu = item.querySelector("ul");
  if (submenu) {
    item.addEventListener("click", function(event) {
      event.preventDefault();
      event.stopPropagation();
      var submenu = this.querySelector("ul");
      if (submenu.style.display === "block") {
        submenu.style.display = "none";
      } else {
        submenu.style.display = "block";
      }
    });
  }
}

// Fecha o submenu quando clicar em qualquer lugar fora do menu
document.addEventListener("click", function(event) {
  var menu = document.querySelector("nav");
  if (!menu.contains(event.target)) {
    var submenus = document.querySelectorAll("nav ul ul");
    for (var i = 0; i < submenus.length; i++) {
      submenus[i].style.display = "none";
    }
  }
});
