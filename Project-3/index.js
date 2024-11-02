document.querySelector('.buttons').addEventListener('click',e => {
    let rgtlang = document.getElementsByClassName('grp-1')[0]
    let lftlang = document.getElementsByClassName('grp-2')[0]
    if(e.target.parentNode.className=='right-side'){            
        if(e.target.className=='fa-solid fa-angle-right btn'){
            for(let i=0; i<rgtlang.children.length; i++){
                if(rgtlang.children[i].children[0].checked){
                    rgtlang.children[i].children[0].checked = false
                    lftlang.appendChild(rgtlang.children[i])
                    i--
                }
            }
        }
        if(e.target.className=='fa-solid fa-angles-right btns'){
            for(let i=0; i<rgtlang.children.length; i++){                    
                lftlang.appendChild(rgtlang.children[i])
                i--                
            }
        }
    }
    if(e.target.parentNode.className=='left-side'){            
        if(e.target.className=='fa-solid fa-angle-left btn'){
            for(let i=0; i<lftlang.children.length; i++){
                if(lftlang.children[i].children[0].checked){
                    lftlang.children[i].children[0].checked = false
                    rgtlang.appendChild(lftlang.children[i])
                    i--
                }
            }
        }
        if(e.target.className=='fa-solid fa-angles-left btns'){
            for(let i=0; i<lftlang.children.length; i++){
                rgtlang.appendChild(lftlang.children[i])
                i--

            }
        }
    }    
})