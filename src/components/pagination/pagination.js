import { DivComponent } from "../../common/div-componnent";
import "./pagination.css";

export class Pagination extends DivComponent {
  constructor(state) {
    super();
    this.state = state;
  }

  #moveNext() {
    this.state.offset += 1;
    console.log(this.state.offset);
  }

  #movePrevious() {
    if (this.state.offset > 0) {
      this.state.offset -= 1;
      console.log(this.state.offset);
    }
  }

  render() {
    this.el.classList.add("pagination");
    this.el.innerHTML = `
      <div class="wrapper">
        <button class="arrow-back pagi-button">Previous page</button>
        <button class="arrow-next pagi-button">Next page</button>
      </div>
    `;

    const back = this.el.querySelector(".arrow-back");
    const next = this.el.querySelector(".arrow-next");

    if (back) back.addEventListener("click", this.#movePrevious.bind(this));
    if (next) next.addEventListener("click", this.#moveNext.bind(this));

    return this.el;
  }
}
