const catagoryDiv = document.getElementById("catagory-div");
const videoCardDiv = document.getElementById("video-card-div");

async function loadCatagory() {
  let res = await fetch(
    "https://openapi.programming-hero.com/api/phero-tube/categories"
  );
  data = await res.json();
  getData(data.categories);
}
function getData(cata) {
  console.log(cata);
  cata.forEach((element) => {
    let catagoryButtonDiv = document.createElement("div");
    catagoryButtonDiv.innerHTML = `<div class="flex justify-center items-center">
      <button class="btn text-white font-bold text-2xl bg-green-500 mx-2">
       ${element.category}</button>
    </div>`;
    catagoryDiv.append(catagoryButtonDiv);
  });
}

// Fetch Video
async function fetchVideo() {
  res = await fetch(
    "https://openapi.programming-hero.com/api/phero-tube/videos"
  );
  data = await res.json();
  loadVideo(data.videos);
}
// Load Video
let loadVideo = (videoData) => {
  // console.log(videoData);
  videoData.forEach((items) => {
    console.log(items);
    let videoCard = document.createElement("div");
    videoCard.innerHTML = `<div class="card-compact bg-base-100 shadow-xl">
        <figure class="relative">
          <div class="w-full h-48">
            <img class="w-full h-full object-cover  rounded-md" src="${items.thumbnail}" alt="Video_Pic" />
          </div>
          <div class="absolute bottom-1 right-2 bg-slate-800 text-white p-1 text-xs">
            <p>Time Of Video</p>
          </div>
        </figure>
        <div class="card-body">
          <div class="flex gap-4">
            <div>
              <img class="w-10 h-10 rounded-full object-fill" src="${items.authors[0].profile_picture}" alt="">
            </div>
            <div>
              <h2 class="card-title">${items.title}</h2>
              <div class="flex items-center justify-start w-fit gap-2">
                <p>${items.authors[0].profile_name}</p>
                <img class="w-4 h-4" src="https://img.icons8.com/?size=96&id=98A4yZTt9abw&format=png" alt="">
              </div>
              <p>31k views</p>
          </div>
          </div>
        </div>
      </div>`;
    videoCardDiv.append(videoCard);
  });
};

loadCatagory();
fetchVideo();
