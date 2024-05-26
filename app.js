let notesContainer = document.querySelector('.notes-container')
let createBtn = document.querySelector('.btn')
let notes = document.querySelectorAll('.input-box')

// this is for practing brancing

createBtn.addEventListener('click', () => {
    let p = document.createElement('p')
    let img = document.createElement('img')
    p.className = 'input-box'
    img.src = "https://static-00.iconduck.com/assets.00/delete-icon-1864x2048-bp2i0gor.png"
    p.setAttribute('contenteditable', 'true')
    p.style.backgroundColor = "#0011"
    notesContainer.append(p)
    p.append(img)
})

notesContainer.addEventListener('click' , (eve) => {
    if(eve.target.tagName === 'IMG'){
        eve.target.parentElement.remove()
    }
})