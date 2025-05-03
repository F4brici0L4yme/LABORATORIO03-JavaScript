<?php
$servername = "localhost";
$username = "root";       // Cambia si usas otro usuario
$password = "";           // Cambia si tienes contraseña
$dbname = "company";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$q = $_GET["q"];

$stmt = $conn->prepare("SELECT * FROM customers WHERE customer_id = ?");
$stmt->bind_param("s", $q);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    echo "<table style='border-collapse: collapse; border: 1px solid black;'>
            <tr style='background-color: #f2f2f2;'>
                <th style='border: 1px solid black; padding: 8px;'>Company</th>
                <th style='border: 1px solid black; padding: 8px;'>Contact</th>
                <th style='border: 1px solid black; padding: 8px;'>Address</th>
                <th style='border: 1px solid black; padding: 8px;'>City</th>
                <th style='border: 1px solid black; padding: 8px;'>Country</th>
            </tr>";

    while($row = $result->fetch_assoc()) {
        echo "<tr>
                <td style='border: 1px solid black; padding: 8px;'>" . htmlspecialchars($row["company_name"]) . "</td>
                <td style='border: 1px solid black; padding: 8px;'>" . htmlspecialchars($row["contact_name"]) . "</td>
                <td style='border: 1px solid black; padding: 8px;'>" . htmlspecialchars($row["address"]) . "</td>
                <td style='border: 1px solid black; padding: 8px;'>" . htmlspecialchars($row["city"]) . "</td>
                <td style='border: 1px solid black; padding: 8px;'>" . htmlspecialchars($row["country"]) . "</td>
              </tr>";
    }

    echo "</table>";
} else {
    echo "No customer found.";
}

$conn->close();
?>
