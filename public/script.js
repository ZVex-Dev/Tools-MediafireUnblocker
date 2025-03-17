document.getElementById("generate").addEventListener("click", async () => {
    const url = document.getElementById("url").value;
    if (!url) return alert("Masukkan link MediaFire!");

    document.getElementById("generate").innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';

    const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
    });

    document.getElementById("generate").innerHTML = '<i class="fas fa-magic"></i> Generate';

    const data = await response.json();
    if (data.error) return alert("Invalid MediaFire URL!");

    document.getElementById("unblocked-link").href = data.linkAlternatif;
    document.getElementById("unblocked-link").textContent = data.linkAlternatif;
    document.getElementById("result").classList.remove("hidden");
});
