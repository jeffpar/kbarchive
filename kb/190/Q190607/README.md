---
layout: page
title: "Q190607: PRB: DataEnvironment: DataReport Moves Form To EOF"
permalink: /kb/190/Q190607/
---

## Q190607: PRB: DataEnvironment: DataReport Moves Form To EOF

	Article: Q190607
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 09-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you have a DataReport and Form with controls bound to the same
	DataEnvironment, opening the report causes the form to be blank.
	
	CAUSE
	=====
	
	When the report steps through the records, it is moving the current position for
	the DataEnvironment and stops when it reaches EOF (end-of- file). This becomes
	the current position for the form, which displays blank fields.
	
	RESOLUTION
	==========
	
	- Open a second copy of the DataEnvironment in code and set the DataReport's
	  DataSource property to this variable instead of the global DataEnvironment
	  object.
	
	-or-
	
	- Reset the record pointer from a timer event.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Visual Basic EXE project and add a form (Form1), DataEnvironment
	  (DataEnvironment1), and DataReport (DataReport1).
	
	2. In the DataEnvironment designer, add a connection (Connection1) to a
	  database, such as Microsoft SQL Server.
	
	3. Off the connection, create a command (Command1) that selects records from a
	  table, such as SELECT * FROM Authors.
	
	4. Save the DataEnvironment.
	
	5. In the DataReport designer, set the following properties:
	
	        DataSource: DataEnvironment1
	        DataMember: Command1
	
	6. Add some fields from the table and save the report.
	
	7. Add some textboxes to the form and set the following properties:
	
	        DataSource: DataEnvironment1
	        DataMember: Command1
	        DataField: choose from the fields in the table
	
	8. Run the project. The form opens and displays the first record in the table.
	
	9. Close the form and add the following code to it:
	
	        Option Explicit
	
	        Sub Form_Load ()
	          DataReport1.Show
	        End Sub
	
	10. Run the project again. The DataReport opens and shows the records. When you
	  switch to the form, it is blank. The DataReport has moved the cursor to the
	  EOF position, so the form has not record to display.
	
	Workaround 1
	------------
	
	1. Modify the form code as follows:
	
	        Option Explicit
	
	        Sub Form_Load ()
	          Dim de As DataEnvironment1
	          Set de = New DataEnvironment1
	          Set DataReport1.DataSource = de
	           DataReport1.Show
	        End Sub
	
	2. Run the project. The form is now correctly positioned to the first record
	  because the DataReport is using a different instance of the DataEnvironment.
	
	Workaround 2
	------------
	
	1. Add a Timer (Timer1) to the form and set the Interval property to 0.
	
	2. Modify the form code as follows:
	
	        Option Explicit
	
	        Sub Form_Load ()
	          DataReport1.Show
	          Timer1.Interval = 1
	        End Sub
	
	        Sub Timer1_Timer ()
	          DataEnvironment1.rsCommand1.MoveFirst
	          Timer1.Interval = 0
	        End Sub
	
	3. Run the project. The form is now correctly positioned to the first record.
	  The timer event does not fire until the DataReport has finished stepping
	  through the records and so safely resets the record pointer. This does not
	  affect the DataReport.
	
	Additional query words: kbDSupport kbdse kbvbp600 kbVBp kbDataBinding
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Issue type        : kbprb
	
	=============================================================================
	
