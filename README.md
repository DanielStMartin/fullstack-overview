# Light Fixture e-commerce

## Frontend

### Dependencies
- axios
- react-router-dom (BrowserRouter)
- redux
- react-redux
- redux-promise-middleware

### Componenets
App.js
    - Header
    - ProductView
        - Products
    - Cart
        - Products
    - AdminView
        - AdminCard
        - PostingForm
    - Footing

## Routes

 - ProductView => '/'
    - /product/:id
 - Cart => '/cart'
 - AdminView => '/admin'

### Redux
```js
const initialState = {
    admin: null,
    cart: [],
    products: []
}
```

## Backend
### Dependencies
-express
-express-session
-massive
-dotenv
-bcrypt

### Routes/Endpoints

**auth**
- login => /api/login
- logout => /api/logout
- register: => /api/register

**admin**
-getAll: => /api/admin
-getOne: => /api/admin/:id
-put: => /api/admin/:id
-delete: => /api/admin:id

**product**
 -getAll: => /api/store
 -getOne: => /api/store/:id
 -post: => /api/store
 -put: => /api/store/:id
 -delete: => /api/store:id
###Database Schema
- admin
```sql
create table admin
id serial primary key,
username varchar(20) not null,
password varchar(64),
full_name text
 ```
 -product
 ```sql
create table products
products_id serial primary key,
name varchar(25) not null,
price float not null,
tax float not null,
description text,
img text,
admin_id integer references admin(id)
 ```

### server file structure
- /server
    - index.js
    - controller/
        -productController.js
        -adminController.js


### dotenv
```text
SESSION_SECRET=
SERVER_PORT=
CONNECTION_STRING= (append => ?ssl=true)
```