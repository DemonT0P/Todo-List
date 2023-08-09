export function save(allStorage) {
  localStorage.removeItem("AllStorage");
  localStorage.setItem("AllStorage", JSON.stringify(allStorage));
}
