// ===============================
// CULTIVO VERDE - JavaScript
// ===============================

// Menu Mobile
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector("nav");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        menu.classList.toggle("ativo");
    });
}

// ===============================
// Scroll Suave para Links
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        if (destino) {
            destino.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// ===============================
// Botão Voltar ao Topo
// ===============================

const btnTopo = document.getElementById("voltarTopo");

window.addEventListener("scroll", () => {

    if (!btnTopo) return;

    if (window.scrollY > 400) {
        btnTopo.style.display = "block";
    } else {
        btnTopo.style.display = "none";
    }
});

if (btnTopo) {
    btnTopo.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

// ===============================
// Animação ao aparecer na tela
// ===============================

const elementos = document.querySelectorAll(".animar");

function mostrarElementos() {

    elementos.forEach(item => {

        const topo = item.getBoundingClientRect().top;

        if (topo < window.innerHeight - 100) {
            item.classList.add("mostrar");
        }

    });

}

window.addEventListener("scroll", mostrarElementos);
mostrarElementos();

// ===============================
// Contador de Plantas
// ===============================

const contador = document.getElementById("contador");

if (contador) {

    let numero = 0;
    const meta = 500;

    const intervalo = setInterval(() => {

        numero += 5;

        contador.textContent = numero;

        if (numero >= meta) {
            contador.textContent = meta;
            clearInterval(intervalo);
        }

    }, 20);

}

// ===============================
// Validação do Formulário
// ===============================

const formulario = document.getElementById("formContato");

if (formulario) {

    formulario.addEventListener("submit", function(e){

        e.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

        if(nome === "" || email === "" || mensagem === ""){

            alert("Preencha todos os campos.");
            return;

        }

        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(!regex.test(email)){
            alert("Digite um e-mail válido.");
            return;
        }

        alert("Mensagem enviada com sucesso! 🌱");

        formulario.reset();

    });

}

// ===============================
// Ano automático no Rodapé
// ===============================

const ano = document.getElementById("ano");

if (ano) {
    ano.textContent = new Date().getFullYear();
}

// ===============================
// Saudação conforme horário
// ===============================

const saudacao = document.getElementById("saudacao");

if (saudacao) {

    const hora = new Date().getHours();

    if (hora < 12) {
        saudacao.textContent = "🌞 Bom dia! Bem-vindo ao Cultivo Verde!";
    } else if (hora < 18) {
        saudacao.textContent = "🌿 Boa tarde! Cuide das suas plantas!";
    } else {
        saudacao.textContent = "🌙 Boa noite! A natureza agradece sua visita.";
    }

}
