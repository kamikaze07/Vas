--Vas 1.0 DataBase--

CREATE TABLE Deptos(Id_depto INT auto_increment, Nombre_depto VARCHAR (30), primary key (Id_depto));

CREATE TABLE  Empleados (Id_empleado INT auto_increment, Nombres TEXT (30) NOT NULL, Apellido_pat TEXT (20) NOT NULL,
Apellido_mat TEXT (20) NOT NULL, Id_depto INT NOT NULL, primary key (Id_empleado), foreign key (Id_depto) references Deptos (Id_depto));

CREATE TABLE Privilegios(Id_privilegio INT auto_increment, Nombre_privilegio VARCHAR(30) NOT NULL, primary key (Id_privilegio));

CREATE TABLE Usuarios (Id_usuario INT auto_increment, Usuario VARCHAR (30) NOT NULL, Contraseña VARCHAR(50) NOT NULL, Id_empleado INT, Id_privilegio INT NOT NULL,
primary key (Id_usuario), foreign key (Id_empleado) references Empleados(Id_empleado), foreign key (Id_privilegio) references Privilegios(Id_privilegio));