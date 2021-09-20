$(function () {
    var todoInput = $("#input_todo");
    var startBtn = $("#start_btn");
    var resultList = $("#result_list");
    var deleteBtn = $(".delete_btn");
    var i = 1;

    function addList() {
        var todoValue = todoInput.val();
        resultList.append(`<li class="todo" id="id_${i}">
                            <button class="check_btn"><i class="far fa-check-square"></i></button
                            <span>${todoValue}</span>
                            <button class="delete_btn"><i class="fas fa-trash"></i></button>
                        </li>`);
        i += 1;

        $('.delete_btn').on('click', function() {
            $(this).parent().remove();
        })

        $('.check_btn').on('click', function() {
            if ($(this).parent().children().length == 3) {
                $(this).parent().children('.line').remove();
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
    }

    startBtn.on('click', addList);
})

