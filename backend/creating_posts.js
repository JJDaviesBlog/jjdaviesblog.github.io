let idx = Math.floor(Math.random() * 999999) + 1;

function addData() {
    let fileInput = document.getElementById("imgFile");
    let file = fileInput.files[0];
    let ImgURL = URL.createObjectURL(file);

    console.log(ImgURL);

    let user = `${idx}`;
    idx += 1;
    let blogInfo = `${ImgURL}||${document.getElementById("title").value}||${document.getElementById("blog").value}||${document.getElementById("category").value}`;

    if (document.getElementById("title").value == "" || document.getElementById("blog").value == "") {
        document.getElementById("storage").innerHTML = "Please enter some text.";
        return;

    } else {
        // allows multiple blogs to be published by one user
        sessionStorage.setItem(user, blogInfo);
        document.getElementById("storage").innerHTML = `Data added: ${document.getElementById("title").value}`;
        console.log(sessionStorage);
    }
}

function clearStorage() {
    sessionStorage.clear();
    document.getElementById("storage").innerHTML = "All data removed!";
    console.log(sessionStorage);
}