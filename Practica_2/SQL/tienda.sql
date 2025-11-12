# Host: localhost  (Version 5.5.5-10.4.32-MariaDB)
# Date: 2025-10-29 00:44:36
# Generator: MySQL-Front 6.1  (Build 1.26)


#
# Structure for table "categorias"
#

DROP TABLE IF EXISTS `categorias`;
CREATE TABLE `categorias` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `fecha_alta` datetime DEFAULT current_timestamp(),
  `fecha_act` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

#
# Data for table "categorias"
#

INSERT INTO `categorias` VALUES (1,'Electrónica','Dispositivos electrónicos y gadgets','2025-10-29 00:10:56','2025-10-29 00:10:56'),(2,'Oficina','Material y accesorios de oficina','2025-10-29 00:10:56','2025-10-29 00:10:56');

#
# Structure for table "productos"
#

DROP TABLE IF EXISTS `productos`;
CREATE TABLE `productos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `precio` decimal(10,2) NOT NULL,
  `stock` int(11) NOT NULL,
  `categoria_id` int(11) NOT NULL,
  `fecha_alta` datetime DEFAULT current_timestamp(),
  `fecha_act` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `categoria_id` (`categoria_id`),
  CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`categoria_id`) REFERENCES `categorias` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

#
# Data for table "productos"
#

INSERT INTO `productos` VALUES (1,'Laptop Gamer',2500.00,3,1,'2025-10-29 00:10:56','2025-10-29 00:43:00'),(2,'Mouse',25.99,50,1,'2025-10-29 00:10:56','2025-10-29 00:10:56'),(3,'Cuaderno',5.00,100,2,'2025-10-29 00:10:56','2025-10-29 00:10:56'),(4,'Lapicero',1.50,200,2,'2025-10-29 00:10:56','2025-10-29 00:10:56'),(5,'Teclado',45.50,25,1,'2025-10-29 00:40:21','2025-10-29 00:40:21');
