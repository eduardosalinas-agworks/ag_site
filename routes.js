module.exports = function (app, db) {
    app.set("views", ["./views", "./views/partials"]);
    app.set("view engine", "ejs");

    // HOME
    app.get("/", (req, res) => {
        res.status(200).render("base", {
            title: "Home",
            content: "home"
        });
    });

    //  QUEM SOMOS
    app.get("/quem-somos", (req, res) => {
        res.status(200).render("base", {
            title: "Quem Somos",
            content: "quem-somos"
        });
    });

    //  FÁBRICA DE SOFTWARE
    app.get("/fabrica-de-software", (req, res) => {
        res.status(200).render("base", {
            title: "Fábrica de Software",
            content: "fabrica-de-software"
        });
    });

    //  ALOCAÇÃO DE PROFISSIONAIS
    app.get("/alocacao-de-profissionais", (req, res) => {
        res.status(200).render("base", {
            title: "Alocação de Profissionais",
            content: "alocacao-de-profissionais"
        });
    });

    //  TREINAMENTO
    app.get("/treinamento", (req, res) => {
        res.status(200).render("base", {
            title: "Treinamento",
            content: "treinamento"
        });
    });

    //  BLOG - REDIRECIONADO
    app.get("/blog", (req, res) => {
        res.status(301).redirect("https://www.agworks.com.br/blog");
    });

    //  CONTATO
    app.get("/contato", (req, res) => {
        res.status(200).render("base", {
            title: "Contato",
            content: "contato"
        });
    });

    // 404 - TODO: VIEW DA 404
    app.get("*", (req, res) => {
        res.status(404).render("404", { title: "Página não encontrada" });
    });

};