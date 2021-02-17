# Projeto utilizando nodeJS, postgreSQL, Angular e Express
Meu primeiro projeto utilizando nodeJS, postgreSQL, Angular e Express, para adicionar produtos e armazenar no banco de dados postgreSQL.

> Dependências Front-end
* Bootstrap
* ng2-slim-loading-bar
* rxjs-compat


> Dependências Back-end
* Express
* cors
* express-promise-router
* pg

## Como executar
É necessário ter o Node instalado na máquina, entre no diretório do projeto e use o comando *npm i* para começar, você também irá precisar do banco de dados postgreSQL instalado e o banco de dados criado chamado "api-node", logo depois vá para CREATE script com o código abaixo para criar a tabela: 
```
CREATE TABLE public.products
(
    id_product integer NOT NULL DEFAULT nextval('products_id_product_seq'::regclass),
    name_product character varying(255) COLLATE pg_catalog."default" NOT NULL,
    qtd_product integer NOT NULL,
    price_product numeric(7,2) NOT NULL,
    CONSTRAINT products_pkey PRIMARY KEY (id_product)
)
```
Agora para executar a aplicação do back-end: no cmd, dentro da pasta api digite, 'node server.js'. Agora no front-end: no cmd, dentro da pasta front, digite 'ng serve -o'.
