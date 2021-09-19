$(function () {
    var todoInput = $("#input_todo");
    var startBtn = $("#start_btn");
    var resultList = $("#result_list");

    function addList() {
        var todoValue = todoInput.val();
        resultList.append(`<li class="todo">
                            <i class="far fa-check-square"></i>
                            <span>${todoValue}</span>
                            <i class="fas fa-trash"></i>
                        </li>`);
    } 

    startBtn.on('click', addList);
})

