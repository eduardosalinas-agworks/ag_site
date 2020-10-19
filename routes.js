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
            background: "bg-1",
            content: "quem-somos"
        });
    });

    //  FÁBRICA DE SOFTWARE
    app.get("/fabrica-de-software", (req, res) => {
        res.status(200).render("base", {
            title: "Fábrica de Software",
            background: "bg-2",
            content: "fabrica-de-software"
        });
    });

    //  ALOCAÇÃO DE PROFISSIONAIS
    app.get("/alocacao-de-profissionais", (req, res) => {
        res.status(200).render("base", {
            title: "Alocação de Profissionais",
            background: "bg-3",
            content: "alocacao-de-profissionais"
        });
    });

    //  TREINAMENTO
    app.get("/treinamento", (req, res) => {
        res.status(200).render("base", {
            title: "Treinamento",
            background: "bg-4",
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
            background: "bg-5",
            content: "contato"
        });
    });

    // 404 - TODO: VIEW DA 404
    app.get("*", (req, res) => {
        res.status(404).end();
    });

};