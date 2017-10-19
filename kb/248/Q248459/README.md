---
layout: page
title: "Q248459: PRB: eading Spaces Trimmed in DataReport Label Multi-Line Captio"
permalink: /kb/248/Q248459/
---

## Q248459: PRB: eading Spaces Trimmed in DataReport Label Multi-Line Captio

	Article: Q248459
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbDesigner kbGrpDSVBDB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the CanGrow property of a DataReport's label is set to True, the label
	automatically grows vertically if the text in the Caption property exceeds the
	preset size of the control. However, when assigning a multi-line string that
	contains leading spaces to the Caption property, the leading spaces are trimmed
	from all lines except the first line. The trimming also occurs even if character
	32 (a blank space) is concatenated into the string.
	
	RESOLUTION
	==========
	
	If you are building the string dynamically in code, one workaround is to use
	character 160 rather than blank spaces or character 32. The following code
	creates a two-line string with five leading spaces in the first line and ten
	leading spaces in the second line:
	
	  Dim mystr as String
	  mystr = "     Five Leading Spaces" & vbCrLf
	  mystr = mystr & String(10, 160) & "Ten Leading Spaces"
	
	NOTE: This workaround assumes that you are using the standard ANSI character set.
	In the ANSI character set, character 160 is a blank space while in other
	character sets it represents an actual letter or symbol.
	
	MORE INFORMATION
	================
	
	1. Create a new Visual Basic Project. Form1 is created by default.
	
	2. From the Project menu, select Add Data Environment.
	
	3. Right-click Connection1 and select Properties.
	
	4. On the Provider tab, specify the Microsoft OLE DB Provider for ODBC Drivers.
	
	5. On the Connection tab, select a DSN that points to the Nwind.mdb database.
	  Use "Admin" (without the quotation marks) as the user name. On a system that
	  does not have Access security set up, there is no password for the Admin
	  user. If you have set up Access security, enter the password for the Admin
	  user.
	
	6. Click the Test Connection button and, if the connection is successful, click
	  OK.
	
	7. Right-click on Connection1 and choose Add Command.
	
	8. Right-click on Command1 and choose Properties.
	
	9. From the General tab, select the SQL Statement option.
	
	10. Enter the following SQL Statement in the text box and choose OK:
	
	  SELECT * from categories where categoryid = 1
	
	11. From the Project menu, choose Add Data Report.
	
	12. Set the DataSource property to DataEnvironment1.
	
	13. Set the DataMember property to Command1.
	
	14. Paste the following code into the General Declarations section of the
	  DataReport:
	
	  Private Sub DataReport_Initialize()
	  Dim mystr As String
	
	  mystr = "     Five Leading Spaces" & vbCrLf
	  mystr = mystr & "          Ten Leading Spaces"
	
	  'Uncomment this line to see the workaround.
	  'mystr = mystr & vbCrLf & String(10, 160) & "Ten Leading Spaces"
	  MsgBox mystr
	  Sections("Section1").Controls!label1.Caption = mystr
	  End Sub
	
	15. Add a Label Control to the Detail section of the DataReport.
	
	16. Set the CanGrow property of the label to True.
	
	17. Set the BorderStyle property of the label to 1- rptBSSolid (this just makes
	  it easier to see the problem).
	
	18. Add a Command button to Form1.
	
	19. Paste the following code into the General Declarations section of the Form1:
	
	  Private Sub Command1_Click()
	  DataReport1.Show
	  End Sub
	
	20. Run the project and click the Command button. A message box shows you that
	  the strings have multiple lines with leading spaces in each line. However,
	  the label on the report shows that the leading spaces on the second line
	  have been trimmed.
	
	21. Stop the project and uncomment the appropriate line of code in the
	  DataReport_Initialize event.
	
	22. Run the project, click the Command button, and note that the label on the
	  report shows that the line built with leading Chr(160) characters is not
	  trimmed.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDesigner kbGrpDSVBDB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	
