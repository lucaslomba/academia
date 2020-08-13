const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for(let card of cards){
    //addEventListener = listening the event
    card.addEventListener("click", function(){
        const videoID = card.getAttribute("id")
        //add one class a list of classes
        //modalOverlay.classList.add('active')
        //modalOverlay.querySelector("iframe").src = `https://www.youtube.com/embed/${videoID}`
        window.location.href = `/video?id=${videoID}`
    })
}

//document.querySelector('.close-modal').addEventListener("click", function(){
//    modalOverlay.classList.remove("active")
//    modalOverlay.querySelector("iframe").src = ""
//})

