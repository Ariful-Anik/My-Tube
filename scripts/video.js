
function getTimeString(time){
  const hour = parseInt(time/3600);
  let remainingSecond = time % 3600;
  const minute = parseInt(remainingSecond/60);
  remainingSecond = remainingSecond%60;


  return `${hour} hour ${minute} minute ago ${remainingSecond} second ago`;

}




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


const removeActiveClass = () =>{
  const buttons = document.getElementsByClassName("category-btn");
  for(let btn of buttons){
    btn.classList.remove('active');
  }
}

//load category videos
const loadCategoryVideos = (id) =>{
  
  fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
    .then((res) => res.json())
    .then((data) => {
      
        removeActiveClass();
        const activeBtn = document.getElementById(`btn-${id}`);
        activeBtn.classList.add("active");
        console.log(activeBtn);
        displayVideos(data.category);
      

        //remove active class
        

       
      
    })
    .catch((error) => console.log(error));
}


const displayCategories = (categories) => {
    const categoryContainer = document.getElementById("categories");
    categories.forEach((item) => {
      console.log(item);
  
      const buttonContainer = document.createElement("div");
      buttonContainer.innerHTML = 
      `

        <button id = "btn-${item.category_id}" onclick = "loadCategoryVideos(${item.category_id})" class = "btn category-btn">
          ${item.category}
        </button>
      `
      
  
      //add btn
      categoryContainer.append(buttonContainer);
    });
  };

const loadVideos = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) =>displayVideos(data.videos))
    .catch((error) => console.log(error)); // res.json gives me data
};

const displayVideos = (videos) => {
  const videoContainer = document.getElementById("videos");
  videoContainer.innerHTML ="";
  if(videos.length == 0){
    videoContainer.classList.remove('grid');
    videoContainer.innerHTML =
    `
      <div class = "min-h-[600px] w-full flex flex-col gap-5 justify-center items-center">
        <img src = "assests/Icon.png"/>
        <h2 class = "text-center text-xl">
          No Content Here in this Categery.
        </h2>
      </div>
    `
    ;
    return;
  }

  else{
    videoContainer.classList.add('grid');
  }

  videos.forEach((video) => {
    console.log(video);
    const card = document.createElement("div");
    card.classList = "card card-compact bg-base-100 ";
    card.innerHTML = `
    <figure class="h-[200px] relative">
    <img
      src=${video.thumbnail}"
      class = "h-full w-full object-cover"
      alt="Shoes" />
      ${
        video.others.posted_date?.length == 0?"":`<span class = "absolute text-sm right-2 bottom-2 bg-black text-white rounded p-1">${getTimeString(video.others.posted_date)}</span>`
      }
      
  </figure>
    <div class="px-0 py-2 flex gap-2">

            <div>
                <img class ="w-10 h-10 rounded-full object-cover" src=${video.authors[0].profile_picture} />
            </div>
            <div>
                <h2 class="font-bold">${video.title}</h2>
                <div class = "flex items-center gap-2">
                    <p class = "text-gray-400">${video.authors[0].profile_name}</p> 
                    ${video.authors[0].verified == true? `<img class = "w-5" src = "https://img.icons8.com/?size=48&id=D9RtvkuOe31p&format=png"/>`:""}
                    
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
