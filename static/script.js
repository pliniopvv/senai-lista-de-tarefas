function createNote() {
  let lista = document.querySelector("#lista");
  let content = document.querySelector("#content").value;

  let hr = document.createElement("hr");
  let li = document.createElement("li");
  let div1 = document.createElement("div");
  let div2 = document.createElement("div");
  let input = document.createElement("input");
  let label = document.createElement("label");
  let div3 = document.createElement("div");
  let button = document.createElement("button");
  let i = document.createElement("i");

  li.appendChild(div1);
  div1.appendChild(div2);
  div2.appendChild(input);
  div2.appendChild(label);
  li.appendChild(div3);
  div3.appendChild(button);
  button.appendChild(i);

  label.appendChild(document.createTextNode(content));

  li.classList.add("ui", "grid");
  div1.classList.add("twelve", "wide", "column");
  div2.classList.add("ui", "checkbox");
  input.type = "checkbox";
  input.tabindex = "0";
  input.classList.add("hidden");
  //label.classList.add();
  div3.classList.add("four", "wide", "column");
  //button.classList.add();
  i.classList.add("trash", "icon");

  lista.appendChild(hr);
  lista.appendChild(li);

  button.addEventListener("click", () => {
    lista.removeChild(hr);
    lista.removeChild(li);
  });

  // active checkboxs
  $(".ui.checkbox").checkbox();
}
