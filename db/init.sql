drop table if exists products;
drop table if exists admin;

create table admin(
    id serial primary key,
    username varchar(20) not null,
    password varchar(64) not null,
    full_name text
);
insert into admin (username, password, full_name)
values ('danielstmartin', 'dontGuessMyPassword', 'Daniel St Martin');
create table products(
    product_id serial primary key,
    name varchar(25) not null,
    price float not null,
    tax float not null,
    description text,
    image text,
    admin_id integer references admin(id)
);
insert into products(name, price, tax, description, image, admin_id)
values
('A Huge Light Fixture', 5.99, 0.08, 'The biggest light fixture you ever done seen', 'https://www.google.com/search?q=8323-15+SeaGull+Lighting&rlz=1C5CHFA_enUS730US731&oq=8323-15+SeaGull+Lighting&aqs=chrome..69i57.518j0j4&sourceid=chrome&ie=UTF-8', 1),
('Not a Light Fixture', 42.99, 0.08, 'If you need a light fixture, dont buy this!', 'https://www.google.com/search?q=P2004-09+Brushed+Nickel+Progress+Lighting&rlz=1C5CHFA_enUS730US731&oq=P2004-09+Brushed+Nickel+Progress+Lighting&aqs=chrome..69i57j69i60l3.462j0j9&sourceid=chrome&ie=UTF-8', 1)