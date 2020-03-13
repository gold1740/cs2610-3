/* TODO: Build up the HTML document by using JavaScript DOM manipulation functions.
 * Do not rely on changes you may have made to index.html because the grader won't use that file.
 */
document.title = "Peter Allen's Web Calculator";
var body = document.querySelector("body");
var div = document.createElement("div");
div.setAttribute("class", "blue shadowed stuff-box");
var p = document.createElement("p");
p.textContent = "Welcome to the Calculator";
div.appendChild(p);
body.appendChild(div);
div = document.createElement("div");
var form = document.createElement("form");
var num1 = document.createElement("input");
num1.setAttribute("type", "number");
num1.setAttribute("value", "2");
form.appendChild(num1);

var selection = document.createElement("select");
var select = document.createElement("option");
select.setAttribute("value", "+");
select.text = "+";
selection.appendChild(select);
select = document.createElement("option");
select.setAttribute("value", "-");
select.text = "-";
selection.appendChild(select);
select = document.createElement("option");
select.setAttribute("value", "/");
select.text = "/";
selection.appendChild(select);
select = document.createElement("option");
select.setAttribute("value", "*");
select.text = "*";
selection.appendChild(select);
select = document.createElement("option");
select.setAttribute("value", "%");
select.text = "%";
selection.appendChild(select);
select = document.createElement("option");
select.setAttribute("value", "**");
select.text = "**";
selection.appendChild(select);
form.appendChild(selection);

var num2 = document.createElement("input");
num2.setAttribute("type", "number");
num2.setAttribute("value", "2");
form.appendChild(num2);

var color = document.createElement("input");
color.setAttribute("type", "color");
color.setAttribute("value", "#000000");
form.appendChild(color);

var button = document.createElement("button");
button.textContent =  "Compute";
button.setAttribute("type", "button");
form.appendChild(button);

form.setAttribute("class", "stuff-box");
div.setAttribute("class", "black shadowed stuff-box");
div.appendChild(form);
body.appendChild(div);

button.onclick = function() {
	var toAdd = document.createElement("div");
	toAdd.style.backgroundColor = "rgb(" + String(eval('0x' + color.value.slice(1,3))) + "," + String(eval('0x' + color.value.slice(3,5))) + "," + String(eval('0x' + color.value.slice(5,7))) + ")";
	
	toAdd.setAttribute("class", "shadowed stuff-box");
	if(num1.value == "" || num2.value == "" || selection.value == "") {
		toAdd.style.backgroundColor = "rgb(255,0,0)";
		toAdd.textContent = "ERROR: one or more arguments are missing!";
	}
	else{
	toAdd.textContent = num1.value + selection.value + num2.value;
	toAdd.textContent = toAdd.textContent + " = " + eval(toAdd.textContent);}
	div.parentNode.insertBefore(toAdd, div.nextSibling);
	toAdd.onmousedown = function() {this.parentNode.removeChild(this)};
	}
