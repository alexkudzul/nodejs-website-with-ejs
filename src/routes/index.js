const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    // Envio de archivos html, path.join se utiliza para convertir el diagonal a diagonal invertida(slash)
    // res.sendFile(path.join(__dirname, 'views/index.html'));

    // Envio de archivos ejs
    res.render("index.html", { title: "First App NodeJS" });
});

router.get("/contact", (req, res) => {
    res.render("contact.html", {title: "Contact Page"});
});

module.exports = router;
