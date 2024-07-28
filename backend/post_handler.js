function addData() {
    let user = document.getElementById("user").value;
    let smth = `${document.getElementById("title").value}, ${document.getElementById("blog").value}`;

    // allows multiple blogs to be published by one user
    if (localStorage.getItem(user) === null) {
        localStorage.setItem(user, smth);
    
    } else {
        let blogTXT = `${localStorage.getItem(user)}/${smth}`
        localStorage.setItem(user, blogTXT);
    }

    document.getElementById("storage").innerHTML = "Data added!";
    console.log(localStorage);
}

function clearStorage() {
    localStorage.clear();
    document.getElementById("storage").innerHTML = "All data removed!";
    console.log(localStorage);
}

// create an element and add it to the documenyt
// document.createElement()