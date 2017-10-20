---
layout: page
title: "Q223064: FIX: Filter Changes on DataSource Cause DataGrid to be Incorrect"
permalink: /kb/223/Q223064/
---

## Q223064: FIX: Filter Changes on DataSource Cause DataGrid to be Incorrect

{% raw %}

	Article: Q223064
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbCtrl kbDataBinding kbVBp600bug kbVS600sp3fix kbGrpDSVBDB
	Last Modified: 23-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Applying a Filter to an ADO Recordset bound to a DataGrid may result in the
	DataGrid showing incorrect rows or no rows at all, even if there are rows
	matching the Filter criteria.
	
	This occurs if a row other than the first row is selected in the DataGrid before
	applying the new Filter to the ADO Recordset.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3.
	
	For more information about Visual Studio 6.0 Service Packs, please see the
	following articles in the Microsoft Knowledge Base:
	
	Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start Visual Basic 6.0.
	
	2. Choose to create a new Standard EXE project. Form1 is created by default.
	
	3. Add the following Project References:
	
	Microsoft ActiveX Data Objects 2.0 Library
	
	4. Add the following Project Components:
	
	Microsoft DataGrid Control 6.0 (OLEDB)
	
	5. Add the following controls to Form1:
	
	1 - Microsoft DataGrid Control 6.0 (OLEDB)
	3 - Command Buttons
	
	6. Paste the following code into Form1's Code Window:
	
	  Private rs As ADODB.Recordset
	
	  Private Sub Command1_Click()
	     'Display the records that have '1' in Field1
	     rs.Filter = "Field1='1'"
	  End Sub
	
	  Private Sub Command2_Click()
	     'Display the records that have '2' in Field1
	     rs.Filter = "Field1='2'"
	  End Sub
	
	  Private Sub Command3_Click()
	     'Display the records that have '3' in Field1
	     rs.Filter = "Field1='3'"
	  End Sub
	
	  Private Sub Form_Load()
	     Dim intField1 As Integer
	     Dim i As Integer
	     
	     'Create a new empty recordset with 3 fields
	     Set rs = New ADODB.Recordset
	     
	     'Allow 2 digits in each field (Field1 will be 1 to 10)
	     rs.Fields.Append "Field1", adChar, 2
	     rs.Fields.Append "Field2", adChar, 2
	     rs.Fields.Append "Field3", adChar, 2
	     
	     rs.Open
	     
	     'Add 10 distinct rows. Field1 goes from 1 to 10.
	     For intField1 = 1 To 10
	     
	       'Add each distinct row 10 times:
	       '  10 rows with '1' in Field1, 10 rows with '2', etc.
	        For i = 1 To 10
	           rs.AddNew
	           rs!Field1 = intField1
	           rs!Field2 = intField1 + 1
	           rs!Field3 = intField1 + 2
	           rs.Update
	        Next i
	     
	     Next intField1
	     
	     'Populate the DataGrid
	     Set DataGrid1.DataSource = rs
	  End Sub
	
	7. Run the project but do NOT click on the Grid.
	
	8. Click each Command Button and note that the DataGrid correctly displays the
	  rows from the Filtered recordset.
	
	9. Click on a row in the DataGrid other than the first row.
	
	10. Click each Command Button again and note that the DataGrid does not display
	  any rows.
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Matthew Hofacker, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbCtrl kbDataBinding kbVBp600bug kbVS600sp3fix kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
