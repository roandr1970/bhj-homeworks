const interest_check = document.querySelectorAll('.interest__check');
const interestCheck = Array.from(interest_check);


for (let i = 0; i < interestCheck.length; i++) {
    interestCheck[i].addEventListener('change', () => {
    
        if (interestCheck[0].checked == true) {
            interestCheck[1].checked = true;
            interestCheck[2].checked = true;
        } else {
            interestCheck[1].checked = false;
            interestCheck[2].checked = false;
        }

        if (interestCheck[3].checked == true) {
            interestCheck[4].checked = true;
            interestCheck[5].checked = true;
        } else {
            interestCheck[4].checked = false;
            interestCheck[5].checked = false;
        }
    })
}
