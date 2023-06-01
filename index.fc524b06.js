fetch("https://api.thecatapi.com/v1/images/search?api_key=live_rqK3oyd38AWXZJb7xjlK2r9gU43INARb6XZ8w0bUxgPsfIqDs3eCDfsHe3HiMbTT&limit=5&has_breeds=1").then((e=>e.json())).then((e=>{const o=[];for(position of e)o.push(...position.breeds);console.log(o)})).catch((e=>{console.log(e)}));
//# sourceMappingURL=index.fc524b06.js.map
