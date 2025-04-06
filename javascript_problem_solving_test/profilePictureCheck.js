// Sample Input
let L = 180;
let N = 3;
let photos = [
    { W: 640, H: 480 },
    { W: 120, H: 300 },
    { W: 180, H: 180 }
];

function checkPhotos(L, N, photos) {
    for (let i = 0; i < N; i++) {
        let { W, H } = photos[i];

        if (W < L || H < L) {
            console.log("UPLOAD ANOTHER");
        } else if (W === H) {
            console.log("ACCEPTED");
        } else {
            console.log("CROP IT");
        }
    }
}

checkPhotos(L, N, photos);
