//fetch("https://api.imgflip.com/get_memes")
//.then((response) => {console.log(response.json())});

$.getJSON("https://api.imgflip.com/get_memes", (response) => 
    {
        for(let meme of response.data.memes)

        document.getElementById("memes").innerHTML += 
    `
    <div class="card m-auto mt-4 p-3 pt-1" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title fs-6">${meme.name}</h5>
        </div>
        <img src=${meme.url} class="card-img-top shadow rounded" alt="meme">
    </div>
    `;
    }
);