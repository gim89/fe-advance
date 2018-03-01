/*
  Написать функцию fetchCountryData, которая использует
  apiUrl + текущее значение input для составления запроса.

  Формат полного url таков:
    https://restcountries.eu/rest/v2/name/имя-страны

  С помощью fetch сделать запрос по составленому
  адресу. Обязательно обработать вариант с ошибкой запроса
  используя catch.

  Результат запроса вывести в поле result в формате:
  Country name: имя страны
  Capital: столица
  Main currency: название денежной единицы
  Flag: флаг страны

  Все необходимые данные есть в ответе от API.

  PS: при отправке формы перезагружается страница,
  решите эту задачу вспомнив о том, как остановить
  поведение элемента по умолчанию.
*/
const input = document.querySelector("input");
const submitBtn = document.querySelector("#js-submit");
const result = document.querySelector(".result");
const apiUrl = "https://restcountries.eu/rest/v2/name/";

const table = document.querySelector("#table").textContent.trim();
const compiled = _.template(table);

const updateView = currencies => {
  let htmlString = "";

  currencies.map(currency => {
    htmlString += compiled(currency);
  });

  result.innerHTML = htmlString;
};

const fetchData = () =>
    fetch(apiUrl + input.value)
      .then(response => {
        if (response.ok) return response.json();
        throw new Error("Error fetching data");
      })
      .catch(error => {
        console.error("Error: ", error);
      });

function fetchCountryData(evt) {
  fetchData().then(currencies => {
      updateView(currencies);
  });
  evt.preventDefault();
}

submitBtn.addEventListener("click", fetchCountryData);
