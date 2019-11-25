class MSList extends HTMLElement {
  constructor() {
    super();
    const oldOrder = [...this.children];
  }
  static get observedAttributes() {
    return ["reverse", "seperate", "sort"];
  }
  attributeChangedCallback(attrName, oldVal, newVal) {
    switch (attrName) {
      case "reverse":
        this.reverse();
        break;
      case "seperate":
        this.seperate(newVal === "");
        break;
      case "sort":
        this.sort(newVal);
        break;
      default:
        break;
    }
  }
  sort(type) {
    let sortedList = [...this.children]
    switch (type) {
      case "alphabetical":
        fo
        break;
    
      default:
        console.log("exit")
        break;
    }
  }
  reverse() {
    [...this.children].reverse().forEach(listItem => {
      listItem.remove();
      this.appendChild(listItem);
    });
  }
  seperate(status) {
    let children = [...this.children];
    if (status) children.pop();
    children.forEach(listItem =>
      status
        ? listItem.appendChild(document.createElement("hr"))
        : listItem.querySelector("hr").remove()
    );
  }
}
customElements.define("ms-list", MSList);
