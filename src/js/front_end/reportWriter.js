columns = {
  Project_Number: "Project Number",
  Project_Name: "Project Name",
  Client_Name: "Client Name",
  Instructor_1_Name: "Instructor Name",
  Instructor_1_Email: "Instructor Email",
  Student_1_Name: "First Student - Name",
  Student_1_Email: "First Student - Email",
  Student_2_Name: "Second Student - Name",
  Student_2_Email: "Second Student - Name",
  Student_3_Name: "Third Student - Name",
  Student_3_Email: "Third Student - Name",
  Student_4_Name: "Fourth Student - Name",
  Student_4_Email: "Fourth Student - Name",
};

disciplines = [
  "All Majors",
  "Biomedical",
  "Chemical",
  "Computer Science",
  "Computer",
  "Electrical",
  "Mechanical",
];

// const columns = [
//   'Project_Number',
//   'Project_Name',
//   'Client_Name',
//   'Submitted_On',
//   'Accepted_On',
//   'Started_On',
//   'Archived_On',
//   'Instructor_1_Name',
//   'Instructor_1_Email',
//   'Student_1_Name',
//   'Student_1_Email',
//   'Student_2_Name',
//   'Student_2_Email',
//   'Student_3_Name',
//   'Student_3_Email',
//   'Student_4_Name',
//   'Student_4_Email',
//   'Contact_1_Name',
//   'Contact_1_Email',
//   'Contact_1_Phone',
//   'Contact_1_Title',
//   'Contact_1_Department',
//   'Contact_2_Name',
//   'Contact_2_Email',
//   'Contact_2_Phone',
//   'Contact_2_Title',
//   'Contact_2_Department',
//   'Instructor_2_Name',
//   'Instructor_2_Email',
//   'Student_5_Name',
//   'Student_5_Email',
//   'Instructor_3_Name',
//   'Instructor_3_Email',
//   'Student_6_Name',
//   'Student_6_Email',
//   'Student_7_Name',
//   'Student_7_Email',
//   'Student_8_Name',
//   'Student_8_Email',
//   'Student_9_Name',
//   'Student_9_Email',
//   'Student_10_Name',
//   'Student_10_Email',
//   'Student_11_Name',
//   'Student_11_Email',
//   'Student_12_Name',
//   'Student_12_Email',
//   'Student_13_Name',
//   'Student_13_Email',
//   'Student_14_Name',
//   'Student_14_Email',
//   'Mentor_1_Name',
//   'Mentor_1_Email',
//   'Mentor_2_Name',
//   'Mentor_2_Email',
//   'Mentor_3_Name',
//   'Mentor_3_Email',
//   'Mentor_4_Name',
//   'Mentor_4_Email',
//   'Contact_3_Name',
//   'Contact_3_Email',
//   'Contact_3_Phone',
//   'Contact_3_Title',
//   'Contact_3_Department',
//   'Contact_4_Name',
//   'Contact_4_Email',
//   'Contact_4_Phone',
//   'Contact_4_Title',
//   'Contact_4_Department',
//   'Instructor_4_Name',
//   'Instructor_4_Email',
//   'Mentor_5_Name',
//   'Mentor_5_Email',
//   'Mentor_6_Name',
//   'Mentor_6_Email',
//   'Organization_Type',
//   'Organization_Website',
//   'Organization_Industry',
//   'Organization_Non_Profit_Industry',
//   'Organization_Academic_Field',
//   'Organization_Number_of_Employees',
//   'Organization_Yearly_Revenue',
//   'Organization_Populations_Served',
//   'Organization_Purpose',
//   'Address',
//   'City',
//   'State',
//   'Zip',
//   'Project_Description',
//   'Project_Categories',
//   'Project_Summary',
//   'Number_of_Files_Uploaded',
//   'evidence_demonstration_One_or_two_sentences_or_bullets',
//   'devices_access_to_labs_clinical_areas_or_manufacturing_areas',
//   'If_you_selected_Other_above_please_explain',
//   'culture_additive_subtractive_manufacturing_US_Citizenship_etc',
//   'know_to_make_an_informed_decision_to_undertake_this_project',
//   'should_assign_intellectual_property_rights_to_the_sponsor',
//   'Will_you_require_students_to_sign_a_Non_Disclosure_Agreement',
//   'VCU_coops_or_interns_working_on_this_in_the_future_as_well',
//   'Are_you_an_alumni',
//   'Project_Manager',
//   'Project_Manager_Email',
//   'Financial_Manager',
//   'Financial_Manager_Email',
//   'Logistics',
//   'Logistics_Email',
//   'Systems_Manufacturing_Engineer',
//   'Systems_Manufacturing_Engineer_Email',
//   'Testing_Engineering',
//   'Testing_Engineering_Email'
// ];

