// =================================
// MENU DO CELULAR
// =================================

const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", function () {
    menu.classList.toggle("active");
});


// Fecha o menu quando clicar em algum link

const links = document.querySelectorAll("#menu a");

links.forEach(function (link) {

    link.addEventListener("click", function () {
        menu.classList.remove("active");
    });

});


// =================================
// FORMULÁRIO → WHATSAPP
// =================================

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;
    const assunto = document.getElementById("assunto").value;
    const mensagem = document.getElementById("mensagem").value;


    // =================================
    // COLOQUE AQUI O NÚMERO DO RESPONSÁVEL
    // =================================

    const numeroWhatsApp = "5579999999999";


    const texto =
        "Olá! Meu nome é " + nome +
        ".%0A%0A" +

        "Meu WhatsApp: " + telefone +
        "%0A" +

        "Assunto: " + assunto +
        "%0A%0A" +

        "Mensagem:%0A" + mensagem;


    const url =
        "https://wa.me/" +
        numeroWhatsApp +
        "?text=" +
        texto;


    window.open(url, "_blank");

});
