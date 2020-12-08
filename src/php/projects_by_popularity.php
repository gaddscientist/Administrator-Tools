
<?php
echo "<h1>All projcets in order of first choice popularity</h1>";

require_once('connection.php');

$stmt = $conn->prepare("SELECT count(Column_1_st_Choice) , Column_1_st_Choice FROM students GROUP BY Column_1_st_Choice ORDER BY count(Column_1_st_Choice) DESC");
$stmt->execute();

echo "<table style='border: solid 1px black;'>";
echo "<thead><tr><th>1st Choice Count</th><th>Project Name</th></tr></thead>";
echo "<tbody>";

while ($row = $stmt->fetch(PDO::FETCH_BOTH)) {
    echo "<tr><td>$row[0]</td><td>$row[1]</td></tr>";
}

echo "</tbody>";
echo "</table>";

?>
