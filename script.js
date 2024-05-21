const cont = document.querySelector(".container")

const itm = document.createElement("div")
itm.className = "itm"
const itmTwo = document.createElement("div")
itmTwo.className = "itm"
const itmTr = document.createElement("div")
itmTr.className = "itm"
const itmFour = document.createElement("div")
itmFour.className = "itm"

const img = document.createElement("img")
const imgTwo = document.createElement("img")
const imgTr = document.createElement("img")
const imgFour = document.createElement("img")

img.src = "./img/stripe.jpg"
imgTwo.src = "./img/next.jpg"
imgTr.src = "./img/full.jpg"
imgFour.src = "./img/gre.jpg"
img.alt = ""
imgTwo.alt = ""
imgTr.alt = ""
imgFour.alt = ""

const itm_info = document.createElement("div")
itm_info.className = "itmInfo"
const itmTwo_info = document.createElement("div")
itmTwo_info.className = "itmInfo"
const itmTr_info = document.createElement("div")
itmTr_info.className = "itmInfo"
const itmFour_info = document.createElement("div")
itmFour_info.className = "itmInfo"

const hElem = document.createElement("h3")
hElem.innerHTML = "title"
const hElemTwo = document.createElement("h3")
hElemTwo.innerHTML = "title"
const hElemTr = document.createElement("h3")
hElemTr.innerHTML = "title"
const hElemFour = document.createElement("h3")
hElemFour.innerHTML = "title"

const pElem = document.createElement("p")
pElem.innerHTML = "more information about..."
const pElemTwo = document.createElement("p")
pElemTwo.innerHTML = "more information about..."
const pElemTr = document.createElement("p")
pElemTr.innerHTML = "more information about..."
const pElemFour = document.createElement("p")
pElemFour.innerHTML = "more information about..."

const btn = document.createElement("button")
btn.className = "btn"
btn.innerHTML = "#stripe"
btn.classList.add("stripe")
const btnTwo = document.createElement("button")
btnTwo.className = "btn"
btnTwo.innerHTML = "#react"
btnTwo.classList.add("react")
const btnTr = document.createElement("button")
btnTr.className = "btn"
btnTr.innerHTML = "#svelte"
btnTr.classList.add("svelte")
const btnFour = document.createElement("button")
btnFour.className = "btn"
btnFour.innerHTML = "#react"
btnFour.classList.add("react")

const btn_sec = document.createElement("button")
btn_sec.className = "btn"
btn_sec.innerHTML = "#pro"
btn_sec.classList.add("pro")
const btnTwo_sec = document.createElement("button")
btnTwo_sec.className = "btn"
btnTwo_sec.innerHTML = "#nextjs"
btnTwo_sec.classList.add("next")
const btnTr_sec = document.createElement("button")
btnTr_sec.className = "btn"
btnTr_sec.innerHTML = "#firebase"
btnTr_sec.classList.add("firebase")
const btnFour_sec = document.createElement("button")
btnFour_sec.className = "btn"
btnFour_sec.innerHTML = "#supabase"
btnFour_sec.classList.add('supabase')

const btn_thrd = document.createElement("button")
btn_thrd.className = "btn"
btn_thrd.innerHTML = "#typescript"
btn_thrd.classList.add("typescript")
const btnTwo_thrd = document.createElement("button")
btnTwo_thrd.className = "btn"
btnTwo_thrd.innerHTML = "#postgres"
btnTwo_thrd.classList.add("postgram")
const btnTr_thrd = document.createElement("button")
btnTr_thrd.className = "btn"
btnTr_thrd.innerHTML = "#pro"
btnTr_thrd.classList.add("pro")
const btnFour_thrd = document.createElement("button")
btnFour_thrd.className = "btn"
btnFour_thrd.innerHTML = "#pro"
btnFour_thrd.classList.add("pro")

itm_info.append(hElem, pElem, btn, btn_sec, btn_thrd)
itmTwo_info.append(hElemTwo, pElemTwo, btnTwo, btnTwo_sec, btnTwo_thrd)
itmTr_info.append(hElemTr, pElemTr, btnTr, btnTr_sec, btnTr_thrd)
itmFour_info.append(hElemFour, pElemFour, btnFour, btnFour_sec, btnFour_thrd)

itm.append(img, itm_info)
itmTwo.append(imgTwo, itmTwo_info)
itmTr.append(imgTr, itmTr_info)
itmFour.append(imgFour, itmFour_info)

cont.append(itm, itmTwo, itmTr, itmFour)
