let btm =document.querySelector("button");
let box = document.querySelector(".box");
btm.addEventListener("click", () => {
  fetch('https://ipinfo.io/json'
    ).then(response => response.json()
    ).then(data => {
        console.log(data);
        box.innerHTML += `
            <h2>Location Information  ${data.city}</h2>
            <p>Click the button to get your location data. ${data.ip}</p>
            <p>Data will be displayed here after fetching. ${data.region}, ${data.country}</p>
            <p>IP Address: ${data.ip}</p>
            <p>Location: ${data.loc}</p>    
            <p>Timezone: ${data.timezone}</p>
            <p>Organization: ${data.org}</p>
            <p>Postal Code: ${data.postal}</p>
            <p>Hostname: ${data.hostname}</p>
            <p>City: ${data.city}</p>  
        `;
        box.style.backgroundColor = '#f0f0f0';
    });
});


     

   
box.style.backgroundColor = '#f0f0f0';