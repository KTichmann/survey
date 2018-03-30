const addSpreadSheetEvents = () => {
  let list = [];
  document.querySelectorAll("a").forEach(node =>
    node.addEventListener("click", e => {
      //Do something
      list.push(e.target.textContent);
      console.log(list);
    })
  );
  document.getElementById("input").addEventListener("click", () => {
    document.getElementById("path").value = list.toString().replace(/\,/g, ' ▶ ');
  });
}

export default addSpreadSheetEvents;
