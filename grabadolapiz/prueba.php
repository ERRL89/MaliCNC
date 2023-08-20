<?php
$servername = "fdb32.awardspace.net";
$username = "361640_ovit";
$password = "Erxl5063701489";
$dbname = "4361640_ovit";

// Crear una conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Datos para insertar
$Cliente = "Matias";

// Consulta para insertar datos en la tabla existente
$sql = "INSERT INTO `Grabado_lapiz`(`Pedido`, `Cliente`) VALUES ('','$Cliente')";

if ($conn->query($sql) === TRUE) {
    echo "Datos insertados correctamente.";
} else {
    echo "Error al insertar datos: " . $conn->error;
}

// Cerrar la conexión
$conn->close();
?>
