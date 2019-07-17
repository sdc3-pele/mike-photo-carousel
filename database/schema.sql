DROP DATABASE IF EXISTS fec_photos;

CREATE DATABASE fec_photos;

USE fec_photos;

CREATE TABLE products (
  product_id int auto_increment,
  photo_urls JSON,
  primary key(product_id)
);

-- CREATE TABLE photos (
--   photo_id int auto_increment,
--   product varchar(20),
--   photo_url varchar(50),
--   product_id int,
--   primary key (photo_id),
--   foreign key(product_id) references products(product_id)
-- );
