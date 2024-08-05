const styles = document.createElement("style");

styles.innerHTML = `

    /* 
     * RESET CSS
     */
    
    input {
      padding-inline: 0px;
      padding-block: 0px;
    }
    textarea {
        padding: 0px;
        resize: none;
    }
    * { box-sizing: border-box; }

    /* 
     * NOTE COLORS
     */
    
    :root {
        --notes-color-gray:hsl(0, 0%, 55%);
        --notes-color-yellow: hsl(40, 65%, 54%);
        --notes-color-pink: hsl(300, 65%, 64%);
        --notes-color-green: hsl(80, 65%, 54%);
        --notes-color-blue: hsl(200, 65%, 54%);
    }

    .notes-bg-gray { background-color: var(--notes-color-gray); }
    .notes-bg-yellow { background-color: var(--notes-color-yellow); }
    .notes-bg-pink { background-color: var(--notes-color-pink); }
    .notes-bg-green { background-color: var(--notes-color-green); }
    .notes-bg-blue { background-color: var(--notes-color-blue); }


    /* 
     * NOTE STYLES
     */
     
    .note {
        width: 100%;
        height: 230px;
        color: black;
        border: none;
        border-radius: 3px;
    }

    .note-title {
        width: 100%;
        height: 50px;
        font-size: large;
        font-weight: 300;
        border: none;
        padding: 4%;
        color: inherit;
        background-color: inherit;
    }

    .note-title::placeholder, .note-content::placeholder {
        color: inherit;
    } 

    .note-content {
        width: 100%; 
        height: 180px;
        border: none;
        padding: 4%;
        color: inherit;
        background-color: inherit;
    }
`;


const template = document.createElement("template");

template.innerHTML = `

<section id="simple-note" class="note">
    <input
        class="note-title"
        type="text"
        name="title"
        placeholder="Título">

    <textarea class="note-content" name="content" placeholder="Escreva sua nota aqui..."></textarea>

</section>`;

template.content.append(styles);

export default template;