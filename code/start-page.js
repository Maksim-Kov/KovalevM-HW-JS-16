import { modalHide, modalShow, createInputsForModal, generationID } from "./functions.js";

const btnShowMadal = document.querySelector(".add"),
    btnCloseModal = document.getElementById("close"),
    btnSaveModal = document.getElementById("save"),
    select = document.getElementById("select"),
    formInfo = document.querySelector(".form-info"),
    store = ["Назва продукту", "Вартість продукту", "Посилання на зображення", "Опис продукту", "Ключеві слова (Розділяти комою)"],
	video = ["Назва відео", "Посилання на зображення", "Посилання на відео", "Жанр (Розділяти комою)", "Країна виробник (Розділяти комою)", "Режисер", "Актори (Розділяти комою)", "Тривалість (У хвилинах)", "Опис відео", "Рік випуску"],
	restotation = ["Назва продукту", "Вага продукту", "Інгредієнти (Розділяти комою)", "Вартість продукту", "Посилання на зображення", "Ключеві слова (Розділяти комою)", "Загальна вага"];

let typeCategory = null;


btnShowMadal.addEventListener("click", modalShow);
btnCloseModal.addEventListener("click", modalHide);

select.addEventListener("change", () => {
    typeCategory = select.value;

    if (select.value === "Магазин") {
		formInfo.innerHTML= "";
        formInfo.insertAdjacentHTML("beforeend", createInputsForModal(store));
    } else if (select.value === "Відео хостинг") {
		formInfo.innerHTML= "";
        formInfo.insertAdjacentHTML("beforeend", createInputsForModal(video));
    } else if (select.value === "Ресторан") {
		formInfo.innerHTML= "";
		formInfo.insertAdjacentHTML("beforeend", createInputsForModal(restotation));
    } else {
        console.error("Жоден з пунктів не валідний.")
        return
    }
})

btnSaveModal.addEventListener("click", () => {
    const [...inputs] = document.querySelectorAll(".form-info input");
    const objStore = {
        id: "",
        status: false,
        productName: "",
        porductPrice: 0,
        productImage: "",
        productDescription: "",
        productQuantity: 0,
        keywords: []
    }

    if (typeCategory === "Магазин") {
        objStore.id = generationID();
        inputs.forEach((input) => {
            if (input.value.length > 3) {
                if (input.dataset.type === "Назва продукту") {
                    objStore.productName = input.value;
                } else if (input.dataset.type === "Вартість продукту") {
                    objStore.porductPrice = parseFloat(input.value);
                } else if (input.dataset.type === "Посилання на зображення") {
                    objStore.productImage = input.value;
                } else if (input.dataset.type === "Опис продукту") {
                    objStore.productDescription = input.value;
                } else if (input.dataset.type === "Ключеві слова (Розділяти комою)") {
                    objStore.keywords.push(...input.value.split(","))
                }
                input.classList.remove("error");
            } else {
                input.classList.add("error");
                return
            }
        })
        objStore.date = new Date();
        if(objStore.productQuantity <= 0){
            objStore.status = false;
        }else{
            objStore.status = true;
        }
        const store = JSON.parse(localStorage.BDStore);
        store.push(objStore);
        localStorage.BDStore = JSON.stringify(store);
    }
})

btnSaveModal.addEventListener("click", () => {
    const [...inputs] = document.querySelectorAll(".form-info input");
    const objVideo = {
		id: 1,
		videoImage: "",
		videoLink: "",
		videoName: "",
		videoGenre: [],
		videoCountry: [],
		videoProducer: "",
		videoActors: [],
		videoDuration: 0,
		videoDescription: "",
		videoYearReleased: 2022
    }

    if (typeCategory === "Відео хостинг") {
        objVideo.id = generationID();
        inputs.forEach((input) => {
            if (input.value.length > 3) {
                if (input.dataset.type === "Назва відео") {
                    objVideo.videoName = input.value;
				} else if (input.dataset.type === "Посилання на зображення") {
                    objVideo.videoImage = input.value;
				} else if (input.dataset.type === "Посилання на відео") {
                    objVideo.videoLink = input.value;
				} else if (input.dataset.type === "Жанр (Розділяти комою)") {
					objVideo.videoGenre.push(...input.value.split(","));
				} else if (input.dataset.type === "Країна виробник (Розділяти комою)") {
                    objVideo.videoCountry.push(...input.value.split(","));
                } else if (input.dataset.type === "Режисер") {
                    objVideo.videoProducer = input.value;
				} else if (input.dataset.type === "Актори (Розділяти комою)") {
					objVideo.videoActors.push(...input.value.split(","));
				} else if (input.dataset.type === "Тривалість (У хвилинах)") {
                    objVideo.videoDuration = input.value;
				} else if (input.dataset.type === "Опис відео") {
                    objVideo.videoDescription = input.value;
                } else if (input.dataset.type === "Рік випуску") {
                    objVideo.videoYearReleased = input.value;
                }
                input.classList.remove("error");
            } else {
                input.classList.add("error");
                return
            }
        })
        objVideo.date = new Date();

		const video = JSON.parse(localStorage.BDVideo);
        video.push(objVideo);
        localStorage.BDVideo = JSON.stringify(video);
    }
})

btnSaveModal.addEventListener("click", () => {
    const [...inputs] = document.querySelectorAll(".form-info input");
    const objRestotation = {
        id: 0,
        productName: "",
		productWeight: "",
		ingredients: "",
        price: 0,
        productImageUrl: "",
		keywords: [],
		weight: 0,
        stopList: false,
        ageRestrictions: false,
		productQuantity: 0,
        like: 0
    }

    if (typeCategory === "Ресторан") {
        objRestotation.id = generationID();
        inputs.forEach((input) => {
            if (input.value.length > 3) {
                if (input.dataset.type === "Назва продукту") {
                    objRestotation.productName = input.value;
				} else if (input.dataset.type === "Вага продукту") {
					objRestotation.productWeight = input.value;
				} else if (input.dataset.type === "Інгредієнти (Розділяти комою)") {
                    objRestotation.ingredients = parseFloat(input.value);
                } else if (input.dataset.type === "Вартість продукту") {
                    objRestotation.price = parseFloat(input.value);
                } else if (input.dataset.type === "Посилання на зображення") {
                    objRestotation.productImageUrl = input.value;
				} else if (input.dataset.type === "Ключеві слова (Розділяти комою)") {
					objRestotation.keywords.push(...input.value.split(","))
                } else if (input.dataset.type === "Загальна вага") {
                    objRestotation.price = parseFloat(input.value);
                }
                input.classList.remove("error");
            } else {
                input.classList.add("error");
                return
            }
        })
        objRestotation.date = new Date();

		const restotation = JSON.parse(localStorage.BDRestotation);
        restotation.push(objRestotation);
        localStorage.BDRestotation = JSON.stringify(restotation);
    }
})




