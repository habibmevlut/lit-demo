import { LitElement, html, css } from "lit";

class App extends LitElement {
    static properties = {
        value: {type: String},
        hobbies: {type: Array},
    };

    static styles = css`
      * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        font-family: sans-serif;
      }

      .container {
        background-color: #f0f0f0;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      .main {
        width: 50%;
      }

      .input-container {
        display: flex;
      }

      ul {
        list-style: none;
        margin-top: 20px;
        margin-bottom: 10px;
        color: green;
        text-align: left;
        width: 100%;
        font-size: 17px;
      }

      h4 {
        text-align: center;
      }

      input {
        width: 100%;
        padding: 10px;
      }
    `;

    constructor() {
        super();
        this.value = "";
        this.hobbies = [
            {text: "Reading"},
            {text: "Eating"},
            {text: "Cooking"},
        ];
    }

    addHobbie() {
        const hobby = this.value;
        this.hobbies.push({
            text: hobby,
            completed: false,
        });
        this.value = "";
        this.requestUpdate();
    }

    render() {
        return html`
            <div class="container">
                <div class="main">
                    <h4>Daily Hobby</h4>
                    <ul>
                        ${this.hobbies.map((item) => html`
                            <li>${item.text}</li>`)}
                    </ul>
                    <div class="input-container">
                        <input
                                type="text"
                                placeholder="Add a hobbie"
                                .value=${this.value}
                                @input=${(e) => (this.value = e.target.value)}
                        />
                        <button @click=${this.addHobbie}>Add Hubbie</button>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("my-element", App);
