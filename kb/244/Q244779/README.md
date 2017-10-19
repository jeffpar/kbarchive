---
layout: page
title: "Q244779: HOWTO: Refresh a Parameterized DataReport"
permalink: /kb/244/Q244779/
---

## Q244779: HOWTO: Refresh a Parameterized DataReport

	Article: Q244779
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbDesigner kbOLEDB kbReportWriter kbDataEnv kbGrpDSVBDB kbDSupport
	Last Modified: 23-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article demonstrates basing a DataReport on a parameterized DataEnvironment
	and refreshing the report when the parameter value changes.
	
	MORE INFORMATION
	================
	
	1. Open a new Standard EXE Project in Microsoft Visual Basic. Form1 is created
	  by default.
	
	2. Add a DataEnvironment (DataEnvironment1) and a DataReport (DataReport1) to
	  the project.
	
	3. Add a Connection (Connection1) to the DataEnvironment pointing to NWIND.MDB
	  (or Northwind.MDB) through the Microsoft Jet 4.0 OLE DB Provider.
	
	4. Add a Command (Command1) to Connection1, with the following properties:
	
	  CommandType: adCommandText
	  CommandText: Select * From Employees Where HireDate < ?
	
	In the Parameters tab:
	
	  Name: pDate
	  Direction: Input
	  Data Type: adDBTimeStamp
	  Host Data Type: Date (VT_DATE)
	
	5. In the DataReport, set the following properties:
	
	  DataSource: DataEnvironment1
	  DataMember: Command1
	
	6. Drag the following fields from the DataEnvironment into the Detail section of
	  the DataReport:
	
	  EmployeeID
	  FirstName
	  LastName
	  HireDate
	
	7. Add a TextBox (Text1) and a CommandButton (Command1) to the form. Add the
	  following code:
	
	  Option Explicit
	
	  Private Sub Command1_Click()
	    Load DataEnvironment1
	    With DataEnvironment1
	      If .rsCommand1.State <> 0 Then .rsCommand1.Close
	      .Command1 CDate(Text1.Text)
	    End With
	    DataReport1.Refresh
	    If DataReport1.Visible = False Then DataReport1.Show
	  End Sub
	
	8. Save the project and run it. Enter the following dates in the TextBox and
	  click the CommandButton after each one:
	
	  1/1/95
	  1/1/94
	  1/1/93
	  1/1/92
	
	  You can see the report refresh showing only those employees hired prior to the
	  date entered.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbDesigner kbOLEDB kbReportWriter kbDataEnv kbGrpDSVBDB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbhowto
	
	=============================================================================
	
