const menuButton =
    document.querySelector("#menu");

const navigation =
    document.querySelector(".navigation");

if (menuButton && navigation) {

    menuButton.addEventListener("click", () => {

        navigation.classList.toggle("open");

    });

}

const currentYear =
    document.querySelector("#current-year");

if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}