const titleInput = document.getElementById("noteTitle");
const noteInput = document.getElementById("noteInput");
const savedNotesDiv = document.getElementById("savedNotes");

const modal = document.getElementById("noteModal");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");

document.addEventListener("DOMContentLoaded", renderNotes);

// -------- Storage helpers --------
function getNotes() {
  return JSON.parse(localStorage.getItem("notes")) || [];
}

function saveNotes(notes) {
  localStorage.setItem("notes", JSON.stringify(notes));
}

// -------- Core features --------
function saveNote() {
  const title = titleInput.value.trim() || "Untitled";
  const content = noteInput.value.trim();
  if (!content) return;

  const notes = getNotes();

  notes.push({
    id: Date.now(),
    title,
    content
  });

  saveNotes(notes);
  titleInput.value = "";
  noteInput.value = "";
  renderNotes();
}

function clearNotes() {
  localStorage.removeItem("notes");
  renderNotes();
}

// -------- Rendering --------
function renderNotes() {
  savedNotesDiv.innerHTML = "";
  const notes = getNotes();

  notes.forEach(note => {
    const btn = document.createElement("button");
    btn.className = "note-item";
    btn.textContent = note.title;
    btn.onclick = () => openModal(note);
    savedNotesDiv.appendChild(btn);
  });
}

// -------- Modal --------
function openModal(note) {
  modalTitle.textContent = note.title;
  modalText.textContent = note.content;
  modal.style.display = "flex";
}

function closeModal() {
  modal.style.display = "none";
}

window.onclick = (e) => {
  if (e.target === modal) closeModal();
};