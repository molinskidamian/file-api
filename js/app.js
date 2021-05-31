(function () {
    if (!window.FileReader) return;

    const fileInput = document.querySelector("#fileInput");

    fileInput.onchange = function () {
        const file = this.files[0];

        document.querySelector(
            "#fileName"
        ).innerHTML = `<strong>Nazwa:</strong> ${file.name}`;
        document.querySelector(
            "#fileSize"
        ).innerHTML = `<strong>Rozmiar:</strong> ${file.size}`;
        document.querySelector(
            "#fileType"
        ).innerHTML = `<strong>Typ:</strong> ${file.type}`;
        document.querySelector(
            "#fileLastModifiedDate"
        ).innerHTML = `<strong>Ostatnio zmodyfikowany:</strong> ${file.lastModifiedDate}`;
    };
})();
