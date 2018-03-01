/*
  Написать функцию get, которая используя
  REST сервис по адресу http://fecore.net.ua/rest/
  посылает get запрос и получает ответ.

  Результатом fetch будет массив объектов с полями.

  В элемент result поместить форму состоящую из 2-х
  столбцов след формата, где кол-во строк будет такое как
  и кол-во объектов пользователей в ответе:

  Name Score
  имя  кол-во очков
  имя  кол-во очков
*/

const getBtn = document.querySelector("#js-get");
const tbody = document.querySelector("#js-tbody");
const htmlTpl = document.querySelector("#table-row").textContent.trim();
const compiled = _.template(htmlTpl);

const updateView = currencies => {
  let htmlString = "";

  currencies.forEach(currency => {
    htmlString += compiled(currency);
  });

  tbody.innerHTML = htmlString;
};

const getCurrencyRates = () =>
  fetch("http://fecore.net.ua/rest/")
    .then(response => {
      if (response.ok) return response.json();
      throw new Error("Error fetching data");
    })
    .catch(err => {
      console.error("Error: ", err);
    });

function get(evt) {
    evt.preventDefault();
    getCurrencyRates().then(currencies => {
      updateView(currencies);
    });
}

getBtn.addEventListener("click", get);
