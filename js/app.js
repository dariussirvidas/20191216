(function () {

    "use strict";
    let manoAjax = new XMLHttpRequest();
    manoAjax.onreadystatechange = function () {
        if (manoAjax.readyState===4){
            if (manoAjax.status===200) {
                document.querySelector('aside').innerHTML = manoAjax.responseText;
            }
            else {
                alert(manoAjax.statusText);
            }
        }
    };
    manoAjax.open('GET', 'menu.html');
    document.querySelector('button.showMenu').onclick = function () {
        manoAjax.send();
        document.querySelector('button.showMenu').style.display="none";
    };
    /*"use strict";
    let mokiniai = new XMLHttpRequest();
    mokiniai.onreadystatechange = function () {
        if (mokiniai.readyState===4){
            if (mokiniai.status===200) {
                let sarasas = JSON.parse(mokiniai.responseText);
                let ul = document.createElement("ul");
                document.querySelector("section").appendChild(ul);
                for(let mokinys of sarasas) {
                    let li = document.createElement("li");
                    if (!mokinys["lokacija"]) {
                        li.style.color = "red";
                    }
                    else {
                        li.style.color = "green";
                    }
                    let span = document.createElement("span");
                    span.textContent = mokinys["vardas"];
                    span.style.color = "black";
                    li.appendChild(span);
                    ul.appendChild(li);
                }
                //console.log(sarasas);
                console.log(mokiniai.statusText);
            }
            else {
                alert(mokiniai.statusText);
            }
        }
    };
    mokiniai.open("GET", "./data/mokiniai.json");
    mokiniai.send();*/

    let data;

    const mokiniai = async () => {
        data = await fetch("./data/mokiniai.json").then(res => res.json());
    };

    const showData = async () => {
        await mokiniai();
        console.log(data);

        let ul = document.createElement("ul");
        document.querySelector("section").appendChild(ul);
        for(let mokinys of data) {
            let li = document.createElement("li");
            if (!mokinys["lokacija"]) {
                li.style.color = "red";
            }
            else {
                li.style.color = "green";
            }
            let span = document.createElement("span");
            span.textContent = mokinys["vardas"];
            span.style.color = "black";
            li.appendChild(span);
            ul.appendChild(li);
        }
    };

    showData();


/*
    (async function () {
        const response = await fetch("./data/mokiniai.json");
        const myJson = await response.json();
        //console.log(JSON.stringify(myJson));

        let sarasas = myJson;
        let ul = document.createElement("ul");
        document.querySelector("section").appendChild(ul);
        for(let mokinys of sarasas) {
            let li = document.createElement("li");
            if (!mokinys["lokacija"]) {
                li.style.color = "red";
            }
            else {
                li.style.color = "green";
            }
            let span = document.createElement("span");
            span.textContent = mokinys["vardas"];
            span.style.color = "black";
            li.appendChild(span);
            ul.appendChild(li);
        }

    })();
*/
})();
