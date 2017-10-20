---
layout: page
title: "Q147724: HOWTO: Use TOP N Query from Microsoft Access 2.0 in VB"
permalink: /kb/147/Q147724/
---

## Q147724: HOWTO: Use TOP N Query from Microsoft Access 2.0 in VB

{% raw %}

	Article: Q147724
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Access 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	One of the new types of queries added to Microsoft Access version 2.0 for
	Windows is called a TOP N query. If you have Microsoft Access version 2.0 or
	higher, and Microsoft Visual Basic for Windows version 4.0 and higher, you can
	use this type of query from Visual Basic version 4.0 programs.
	
	This article gives a brief example that uses both the Access TOP N and TOP N
	PERCENT queries from Visual Basic.
	
	MORE INFORMATION
	================
	
	For more information on these particular queries, please review the Microsoft
	Access documentation.
	
	Step-by-Step Example
	--------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Add three Labels, three List Box controls, and three Command buttons to
	  Form1.
	
	3. Using the following table as a guide, set the properties of the controls you
	  added in step 2:
	
	  Control Name   Property       New Value
	  --------------------------------------------------------------------
	
	  Label1         Caption        Selecting the first 10 titles from the
	                                Titles table according to title field.
	  Label2         Caption        Selecting the first 5 titles from the
	                                Titles table according to date published.
	  Label3         Caption        Selecting the first 7 years of percent
	                                published from the Titles table according
	                                to the year published field.
	  Command1       Caption        First 10 Title names.
	  Command2       Caption        First 5 titles dates published.
	  Command3       Caption        First 7 years percent published.
	
	4. Place the following code in the Command1 Click event procedure:
	
	     Private Sub Command1_Click ()
	        Dim ds As Recordset
	        Dim db As database
	
	        Set db = Workspaces(0).OpenDatabase("BIBLIO.MDB")
	        Set ds = _
	           db.OpenRecordset("select top 5 title from titles order by title")
	
	        Do Until ds.EOF
	           list1.AddItem "" & ds("title")
	           ds.MoveNext
	        Loop
	        ds.Close
	        db.Close
	     End Sub
	
	5. Place the following code in the Command2 Click event procedure:
	
	     Private Sub Command2_Click ()
	        Dim ds As Recordset
	        Dim db As database
	
	        Set db = Workspaces(0).OpenDatabase("BIBLIO.MDB")
	        Set ds = db.OpenRecordset("select top 5 [year published], _
	           title from titles order by [year published]")
	
	        Do Until ds.EOF
	           list2.AddItem "" & ds("title")
	           ds.MoveNext
	        Loop
	        ds.Close
	        db.Close
	     End Sub
	
	6. Place the following code in the Command3 Click event procedure:
	
	     Private Sub Command3_Click ()
	        Dim ds As Recordset
	        Dim db As database
	
	        Set db = Workspaces(0).OpenDatabase("BIBLIO.MDB")
	        Set ds = db.OpenRecordset("select top 7 Percent [year published], _
	           title from titles order by [year published]")
	
	        Do Until ds.EOF
	           list3.AddItem "" & ds("title")
	           ds.MoveNext
	        Loop
	        ds.Close
	        db.Close
	     End Sub
	
	7. On the Run menu, click Start (ALT, R, S), or press the F5 key to run the
	  program. Click each of the buttons (Command1, Command2, and Command3) in
	  succession.
	
	Additional query words: kbVBp400 kbVBp500 kbVBp600 kbdse kbDSupport kbVBp
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbAccessSearch kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400 kbVB16bitSearch
	Version           : :4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
