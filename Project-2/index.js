let listManipulation = document.querySelector('#list')

listManipulation.addEventListener('click', e =>{
    if(e.target.id=='trash')
        e.target.parentNode.style.display = 'none'
    if(e.target.className=='fa-solid fa-pencil'){
        e.target.previousElementSibling.style.display = 'none'
        e.target.className = 'fa-solid fa-floppy-disk'
        // e.target.id = 'save'
        let newInput = document.createElement("input")
        newInput.setAttribute('type', 'text')
        newInput.setAttribute('placeholder', 'Item-Name')
        newInput.id = 'name'
        e.target.parentNode.insertBefore(newInput, e.target)
        newInput.style = 'width:15vw; height:2vh'
        console.log(e.target)
    }
    else if(e.target.className=='fa-solid fa-floppy-disk'){
        let newName = e.target.previousElementSibling
        e.target.previousElementSibling.previousElementSibling.textContent = newName.value
        e.target.previousElementSibling.previousElementSibling.style.display = 'inline'
        e.target.previousElementSibling.remove()
        e.target.className = 'fa-solid fa-pencil'
        }
    }    
)

let addItemList = document.getElementById('newItem')

addItemList.addEventListener('keydown', (e)=>{
    let newItem = e.target.value
    if(e.altKey){
        e.target.value = ''
        let newDiv = document.createElement('li')
        let divtxt = document.createTextNode(newItem)
        let spanDiv = document.createElement('span')
        spanDiv.appendChild(divtxt)
        let pencilIcon = document.createElement('i')
        pencilIcon.id = 'pencil'
        pencilIcon.className = 'fa-solid fa-pencil'
        let delIcon = document.createElement('i')
        delIcon.id = 'trash'
        delIcon.className = 'fa-solid fa-trash'
        newDiv.append(spanDiv, pencilIcon, delIcon)
        console.log(newDiv)
        let parent = document.getElementById('list')
        parent.append(newDiv)
    }
})