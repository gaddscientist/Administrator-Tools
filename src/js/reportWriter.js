  // function addColumn() {
  //   const div = document.createElement('div');

  //   // div.className = 'row';

  //   div.innerHTML = '
  //     <input class="add-input" placeholder=" Category"> </input>  
  //     <input class="input-small" placeholder=" Position"> </input> 
  //     <input class="input-small" placeholder=" Sort"> </input>
  //   ';
  //   console.log('HERE', div);
  //   document.getElementById('criterion').appendChild(div);
  // };

class ReportWriter {
  constructor() {
    this.demoColumns = {
    'Project_Number': 'Project Number',
    'Project_Name': 'Project Name',
    'Client_Name': 'Client Name',
    'Instructor_1_Name': 'Instructor Name',
    'Instructor_1_Email': 'Instructor Email',
    'Student_1_Name': 'First Student - Name',
    'Student_1_Email': 'First Student - Email',
    'Student_2_Name': 'Second Student - Name',
    'Student_2_Email': 'Second Student - Name',
    'Student_3_Name': 'Third Student - Name',
    'Student_3_Email': 'Third Student - Name',
    'Student_4_Name': 'Fourth Student - Name',
    'Student_4_Email': 'Fourth Student - Name'
    };

    const columns = [
      'Project_Number',
      'Project_Name',
      'Client_Name',
      'Submitted_On',
      'Accepted_On',
      'Started_On',
      'Archived_On',
      'Instructor_1_Name',
      'Instructor_1_Email',
      'Student_1_Name',
      'Student_1_Email',
      'Student_2_Name',
      'Student_2_Email',
      'Student_3_Name',
      'Student_3_Email',
      'Student_4_Name',
      'Student_4_Email',
      'Contact_1_Name',
      'Contact_1_Email',
      'Contact_1_Phone',
      'Contact_1_Title',
      'Contact_1_Department',
      'Contact_2_Name',
      'Contact_2_Email',
      'Contact_2_Phone',
      'Contact_2_Title',
      'Contact_2_Department',
      'Instructor_2_Name',
      'Instructor_2_Email',
      'Student_5_Name',
      'Student_5_Email',
      'Instructor_3_Name',
      'Instructor_3_Email',
      'Student_6_Name',
      'Student_6_Email',
      'Student_7_Name',
      'Student_7_Email',
      'Student_8_Name',
      'Student_8_Email',
      'Student_9_Name',
      'Student_9_Email',
      'Student_10_Name',
      'Student_10_Email',
      'Student_11_Name',
      'Student_11_Email',
      'Student_12_Name',
      'Student_12_Email',
      'Student_13_Name',
      'Student_13_Email',
      'Student_14_Name',
      'Student_14_Email',
      'Mentor_1_Name',
      'Mentor_1_Email',
      'Mentor_2_Name',
      'Mentor_2_Email',
      'Mentor_3_Name',
      'Mentor_3_Email',
      'Mentor_4_Name',
      'Mentor_4_Email',
      'Contact_3_Name',
      'Contact_3_Email',
      'Contact_3_Phone',
      'Contact_3_Title',
      'Contact_3_Department',
      'Contact_4_Name',
      'Contact_4_Email',
      'Contact_4_Phone',
      'Contact_4_Title',
      'Contact_4_Department',
      'Instructor_4_Name',
      'Instructor_4_Email',
      'Mentor_5_Name',
      'Mentor_5_Email',
      'Mentor_6_Name',
      'Mentor_6_Email',
      'Organization_Type',
      'Organization_Website',
      'Organization_Industry',
      'Organization_Non_Profit_Industry',
      'Organization_Academic_Field',
      'Organization_Number_of_Employees',
      'Organization_Yearly_Revenue',
      'Organization_Populations_Served',
      'Organization_Purpose',
      'Address',
      'City',
      'State',
      'Zip',
      'Project_Description',
      'Project_Categories',
      'Project_Summary',
      'Number_of_Files_Uploaded',
      'evidence_demonstration_One_or_two_sentences_or_bullets',
      'devices_access_to_labs_clinical_areas_or_manufacturing_areas',
      'If_you_selected_Other_above_please_explain',
      'culture_additive_subtractive_manufacturing_US_Citizenship_etc',
      'know_to_make_an_informed_decision_to_undertake_this_project',
      'should_assign_intellectual_property_rights_to_the_sponsor',
      'Will_you_require_students_to_sign_a_Non_Disclosure_Agreement',
      'VCU_coops_or_interns_working_on_this_in_the_future_as_well',
      'Are_you_an_alumni',
      'Project_Manager',
      'Project_Manager_Email',
      'Financial_Manager',
      'Financial_Manager_Email',
      'Logistics',
      'Logistics_Email',
      'Systems_Manufacturing_Engineer',
      'Systems_Manufacturing_Engineer_Email',
      'Testing_Engineering',
      'Testing_Engineering_Email'
    ];
  }
  // End constructor


  addColumn() {
    const div = document.createElement('div');

    // div.className = 'row';

    div.innerHTML = `
      <input class="add-input" placeholder=" Category"> </input>  
      <input class="input-small" placeholder=" Position"> </input> 
      <input class="input-small" placeholder=" Sort"> </input>
    `;
    document.getElementById('criterion').appendChild(div);
  }

  populateDropDown() {
    for(const column in this.demoColumns) {
      const dropdown = document.querySelector('#columns');
      const item = document.createElement('option');
      item.textContent = this.demoColumns[column];
      item.value = this.demoColumns[column];
      dropdown.appendChild(item);
    }
  }
}

const reportWriter = new ReportWriter();

reportWriter.populateDropDown();