let idx = Math.floor(Math.random() * 999999) + 1;

function addData() {
    let user = `JessicaD57_${idx}`;
    idx += 1;
    let smth = `${document.getElementById("title").value}||${document.getElementById("blog").value}`;

    if (document.getElementById("title").value == "" || document.getElementById("blog").value == "") {
        document.getElementById("storage").innerHTML = "Please enter some text.";
        return;

    } else {
        // allows multiple blogs to be published by one user
        localStorage.setItem(user, smth);
        document.getElementById("storage").innerHTML = "Data added!";
        console.log(localStorage);
    }
}

function clearStorage() {
    localStorage.clear();
    document.getElementById("storage").innerHTML = "All data removed!";
    console.log(localStorage);
}