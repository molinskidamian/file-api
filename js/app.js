(function () {
    if (!window.FileReader) return;

    const fileInput = document.querySelector("#fileInput"),
        start = document.querySelector("#start"),
        stop = document.querySelector("#stop"),
        progress = document.querySelector("#progress");

    fileInput.onchange = function () {
        const file = this.files[0],
            reader = new FileReader();

        reader.onload = function () {
            const blob = new Blob([this.result], { type: "image/jpeg" });

            const fileURL = window.URL.createObjectURL(blob);

            const img = new Image();
            img.src = fileURL;

            document.querySelector("#playground").appendChild(img);

            window.URL.revokeObjectURL(fileURL);
        };

        reader.readAsArrayBuffer(file);
    };
})();
