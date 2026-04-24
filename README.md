<h1 align="center">🚌 Bilheteira TUB</h1>
<p align="center">
  Sistema de bilheteira online para os Transportes Urbanos de Braga
</p>
<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
  <img src="https://img.shields.io/badge/estado-Concluído-brightgreen?style=for-the-badge"/>
</p>

---

## 📋 Sobre o Projeto

A **Bilheteira TUB** é uma aplicação web que simula o sistema de compra de bilhetes para os Transportes Urbanos de Braga (TUB). O utilizador pode autenticar-se, selecionar a viagem desejada, escolher lugares e efetuar o pagamento — tudo num fluxo intuitivo e guiado.

## ✨ Funcionalidades

### 🧑 Área do Utilizador
- **Login / Registo** — autenticação de utilizadores
- **Seleção de Bilhete** — escolher destino e tipo de bilhete
- **Informação do Passageiro** — preenchimento de dados pessoais
- **Seleção de Lugares** — mapa interativo de lugares disponíveis
- **Pagamento** — processamento da compra

### 🔧 Backoffice Admin
- Gestão e supervisão de vendas

## 🗺️ Fluxo da Aplicação

```
home.html → login.html → bilhete.html → passageiro.html → lugares.html → pagamento.html
```

## 🛠️ Tecnologias

| Tecnologia | Uso |
|---|---|
| HTML5 | Estrutura das páginas |
| CSS3 | Estilização e layout responsivo |
| JavaScript (Vanilla) | Lógica e interatividade |

## 📂 Estrutura do Projeto

```
Bilheteira-TUB/
├── home.html           # Página inicial
├── login.html          # Autenticação
├── signup.html         # Registo
├── bilhete.html        # Seleção de bilhete
├── passageiro.html     # Dados do passageiro
├── lugares.html        # Seleção de lugares
├── pagamento.html      # Pagamento
├── adminpage.html      # Backoffice
├── CSS/                # Folhas de estilo
├── Javascript/         # Scripts
└── images/             # Recursos visuais
```

## 🚀 Como Executar

Por se tratar de um projeto frontend estático, basta abrir o ficheiro `home.html` no browser:

```bash
# Clonar o repositório
git clone https://github.com/Liandro13/Bilheteira-TUB.git
cd Bilheteira-TUB

# Abrir no browser
open home.html
```

Ou simplesmente arrasta o ficheiro `home.html` para o browser.
