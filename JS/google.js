
var btnSearch = document.getElementsByClassName("fa-search")
    btnSearch[0].addEventListener("click" , function() {
        var inputValue = document.getElementsByTagName("input")[0].value
    

        var node = document.createElement("li");
        node.className = "list-searched"
            node.innerHTML = `<i class="far fa-clock"></i>` + " " + inputValue + `<span> <i class="fas fa-times"></i> </span>`
        document.getElementById("myList").appendChild(node);
        var close = document.getElementsByTagName("span")
        for( var i = 0; i < close.length; i++){
            close[i].addEventListener("click", function(){
                onclick = this.parentElement.classList.add("d-none")
            })
        }
      })
      


   var inputSearch = document.getElementById("fname");
   inputSearch.addEventListener("blur", function(){
        var listSearch = document.getElementsByClassName("list-searched");
        for(var i = 0; i< listSearch.length; i++){
            listSearch[i].classList.add("d-none")
        }
   })
   inputSearch.addEventListener("focus", function(){
    var listSearch = document.getElementsByClassName("list-searched");
    for(var i = 0; i< listSearch.length; i++){
        listSearch[i].classList.remove("d-none")
    }
})