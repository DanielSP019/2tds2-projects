const posts = [];

function savePost() {
    const title = ducument.getElementById("title").value;
    const resume = ducument.getElementById("resume").value;
    const author= ducument.getElementById("author").value;
    const date= ducument.getElementById("date").value;
    
    if (title && category && resume && author && date) {
        storePost(title, category, resume, author, date)
    }else{
        alert("preencha este campo")
    }

    }

    function cleanFields() {
        document.getElementById("title").value = "";
        document.getElementById("resume").value = "";
        document.getElementById("author").value = "";
        document.getElementById("date").value = "";
        }

        function storePost(title, category, resume, author, date) {


            const post = {
                title,
                category,
                resume,
                author,
                date,
            };
            posts.post(post)
            }

            