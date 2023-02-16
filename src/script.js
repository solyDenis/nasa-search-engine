const inputSearchEl = document.querySelector("#search_input");
const imagesEl = document.querySelector("#images");

inputSearchEl.addEventListener('keypress', (el) =>{
    if(el.key === 'Enter'){
        fetch(`https://images-api.nasa.gov/search?q=${el.target.value}`)
            .then((answer)=> answer.json())
            .then((data)=>{
                const pictures = data.collection.items;
                const itemsInPage = pictures.slice(0,9);
                imagesEl.innerHTML=``
                    itemsInPage.forEach((image)=> viewImage(image))


            })
    }
})

const viewImage = (image) => {
    const dv = document.createElement('div')

    dv.classList.add('p-6','ml-6','border-2','bg-orange-200');
    dv.innerHTML= `
    
    <img src="${image.links[0].href}" alt="">
    <p>${image.data[0].title}</p>
    <p>${image.data[0].description}</p>
    
`
    imagesEl.appendChild(dv)
}