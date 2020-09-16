package main.java.edu.odu.cs.cs350;
import java.io.*;
import java.net.URL;
import java.util.*;
import java.text.SimpleDateFormat;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

public class inputStudentInfo {
	
	public class inputStudentInfo (String workbookLocation) {
		setup(workbookLocation);
	}
	
	private class setup (String workbookLocation) {
		FileInputStream inputStream = new FileInputSteam(new File(workbookLocation));
		Workbook workbook = new XSSFWorkbook(inputStream);
		Sheet sheet = workbook.getSheetAt(0);
		Iterator<Row> rowIterator = sheet.iterator();
		
	}



	
	
}

