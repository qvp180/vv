
const rankingList = document.getElementById("ranking-list");
const counts = getCounts();

const rankedItems = [...items].sort((a, b) => {
    const difference =
        (counts[b.id] || 0) - (counts[a.id] || 0);

    return difference || a.id - b.id;
});

rankedItems.forEach((item, index) => {
    const row = document.createElement("div");
    row.className = "item-button";

    const rank = document.createElement("strong");
    rank.textContent = index + 1;
    rank.style.minWidth = "25px";

    const image = document.createElement("img");
    image.src = item.image;
    image.alt = item.name;

    const details = document.createElement("div");

    const name = document.createElement("div");
    name.textContent = item.name;

    const count = document.createElement("small");
    count.textContent =
        "จำนวนครั้งที่กด: " + (counts[item.id] || 0);

    details.append(name, count);
    row.append(rank, image, details);

    rankingList.appendChild(row);
});
