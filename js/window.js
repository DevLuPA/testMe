var days = {
  412 : "Получить первый подарок",
  512 : "Получить массаж ног",
  612 : "Получить второй подарок",
  712 : "Получить забавное печенье",
  812 : "Получить третий подарок",
  912 : "Записать в блокнот историю о самом ярком событии года, лучшей покупке, фильме или книге",
  1012: "Посмотреть одну серию семьи шпиона",
  1112: "Получить четвертый подарок",
  1212: "Получить вкусняшку",
  1312: "Получить пятый подарок",
  1412: "Написать любовное письмо",
  1512: "Получить шестой подарок",
  1612: "Получить седьмой подарок",
  1712: "Сходить на мастер-класс по эпоксидной смоле",
  1812: "Написать письмо-благодарность маме",
  1912: "Получить девятый подарок",
  2012: "До конца года сходить на зимнее свидание",
  2112: "Получить десятый подарок",
  2212: "Погулять в парке",
  2312: "Получить одиннадцатый подарок",
  2412: "Составить новогодне-рождественский плейлист",
  2512: "Получить двенадцатый подарок",
  2612: "Сделать зону фотографий дома",
  2712: "Получить тринадцатый подарок",
  2812: "Сделать семейную фотографию возле елки",
  2912: "Получить четырнадцатый подарок",
  3012: "Получить четырнадцатый подарок",
  3112: "Получить новгодний подарок в 23:50",
  11: "Сварить глинтвейн",
  21: "Сходить в гости",
  31: "Получить пятнадцатый подарок",
  41: "Провести день при свечах",
  51: "Написать письмо себе в 2025 год — с планами и пожеланиями для себя (запечатать, а вскрыть только на следующий Новый год)",
  61: "Почитать семьей рождественскую историю",
  71:"Получить рождественский подарок"
}

function searchTask(ids){
  
    console.log(days[ids]);
  }


let now = new Date();
let currentDate = new Date().toLocaleDateString("ru-RU");

let day = now.getDate();
let month = now.getMonth()+1;
let temp = day.toString()+month.toString();
//alert(temp);

document.addEventListener("DOMContentLoaded", () => {
 var exampleModal = document.getElementById('exampleModal');
 exampleModal.addEventListener('show.bs.modal', function(event){
  var button = event.relatedTarget;
  var recipient = button.getAttribute('data-bs-whatever');
  var modalTitle = exampleModal.querySelector('.modal-title');
  var modalBodyInput = exampleModal.querySelector('.modal-body');
  console.log("this is recipient=", recipient);
  if (temp == recipient){
    console.log("this is recipient in code...", recipient);
    let text = days[recipient];
    console.log(text);
    modalBodyInput.textContent = text;
  }
  else{
    console.log("this is error...", recipient);
    modalBodyInput.textContent = 'Будущее туманно, прошлое скрыто, ищи сюрпризы в настоящем';
  }
 })
});
//alert(currentDate);
//alert(now.toLocaleDateString("ru-RU"));

