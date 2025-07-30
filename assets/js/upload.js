

const dropZone = document.getElementById('drop-zone');
const fileInput = document.getElementById('fileInput');
const fileList = document.getElementById('file-list');

// Open file dialog on click
dropZone.addEventListener('click', () => fileInput.click());

// Show file name(s)
function showFiles(files) {
  fileList.innerHTML = '';
  for (const file of files) {
    const li = document.createElement('li');
    li.textContent = file.name;
    fileList.appendChild(li);
  }
}

// Drag & Drop handlers
dropZone.addEventListener('dragover', (e) => {
  e.preventDefault();
  dropZone.classList.add('dragover');
});

dropZone.addEventListener('dragleave', () => {
  dropZone.classList.remove('dragover');
});

dropZone.addEventListener('drop', (e) => {
  e.preventDefault();
  dropZone.classList.remove('dragover');
  const files = e.dataTransfer.files;
  showFiles(files);
});

// Handle manual file input
fileInput.addEventListener('change', () => {
  showFiles(fileInput.files);
});
