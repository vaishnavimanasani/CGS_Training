window.onload = async function() {
    try {
        var result = await fetch("https://randomuser.me/api/");
        var data = await result.json();
        var userData = data.results[0];
        console.log(userData);

        var image = document.getElementById("image");
        image.src = userData.picture.large;

        var name = document.getElementById("name");
        name.innerText = Name: ${userData.name.first} ${userData.name.title};

        var btn = document.getElementById("btn");
        btn.addEventListener("click", function() {
            window.location.reload();
        });

        var address = document.getElementById("address");
        address.innerText = Street Number: ${userData.location.street.number}\nStreet Name: ${userData.location.street.name}\nCity: ${userData.location.city};

        var details = document.getElementById("details");
        details.innerText = Age: ${userData.dob.age}\nEmail: ${userData.email}\nGender: ${userData.gender};

    } catch (error) {
        console.error("Error fetching user data:", error);
    }
};