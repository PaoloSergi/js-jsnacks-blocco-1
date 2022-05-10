const users = ["Paolo", "Francesco", "Luisa", "Beatrice", "Carolina"];
const details = ["telefono", "indirizzo"];

const myUl = document.querySelector("ul");

for (i=0; i < users.length; i++){

    let usersLi = document.createElement("li");
    myUl.append(usersLi);
    usersLi.append(users[i]);

    let detailsUl = document.createElement("ul");
    usersLi.append(detailsUl);

    for (j=0; j < details.length; j++){
        let detailsLi = document.createElement("li");
        detailsUl.append(detailsLi);
        detailsLi.append(details[j]);
    }
}