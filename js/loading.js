console.log("HELP");
$(function () {
  $("#love_photo").on({
    mouseenter: function () {
      $(this).attr('src', 'img/love_o.png');
    },
    mouseleave: function () {
      $(this).attr('src', 'img/love.png');
    }
  });

});