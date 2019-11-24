export default class MSList extends HTMLElement {
  public sortTypes: { [key: string]: string[] };
  public order: string[] | undefined;
  constructor(public element: HTMLElement) {
    super();
    this.sortTypes = {
      "alphabetLower": ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
      "alphabetUpper": ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    }
    if (!element) return
    this.order = this.sortTypes[element.getAttribute("order-type")!]
    if(this.order) this.createOrder()

  }
  public createOrder(): void {
    let lastIndex = 0;
    
    let getIndex = (index: number): string => {
      let meta: string = this.order![index] || `${this.order![lastIndex]}.${this.order![index - (this.order!.length * (lastIndex + 1))]}`
      if (!(this.order![index - (this.order!.length * (lastIndex + 1))]) && !this.order![index]) {
        lastIndex++
        meta = `${this.order![lastIndex]}.${this.order![index - (this.order!.length * (lastIndex + 1))]}`
      }
      return meta

    }
    [...this.element.children].forEach((child, index) => {
      let metadataElement = child.querySelector("ms-list-item-metadata") || document.createElement("ms-list-item-metadata")
      if (!this.order) metadataElement.textContent = (index + 1).toString()
      else metadataElement.textContent = getIndex(index)

      if (!child.querySelector("ms-list-item-metadata")) child.appendChild(metadataElement)
    });
  }
}
customElements.define("ms-list", MSList);
