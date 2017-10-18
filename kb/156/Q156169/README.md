---
layout: page
title: "Q156169: HOWTO: Ignore Parameters in View or Query If Blank"
permalink: kb/156/Q156169/
---

## Q156169: HOWTO: Ignore Parameters in View or Query If Blank

	Article: Q156169
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbSQL kbvfp300 kbvfp500 kbvfp600 kbSQLProg
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes two examples on how to return records that meet a
	specific criteria and how to ignore the criteria if a parameter is empty or
	null.
	
	MORE INFORMATION
	================
	
	Example 1: Parameter View with Values Passed from Controls on a Form
	--------------------------------------------------------------------
	
	1. Open the Tastrade project. The project is in one of the following locations:
	
	  Visual FoxPro 3.0: Samples\Mainsamp
	  Visual FoxPro 5.0: Samples\Tastrade
	  Visual FoxPro 6.0: _samples variable
	
	2. Create a new program, click the Code tab, and add the following lines of
	  code:
	
	        IF "6.00" $ VERSION()
	           cdir = _samples + "Tastrade"
	        ELSE
	        IF "5.00" $ VERSION()
	           cDir = HOME()+"SAMPLES\TASTRADE"
	        ELSE
	           cDir = HOME()+"SAMPLES\MAINSAMP"
	        ENDIF
	        ENDIF
	        OPEN DATABASE cDir+"\DATA\TASTRADE.DBC" EXCLUSIVE
	        CREATE SQL VIEW MyView as SELECT *;
	           FROM tastrade!Employee;
	           WHERE ((ALLTRIM(Employee.employee_id)==?vEmpid);
	           OR (EMPTY(?vEmpid)=.T.));
	           AND ((Employee.title == ?vTitle;
	           OR (EMPTY(?vTitle)=.T.)))
	
	  Save it as MyViewCode.prg and then Run the program.
	
	3. Create a new form and save it as frmMyParam.
	
	4. Add MyView to the DataEnviroment object of the frmMyParam form. View the
	  properties of cursor1 and set the NoDataOnLoad property to .T. - True.
	
	5. Add the following controls to the form and set the properties as indicated:
	
	     Text Box
	     Name: Text1
	
	     Text Box
	     Name: Text2
	
	     Grid
	     Name: Grid1
	     RecordSource: MyView
	
	     Command Button
	     Name: Command1
	     Caption: Requery
	
	     Command Button
	     Name: Command2
	     Caption: Clear
	
	6. Add the following code to the Click event of the Command1 button:
	
	        vEmpid=Thisform.Text1.Value
	        vTitle=Thisform.Text2.Value
	        =REQUERY('MyView')
	        ThisForm.Refresh
	
	7. Add the following code to the Click event of the Command2 button:
	
	        Thisform.Text1.Value=""
	        Thisform.Text2.Value=""
	        Thisform.Refresh
	
	8. Save and Run the form with following combination of values in the table
	  below, and then click the Command1(Requery) button. Before you test the next
	  combination of values, click the Command2(Clear) button.
	
	  Text1      Text2       Results
	  --------------------------------------------------------
	
	  <blank>    <blank>     All records are return
	
	  1          <blank>     One record with Employee ID is 1
	
	  1       Sales Manager  One record with Employee Id is 1
	                         and Title is Sales Manager
	
	  <blank> Sales Manager  Two records return with Title being Sales Manager
	
	  2       Sales Manager  No records are returned
	
	Example 2: Parameter Query
	--------------------------
	
	1. Open the project called Tastrade.
	
	2. Create a new program under the Code tab with the following lines of code,
	  save it as MyQueryCode and then Run the program:
	
	        CLOSE DATABASE
	        IF "6.00" $ VERSION()
	          cdir = _samples
	        ELSE
	        IF "5.00" $ VERSION()
	          cDir = HOME()+"SAMPLES\TASTRADE"
	        ELSE
	          cDir = HOME()+"SAMPLES\MAINSAMP"
	        ENDIF
	        USE cDir+"\DATA\employee.dbf"
	        CLEAR
	        ACCEPT "Enter an Employee ID: " to vEmpid
	        ACCEPT "Enter an Employee Last Name: " to vTitle
	        SELECT *;
	           FROM tastrade!Employee;
	           WHERE ((ALLTRIM(Employee.employee_id)==?vEmpid);
	           OR (EMPTY(?vEmpid)=.T.));
	           AND ((Employee.title == ?vTitle;
	           OR (EMPTY(?vTitle)=.T.)))
	
	3. Use the same data as stated in the previous example for a test. For
	  <blank> (in the table) press Enter at the prompt and the results
	  returned should be the same as in Example 1.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSQL kbvfp300 kbvfp500 kbvfp600 kbSQLProg 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600
	Issue type        : kbhowto
	
	=============================================================================
	
