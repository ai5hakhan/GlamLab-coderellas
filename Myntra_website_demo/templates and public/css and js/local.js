
const shopsArr = [
    { name: "Arjun Sharma", description: "ajju@12", src: "/img/11.jpeg" },
    { name: "Maya Gupta", description: "gupta_maya12", src: "/img/22.jpeg" },
    { name: "Rohan Mehta", description: "rohan_m", src: "/img/33.jpeg" },
    { name: "Sana Patel", description: "sapatel", src: "/img/44.jpeg" },
    { name: "Lakshmi Iyer", description: "iyer_lakshimi12", src: "/img/55.jpeg" },
    { name: "Amitabh Desai", description: "desai@45", src: "/img/77.jpeg" },
    { name: "Pooja Kapoor", description: "kapoor_pooja", src: "/img/88.jpeg" },
    { name: "Vijay Singh", description: "singh_12", src: "/img/66.jpeg" },
];

const result = document.getElementById("location");
const Http = new XMLHttpRequest();

// Fetching the user's address using BigDataCloud API
function getApi(bdcApi) {
    Http.open("GET", bdcApi);
    Http.send();
    Http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const data = JSON.parse(this.responseText);
            console.log(data);
            console.log(data.locality);
            const address = `${data.locality}, ${data.principalSubdivision}, ${data.countryName}`;
            result.innerHTML = address;

            shopsArr.forEach(shop => shop.description = address);
            const strshopsarr = JSON.stringify(shopsArr);
            sessionStorage.setItem("shops", strshopsarr);
        }
    };
}

// Getting user's location
function getLocation() {
    console.log("getLocation Called");
    let bdcApi = "https://api.bigdatacloud.net/data/reverse-geocode-client";

    navigator.geolocation.getCurrentPosition(
        (position) => {
            bdcApi += `?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&localityLanguage=en`;
            getApi(bdcApi);
        },
        (err) => {
            getApi(bdcApi);
        },
        {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0,
        }
    );
}

// Loading shops available near user's location using dummy data
function load_shops() {  
    const strshopsarr = JSON.stringify(shopsArr);
    sessionStorage.setItem("shops", strshopsarr);

    const arr = [];
    while (arr.length < 8) {
        const r = Math.floor(Math.random() * 8);
        if (arr.indexOf(r) === -1) arr.push(r);
    }

    const body = document.getElementById("contain");
    const n = (Math.floor(Math.random() * 8) % arr.length) + 1;

    const addressInPage = document.getElementById("location").innerText;

    // Show the heading when shops are loaded
    document.getElementById("most-liked-heading").style.display = 'block';

    for (let i = 0; i < n; i++) {
        const shop = shopsArr[arr[i]];
        const shop_name = shop.name;
        const description = addressInPage || shop.description;
        const imgSrc = shop.src;

        body.innerHTML += `
        <div class="card">
            <img class="card-img-top" src="${imgSrc}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${shop_name}</h5>
                <p class="card-text">${description}</p>
                <a href="/local/shops/shopx" id="${arr[i]}" class="btn btn-primary">Best Outfits</a>
            </div>
        </div>`;
    }

    // Adding explore shop link to each placard
    document.querySelectorAll(".card-body").forEach((ele) => {
        ele.addEventListener("click", (e) => {
            sessionStorage.setItem("next_shop", e.target.id);
        });
    });
}

// Clearing out all shops before fetching user's address
function remove_shops() {
    document.getElementById("contain").innerHTML = '';
}

