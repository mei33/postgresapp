# Пример работы с PostgreSQL с использованием [Sequelize](https://github.com/sequelize/sequelize)

Данный проект представляет собой упрощенную форму взаимодействия с PostgreSQL, расположенной на локальном сервере. 

1. Создайте копию файла `.env.sample` и назовите её `.env`. Заполните его соответственно вашей локальной и удаленной конфигурации.
2? Создайте бд из консоли постгреса.
2. Запустите приложение:
```bash
nodemon index.js
```
3. Отправьте запрос согласно [API](https://app.swaggerhub.com/apis/mei33org/FirstAPIName) с помощью curl или Postman. Пример запроса с помощью curl:
```bash
curl -d '{"name": "Very Movie", "time": "10:10", "rating": 10}' -H "Content-Type: application/json" -X POST http://localhost:3000/api/movies/create 
```
