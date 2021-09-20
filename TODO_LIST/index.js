$(function () {
    var todoInput = $("#input_todo");
    var startBtn = $("#start_btn");
    var resultList = $("#result_list");
    var i = 1;

    function addList() {
        var todoValue = todoInput.val();
        if (!todoValue) {
            alert('투두를 입력해주세요.')
            return 0;
        }
        resultList.append(`<li class="todo" id="id_${i}">
                            <button class="check_btn"><i class="far fa-check-square"></i></button>
                            <span>${todoValue}</span>
                            <div>
                                <button class="update_btn"><i class="fas fa-pencil-alt"></i></button>
                                <button class="delete_btn"><i class="fas fa-trash"></i></button>
                            </div>
                        </li>`);
        i += 1;

        $('.delete_btn').on('click', function() {
            $(this).parents('.todo').remove();
        })

        $('.check_btn').on('click', function() {
            if ($(this).parents('.todo').children().length == 4) {
                $(this).parents('.todo').children('.line').remove();
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
                $(`#id_${i-1}`).append(line);
            }
            
        })

        $('.update_btn').on('click', function() {
            var updateTodo = prompt('투투 값을 변경해주세요', `${$(this).parents('.todo').children('span').text()}`);
            if (updateTodo) {
                $(this).parents('.todo').children('span').html(updateTodo);
            } 
        })
    }

    startBtn.on('click', addList);
})

