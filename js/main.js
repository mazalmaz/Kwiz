function formStep() {
    const quizStep = document.querySelectorAll(".quiz__step");
    const quizStepButtonNext = document.querySelectorAll(".quiz__step__button__next");
    const quizStepButtonPrev = document.querySelectorAll(".quiz__step__button__prev");
    const screenWidth = document.documentElement.clientWidth;
    for (let i = 0; i < quizStep.length; i++) {
        quizStep[i].classList.remove("active");
        let li = document.createElement('li');
        document.querySelector(".quiz__step__scale").append(li);
        function next() {

            if (i !== quizStep.length - 1) {

                quizStep[i].classList.remove("active");
                quizStep[i + 1].classList.add("active");

                for (let x = 0; x < quizStepScale.length; x++) {

                    quizStepScale[x].classList.remove("active");
                }
                quizStepScale[i + 1].classList.add("active");

            }
        }
        function prev() {
            quizStep[i].classList.remove("active");
            quizStep[i - 1].classList.add("active");

            for (let x = 0; x < quizStepScale.length; x++) {

                quizStepScale[x].classList.remove("active");
            }
            quizStepScale[i - 1].classList.add("active");
        }
        if (i == 0) {
            quizStepButtonPrev[i].style.display = "none";
            quizStepButtonNext[i].classList.add("green");
        }
        if (i == quizStep.length - 1) {
            quizStepButtonPrev[i].style.display = "none";
            quizStepButtonNext[i].style.display = "none";
        }
        let labelRadio = quizStep[i].querySelectorAll(".label-radio");
        if (labelRadio.length > 0) {
            for (let c = 0; c < labelRadio.length; c++) {
                labelRadio[c].addEventListener("click", function () {
                    setTimeout(next, 500);
                });
            }
        }
        quizStepButtonNext[i].addEventListener("click", next);
        quizStepButtonPrev[i].addEventListener("click", prev);
    }
    let quizStepScale = document.querySelectorAll(".quiz__step__scale > li");
    let scaleElemWidth = 100 / quizStepScale.length;
    for (let i = 0; i < quizStepScale.length; i++) {
        
        if (screenWidth > 720) {
            quizStepScale[i].style.width = scaleElemWidth + "%";
        }
        else {
            quizStepScale[i].style.height = scaleElemWidth + "%";
        } 
        quizStepScale[i].addEventListener("click", function () {
            for (let x = 0; x < quizStepScale.length; x++) {
                quizStep[x].classList.remove("active");
                quizStepScale[x].classList.remove("active");
            }
            quizStep[i].classList.add("active");
            this.classList.add("active");
       });
    }
    quizStepScale[0].click();
    document.querySelector(".thenks__close").addEventListener("click", function () {
        document.querySelector(".thenks").style.display = "none";
        quizStep[0].classList.add("active");
    })
    document.querySelector(".quiz__step__submit").onclick = function () {  
        var msg = $('#form1').serialize();
        $.ajax({
            type: 'POST',
            url: 'send.php',
            data: msg,
            success: function (data) { 
                quizStep[quizStep.length - 1].classList.remove("active");
                document.querySelector(".thenks").style.display = "flex";
   
            },
            error: function (xhr, str) { //ошибка выводит соответствующее сообщение 
                alert('Возникла ошибка: ' + xhr.responseCode);
            }
        });
    }
}
formStep();

