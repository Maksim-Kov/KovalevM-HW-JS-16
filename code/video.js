/*
                   <tr>
                       <th>#</th>
                       <th>Назва</th>
                       <th title="При настиску сортувати.">Дата публікації</th>
                       <th title="При настиску сортувати.">Посилання</th>
                       <th>Редагувати</th>
                       <th>Видалити</th>
                   </tr>
*/

const tbody = document.querySelector("tbody");
const video = JSON.parse(localStorage.BDVideo);


function createElementTable (video) {
   return video.map((el, i) => {
        return `
        <tr>
            <td>${i + 1}</td>
            <td>${el.videoName}</td>
            <td title="При настиску сортувати.">${el.videoYearReleased}</td>
            <td title="При настиску сортувати."><a href="${el.videoLink}">${el.videoName}</a></td>
            <td>&#128397;</td>
            <td>&#128465;</td>
        </tr>
        `
    }).join("")
}

tbody.insertAdjacentHTML("beforeend", createElementTable(video))