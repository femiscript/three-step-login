let btn = document.querySelectorAll("a");

btn.forEach((button) => {
    button.addEventListener('click', (e) => {
        console.log(e.currentTarget);

        if (e.currentTarget.classList.contains('finish-next')) {
            document.querySelector(".finish").classList.toggle('hidden');
            document.querySelector(".username").classList.toggle('hidden');
            document.querySelector("body").style.background = "#fc4a4a";
        }
        else if (e.currentTarget.classList.contains('name-next')) {
            document.querySelector(".username").classList.toggle('hidden');
            document.querySelector(".email").classList.toggle('hidden');
            document.querySelector("body").style.background = "#0f8d39";
        }
        else if (e.currentTarget.classList.contains('email-next')) {
            document.querySelector(".email").classList.toggle('hidden');
            document.querySelector(".password").classList.toggle('hidden');
            document.querySelector("body").style.background = "#059fce";
        }
        else if (e.currentTarget.classList.contains('password-next')) {
            document.querySelector(".password").classList.toggle('hidden');
            document.querySelector(".finish").classList.toggle('hidden');
            document.querySelector("body").style.background = "#ce6605";
        }
    });
});