CREATE TABLE heart_rate (
    id SERIAL PRIMARY KEY,
    from_date TIMESTAMP,
    to_date TIMESTAMP,
    low INTEGER,
    high INTEGER
);