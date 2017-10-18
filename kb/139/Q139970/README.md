---
layout: page
title: "Q139970: BUG:Text &amp; Value Properties of DBGrid Column Show Empty String"
permalink: kb/139/Q139970/
---

## Q139970: BUG:Text &amp; Value Properties of DBGrid Column Show Empty String

	Article: Q139970
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.00
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the DBGrid control, attempting to access the Text or Value properties
	of columns that are not visible on the screen returns an empty string regardless
	of the actual data in the column.
	
	WORKAROUND
	==========
	
	To work around this problem, reference the data directly from the data control
	instead of from the grid control. For example, instead of using
	
	     Print DBGrid1.Columns("Telephone").Text
	
	to print out the contents of the current record's Telephone field, use
	
	     Print Data1.Recordset("Telephone")
	
	This code prints the Telephone field regardless of whether or not the Telephone
	column is visible on the screen.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to reproduce problem
	--------------------------
	
	1. Start Visual Basic, or if it is already running, click New Project on the
	  File menu.
	
	2. In the toolbox, click DBGrid, and drag a new data-bound grid onto Form1. Make
	  the grid approximately 3-4 inches wide.
	
	3. Double-click the data control button in the toolbox to add a data control
	  named Data1 to the form.
	
	4. Set the following properties of the data control:
	
	  Control name   Property         Value
	  =============================================
	  Data1      DatabaseName      biblio.mdb
	  Data1      RecordSource      Publishers
	
	5. Set the DataSource property of DBGrid1 to Data1 to bind the grid to the data
	  control.
	
	6. On the Run menu, click Start or press the F5 key to run the program. The
	  application will start and the grid will be filled with data from the
	  Publishers table in the biblio database.
	
	7. Press CTRL+BREAK. On the Run menu, click Break, or click Pause on the toolbar
	  to pause execution of the program.
	
	8. In the debug window type:
	
	  Print DBGrid1.Columns("Telephone").Text
	
	  The contents of the Telephone field in the database should be printed, however
	  because this field is not visible, an empty string is printed.
	
	9. In the debug window type:
	
	  Print Data1.Recordset("Telephone")
	
	  The contents of the Telephone field in the database is printed.
	
	10. Continue the program (F5) and scroll so the Telephone column becomes
	  visible.
	
	11. Press CTRL+BREAK. On the Run menu, click Break, or click Pause on the
	  toolbar to pause execution of the program.
	
	12. In the debug window type:
	
	  Print DBGrid1.Columns("Telephone").Text
	
	  The DBGrid control returns the correct value of "212-869-7440". The correct
	  value is returned because the column is now visible.
	
	Additional query words: 4.00 vb4win vb4all buglist4.00
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : 4.00
	Issue type        : kbbug
	
	=============================================================================
	
