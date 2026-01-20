let signedIn = false;

const videos = [
    {
        title: "My First Kitty Vlog",
        video: "videos/video1.mp4",
        thumbnail: "thumbnails/video1.jpg",
        creator: "KittyUser"
    }
];

const scrolls = [
    {
        video: "scrolls/scroll1.mp4"
    }
];

const streams = [
    {
        video: "streams/stream1.mp4"
    }
];

function onSignIn(response) {
    signedIn = true;
    document.getElementById("createBtn").disabled = false;
}

document.getElementById("createBtn").onclick = () => {
    if (!signedIn) {
        alert("You must sign in with Google to upload.");
        return;
    }
    document.getElementById("uploadBox").classList.toggle("hidden");
};

function showPage(id) {
    document.querySelectorAll("section").forEach(s => s.classList.add("hidden"));
    document.getElementById(id).classList.remove("hidden");
}

function loadVideos() {
    const home = document.getElementById("homeGrid");
    const videoGrid = document.getElementById("videoGrid");

    videos.forEach(v => {
        const card = `
            <div class="card">
                <img src="${v.thumbnail}">
                <h3>${v.title}<br><small>by ${v.creator}</small></h3>
            </div>
        `;
        home.innerHTML += card;
        videoGrid.innerHTML += card;
    });
}

function loadScrolls() {
    const grid = document.getElementById("scrollGrid");
    scrolls.forEach(s => {
        grid.innerHTML += `
            <div class="card">
                <video src="${s.video}" autoplay loop muted></video>
            </div>
        `;
    });
}

function loadStreams() {
    const grid = document.getElementById("streamGrid");
    streams.forEach(s => {
        grid.innerHTML += `
            <div class="card">
                <video src="${s.video}" controls autoplay></video>
                <h3>LIVE</h3>
            </div>
        `;
    });
}

loadVideos();
loadScrolls();
loadStreams();
