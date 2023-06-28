CREATE TABLE
    `smartphone` (
        `id` INT NOT NULL AUTO_INCREMENT UNIQUE,
        `point_vente_id` INT NOT NULL,
        `modele` varchar(200),
        `marque` varchar(200),
        `systeme_exploitation` varchar(200),
        `ecran` FLOAT,
        `reseau` varchar(200),
        `annee_fabrication` INT,
        `date_ajout` DATETIME NOT NULL,
        `etat` varchar(100),
        `stockage` INT(5),
        `ram` INT(5),
        `verrouillage` TINYINT,
        `chargeur_cable` TINYINT,
        `ponderation` INT,
        `categorie_prix` INT,
        `image` VARCHAR(300),
        PRIMARY KEY (`id`)
    );

INSERT INTO
    `smartphone` (
        point_vente_id,
        modele,
        marque,
        systeme_exploitation,
        ecran,
        reseau,
        annee_fabrication,
        date_ajout,
        etat,
        stockage,
        ram,
        verrouillage,
        chargeur_cable,
        ponderation,
        categorie_prix,
        image
    )
VALUES (
        1,
        "Iphone SE",
        "Apple",
        "iOS",
        4,
        "4G",
        2016,
        NOW(),
        "reconditionne",
        64,
        2,
        0,
        1,
        10,
        5,
        "https://d1eh9yux7w8iql.cloudfront.net/product_images/10743_a22ef46b-3919-4f1d-9d29-1e1655f50f3f.jpg"
    ), (
        1,
        "Redmi note 12",
        "Xiaomi",
        "Android 13",
        6.67,
        "5G",
        2022,
        NOW(),
        "reconditionnable",
        64,
        4,
        0,
        1,
        10,
        4,
        "https://cdn.shopify.com/s/files/1/0616/7153/8871/products/None_4f828190-1881-4799-9568-73e5193b503b_1000x.jpg?v=1679999866"
    ), (
        1,
        "Iphone 7 plus",
        "Apple",
        "IOS 8",
        5.5,
        "4G",
        2019,
        NOW(),
        "DEEE",
        32,
        4,
        0,
        1,
        -50,
        1,
        "https://cdn.shopify.com/s/files/1/0616/7153/8871/files/14565_231ba3a4-19e9-4d73-ab66-06da31fdb99a_1000x.jpg?v=1687422782"
    ), (
        1,
        "Galaxy s7 edge",
        "Samsung",
        "Android 11",
        5.5,
        "4G",
        2020,
        NOW(),
        "reconditionnable",
        32,
        8,
        0,
        1,
        20,
        3,
        "https://cdn.shopify.com/s/files/1/0616/7153/8871/products/17775_590feb17-d73d-4299-8420-2d4f2e77b34d_1000x.jpg?v=1679999845"
    ), (
        1,
        "Xperia 5",
        "Sony",
        "Android 11",
        6.1,
        "4G",
        2018,
        NOW(),
        "reconditionnable",
        128,
        16,
        0,
        1,
        20,
        5,
        "https://cdn.shopify.com/s/files/1/0616/7153/8871/files/306615_d1888ec0-a81a-4904-afef-ee43dff1a2f4_1000x.jpg?v=1687422670"
    ), (
        1,
        "P20 Pro 64",
        "Huawei",
        "Android 12",
        6.1,
        "5G",
        2020,
        NOW(),
        "reconditionnable",
        64,
        16,
        0,
        1,
        20,
        5,
        "https://cdn.shopify.com/s/files/1/0616/7153/8871/products/363360_b0847113-0d98-473a-900b-06f963a095d1_1000x.jpg?v=1680000030"
    );

CREATE TABLE
    `point_vente` (
        `id` INT NOT NULL AUTO_INCREMENT,
        `adresse` varchar(200) NOT NULL,
        `nom` varchar(200) NOT NULL,
        PRIMARY KEY (`id`)
    );

INSERT INTO
    `point_vente` (adresse, nom)
VALUES (
        "2 place de Rennes",
        "Magasin de Rennes"
    );

CREATE TABLE
    `utilisateur` (
        `id` INT NOT NULL AUTO_INCREMENT,
        `point_vente_id` INT NOT NULL,
        `nom` varchar(200) NOT NULL,
        `prenom` varchar(200) NOT NULL,
        `mail` varchar(200) NOT NULL,
        `mdp` varchar(200) NOT NULL,
        PRIMARY KEY (`id`)
    );

INSERT INTO
    `utilisateur` (
        point_vente_id,
        nom,
        prenom,
        mail,
        mdp
    )
VALUES (
        1,
        "Tom",
        "LeGroNaz",
        "tomlenaze@gmail.com",
        "tomestnaze"
    );

CREATE TABLE
    `historique` (
        `smartphone_id` INT NOT NULL,
        `user_id` INT NOT NULL,
        `type_operation` varchar(200) NOT NULL,
        PRIMARY KEY (`smartphone_id`, `user_id`)
    );

ALTER TABLE `smartphone`
ADD
    CONSTRAINT `smartphone_fk0` FOREIGN KEY (`point_vente_id`) REFERENCES `point_vente`(`id`);

ALTER TABLE `utilisateur`
ADD
    CONSTRAINT `utilisateur_fk0` FOREIGN KEY (`point_vente_id`) REFERENCES `point_vente`(`id`);

ALTER TABLE `historique`
ADD
    CONSTRAINT `historique_fk0` FOREIGN KEY (`smartphone_id`) REFERENCES `smartphone`(`id`);

ALTER TABLE `historique`
ADD
    CONSTRAINT `historique_fk1` FOREIGN KEY (`user_id`) REFERENCES `utilisateur`(`id`);