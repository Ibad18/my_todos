var i = 0;
function insertTextField() {
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    var textField = document.createElement("input");
    var removeButton = document.createElement("button")
    var saveButton = document.createElement("button")
    var hRow = document.createElement("hr")
    var br = document.createElement("br")
    i++;
    var newClassName = i.toString();
    textField.setAttribute("class", newClassName);
    removeButton.setAttribute("class", newClassName);
    saveButton.classList.add(newClassName, "btn", "btn-success");
    saveButton.setAttribute("id", newClassName);
    checkbox.setAttribute("class", newClassName);
    hRow.setAttribute("class", newClassName);
    br.setAttribute("class", newClassName);

    textField.style.marginLeft = "5px";
    textField.style.marginRight = "5px";
    textField.style.width = "40%";
    saveButton.style.marginRight = "5px"
    removeButton.className = "btn btn-danger";
    removeButton.innerText = "Remove";
    textField.type = "text";
    saveButton.innerText = "Save"
    let textFieldValue = document.getElementById("text-field").value;
    textField.value = textFieldValue;
    if (textField.value !== "") {
        document.getElementById("main").appendChild(checkbox);
        document.getElementById("main").appendChild(textField);
        document.getElementById("main").appendChild(saveButton);
        document.getElementById("main").appendChild(removeButton);
        document.getElementById("main").appendChild(hRow)
        document.getElementById("main").appendChild(br)
        document.getElementById(newClassName).style.visibility = "hidden";
    }
    document.getElementById("text-field").value = ("")
    document.getElementById("text-field").setAttribute("placeholder", "Add something to do...")
    textField.onclick = function () {
        document.getElementById(newClassName).style.visibility = "visible";
    }
    saveButton.onclick = function (){
        this.style.visibility = "hidden";
    }
    textField.onblur = function (){
        document.getElementById(newClassName).style.visibility = "hidden";
    }

    removeButton.onclick = function () {
        this.remove();
        const elements = document.getElementsByClassName(newClassName);
        const elementsArray = Array.from(elements);
        elementsArray.forEach(element => {
            element.remove();
        });



    }

}


