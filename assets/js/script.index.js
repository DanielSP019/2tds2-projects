function savePost() {
    const title = ducument.getElementById("title").value;
    const resume = ducument.getElementById("resume").value;
    const author= ducument.getElementById("author").value;
    const date= ducument.getElementById("date").value;
    
    console.log(title,category,resume,author,date);
    }

    function cleanFields() {
        document.getElementById("title").value = "";
        document.getElementById("resume").value = "";
        document.getElementById("author").value = "";
        document.getElementById("date").value = "";
        }