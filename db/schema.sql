create database burgers_db;
use burgers_db;
create table burgers(
    id integer not null AUTO_INCREMENT,
    burger_name varchar not null,
    devoured boolen NOT NULL,
    PRIMARY KEY (id)
)