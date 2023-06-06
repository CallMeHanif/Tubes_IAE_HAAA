function calculateShipping() {
    var origin = document.getElementById("origin").value;
    var destination = document.getElementById("destination").value;
    var weight = document.getElementById("weight").value;
    var courier = document.getElementById("courier").value;

    fetch(`/shipping/${origin}/${destination}/${weight}/${courier}`)
        .then(response => response.json())
        .then(data => {
            var resultElement = document.getElementById("shipping-result");
            resultElement.innerHTML = `
                <h2>Shipping Cost:</h2>
                <p>Origin: ${data.origin}</p>
                <p>Destination: ${data.destination}</p>
                <p>Weight: ${data.weight}</p>
                <p>Courier: ${data.courier}</p>
                <p>Shipping Cost: ${data.shipping_cost}</p>
            `;
        })
        .catch(error => console.log(error));
}