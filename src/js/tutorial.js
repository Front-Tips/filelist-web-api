window.addEventListener("load", () => {
  // Check for File APIs support
  if (!(window.File && window.FileReader && window.FileList && window.Blob)) {
    // Handle the case where File APIs are not supported
  }

  document
    .getElementById("files")
    .addEventListener("change", handleFileSelection);
});

/* ------------------------ */
/*        File Infos        */
/* ------------------------ */
function handleFileSelection({ target: { files } }) {
  /* ------- File Name ------ */
  const fileList = Array.from(files, (file) => file.name);
  const fileCount = fileList.length;
  document.querySelector(".file__title").textContent =
    fileCount > 0 ? fileList.join(", ") : "No File";

  /* ---- Number of Files --- */
  document.querySelector(".file__count").textContent = `${fileCount} file${
    fileCount !== 1 ? "s" : ""
  }`;

  /* ------- File Size ------ */
  const totalSize = Array.from(files).reduce((sum, file) => sum + file.size, 0);
  const formattedSize = (totalSize / 1024 / 1024).toFixed(2);

  document.querySelector(".file__size").textContent = `${formattedSize} MB`;
}
