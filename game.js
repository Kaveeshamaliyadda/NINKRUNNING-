
document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("gameCanvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 800;
    canvas.height = 400;
    ctx.fillStyle = "white";
    ctx.font = "30px Arial";
    ctx.fillText("NINK Runner Game Coming Soon!", 150, 200);
});
