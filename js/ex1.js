const container = document.querySelector(".container");
const shortcuts = [
  { name: "Prakticum", url: "https://prakticum.fi", img: "/img/prakticum-logo.png" },
  { name: "Wilma", url: "https://prakticum.inschool.fi", img: "/img/prakticum-logo.png" },
  { name: "e-post", url: "https://outlook.office.com/", img: "/img/prakticum-logo.png" },
  { name: "Google drive", url: "https://drive.google.com", img: "/img/prakticum-logo.png" },
  { name: "Google classroom", url: "https://classroom.google.com", img: "/img/prakticum-logo.png" },
  { name: "Github", url: "https://github.com", img: "/img/prakticum-logo.png" }
]

const showShortcuts = () => {
  let output = ""
  shortcuts.forEach(
    ({ name, url, img }) =>
      (output += `
              <div class="card">
                <img src="${img}" alt="${name}" >
                <h1>${name}</h1>
                <a href="${url}">Let's go!</a>
              </div>
              `)
  )
  container.innerHTML = output
}

document.addEventListener("DOMContentLoaded", showShortcuts)