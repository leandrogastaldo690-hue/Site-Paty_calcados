```javascript
/* =========================================
   PATY CALÇADOS
   SCRIPT.JS
========================================= */


/* =========================================
   MENU MOBILE
========================================= */

const menuMobile = document.getElementById("menuMobile");
const menu = document.querySelector(".menu");


if (menuMobile && menu) {

    menuMobile.addEventListener("click", function () {

        menu.classList.toggle("show");

    });

}


/* =========================================
   FECHAR MENU AO CLICAR EM UM LINK
========================================= */

const menuLinks = document.querySelectorAll(".menu a");


menuLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (menu) {

            menu.classList.remove("show");

        }

    });

});


/* =========================================
   FILTRO DE PRODUTOS
========================================= */

const filters = document.querySelectorAll(".filter");

const products = document.querySelectorAll(".catalog-product");

const noProducts = document.getElementById("noProducts");


if (filters.length > 0 && products.length > 0) {

    filters.forEach(function (filter) {

        filter.addEventListener("click", function () {

            /* Remove o active dos outros botões */

            filters.forEach(function (button) {

                button.classList.remove("active");

            });


            /* Ativa o botão selecionado */

            filter.classList.add("active");


            /* Categoria selecionada */

            const category = filter.dataset.category;

            let visibleProducts = 0;


            /* Percorre os produtos */

            products.forEach(function (product) {

                const productCategory =
                    product.dataset.category;


                if (
                    category === "todos" ||
                    category === productCategory
                ) {

                    product.style.display = "block";

                    visibleProducts++;

                } else {

                    product.style.display = "none";

                }

            });


            /* Mensagem caso não exista produto */

            if (noProducts) {

                if (visibleProducts === 0) {

                    noProducts.style.display = "block";

                } else {

                    noProducts.style.display = "none";

                }

            }

        });

    });

}


/* =========================================
   CATEGORIA RECEBIDA PELA URL
========================================= */

const params = new URLSearchParams(
    window.location.search
);


const categoriaURL = params.get("categoria");


if (categoriaURL) {

    const categoriaNormalizada =
        categoriaURL.toLowerCase();


    filters.forEach(function (filter) {

        if (
            filter.dataset.category ===
            categoriaNormalizada.slice(0, -1)
        ) {

            filter.click();

        }

    });

}


/* =========================================
   ANO AUTOMÁTICO NO FOOTER
========================================= */

const footerYear =
    document.querySelector(".footer-bottom p");


if (footerYear) {

    const year = new Date().getFullYear();

    footerYear.innerHTML =
        `© ${year} Paty Calçados. Todos os direitos reservados.`;

}
```
