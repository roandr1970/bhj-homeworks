const book = document.getElementById('book');
const font_size = document.getElementsByClassName('font-size');
const fontSize = Array.from(font_size);
let f = 1;
for (let i = 0; i < fontSize.length; i++) {
    fontSize[i].addEventListener('click', function(event) {
        event.preventDefault();
        fontSize[i].classList.toggle("font-size_active");
        fontSize[f].classList.toggle("font-size_active");
        f = i;
        if (fontSize[i].dataset.size == 'small') {
            book.classList.remove('book_fs-big');
            book.classList.toggle('book_fs-small');
        } else if (fontSize[i].dataset.size == 'big'){
            book.classList.remove('book_fs-small');
            book.classList.toggle('book_fs-big');
        } else {
            book.classList.remove('book_fs-small');
            book.classList.remove('book_fs-big');
        }   
    });
}