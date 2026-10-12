
function resetVoting() {
    // ล้างคะแนนของทั้ง 10 รายการ
    localStorage.removeItem("itemCounts");

    // คืนสิทธิ์การโหวต
    localStorage.removeItem("hasVoted");

    // โหลดหน้าเว็บใหม่
    window.location.href = "index.html";
}

// เรียกใช้ฟังก์ชันเมื่อกดปุ่มรีเซ็ต
document.getElementById("reset-button").addEventListener("click", () => {
    const confirmReset = confirm(
        "ต้องการรีเซ็ตคะแนนและสิทธิ์การโหวตทั้งหมดหรือไม่?"
    );

    if (confirmReset) {
        resetVoting();
    }
});
