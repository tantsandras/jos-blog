BEGIN;

DROP TABLE IF EXISTS users, blogposts, comments CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  password VARCHAR(100) NOT NULL
);

CREATE TABLE blogposts (
  id SERIAL PRIMARY KEY,
  header TEXT NOT NULL,
  text TEXT NOT NULL,
  date INTEGER,
  img_url VARCHAR(500)
);

CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  post_id INTEGER REFERENCES blogposts(id),
  text TEXT NOT NULL
);


INSERT INTO users (name, password) VALUES
(
  'Jo', 
  'password'
);


INSERT INTO blogposts (header, text, date, img_url) VALUES
(
  'My first blog-post!',
  'Hello world',
  '29122018',
  'https://rarelyjovial.files.wordpress.com/2018/11/thumbnail_img_5813.jpg'
);

COMMIT;