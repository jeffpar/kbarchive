---
layout: page
title: "Q137037: BUG: Cell Data Disappears in DBGrid with NumberFormat Set"
permalink: /kb/137/Q137037/
---

## Q137037: BUG: Cell Data Disappears in DBGrid with NumberFormat Set

	Article: Q137037
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): 
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
	
	Setting the NumberFormat property for a column in a DBGrid control to 'general
	number' or 'fixed' sometimes causes all cell data to disappear.
	
	RESOLUTION
	==========
	
	At design time, right-click the DBGrid control, and click Retrieve Fields to set
	the column headers automatically to information from the bound data control.
	Then reset any NumberFormat properties you have modified.
	
	This will fix the problem permanently for this DBGrid control. However, you can't
	use this solution if the DatabaseName and RecordSource properties of the data
	control are not known until run time. In this case, set the NumberFormat
	property of each relevant column in code. This can be done immediately after the
	data control is connected to the database by using code similar to this:
	
	     Data1.DatabaseName = "C:\Access\Number.mdb"
	     Data1.RecordSource = "Numbers"
	     Data1.Refresh
	     DBGrid.Columns(0).NumberFormat = "fixed"
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. In Microsoft Access, Data Manager, or VisData, create a new database that has
	  one table consisting of two Number fields. Fill in a few of the records with
	  random numbers.
	
	2. Start a new project in Visual Basic. Form1 is created by default.
	
	3. Double-click the Data Control button in the Toolbox to create a new data
	  control (Data1).
	
	4. Click the DBGrid button in the Toolbox and drag a DBGrid control (DBGrid1)
	  onto the form.
	
	5. Set the DatabaseName property of the Data1 control to the database you
	  created in Step 1. Also set the RecordSource property to the name of the
	  table in your database.
	
	6. Set the DataSource property of the DBGrid control to Data1.
	
	7. Right-click the DBGrid control to bring up the Properties dialog box. Click
	  the Columns tab, and select either of the columns. Change NumberFormat to
	  fixed.
	
	8. On the Run menu, click start (ALT, R, S), or press the F5 key. The DBGrid
	  control will size itself correctly, but no data will appear. If you stop the
	  program, right-click DBGrid1, click Retrieve Fields, set the NumberFormat
	  property to fixed, and restart the program, the problem will be solved.
	
	Additional query words: 4.00 buglist4.00 vb4win vb4all
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Issue type        : kbbug
	
	=============================================================================
	
