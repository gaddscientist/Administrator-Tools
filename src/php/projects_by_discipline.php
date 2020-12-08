<?php
echo "<h1>Projects By Discipline</h1>";

require_once('projects_connection.php');


if(isset($_POST['discipline'])) {
    $disc = trim($_POST['discipline']);
}
else {
    $disc = '*';
}

$stmt = $conn->prepare("SELECT Project_Name as 'Project', Project_Categories as 'Discipline' FROM projects WHERE Project_Categories LIKE '%$disc%'");
// $stmt = $conn->prepare("SELECT Project_Name as 'Project', Project_Categories as 'Discipline' FROM projects WHERE Project_Categories LIKE ?");
// $stmt->execute(array($disc));
$stmt->execute();

echo "<table style='border: solid 1px black;'>";
echo "<thead><tr><th>Project</th><th>Discipline</th></tr></thead>";
echo "<tbody>";

while ($row = $stmt->fetch(PDO::FETCH_BOTH)) {
    echo "<tr><td>$row[0]</td><td>$row[1]</td></tr>";
    // echo $row[0] . " " . $row[1] . "\n";
}

echo "</tbody>";
echo "</table>";

?>

