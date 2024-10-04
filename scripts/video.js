const loadCategories = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((error) => console.log(error)); // res.json gives me data
};

// {
//     "category_id": "1001",
//     "category": "Music"
// }

const displayCategories = (categories) => {
    const categoryContainer = document.getElementById("categories");
    categories.forEach((item) => {
      console.log(item);
  
      const button = document.createElement("button");
      button.classList = "btn";
      button.innerText = item.category;
  
      //add btn
      categoryContainer.append(button);
    });
  };

const loadVideos = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => displayVideos(data.videos))
    .catch((error) => console.log(error)); // res.json gives me data
};

const displayVideos = (videos) => {
  const videoContainer = document.getElementById("videos");
  videos.forEach((video) => {
    console.log(video);
    const card = document.createElement("div");
    card.classList = "card card-compact bg-base-100 ";
    card.innerHTML = `
        <figure class="h-[200px]">
    <img
      src=${video.thumbnail}"
      class = "h-full w-full object-cover"
      alt="Shoes" />
  </figure>
    <div class="px-0 py-2 flex gap-2">

            <div>
                <img class ="w-10 h-10 rounded-full object-cover" src=${video.authors[0].profile_picture} />
            </div>
            <div>
                <h2 class="font-bold">${video.title}</h2>
                <div class = "flex items-center gap-2">
                    <p class = "text-gray-400">${video.authors[0].profile_name}</p> 
                    <img class = "w-5" src = "https://img.icons8.com/?size=48&id=D9RtvkuOe31p&format=png"/>
                </div>
                <p></p>
            </div>
        
    </div>
        `;

    videoContainer.append(card);
  });

  videoContainer.append(card);
};

const cardDemo = {
    "category_id": "1003",
    "video_id": "aaak",
    "thumbnail": "https://i.ibb.co/ZNggzdm/cake.jpg",
    "title": "Beyond The Pale",
    "authors": [
        {
            "profile_picture": "https://i.ibb.co/MZ2vbXR/jimm.jpg",
            "profile_name": "Jim Gaffigan",
            "verified": false
        }
    ],
    "others": {
        "views": "2.6K",
        "posted_date": "15400"
    },
    "description": "'Beyond The Pale' by Jim Gaffigan, with 2.6K views, is a comedic gem that explores everyday observations and family life with a light-hearted and witty approach. Jim's humor is accessible and delightful, making this show perfect for anyone who enjoys clean, observational comedy."
}


loadCategories();
loadVideos();
