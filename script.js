// Task 1
let tagLine = document.getElementById("tag-line");

let headings = document.querySelectorAll(".bg-main-content h2");

let collect = `${tagLine.textContent}\n`;

for (let heading of headings) {
	collect += ` ${heading.textContent}\n`;
};

alert(collect);

// Task 2
let when_to_launch = document.querySelectorAll(".bg-main-content .box:nth-child(13)");

for (let i = 0; i < when_to_launch.length; i++) {
	title = `${when_to_launch[i].innerText}\n`;
};
alert(title);