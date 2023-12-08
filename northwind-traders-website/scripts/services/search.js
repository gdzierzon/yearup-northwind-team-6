document.addEventListener("DOMContentLoaded",()=>{
    selects = document.getElementById("searchSelect")
    selects.addEventListener("change",searchSelected)
    }
)

function searchSelected() {
    selects = document.getElementById("searchSelect")
    const selectedSearch = selects.value
    console.log(selectedSearch)
}

