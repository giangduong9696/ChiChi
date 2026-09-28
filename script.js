
const COLORS = document.querySelectorAll(".color");

const SHIRTS = document.querySelectorAll(".shirt");

const MUSIC = document.getElementById("bgMusic");


COLORS.forEach((button) => {

    button.addEventListener("click", () => {

        const color = button.dataset.color;

        // Đổi màu áo cho cả heo và ngựa
        SHIRTS.forEach((shirt) => {
            shirt.style.backgroundColor = color;
        });


        // Active button
        COLORS.forEach((item) => {
            item.classList.remove("active");
        });

        button.classList.add("active");


        // Nếu chọn màu hồng -> phát nhạc
        if (color === "#ff69b4") {

            MUSIC.play().catch(() => {
                console.log("Browser requires user interaction before playing audio.");
            });

        } else {

            MUSIC.pause();

            // Nếu muốn đổi sang màu khác thì nhạc
            // sẽ bắt đầu lại từ đầu khi chọn màu hồng
            MUSIC.currentTime = 0;

        }

    });

});


// Màu mặc định
SHIRTS.forEach((shirt) => {
    shirt.style.backgroundColor = "#ff5c6c";
});

const bgMusic = document.getElementById("bgMusic");

function togglePinkMusic() {
    if (bgMusic.paused) {
        bgMusic.play();
    } else {
        bgMusic.pause();
        bgMusic.currentTime = 0;
    }
}