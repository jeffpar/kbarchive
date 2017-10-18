---
layout: page
title: "Q273821: HOWTO: Programmatically Set Parameter Values for Command Object"
permalink: kb/273/Q273821/
---

## Q273821: HOWTO: Programmatically Set Parameter Values for Command Object

	Article: Q273821
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbADO kbMDAC
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to programmatically set or change parameter values
	for a Command Object in the DataEnvironment.
	
	MORE INFORMATION
	================
	
	1. Create a new Visual Basic Standard EXE project. Form1 is created by default.
	
	2. From the Project menu, choose Add Data Environment. DataEnvironment1 and
	  Connection1 are created by default.
	
	3. Right-click Connection1, choose Properties, select Microsoft OLE DB Provider
	  for SQL Server, and then click Next.
	
	4. Select your SQL Server Name. Select the Use a specific User name and
	  password: option to log on to your server. Provide the proper User Name and
	  Password information for your chosen server, and check Allow Saving Password.
	  Select the Northwind database on your SQL Server, click Test Connection, and
	  then click OK.
	
	5. Right-click Connection1 and choose Add Command. Command1 is created by
	  default.
	
	6. Right-click on Command1 and choose Properties. Choose Connection1 as the
	  Connection for Command1.
	
	7. Choose the SQL Statement option as the Source of Data. Enter the following
	  SQL statement in the text box that appears:
	
	"Select EmployeeID, LastName, Country from Employees where Country=?" (without
	the quotation marks)
	
	8. On the Parameters tab, Param1 is created by default. Select Input as the
	  Direction, adVarChar as the DataType for the Input Parameter, click Apply,
	  and then click OK.
	
	9. Close the DataEnvironment window.
	
	10. Draw a Text Box and a Command Button on Form1, and set the Text Property of
	  the Text Box to blank.
	
	11. On the Toolbox, right-click and select Components. Select the Microsoft
	  DataGrid (OLEDB) control from the list of available controls, click Apply,
	  and then click Close.
	
	12. Draw a DataGrid control to Form1. DataGrid1 is created by default. NOTE: Do
	  not set the DataSource and DataMember properties for DataGrid1. Leave these
	  blank.
	
	13. Copy the following code into the click event of Command1:
	
	  Dim mystr As String
	  mystr = Text1.Text
	
	  DataEnvironment1.Command1 mystr
	
	  Set DataGrid1.DataSource = DataEnvironment1.rsCommand1
	  DataGrid1.Refresh
	
	14. Run the project. Enter "USA" (without the quotation marks) in the Text Box,
	  click the Command Button, and note that the grid is populated with Employees
	  who are located in the USA.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbADO kbMDAC 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : :6.0
	Issue type        : kbhowto
	
	=============================================================================
	
