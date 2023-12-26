class SearchBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  set clickEvent(e) {
    this._clickEvent = e;
    this.render();
  }

  get value() {
    return this.shadowDOM.querySelector("#searchElement").value;
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
      .search-container {
        padding: 16px ;
        border-radius: 5px;
        display: flex;
        position: sticky;
        top: 10px;
        background-color: white;
        box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.1)
      }
      
      .search-container > input {
        width: 75%;
        padding: 16px;
        border: 0;
        border-bottom: 1px solid #183d3d;
        font-weight: bold;
      }
      
      .search-container > input:focus {
        outline: 0;
        border-bottom: 2px solid #183d3d;
      }
      
      .search-container > input:focus::placeholder {
        font-weight: bold;
      }
      
      .search-container > input::placeholder {
        color: #183d3d;
        font-weight: normal;
      }
      
      .search-container > button {
        width: 23%;
        min-width: 64px;
        min-height: 44px;
        cursor: pointer;
        margin-left: auto;
        padding: 16px;
        background-color: #183d3d;
        color: white;
        border: 0;
        text-transform: uppercase;
      }
      
      .search-container > button:hover {
        transition: 1.2s;
        background-color: #040d12;
        color: white;
      }

      .search-container > button:focus {
        background-color: #040d12;
        color: white;
      }
      
      @media screen and (max-width: 550px) {
        .search-container {
          flex-direction: column;
          position: static;
        }
      
        .search-container > input {
          width: 100%;
          margin-bottom: 12px;
        }
      
        .search-container > button {
          width: 100%;
        }
      }
      
      </style>
  
      <div id="search-container" class="search-container">
      <input placeholder="Search restaurant" id="searchElement" type="search" tabIndex="0" />
      <button id="searchButtonElement" type="submit">Search</button>
      </div>
      
     `;

    this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
  }
}

customElements.define("search-bar", SearchBar);
