const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  // const today = "18/01"
  alert("Dia de hoje é " + today)

  const dayExists = nlwSetup.dayExists(today)
  if (dayExists) {
    alert("Este dia já está registrado")
    return
  }

  nlwSetup.addDay(today)
  alert("Dia registrado com sucesso")
}

function save() {
  localStorage.setItem("nlwSetup@habits", JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem("nlwSetup@habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()
