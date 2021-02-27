$('.collab-slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows:false,
  dots:true,
});


setTimeout(function(){
var elem = document.createElement('script');
elem.type = 'text/javascript';
elem.src = 'https://api-maps.yandex.ru/2.1/?apikey=7f1cfca7-b63e-455b-9c7b-64905eee2b19&lang=ru_RU&onload=getYaMap';
document.getElementsByTagName('body')[0].appendChild(elem);
}, 2000);
function getYaMap(){
ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
          center: [54.721978,56.019164],
          zoom: 13
      }, {
          searchControlProvider: 'yandex#search'
      }),


      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
          hintContent: 'г. Уфа, ул. Степана Злобина, д. 33, офис 1',
          // balloonContent: 'Это красивая метка'
      }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#image',
          // Своё изображение иконки метки.
          iconImageHref: '/assets/img/geo.svg',
          // Размеры метки.
          iconImageSize: [50, 74],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-5, -68]
      });


  myMap.geoObjects
      .add(myPlacemark)
});
}

$(document).ready(function () {
$("#form-call-back").submit(function () {
$("#form-call-back button").prop("disabled", true).css({
  "background-color": "#b6b6b6",
  "color": "#FFF"
}).text("Ждите...");
$.ajax({
  type: "POST",
  url: "send.php",
  data: $(this).serialize()
}).done(function () {
  // yaCounter53745795.reachGoal('ORDER2');
  $('#form-call-back').html("<div style='font-size:24px; margin-top:10px; color:#000;'>Спасибо!<br> Мы свяжемся с вами");
});
return false;
});
$("#td-video-form").submit(function () {
$("#td-video-form button").prop("disabled", true).css({
  "background-color": "#b6b6b6",
  "color": "#FFF"
}).text("Ждите...");
$.ajax({
  type: "POST",
  url: "send.php",
  data: $(this).serialize()
}).done(function () {
  // yaCounter53745795.reachGoal('ORDER2');
  $('#td-video-form').html("<div style='font-size:24px; margin-top:10px; color:#000;'>Спасибо!<br> Мы свяжемся с вами");
});
return false;
});


})

$(function () {
//2. Получить элемент, к которому необходимо добавить маску
$('input[name="phone"]').mask("9 (999) 999-9999");
});


$("body").on("click",".toggle-menu", function (event) {
$('.toggle-menu').toggleClass('active');
$('.second-menu').toggleClass('active');
$('.header').toggleClass('open-menu');
$('body').toggleClass('no-scroll');
});


$("body").on("click",".works__cat-item", function() {
$('.works__cat-item').removeClass('active');
$(this).addClass('active');
var NomCategory = $(this).attr('data-categody');
$('.works__list').hide();
$('.works__list[data-works="'+NomCategory+'"]').show();
})

$("body").on("click",".contacts__right span", function() {
$(this).hide();
})

$(document).scroll(function() {
var y = $(this).scrollTop();
if (y > 300) {
$('.header').addClass('active')
} else {
$('.header').removeClass('active')
}

});

$('.cust-checkbox input[type="checkbox"]').on('click', function() {

  var $this = $(this);

  $($this).closest('label').toggleClass('active');
 
});