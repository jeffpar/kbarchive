---
layout: page
title: "Q248139: BUG:MSHFlexGrid Control Empty w/ DataEnvironment Parameter Query"
permalink: /kb/248/Q248139/
---

## Q248139: BUG:MSHFlexGrid Control Empty w/ DataEnvironment Parameter Query

	Article: Q248139
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbDesigner kbVBp600 kbDataEnv kbGrpDSVBDB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the Microsoft Hierarchial FlexGrid Control to display data from a
	DataEnvironment Parameterized Query, data does not display if the FlexGrid's
	DataMember property is set both at design-time and at run-time.
	
	RESOLUTION
	==========
	
	Any of the following methods are valid ways to set the Hierarchial FlexGrid's
	DataMember and DataSource properties:
	
	- If you are setting the DataMember property at run-time, do not set it
	  manually at design-time.
	- Set both the DataSource and DataMember properties at design-time. If you do
	  this, do not set either property at run-time.
	- Set both the DataSource and DataMember properties at design-time and
	  run-time. However, at run-time set the Datamember equal to an empty string
	  before setting it to your command. For example:
	
	  MSHFlexGrid1.DataMember = ""
	  MSHFlexGrid1.DataMember = "Command1"
	
	- Set neither the DataSource nor the DataMember properties at design-time.
	  Instead, at run-time execute the DataEnvironment command and set the
	  DataSource property programmatically as follows:
	
	  DataEnvironment1.Command1 <param>
	  Set MSHFlexGrid1.DataSource = DataEnvironment1.rsCommand1
	
	where <param> is the parameter supplied to the query.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior:
	----------------------------
	
	1. Create a new Visual Basic Project.
	
	2. From the Project menu, choose Components, and then select the Microsoft
	  Hierarchial FlexGrid Control 6.0 (OLEDB).
	
	3. From the Project menu, choose Add DataEnvironment.
	
	4. Right-click Connection1, and then choose Properties.
	
	5. On the Provider tab, specify either the Microsoft Jet 3.51 OLE DB Provider or
	  the Microsoft OLE DB Provider for ODBC Drivers.
	
	6. On the Connection tab, depending on the provider you selected in the last
	  step, either choose the Nwind.mdb database or choose a data source name (DSN)
	  that points to the Nwind.mdb database. Use Admin as the user name. On a
	  system that has not setup Microsoft Access security, there will be no
	  password for the Admin user. If you have setup Microsoft Access security,
	  enter the password for the Admin user.
	
	7. Click the Test Connection button. If the connection is successful, choose OK.
	
	8. Right-click Connection1 and choose Add Command.
	
	9. Right-click Command1 and choose Properties.
	
	10. From the General tab, select the SQL Statement option.
	
	11. Enter the following SQL statement in the text box:
	
	  SELECT EmployeeID, FirstName, LastName FROM Employees WHERE EmployeeID = ?
	
	12. From the Parameters tab, make sure the Host Data Type reads as follows and
	  choose OK:
	
	  Long (VT_I4)
	
	13. On Form1 of the project, add an OLEDB MSHFlexGrid control.
	
	14. Manually set the DataSource property to DataEnvironment1.
	
	15. Manually set the DataMember property to Command1.
	
	16. Paste the following code into the Form_Load event:
	
	  If DataEnvironment1.rsCommand1.State = adStateOpen Then
	      DataEnvironment1.rsCommand1.Close
	  End If
	
	  DataEnvironment1.Command1 2
	  MSHFlexGrid1.DataMember = "Command1"
	
	17. Run the project. The grid will be empty.
	
	18. Stop the project.
	
	19. Select the grid on Form1 and delete Command1 from the DataMember property.
	
	20. Run the project. The grid now contains one record as expected.
	
	Additional query words: blank no records
	
	======================================================================
	Keywords          : kbDesigner kbVBp600 kbDataEnv kbGrpDSVBDB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
