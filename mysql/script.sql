CREATE TABLE 'fmu_pokedex'.POKEMON (
  'id' INTEGER PRIMARY KEY,
  'pokemon' VARCHAR(10) not null,
  'type_1' VARCHAR(10), 
  'type_2' VARCHAR(10), 
  'height_m' REAL,
  'weight_kg' REAL,
  'description' TEXT,
  'abilities' VARCHAR(10),
  'img_url' TEXT
  )

--  LOAD DATA INFILE '/home/deborah/Documents/poke_fmu/Pokedex/mysql/database.csv'
--  INTO TABLE POKEMON
--  FIELDS TERMINATED BY ','
--  IGNORE 1 ROWS;