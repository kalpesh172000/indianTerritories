-- Create states table
DROP TABLE IF EXISTS states;
CREATE TABLE states (
    state_id INT AUTO_INCREMENT PRIMARY KEY,
    state_code VARCHAR(10) NOT NULL UNIQUE,
    state_name VARCHAR(100) NOT NULL
);

-- Create districts table
DROP TABLE IF EXISTS districts;
CREATE TABLE districts (
    district_id INT AUTO_INCREMENT PRIMARY KEY,
    district_code VARCHAR(10) NOT NULL UNIQUE,
    district_name VARCHAR(100) NOT NULL,
    state_id INT,
    FOREIGN KEY (state_id) REFERENCES states(state_id) ON DELETE CASCADE
);

-- Create towns table
DROP TABLE IF EXISTS towns;
CREATE TABLE towns (
    town_id INT AUTO_INCREMENT PRIMARY KEY,
    town_code VARCHAR(10) NOT NULL UNIQUE,
    town_name VARCHAR(100) NOT NULL,
    district_id INT,
    FOREIGN KEY (district_id) REFERENCES districts(district_id) ON DELETE CASCADE
);

