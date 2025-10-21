# Odin

## Czym jest Odin?
Odin to projekt strony internetowej dla agencji dziennikarskiej. Posiada on dashboard, który zawiera prezentację biura oraz wszystkie dzieła agencji. Dodatkowo umożliwia łatwe dodawanie kolejnych artykułów poprzez panel administratora.

## Technologie użyte w projekcie **Odin**

- **Docker** – konteneryzacja aplikacji i środowiska uruchomieniowego  
- **React** – framework frontendowy do budowy interfejsu użytkownika  
- **React-Bootstrap** – komponenty UI oparte na Bootstrap 5, ułatwiające stylizację  
- **Sass (SCSS)** – preprocesor CSS do łatwiejszego zarządzania stylami i zmiennymi  
- **PHP (8.2)** – backend API obsługujące logikę aplikacji  
- **MySQL (8.0)** – relacyjna baza danych  
- **phpMyAdmin** – narzędzie do zarządzania bazą danych z poziomu przeglądarki  
- **Nginx** – serwer WWW dla środowiska produkcyjnego (frontend)  
- **Apache** – serwer WWW obsługujący backend w kontenerze PHP  
- **AJAX (REST API)** – komunikacja między frontendem a backendem  
- **Bootstrap 5** – system siatki i stylów bazowych (używany przez React-Bootstrap)

## Funkcjonalności
- Wyświetlanie artykułów i newsów
- Dashboard dla administracji
- Dodawanie, edytowanie i usuwanie artykułów
- Responsywny interfejs dla urządzeń mobilnych i desktop

## Instalacja
1. Sklonuj repozytorium:
   ```bash
   git clone https://https://github.com/BaxBi1618/Odin
2. Uruchom Dockera:
    ```bash
    docker-compose up -d
3. Otwórz w przeglądarce:
    ```bash
    http://localhost

## Licencja
Projekt udostępniony na licencji [MIT](https://opensource.org/licenses/MIT)
