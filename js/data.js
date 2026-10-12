
const items = [
    { id: 1, name: "มัลฟอยควยหาย", image: "img/2.webp" },
    { id: 2, name: "กระต่าย", image: "img/3.webp" },
    { id: 3, name: "พะโล้", image: "img/4.webp" },
    { id: 4, name: "หมาเด็ก", image: "img/5.webp" },
    { id: 5, name: "นมใหญ่", image: "img/6.webp" },
    { id: 6, name: "อาฮา", image: "img/7.webp" },
    { id: 7, name: "ไอปาน", image: "img/8.webp" },
    { id: 8, name: "ไครว่ะ", image: "img/9.webp" },
    { id: 9, name: "ผัวกู", image: "img/10.webp" },
    { id: 10, name: "รายการที่ 10", image: "img/12." }
];

function getCounts() {
    const saved = localStorage.getItem("itemCounts");

    if (saved) {
        return JSON.parse(saved);
    }

    return Object.fromEntries(
        items.map(item => [item.id, 0])
    );
}

function saveCounts(counts) {
    localStorage.setItem("itemCounts", JSON.stringify(counts));
}
