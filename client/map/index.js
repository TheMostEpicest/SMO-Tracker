if (localStorage.getItem("SHA") !== window.__COMMIT_SHA__) {
    clearCache();
}
localStorage.setItem("SHA", window.__COMMIT_SHA__);

function clearCache() {}

const params = new URLSearchParams(location.search);
const roomId = params.get("roomId");

if (!roomId) {
    (async () => {
        let res = await fetch("/api/create", { method: "POST" });

        if (res.ok) {
            let data = await res.json();
            if (data.roomId) location.href = `.?roomId=${encodeURIComponent(data.roomId)}`;
        }
    })();
}