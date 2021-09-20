var today = document.getElementById("today");
var day = document.getElementById("day");
var todoInput = document.getElementById("input_todo");
var startBtn = document.getElementById("start_btn");
var resultList = document.getElementById("result_list");
var cnt = 1;

var date = new Date();
today.innerText = `${date.getFullYear()}년 ${date.getMonth()+1}월 ${date.getDate()}일`;
switch(date.getDay()) {
    case 0 : day.innerText = '일요일'; break;
    case 1 : day.innerText = '월요일'; break;
    case 2 : day.innerText = '화요일'; break;
    case 3 : day.innerText = '수요일'; break;
    case 4 : day.innerText = '목요일'; break;
    case 5 : day.innerText = '금요일'; break;
    case 6 : day.innerText = '토요일'; break;
}

//     $('#remain_todo').html(`${resultList.children().not('.checked').length}개`);

function addList() {
    var todo = document.createElement('li');
    var todoValue = todoInput.value;
    if (!todoValue) {
        alert('투두를 입력해주세요.')
        return 0;
    }
    todo.setAttribute('class', 'todo');
    todo.setAttribute('id', `li_${cnt}`);

    var checkBtn = document.createElement('button');
    checkBtn.setAttribute('class', 'check_btn');
    var checkIcon = document.createElement('i');
    checkIcon.setAttribute('class', 'far fa-check-square');
    checkBtn.appendChild(checkIcon);
    checkBtn.addEventListener('click', checkList);
    todo.appendChild(checkBtn);

    var span = document.createElement('span');
    span.innerText = todoValue;
    todo.appendChild(span);

    var div = document.createElement('div');
    var updateBtn = document.createElement('button');
    updateBtn.setAttribute('class', 'update_btn');
    var updateIcon = document.createElement('i');
    updateIcon.setAttribute('class', 'fas fa-pencil-alt');
    updateBtn.appendChild(updateIcon);
    updateBtn.addEventListener('click', updateList);
    div.appendChild(updateBtn);

    var deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class', 'delete_btn');
    var deleteIcon = document.createElement('i');
    deleteIcon.setAttribute('class', 'fas fa-trash');
    deleteBtn.appendChild(deleteIcon);
    deleteBtn.addEventListener('click', deleteList);
    div.appendChild(deleteBtn);
    todo.appendChild(div);
    resultList.appendChild(todo);
    cnt++;
}

function checkList(event) {
    const li = event.target.offsetParent;
    if (li.children[3]) {
        li.children[3].remove();
    } else {
         var line = document.createElement('div');
        line.setAttribute('class', 'line');
        line.style.position = "absolute";
        line.style.top = "50%";
        line.style.left = "0px";
        line.style.margin = '0px';
        line.style.width = '100%';
        line.style.height = '1px';
        line.style.zIndex = '-1';
        line.style.backgroundColor = 'black';
        li.appendChild(line);
    }
}

function updateList(event) {
    var li = event.target.offsetParent;
    var todoValue = li.children[1];
    var updateTodo = prompt('투투 값을 변경해주세요', todoValue.innerText);
    if (updateTodo) {
        todoValue.innerText = updateTodo;
    }
}

function deleteList(event) {
    const li = event.target.offsetParent;
    li.remove();
    // $('#remain_todo').html(`${resultList.children().not('.checked').length}개`);
    // $(this).parents('.todo').remove();
}
//         $('#remain_todo').html(`${resultList.children().not('.checked').length}개`);

//         $('.delete_btn').on('click', function() {
//             $('#remain_todo').html(`${resultList.children().not('.checked').length}개`);
//             $(this).parents('.todo').remove();
//         })

//         $('.check_btn').on('click', function() {
//             var todo = $(this).parents('.todo').attr('id');
//             console.log(todo);
//             if ($(`#${todo}`).children().length == 4) {
//                 $(`#${todo}`).children('.line').remove();
//                 // $(this).parents('.todo').removeClass('checked');
//                 // $('#remain_todo').html(`${resultList.children().not('.checked').length}개`);
//             } else {
//                 // $('#remain_todo').html(`${resultList.children().not('.checked').length}개`);
//                 var line = document.createElement('div');
//                 line.setAttribute('class', 'line');
//                 line.style.position = "absolute";
//                 line.style.top = "50%";
//                 line.style.left = "0px";
//                 line.style.margin = '0px';
//                 line.style.width = '100%';
//                 line.style.height = '1px';
//                 line.style.zIndex = '-1';
//                 line.style.backgroundColor = 'black';
//                 $(`#${todo}`).append(line);
//                 // $(this).parents('.todo').addClass('checked');
//             }
            
//         })

//         $('.update_btn').on('click', function() {
//             var updateTodo = prompt('투투 값을 변경해주세요', `${$(this).parents('.todo').children('span').text()}`);
//             if (updateTodo) {
//                 $(this).parents('.todo').children('span').html(updateTodo);
//             } 
//         })
//     }

//     startBtn.on('click', addList);
// })

startBtn.addEventListener('click', addList);