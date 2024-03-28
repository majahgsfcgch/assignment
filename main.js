const parent = document.getElementById("parent")
parent.style.position = 'relative ', parent.style.left = "0px"; 
child.style.position = 'relative';child.style.width = "4rem"; child.style.top = '120px'
const paragraph = document.getElementById("paragraph")
const img = document.getElementById("img")
img.style.position = ''
function moveLeft()
{
    parent.style.left = parseInt(parent.style.left) - 10 + 'px'; animate = setTimeout(moveLeft, 20)
    if(parent.style.left ==  '-170px')
    {
        clearTimeout(animate)
        
        const second = () => 
        {
            child.style.width = parseInt(child.style.width) + 1 + 'rem'; increase = setTimeout(second, 20)
            if(child.style.width == "20rem")
            {   

                clearTimeout(increase)
                img.style.position = 'fixed'
                paragraph.style.fontSize = '1.5rem'
                const setText = () => 
                {
                    paragraph.innerText = "Derrick Wagoki"
                }
                setInterval(setText, 800)
              
            }
        }
        const moveUp = () => 
        {
            child.style.top = parseInt(child.style.top) - 10 + 'px'; juu = setTimeout(moveUp, 20)
            if(child.style.top == '10px')
            {
                clearTimeout(juu)
                const div = document.createElement("div");
                div.setAttribute("class", "box")
                div.innerHTML = `<ul>
                <li class="list">ADM: SCT221-0997/2021</li>
                </ul>`
                child.append(div)

            }
        }
        setTimeout(second, 800)
        return setTimeout(moveUp, 3200)

    }
}



window.onload = moveLeft 