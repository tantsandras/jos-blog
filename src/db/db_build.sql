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
  img_url VARCHAR(500),
  text TEXT NOT NULL,
  date TEXT
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


COMMIT;