const interest_check = document.querySelectorAll('.interest__check');
const interestCheck = Array.from(interest_check);

interestCheck[0].addEventListener('change', () => {
    if (interestCheck[0].checked ) {
        interestCheck[1].checked = true;
        interestCheck[2].checked = true;
    } else {
        interestCheck[1].checked = false;
        interestCheck[2].checked = false;
    }
})

interestCheck[1].addEventListener('change', () => {
    if (interestCheck[1].checked) {
        interestCheck[0].checked = true;
    } else if (interestCheck[1].checked == false && interestCheck[2].checked == false) {
        interestCheck[0].checked = false;
    }
})

interestCheck[2].addEventListener('change', () => {
    if (interestCheck[2].checked) {
        interestCheck[0].checked = true;
    } else if (interestCheck[1].checked == false && interestCheck[2].checked == false) {
        interestCheck[0].checked = false;
    }
})

interestCheck[3].addEventListener('change', () => {
    if (interestCheck[3].checked ) {
        interestCheck[4].checked = true;
        interestCheck[5].checked = true;
    } else {
        interestCheck[4].checked = false;
        interestCheck[5].checked = false;
    }
})

interestCheck[4].addEventListener('change', () => {
    if (interestCheck[4].checked) {
        interestCheck[3].checked = true;
    } else if (interestCheck[4].checked == false && interestCheck[5].checked == false) {
        interestCheck[3].checked = false;
    }
})

interestCheck[5].addEventListener('change', () => {
    if (interestCheck[5].checked) {
        interestCheck[3].checked = true;
    } else if (interestCheck[4].checked == false && interestCheck[5].checked == false) {
        interestCheck[3].checked = false;
    }
})

