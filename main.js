const container = document.querySelector('.container');
const Library = [];

function book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${title} by ${author},${pages} pages, ${read}`
    }
}

function add(title, author, pages, read) {
    const b = new book(title, author, pages, read);
    Library.push(b);
    const d = document.createElement('div');
    d.className = 'child';
    const str1 = `Book:${b.title}`;
    const str2 = `Author:${b.author}`;
    const str3 =  `Pages:${b.pages}`;
    const str4 = `${b.read}`;
    const p1 = document.createElement('p');
    p1.textContent = str1;
    const p2 = document.createElement('p');
    p2.textContent = str2;
    const p3 = document.createElement('p');
    p3.textContent = str3;
    const p4 = document.createElement('p');
    p4.className = 'reading';
    p4.textContent = str4;
    const button = document.createElement('button');
    button.className = 'readBtn';
    const del = document.createElement('button');
    del.textContent  = 'Delete book';
    del.className = 'delete';

d.appendChild(p1);
d.appendChild(p2);
d.appendChild(p3);
d.appendChild(p4);
d.appendChild(button);
d.appendChild(del);
container.appendChild(d);
}

function reset() {
    form.book.value = null;
    form.author.value = null;
    form.pages.value = null;
    form.read.value = null;
    form.style.display = 'none';
}

const form = document.querySelector('.hide');
const addButton = document.querySelector('.add');
addButton.addEventListener('click', ()=> {
    form.style.display = 'block';
})

const submit = document.querySelector('.submit');
submit.addEventListener('click', (e)=> {
    e.preventDefault();
    add(form.book.value, form.author.value, form.pages.value, form.read.value);
    document.querySelectorAll('.delete').forEach(item=> {
        item.addEventListener('click', ()=> {
            const temp = item.parentElement;
            temp.remove();
        })
    });
    document.querySelectorAll('.readButton').forEach(item=> {
        item.addEventListener('click', ()=> {
            const temp = item.parentElement;
            if(temp.children[3].innerHTML == 'Read') {
                temp.children[3].innerHTML = 'not Read';
            }
            else {
                temp.children[3].innertHTML = 'Read';
            }
        })
    });
    reset();
});