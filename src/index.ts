import styles from "./styles.css";

console.dir(styles);
const className = styles.app; //Cannot read property 'app' of undefined

const div = document.createElement("div");
div.className = className;
document.body.appendChild(div);
