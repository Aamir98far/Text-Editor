let optionsButtons = document.querySelectorAll(".option-button");
let advancedOptionButton = document.querySelectorAll(".adv-option-button");
let FontName = document.getElementById("FontName"); // Fix variable name case
let fontSizeRef = document.getElementById("fontSize"); // Fix variable name case
let writingArea = document.getElementById("text-input");
let linkButton = document.getElementById("createLink");
let alignButton = document.querySelectorAll(".align");
let spacingButton = document.querySelectorAll(".spacing");
let formatButton = document.querySelectorAll(".format");
let scriptButton = document.querySelectorAll(".script");

let fontList = [
  "Arial",
  "Verdana",
  "Time New Roman",
  "Geramond",
  "Courier New",
  "Cursive"
];

const initializer = () => {
  highlighter(alignButton, true);
  highlighter(spacingButton, true);
  highlighter(formatButton, false);
  highlighter(scriptButton, true);
  fontList.map((value) => {
    let option = document.createElement("option");
    option.value = value;
    option.innerHTML = value;
    FontName.appendChild(option); // Fix variable name
  });
  for (let i = 1; i <= 7; i++) {
    let option = document.createElement("option");
    option.value = i;
    option.innerHTML = i;
    fontSizeRef.appendChild(option); // Fix variable name
  }
  fontSizeRef.value = 3;
};

advancedOptionButton.forEach((button) => {
  button.addEventListener("change", () => {
    modifyText(button.id, false, button.value);
  });
});

linkButton.addEventListener("click", () => {
  let userLink = prompt("Enter a URL");
  if (/http/i.test(userLink)) {
    modifyText(linkButton.id, false, userLink);
  } else {
    userLink = "http://" + userLink;
    modifyText(linkButton.id, false, userLink);
  }
});

const modifyText = (command, defaultUi, value) => {
  document.execCommand(command, defaultUi, value);
};

optionsButtons.forEach((button) => {
  button.addEventListener("click", () => {
    modifyText(button.id, false, null);
  });
});

const highlighter = (className, needsRemoval) => {
  className.forEach((button) => {
    button.addEventListener("click", () => {
      if (needsRemoval) {
        let alreadyActive = false;
        if (button.classList.contains("active")) {
          alreadyActive = true;
        }
        highlighterRemover(className);
        if (!alreadyActive) {
          button.classList.add("active");
        }
      } else {
        button.classList.toggle("active");
      }
    });
  });
};

const highlighterRemover = (className) => {
  className.forEach((button) => {
    button.classList.remove("active");
  });
};

initializer(); // Invoke the initializer function
