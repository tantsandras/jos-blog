BEGIN;

DROP TABLE IF EXISTS users, languages CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  bio TEXT NOT NULL
);

CREATE TABLE languages (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  html INTEGER NOT NULL,
  css INTEGER NOT NULL,
  js INTEGER NOT NULL,
  sql INTEGER NOT NULL,
  node INTEGER NOT NULL
);



INSERT INTO users (name, bio) VALUES
(
'Sandra',
'Is a code ninja'
),
(
'Jason',
'Is a soon to be code ninja'
),
(
'Martin',
'Is the DOM god'
),
(
'Mike',
'Love bagels while coding'
);

INSERT INTO languages (user_id, html, css, js, sql, node) VALUES
(
  (SELECT id FROM users WHERE name = 'Sandra'),
  '4',
  '3',
  '3',
  '4',
  '2'
),
(
  (SELECT id FROM users WHERE name = 'Jason'),
  '3',
  '3',
  '3',
  '4',
  '3'
),
(
  (SELECT id FROM users WHERE name = 'Martin'),
  '4',
  '5',
  '4',
  '1',
  '2'
),
(
  (SELECT id FROM users WHERE name = 'Mike'),
  '5',
  '4',
  '3',
  '2',
  '4'
);

COMMIT;
