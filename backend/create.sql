create table tb_order (id  bigserial not null, address TEXT, latitude float8, longitude float8, moment TIMESTAMP WITHOUT TIME ZONE, status int4, total float8, primary key (id));
create table tb_order_product (order_id int8 not null, product_id int8 not null, primary key (order_id, product_id));
create table tb_product (id  bigserial not null, description varchar(255), img_url TEXT, name varchar(255), price float8, primary key (id));
alter table tb_order_product add constraint FKsu03ywlcvyqg5y78qey2q25lc foreign key (product_id) references tb_product;
alter table tb_order_product add constraint FK40anaevs16kmc2tbh7wc511fq foreign key (order_id) references tb_order;
