
let list = [];

function createTask() {
	let list = load();
	let lista = document.querySelector("#lista");
	let content = document.querySelector("#content").value;
	document.querySelector("#content").value = "";

	if (content.length <= 0) return;

	let data = { content };
	let li = buildHTMLElement(data);
	lista.appendChild(li);

	// update counter
	let eCounter = document.querySelector("#counter");
	eCounter.innerHTML = document.querySelectorAll("#lista li").length;
	
	list.push({ content, checked: false });
	save();

	// active checkboxs
	$(".ui.checkbox").checkbox();
}

function concludeTask(data) {
	data.finish = true;
}

function removeTask(data) {
	list.splice(list.indexOf(data),1);
	save();
}

function listTasks() {
	let lista = document.querySelector("#lista");
	lista.innerHTML = ''; // clear content;
        let list = load();

	for (var item of list)
		lista.appendChild(buildHTMLElement(item));
	
	
	// update counter
	let eCounter = document.querySelector("#counter");
	eCounter.innerHTML = document.querySelectorAll("#lista li").length;
	
	// active checkboxs
	$(".ui.checkbox").checkbox();
}

function save() {
	localStorage.setItem('list',JSON.stringify(list));
}

function load() {
	let _list = JSON.parse(localStorage.getItem('list'));
	if (!_list) _list = [];
	list = _list;
	return list;
}


function buildHTMLElement(data) {

	let lista = document.querySelector("#lista");

	//let hr = document.createElement("hr");

	let li = document.createElement("li");
	let div1 = document.createElement("div");
	let div2 = document.createElement("div");
	let input = document.createElement("input");
	let div3 = document.createElement("div");
	let div4 = document.createElement("div");
	let p = document.createElement("p");
	let div5 = document.createElement("div");
	let button = document.createElement("button");
	let i = document.createElement("i");

	li.appendChild(div1);
	div1.appendChild(div2);
	div2.appendChild(input);

	li.appendChild(div3);
	div3.appendChild(div4);
	div4.appendChild(p);

	li.appendChild(div5);
	div5.appendChild(button);
	button.appendChild(i);

	p.appendChild(document.createTextNode(data.content));

	li.classList.add("ui", "grid");
	div1.classList.add("two", "wide", "column");
	div2.classList.add("ui", "checkbox");
	input.type = "checkbox";
	input.checked = data?.finish;
	input.tabindex = "0";
	input.classList.add("hidden");

	div3.classList.add("ten", "wide", "column");
	div4.classList.add("myDescription");
	//p.classList.add();

	div5.classList.add("four", "wide", "column");
	//button.classList.add();
	i.classList.add("trash", "icon");

	input.addEventListener('change', (event) => {
		data.finish = event.target.checked;		
		save();
	});
	button.addEventListener("click", () => {
		let confirmation = confirm("Tem certeza que deseja excluír a tarefa?");
		if (confirmation) {
			lista.removeChild(li);
			removeTask(data);
			//if (lista.contains(hr)) lista.removeChild(hr);
			// update counter
			let eCounter = document.querySelector("#counter");
			eCounter.innerHTML = document.querySelectorAll("#lista li").length;
		}
	});

	return li; 
}
