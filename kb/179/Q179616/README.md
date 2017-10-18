---
layout: page
title: "Q179616: PRB: Rollback Causes DAO Recordset Editmode To Be Set Back to 0"
permalink: kb/179/Q179616/
---

## Q179616: PRB: Rollback Causes DAO Recordset Editmode To Be Set Back to 0

	Article: Q179616
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 09-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the edit command is issued for a recordset, and an unrelated transaction is
	rolled back before the update command, the following error is returned when the
	update command is issued:
	
	  run-time Error 3020 -- "Update or CancelUpdate Without Addnew or Edit"
	
	If the transaction is committed, this error does not occur.
	
	RESOLUTION
	==========
	
	To work around this problem, move the rs.Update method statement so that it is
	executed before the transaction is started, as shown in the MORE INFORMATION
	section below. To implement this workaround, change the code that has two update
	commands, one of which is commented. Uncomment that one and comment the one that
	is not commented.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Standard Exe VB project. Form1 is created by default.
	
	2. Check the reference to the DAO 3.5 object library.
	
	3. Add a new form, and then add a CommandButton to the form.
	
	4. Paste the code below into the CommandButton Click event.
	
	5. Change the OpenDatabase method so that it points to the Northwinds database
	  on your local machine, and then run the project:
	
	        Private Sub Command1_Click()
	
	         Dim rs As Recordset
	         Dim db As Database
	
	         Set db = OpenDatabase("c:\mikework\dbs\nwind.mdb", 0, False, "")
	
	         Set rs = db.OpenRecordset("SELECT ContactName FROM Customers", _
	         dbOpenDynaset, 0, dbPessimistic)
	
	         rs.Edit     'This sets the editmode to 1.
	         rs!ContactName = rs!ContactName & "H"
	         Debug.Print rs.EditMode  'This will be 1.
	         'rs.Update   'Uncomment this line for workaround.
	
	         'Start the transaction.
	         BeginTrans
	            'The processing that occurs in this transaction is unrelated
	            'to the above recordset.
	         Rollback
	
	         Debug.Print rs.EditMode  'Editmode is now 0.
	         rs.Update  '<<Error will occur on this line.
	
	         rs.Close
	         db.Close
	
	        End Sub
	
	Additional query words: kbVBp500 kbdse kbDSupport kbVBp kbDAO
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB500
	Issue type        : kbprb
	
	=============================================================================
	
