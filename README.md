# Deposit Calculator

Веб-приложение для расчета доходности банковских депозитов со сложным процентом.

## Клонирование репозитория
```bash
git clone https://github.com/NickMosk1/deposit-calculator.git
```

## Запуск через Docker Compose
```bash
cd deposit-calculator

docker-compose up --build
```

## Локальный запуск

### Backend
```bash
cd backend

./mvnw spring-boot:run
```

### Frontend
```bash
cd frontend

npm install

npm run dev
```

## Приложение будет доступно:
```bash
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8080
```
