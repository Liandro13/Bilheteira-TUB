<h1 align="center">🚌 Bilheteira TUB</h1>
<p align="center">
  Online ticket purchasing system for Braga's Urban Transport
</p>
<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
  <img src="https://img.shields.io/badge/Status-Completed-brightgreen?style=for-the-badge"/>
</p>

---

## 📋 About

**Bilheteira TUB** is a web application that simulates an online ticket purchasing system for Braga's Urban Transport (TUB). Users can authenticate, choose their trip, provide passenger details, pick a seat, and complete payment — all in a guided, step-by-step flow.

## ✨ Features

### 🧑 User Area
- **Login / Sign Up** — user authentication
- **Ticket Selection** — choose destination and ticket type
- **Passenger Info** — fill in personal details
- **Seat Selection** — interactive seat map
- **Payment** — purchase completion

### 🔧 Admin Backoffice
- Sales management and oversight

## 🗺️ Application Flow

```
home → login → ticket selection → passenger info → seat selection → payment
```

## 🛠️ Tech Stack

| Technology | Use |
|---|---|
| HTML5 | Page structure |
| CSS3 | Styling and responsive layout |
| JavaScript (Vanilla) | Logic and interactivity |

## 📂 Project Structure

```
Bilheteira-TUB/
├── home.html           # Landing page
├── login.html          # Authentication
├── signup.html         # Registration
├── bilhete.html        # Ticket selection
├── passageiro.html     # Passenger details
├── lugares.html        # Seat selection
├── pagamento.html      # Payment
├── adminpage.html      # Backoffice
├── CSS/
├── Javascript/
└── images/
```

## 🚀 Getting Started

This is a static frontend project — just open `home.html` in your browser:

```bash
git clone https://github.com/Liandro13/Bilheteira-TUB.git
cd Bilheteira-TUB
open home.html
```