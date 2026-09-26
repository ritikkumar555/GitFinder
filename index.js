
// fetch("https://api.github.com/users/ritikkumar555").
// then(data => data.json).
// then(data => console.log(data));

const profileCard = document.querySelector("#profile-card");

async function getUser(username = "ritikkumar555"){
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    return data;
}


document.querySelector("#github-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    let username = document.querySelector("#github-username").value;

    if(!username.trim())
    {
        return;
    }

    const data = await getUser(username);

    console.log(data);
    
    const heroSection = document.querySelector("#hero");

    const result = document.querySelector(".result");
    result.classList.remove("result");
    heroSection.classList.add("hidden");
    result.classList.add("visible");


    console.log(result);
    
    
    profileCard.innerHTML = `
                <div class="flex justify-center items-center gap-20 border p-20">
                    <div>
                        <img src=${data.avatar_url} width="200px" height="200px" class="rounded-full">
                    </div>
                    <div class="flex flex-col justify-start gap-6">
                        <div>
                            <h2 >${data.name}</h2>
                            <i>Username : ${data.login} </i>
                            <p>Bio : ${data.bio} </p> 
                        </div>

                        <div class="flex justify-between gap-5">
                            <p class="flex justify-between gap-0 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="25" height="25" viewBox="0 0 256 256" xml:space="preserve">
                                    <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
                                    <line x1="0" y1="-23.963500000000003" x2="0" y2="23.963500000000003" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) "/>
                                    <path d="M 45 90 c -0.558 0 -1.011 -0.452 -1.011 -1.011 V 41.062 c 0 -0.558 0.453 -1.011 1.011 -1.011 s 1.011 0.453 1.011 1.011 v 47.927 C 46.011 89.548 45.558 90 45 90 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,103,107); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
                                    <circle cx="45.001" cy="20.531" r="15.531" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(242,63,56); fill-rule: nonzero; opacity: 1;" transform="  matrix(1 0 0 1 0 0) "/>
                                    <circle cx="52.076" cy="13.456" r="5.056" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,158,154); fill-rule: nonzero; opacity: 1;" transform="  matrix(1 0 0 1 0 0) "/>
                                    </g>
                                </svg> 
                                <span>${data.location}</span>
                            </p>
                            <a href=${data.html_url}>Visit Profile</a> 
                            <button id="new-search">New Search --></button>
                        </div>

                        <div class="flex justify-between gap-5">
                            <p class="border border-gray-400 px-20 py-4">Followers : ${data.followers} </p>
                            <p class="border border-gray-400 px-20 py-4">Following : ${data.following} </p>
                            <p class="border border-gray-400 px-20 py-4">Public Repos : ${data.public_repos} </p>
                        </div>
                    </div>
                </div>
            `;

            // document.querySelector("#new-search").addEventListener("click", (e)=>{
            //     e.stopPropagation();
                
            //     heroSection.classList.add("hero-section");  
            // })
})


document.querySelector("#new-search").addEventListener("click", (e)=>{
        e.preventDefault();
        
        result.classList.remove("visible");
        // heroSection.classList.add("visible");  
})

