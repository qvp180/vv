
const list = document.getElementById("button-list");

const hasVoted = localStorage.getItem("hasVoted") === "true";

items.forEach(item => {
    const button = document.createElement("button");
    button.className = "item-button";

    const image = document.createElement("img");
    image.src = item.image;
    image.alt = "";

    const name = document.createElement("span");
    name.textContent = item.name;

    button.append(image, name);

    // ถ้าใช้สิทธิ์แล้ว ให้ปิดปุ่มทั้งหมด
    button.disabled = hasVoted;

    button.addEventListener("click", () => {
        // ตรวจสอบอีกครั้งก่อนบันทึกคะแนน
        if (localStorage.getItem("hasVoted") === "true") {
            return;
        }

        const counts = getCounts();

        counts[item.id] = (counts[item.id] || 0) + 1;

        saveCounts(counts);

        // บันทึกว่าเครื่องนี้ใช้สิทธิ์แล้ว
        localStorage.setItem("hasVoted", "true");

        window.location.href = "ranking.html";
    });

    list.appendChild(button);
});
