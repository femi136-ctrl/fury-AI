// script.js

// script.js
const tabs = document.querySelectorAll(".tab");
let activeMode = "thread";

// Tab switching
tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    const text = tab.innerText.toLowerCase();
    if (text.includes("thread")) activeMode = "thread";
    if (text.includes("hook")) activeMode = "hooks";
    if (text.includes("caption")) activeMode = "captions";
  });
});

function generateContent() {
  const input = document.getElementById("inputText").value;
  const output = document.getElementById("outputBox");
  const btn = document.getElementById("genBtn");

  if (!input.trim()) return alert("Paste content first");

  btn.innerText = "Generating...";
  btn.disabled = true;

  setTimeout(() => {
    let result = "";

    if (activeMode === "thread") {
      const parts = input.split(".").slice(0, 5);
      result = parts.map((p, i) => `${i + 1}/ ${p.trim()}`).join("<br><br>");
    }

    if (activeMode === "hooks") {
      const hooks = [
        `🔥 ${input.slice(0, 40)}...`,
        "💡 This will change how you create content",
        "🚀 Grow faster with this simple trick"
      ];
      result = hooks.join("<br><br>");
    }

    if (activeMode === "captions") {
      const captions = [
        "✨ Level up your content today",
        "📈 Growth is one post away",
        "🚀 Start creating smarter, not harder"
      ];
      result = captions.join("<br><br>");
    }

    output.innerHTML = result;

    btn.innerText = "Generate";
    btn.disabled = false;
  }, 1000);
}

