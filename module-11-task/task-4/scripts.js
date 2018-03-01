/*
  Написать функцию post, которая используя
  REST сервис по адресу http://fecore.net.ua/rest/
  посылает post запрос с именем введенным в input.

  Результатом fetch будет ответ от сервера со статусом
  операции записи, вывести ОК или ERROR в поле result.
*/

const input = document.querySelector("input");
const postBtn = document.querySelector("#js-post");
const result = document.querySelector(".result");

function post(evt) {
    evt.preventDefault();
    fetch("http://fecore.net.ua/rest/")
    .then(response => {
        if (response.ok) return response.json();
        throw new Error("Error fetching data");
    })
    .then(data => data.map((elem, i, arr) => {
        if (input.value === data[i].name) {
            console.log(data[i].name)
            result.innerHTML = `${input.value} - ok`;
        }
        else {
            result.innerHTML = "error";
        }
    }))
    .catch(error => {
        console.error("Error: ", error);
    });
}

postBtn.addEventListener("click", post);
