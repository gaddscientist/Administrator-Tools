<?php
// echo "<h1>All projects with clients and assigned instructor</h1>";

require_once('projects_connection.php');

$stmt = $conn->prepare("SELECT Project_Name as 'Project', Client_Name as 'Client', Instructor_1_Name as 'Assigned Instructor' from projects ORDER BY Project_Number");
$stmt->execute();

// echo "<table style='border: solid 1px black;'>";
// echo "<thead><tr><th>Project</th><th>Client</th><th>Assigned Instructor</th></tr></thead>";
// echo "<tbody>";

while ($row = $stmt->fetch(PDO::FETCH_BOTH)) {
    // echo "<tr><td>$row[0]</td><td>$row[1]</td><td>$row[2]</td></tr>";
    echo $row[0] . " " . $row[1] . " " . $row[2] . "\n";
}

// echo "</tbody>";
// echo "</table>";

?>
