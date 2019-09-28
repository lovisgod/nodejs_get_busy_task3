const save = () => {
    const description = document.getElementById("textarea").value;
    const num = Math.ceil(Math.random() * 9999);
    localStorage.setItem(`comments${num}`, description);
}
