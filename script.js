// const cardTitle = document.getElementById('card-title')

// cardTitle.innerHTML = '<h1 style="color:red">Title</h1>';


// const changeCode = document.querySelector('ul li')


// changeCode.style.color = 'orangered';
// document.querySelector('li:last-child').style.color = 'pink';


// document.querySelector('li:nth-child(2)').style.color = 'blue';

// document.querySelector('li:nth-child(3)').innerText = 'write a diary';

// document.querySelector('li:nth-child(odd)').style.backgroundColor = '#f4f4f4';


// const item = document.getElementsByClassName('collection-item');

// console.log(item);
// console.log(item[0]);

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

// console.log(listItems);

//Convert HTML collection into array
// let lis = document.getElementsByTagName('li');

// lis=Array.from(lis);

// lis.reverse();

//  lis.forEach(function(li, index){
//     console.log(li.className);
//     li.innerText =`${index}: Hello`;
//  });   

// console.log(lis);


// const items = document.querySelectorAll('li.collection-item');

// //  items.forEach(function(item, index){
// //     item.innerText =`${index}: Hello`;
// //  });   

// items.forEach(function(item){
//     item.style.color = 'orangered';

//  });


//  const liOdd = document.querySelectorAll('li:nth-child(odd)');

//  liOdd.forEach(function(li){
//     li.style.backgroundColor = '#f3f3f3';
//  });


//  const liEven = document.querySelectorAll('li:nth-child(even)');

//  liEven.forEach(function(li) {
//      li.innerText = 'orangered';
//  });

// console.log(liOdd, liEven);


// *** create new element

// const li = document.createElement('li');

// li.className = 'collection-item';
// li.id = 'new-item';
// li.setAttribute('title', 'New Item');
// li.appendChild(document.createTextNode('Hello World'));
// document.querySelector('ul.collection').appendChild(li);

// // creat new link

// const link = document.createElement('a');

// link.className = 'delete-item secondary-content';
// link.href = '#';
// link.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>';
// li.appendChild(link);



// console.log(li);

// const newHeading = document.createElement('h5');
// newHeading.id = 'task-title';
// newHeading.appendChild(document.createTextNode('To do list'));

// const oldHeading = document.getElementById('task-title');
// const cardAction = document.querySelector('.card-action');

// cardAction.replaceChild(newHeading, oldHeading);




// const lisIt = document.querySelectorAll('li');
// const list = document.querySelector('ul');

// lisIt[4].remove();
// list.removeChild(lisIt[3]);


// const firstItem = document.querySelector('li:first-child');
// const link = firstItem.children[0];

// let val;

// val = link.className;
// val = link.classList;
// val = link.classList[0];
// link.classList.add('test');
// link.classList.remove('test');
// val = link;

// val = link.getAttribute('href');
// val = link.setAttribute('href', 'http://google.com');
// link.setAttribute('title', 'google');
// link.removeAttribute('title');
// val = link;


// console.log(val);

// document.querySelector('.clear-tasks').addEventListener('click',
//   function () {
//     console.log('Hello World');
//   });

// const card = document.querySelector('.container');
// const taskTitle = document.querySelector('h5');

// card.addEventListener('mousemove', runEvent);

// function runEvent(e) {
//   taskTitle.textContent = `X=${e.offsetX}, Y=${e.offsetX}`;
//   document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetX},20)`;
// }

// const form = document.querySelector('form');
// const taskInput = document.getElementById('task');

// form.addEventListener('submit', runEvent);

// function runEvent(e) {
//   console.log(taskInput.value);

//   e.preventDefault();
// }


// document.body.addEventListener('click', deleteItem);

// function deleteItem(e) {
//   if (e.target.parentElement.classList.contains('delete-item')) {
//     e.target.parentElement.parentElement.remove();
//   }
// }

document.querySelector('form').addEventListener('submit',
  function (e) {
    const task = document.getElementById('task').value;

    let tasks;

    if (localStorage.getItem('tasks') === null) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));


    e.preventDefault();
  });