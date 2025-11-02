function openGirlsGallery(categoryId) {
  window.location.href = "girlsgallery.html";
}
function openBoysGallery(categoryId) {
  window.location.href = "boysgallery.html";
}
function openCouplesGallery(categoryId) {
  window.location.href = "couplesgallery.html";
}


// Copy from gallery icon
function copyPrompt(iconElement) {
  const promptDiv = iconElement.closest('.gallery-box').querySelector('.prompt');
  const promptText = promptDiv.textContent.trim();
  navigator.clipboard.writeText(promptText)
    .then(() => alert("✅ Prompt copied successfully!"))
    .catch(() => alert("❌ Failed to copy the prompt."));
}

// View prompt inside modal
function viewPrompt(iconElement) {
  const promptDiv = iconElement.closest('.gallery-box').querySelector('.prompt');
  const modal = document.getElementById('promptModal');
  const modalText = document.getElementById('modalPrompt');
  modalText.textContent = promptDiv.textContent.trim();
  modal.style.display = "block";
}

// Copy from inside modal
function copyFromModal() {
  const promptText = document.getElementById('modalPrompt').textContent.trim();
  navigator.clipboard.writeText(promptText)
    .then(() => {
      const btn = document.getElementById("copyInModal");
      btn.textContent = "✅ Copied!";
      setTimeout(() => { btn.textContent = "Copy Prompt"; }, 2000);
    })
    .catch(() => alert("❌ Failed to copy the prompt."));
}

// Close modal
function closeModal() {
  document.getElementById('promptModal').style.display = "none";
}

// Close modal on outside click
window.onclick = function(event) {
  const modal = document.getElementById('promptModal');
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// 🔍 Filter Prompts Function
function filterPrompts() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const boxes = document.querySelectorAll(".gallery-box");

  boxes.forEach(box => {
    const promptText = box.querySelector(".prompt").textContent.toLowerCase();
    if (promptText.includes(input)) {
      box.style.display = "block";
      box.style.animation = "fadeIn 0.4s";
    } else {
      box.style.display = "none";
    }
  });
}
