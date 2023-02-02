/*
                   <tr>
                       <th>#</th>
                       <th>Назва</th>
                       <th title="При настиску сортувати.">Залишок</th>
                       <th title="При настиску сортувати.">Ціна</th>
                       <th>Редагувати</th>
                       <th>Статус</th>
                       <th>Дата додавання</th>
                       <th>Видалити</th>
                   </tr>
*/

const tbody = document.querySelector("tbody");
const restotation = JSON.parse(localStorage.BDRestotation);


function createElementTable (restotation) {
   return restotation.map((el, i) => {
        return `
        <tr>
            <td>${i + 1}</td>
            <td>${el.productName}</td>
            <td title="При настиску сортувати.">${el.productQuantity}</td>
            <td title="При настиску сортувати.">${el.price} грн.</td>
            <td>&#128397;</td>
            <td>${el.stopList ? "&#9989;" : "&#10060;" }</td>
            <td>${el.date}</td>
            <td>&#128465;</td>
        </tr>
        `
    }).join("")
}

tbody.insertAdjacentHTML("beforeend", createElementTable(restotation))