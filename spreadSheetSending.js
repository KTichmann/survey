const addSpreadSheetEvents = () => {
  let list = [];
  document.querySelectorAll(".choice").forEach(node =>
    node.addEventListener("click", e => {
      list.push(e.target.textContent);
    })
  );
  document.getElementById("input").addEventListener("click", () => {
    document.getElementById("path").value = list.toString().replace(/\,/g, ' ▶ ');
    list = [];
  });
}

export default addSpreadSheetEvents;
