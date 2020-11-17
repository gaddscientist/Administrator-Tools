<?php
echo "<h1>Popularity of projects across all 6 choices</h1>";

require_once('connection.php');

// Show all students
$col1 = $conn->prepare("SELECT count(Column_1_st_Choice) , Column_1_st_Choice FROM students GROUP BY Column_1_st_Choice");
$col2 = $conn->prepare("SELECT count(Column_2nd_Choice) , Column_2nd_Choice FROM students GROUP BY Column_2nd_Choice");
$col3 = $conn->prepare("SELECT count(Column_3rd_Choice) , Column_3rd_Choice FROM students GROUP BY Column_3rd_Choice");
$col4 = $conn->prepare("SELECT count(Column_4th_Choice) , Column_4th_Choice FROM students GROUP BY Column_4th_Choice");
$col5 = $conn->prepare("SELECT count(Column_5th_Choice) , Column_5th_Choice FROM students GROUP BY Column_5th_Choice");
$col6 = $conn->prepare("SELECT count(Column_6th_Choice) , Column_6th_Choice FROM students GROUP BY Column_6th_Choice");
$col1->execute();
$col2->execute();
$col3->execute();
$col4->execute();
$col5->execute();
$col6->execute();

$projects = array();

echo "<table style='border: solid 1px black;'>";
echo "<thead><tr><th>Project</th><th>Total Count</th></tr></thead>";
echo "<tbody>";

// while ($row = $col1->fetch()) { //&& $row2 = $col2->fetch()) {
//     // echo "<tr><td>$row[Your_First_Name]</td><td>$row[Your_Last_Name]</td></tr>";
//     // echo $row2[0] . " " . $row2[1] . "\n";
//     // echo $row2[0] . " " . intval(substr($row2[1], 3, 3)) . "\n";
//     $projects[intval(substr($row[1], 3, 3))] = $row[0];
//     // $projects[intval(substr($row2[1], 3, 3))] += $row2[0];
// }
// while ($row = $col2->fetch()) { 
//     if(!isset($projects[intval(substr($row[1], 3, 3))])) {
//         $projects[intval(substr($row[1], 3, 3))] = $row[0];
//     }
//     else {
//         $projects[intval(substr($row[1], 3, 3))] += $row[0];
//     }
// }
// while ($row = $col3->fetch()) { 
//     if(!isset($projects[intval(substr($row[1], 3, 3))])) {
//         $projects[intval(substr($row[1], 3, 3))] = $row[0];
//     }
//     else {
//         $projects[intval(substr($row[1], 3, 3))] += $row[0];
//     }
// }
// while ($row = $col4->fetch()) { 
//     if(!isset($projects[intval(substr($row[1], 3, 3))])) {
//         $projects[intval(substr($row[1], 3, 3))] = $row[0];
//     }
//     else {
//         $projects[intval(substr($row[1], 3, 3))] += $row[0];
//     }
// }
// while ($row = $col5->fetch()) { 
//     if(!isset($projects[intval(substr($row[1], 3, 3))])) {
//         $projects[intval(substr($row[1], 3, 3))] = $row[0];
//     }
//     else {
//         $projects[intval(substr($row[1], 3, 3))] += $row[0];
//     }
// }
// while ($row = $col6->fetch()) { 
//     if(!isset($projects[intval(substr($row[1], 3, 3))])) {
//         $projects[intval(substr($row[1], 3, 3))] = $row[0];
//     }
//     else {
//         $projects[intval(substr($row[1], 3, 3))] += $row[0];
//     }
// }




while ($row = $col1->fetch()) { //&& $row2 = $col2->fetch()) {
    // echo "<tr><td>$row[Your_First_Name]</td><td>$row[Your_Last_Name]</td></tr>";
    // echo $row2[0] . " " . $row2[1] . "\n";
    // echo $row2[0] . " " . intval(substr($row2[1], 3, 3)) . "\n";
    $projects[$row[1]] = $row[0];
    // $projects[intval(substr($row2[1], 3, 3))] += $row2[0];
}
while ($row = $col2->fetch()) { 
    if(!isset($projects[$row[1]])) {
        $projects[$row[1]] = $row[0];
    }
    else {
        $projects[$row[1]] += $row[0];
    }
}
while ($row = $col3->fetch()) { 
    if(!isset($projects[$row[1]])) {
        $projects[$row[1]] = $row[0];
    }
    else {
        $projects[$row[1]] += $row[0];
    }
}
while ($row = $col4->fetch()) { 
    if(!isset($projects[$row[1]])) {
        $projects[$row[1]] = $row[0];
    }
    else {
        $projects[$row[1]] += $row[0];
    }
}
while ($row = $col5->fetch()) { 
    if(!isset($projects[$row[1]])) {
        $projects[$row[1]] = $row[0];
    }
    else {
        $projects[$row[1]] += $row[0];
    }
}
while ($row = $col6->fetch()) { 
    if(!isset($projects[$row[1]])) {
        $projects[$row[1]] = $row[0];
    }
    else {
        $projects[$row[1]] += $row[0];
    }
}

array_pop($projects);
arsort($projects);
foreach($projects as $num => $count) {
    // echo "Project Number " . $num . " Count " . $count . "\n";
    echo "<tr><td>$num</td><td>$count</td></tr>";
}

echo "</tbody>";
echo "</table>";

?>