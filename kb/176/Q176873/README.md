---
layout: page
title: "Q176873: BUG: DBCombo Does Not Display the &quot;&amp;&quot; Character Correctly"
permalink: kb/176/Q176873/
---

## Q176873: BUG: DBCombo Does Not Display the &quot;&amp;&quot; Character Correctly

	Article: Q176873
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbVBp500 kbGrpDSVBDB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a DBCombo control contains items with the ampersand (&) character as part
	of the text and if the style of the DBCombo control is dbcDropdownList, then the
	text will not display correctly in the text box portion (the edit area) of the
	control. The drop-down list area is not affected.
	
	This problem does not occur with the styles dbcDropdownCombo or dbcSimpleCombo.
	
	RESOLUTION
	==========
	
	To work around this problem, simply modify the text to include an extra "&"
	for every "&" that is in the original text as shown in the following code:
	
	     Private Sub DBCombo1_Click(Area As Integer)
	     Dim i As Integer
	     Dim s As String
	     Dim c As String * 1
	
	         If DBCombo1.Style = dbcDropdownList And Area = dbcAreaList Then
	             s = DBCombo1.Text
	             If InStr(s, "&") Then
	                 DBCombo1.Text = ""
	                 For i = 1 To Len(s)
	                     c = Mid$(s, i, 1)
	                     If c = "&" Then
	                         DBCombo1.Text = DBCombo1.Text & "&&"
	                     Else
	                         DBCombo1.Text = DBCombo1.Text & c
	                     End If
	                 Next
	             End If
	         End If
	
	     End Sub
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a sample MDB (db1.mdb) and add one table (Table1) with one text field
	  (Field1). Add the record "&one &&two &&&three" to
	  Table1.
	
	2. Start Visual Basic and create a new Standard EXE. Form1 is created by
	  default.
	
	3. Add a Data control to Form1 and set the following properties:
	
	        DatabaseName = "db1.mdb"
	        RecordSource = "Table1"
	
	4. Add a DBCombo control to Form1 and set the following properties:
	
	        RowSource = "Data1"
	        ListField = "Field1"
	        Style = "2 - dbcDropdownList"
	
	5. Run the project.
	
	6. Click the button on DBCombo1 and select the item from the list.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp500 kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbZNotKeyword3
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	
	=============================================================================
	
