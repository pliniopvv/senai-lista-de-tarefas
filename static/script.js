function createNote() {
  let lista = document.querySelector("#lista");
  let content = document.querySelector("#content").value;
  document.querySelector("#content").value = "";

  if (content.length <= 0) return;

  let hr = document.createElement("hr");

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

  p.appendChild(document.createTextNode(content));

  li.classList.add("ui", "grid");
  div1.classList.add("two", "wide", "column");
  div2.classList.add("ui", "checkbox");
  input.type = "checkbox";
  input.tabindex = "0";
  input.classList.add("hidden");

  div3.classList.add("ten", "wide", "column");
  div4.classList.add("myDescription");
  //p.classList.add();

  div5.classList.add("four", "wide", "column");
  //button.classList.add();
  i.classList.add("trash", "icon");

  if (lista.children.length != 0) lista.appendChild(hr);
  lista.appendChild(li);

  button.addEventListener("click", () => {
    lista.removeChild(li);
    if (lista.contains(hr)) lista.removeChild(hr);
  });

  // active checkboxs
  $(".ui.checkbox").checkbox();
}
