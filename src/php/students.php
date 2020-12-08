<?php

require_once('connection.php');

// Show all students
$stmt = $conn->prepare("SELECT Your_First_Name, Your_Last_Name FROM students");
$stmt->execute();

echo "<table style='border: solid 1px black;'>";
echo "<thead><tr><th>First name</th><th>Last name</th></tr></thead>";
echo "<tbody>";

while ($row = $stmt->fetch()) {
    echo "<tr><td>$row[Your_First_Name]</td><td>$row[Your_Last_Name]</td></tr>";
}

echo "</tbody>";
echo "</table>";

?>