let column_id = 0;
let sortOrder = "ascending";

// Adds selection criteria to drop down menu
function populateCriteriaDropDown(colID) {
  // Adds selections to columns drop down
  for (const column in columns) {
    // Creates option elements from given list of columns
    const dropdown = document.querySelector(`.column-${colID}`);
    const item = document.createElement("option");
    item.textContent = columns[column];
    item.value = columns[column];
    item.setAttribute("criteria", column);
    dropdown.appendChild(item);
  }
}

function populateDisciplineDropDown() {
  // Adds selections to disciplines drop down
  for (const discipline in disciplines) {
    // Creates option elements from given list of majors
    const dropdown = document.getElementById("disciplines");
    const item = document.createElement("option");
    item.textContent = disciplines[discipline];
    item.value = disciplines[discipline];
    item.setAttribute("major", disciplines[discipline]);
    dropdown.appendChild(item);
  }
}

function populateDropDowns(colID) {
  populateCriteriaDropDown(colID);
  populateDisciplineDropDown();
}

// Creates a new column to specify criteria
function addColumn(e) {
  const numCols = Object.keys(columns).length - 1;
  if (column_id < numCols) {
    column_id++;

    const li = document.createElement("li");

    li.innerHTML = `
      <select name="column" class="column-${column_id}"></select>
    `;
    document.getElementById("criterion").appendChild(li);
    populateCriteriaDropDown(column_id);
  } else {
    alert("Can not select more columns than exist in database");
  }
  e.preventDefault();
}

// Removes bottom column
function delColumn(e) {
  if (column_id > 0) {
    column_id--;
    document
      .getElementById("criterion")
      .removeChild(document.getElementById("criterion").lastChild);
  } else {
    alert("Can not remove last item");
  }

  e.preventDefault();
}

// Creates an object to be sent to back end to query database
function getCriteria() {
  // Create object
  const chosenCriteria = {
    columns: [],
    major: "",
  };

  // Gets all desired columns
  const cols = document.querySelector("#criterion");
  // li's as an array
  selectionArr = Array.from(cols.children);
  // Iterate over each li
  selectionArr.forEach((li) => {
    // Each "selection" element within the li
    const item = li.children[0];
    // Adds chosen option to array of chosen criteria
    chosenCriteria.columns.push(
      item.options[item.selectedIndex].getAttribute("criteria")
    );
  });

  // Get chosen major
  const discipline = document.getElementById("disciplines");
  chosenCriteria.major = discipline.options[
    discipline.selectedIndex
  ].getAttribute("major");

  // Reverses array if sort is set to descending
  if (document.getElementById("sort").value === "descending") {
    sortOrder = "descending";
  }

  // sendPost("/filter.html", chosenCriteria);
  return chosenCriteria;
}

// Submits POST request to server
const sendPost = async (event) => {
  const url = "/filter.html";
  const data = getCriteria();

  event.preventDefault();

  value = [{Project_Number: 23525, Project_Name: "hello", Client_Name: "bob"}, {Project_Number: 768594, Project_Name: "sdfl", Client_Name: "uytrew"}];
  value = JSON.stringify(value)
  localStorage.setItem('label', value);
  window.location.href="output.html";

  try {
    const response = await axios.post(url, data);
    // const rows = Array.from(response.data);
    // rows.forEach(row => console.log(row));
    if (sortOrder === "ascending") {
      console.log(response.data);
    } else {
      console.log(response.data.reverse());
      document.getElementById("sort").value = "ascending";
      sortOrder = "ascending";
    }
  } catch (e) {
    console.log(e);
  }

  // Refreshes page after sending data
  // window.location.reload();
};

// Event listener for Add Column button to call addColumn()
document.querySelector(".add-column").addEventListener("click", addColumn);
// Event listener for Delete Column button to call delColumn()
document.querySelector(".del-column").addEventListener("click", delColumn);
// Event listener for create button to generate report
document.querySelector(".create-report").addEventListener("click", sendPost);

// Populates initial drop down menu
populateDropDowns(column_id);
