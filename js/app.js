(function () {
    if (!window.FileReader) return;

    const fileInput = document.querySelector("#fileInput"),
        start = document.querySelector("#start"),
        stop = document.querySelector("#stop"),
        progress = document.querySelector("#progress");

    fileInput.onchange = function () {
        const file = this.files[0],
            reader = new FileReader();

        reader.onload = function (e) {
            console.log(this.result);
        };

        /* Sposoby odczytywania plików */
        // reader.readAsText(file);
        // reader.readAsBinaryString(file);

        /* Pobierz obraz */
        // if (file.type.match("image.*")) {
        //     reader.onload = function () {
        //         let img = new Image();
        //         img.src = this.result;

        //         document.querySelector("#playground").appendChild(img);
        //     };

        //     reader.readAsDataURL(file);
        // }

        reader.onloadstart = function () {
            console.log(`Start odczytywania. readyState: ${this.readyState}`);
        };

        reader.onload = function () {
            console.log(
                `Wczytywanie zakończone sukcesem. readyState: ${this.readyState}`
            );
        };

        reader.onloadend = function () {
            console.log(
                `Zakończono odczywywanie. readyState: ${this.readyState}`
            );
        };

        reader.onprogress = function (e) {
            if (e.lengthComputable) {
                let percent = (e.loaded / e.total) * 100;

                progress.value = percent;
            }
        };

        reader.onabort = function () {
            console.log(
                `Przerwano odczytywanie pliku. readyState: ${this.readyState}`
            );
        };

        reader.onerror = function () {
            console.log(
                `Wystąpił błąd ${this.error.code} ${this.error.message}`
            );
        };

        start.onclick = function (e) {
            e.preventDefault();
            reader.readAsBinaryString(file);
        };

        stop.onclick = function (e) {
            e.preventDefault();
            reader.abort(); // w FF nie zgłasza błędu
        };

        /* Get details */

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
