document.querySelector('#push').onclick = function(){

    if(document.querySelector('#newtask textarea').value.length == 0){
        alert("Please Enter a Task")
    }

    else{
        document.querySelector('#tasks').innerHTML += `
            <div class="task" id="edit">
                <span id="taskname" class="edit">
                    ${document.querySelector('#newtask textarea').value}
                    ${document.querySelector('#newtask textarea').value = ''}
                </span>

                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>

            </div>
        `;

        let current_tasks = document.querySelectorAll(".delete");
        for(let i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }

        let current_edit = document.querySelectorAll("#edit");
        for(let i=0; i<current_edit.length; i++){
            current_edit[i].onclick = function(){
                this.contentEditable = true;
            }
        }
    }
}






