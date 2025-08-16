drop database if exists delux_hotel;
-- Crear base de datos
CREATE DATABASE IF NOT EXISTS delux_hotel;
USE delux_hotel;

-- ==========================
--  Tabla de usuarios
-- ==========================
CREATE TABLE IF NOT EXISTS usuarios (
  id_usuario INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  correo VARCHAR(100) NOT NULL UNIQUE,
  contrasena VARCHAR(255) NOT NULL,
  rol ENUM('cliente', 'admin') NOT NULL DEFAULT 'cliente',
  creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Confirmar que rol tenga valor por defecto 'cliente'
ALTER TABLE usuarios 
  MODIFY rol ENUM('cliente', 'admin') NOT NULL DEFAULT 'cliente';

-- ==========================
--  Tabla de habitaciones
-- ==========================
CREATE TABLE IF NOT EXISTS habitaciones (
  id_habitacion INT AUTO_INCREMENT PRIMARY KEY,
  tipo_habitacion VARCHAR(50) NOT NULL, -- Doble, Suite, Penthouse, etc.
  descripcion TEXT,
  precio DECIMAL(10, 2) NOT NULL,
  capacidad INT NOT NULL,
  disponible BOOLEAN DEFAULT TRUE,
  ciudad VARCHAR(100) NOT NULL,
  imagen_url VARCHAR(255) DEFAULT NULL, -- Nueva columna para mostrar imágenes
  creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ==========================
--  Tabla de reservas
-- ==========================
CREATE TABLE IF NOT EXISTS reservas (
  id_reserva INT AUTO_INCREMENT PRIMARY KEY,
  id_usuario INT NOT NULL,
  id_habitacion INT NOT NULL,
  fecha_inicio DATE NOT NULL,
  fecha_fin DATE NOT NULL,
  estado ENUM('activa', 'cancelada', 'finalizada') DEFAULT 'activa',
  creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

  FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario) ON DELETE CASCADE,
  FOREIGN KEY (id_habitacion) REFERENCES habitaciones(id_habitacion) ON DELETE CASCADE
);

-- ==========================
--  Datos de prueba (opcional)
-- ==========================
INSERT INTO habitaciones (tipo_habitacion, descripcion, precio, capacidad, ciudad, imagen_url)
VALUES 
('Doble', 'Habitación cómoda con cama doble y baño privado.', 200000, 2, 'Bogotá', 'https://picsum.photos/400/200?random=1'),
('Suite', 'Suite de lujo con jacuzzi y vista panorámica.', 500000, 4, 'Medellín', 'https://picsum.photos/400/200?random=2'),
('Penthouse', 'Penthouse con terraza privada y cocina.', 1000000, 6, 'Cartagena', 'https://picsum.photos/400/200?random=3'),
('Sencilla', 'Habitación básica con cama sencilla.', 150000, 1, 'Bogotá', 'https://picsum.photos/400/200?random=4');

select * from usuarios;
