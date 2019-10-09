function showDishes(data) {
    var output = document.getElementById('output');
    output.setAttribute("class", "card-group");

    var content = '';
    for (i=0;i<data.dishes.length;i++)
	{
        content += '<div class="card" style="width: 20rem;">'
		//pulls content hosted from my Google Drive
		//image data is pulled from file, using link to directory
        content += '<img class="card-img-top" src="C:\Users\just_\OneDrive\Documents\JS\images'+data.dishes[i]["image"]+'" alt="vintage Fiestaware picture">';
		content += '<div class="card-body">';
		//name of dish is pulled from file
        content += '<h5 class="card-title">'+data.dishes[i].dish+'</h5>';
		//Years data and Colors Produced pulled from file
        content += '<p class="card-text">Description: <br>' + data.dishes[i]["Years Produced"] + '</p>';
		content += '<p class="card-text">Description: <br>' + data.dishes[i]["Colors"] + '</p>';
        content += '</div></div>';
    }
    document.getElementById('output').innerHTML = content;
}


function get_todos() {
    var todos = new Array;
    var todos_str = localStorage.getItem('todo');
    if (todos_str !== null) {
        todos = JSON.parse(todos_str); 
    }
    return todos;
}
 
function add() {
    var task = document.getElementById('task').value;
 
    var todos = get_todos();
    todos.push(task);
    localStorage.setItem('todo', JSON.stringify(todos));
 
    show();
 
    return false;
}
 
function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
 
    show();
 
    return false;
}
 
function show() {
    var todos = get_todos();
 
    var html = '<ul>';
    for(var i=0; i<todos.length; i++) {
        html += '<li>' + todos[i] + '<button class="remove" id="' + i  + '">x</button></li>';
    };
    html += '</ul>';
 
    document.getElementById('todos').innerHTML = html;
 
    var buttons = document.getElementsByClassName('remove');
    for (var i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };
}
 
document.getElementById('add').addEventListener('click', add);
show();