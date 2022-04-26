
const newHeader = document.createElement('h1')
// created a newHeader variable added an 'h1' element
document.getElementsByTagName('h1')[0]
newHeader.setAttribute('id','victory')
newHeader.innerHTML('YOUR-NAME is the champion')
document.body.appendChild(newHeader)

console.log(newHeader);




const oldElement = document.querySelectorAll("main")
oldElement.remove();
console.log(oldElement);



// MAYBE USE ANOTHER METHOD TO REMOVE A JavaScript Tag element.remove()
// Or use removeChild() 
