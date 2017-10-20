---
layout: page
title: "Q137023: PRB: Can't See Changed Data If Update VB 3.0 DB App to VB 4.0"
permalink: /kb/137/Q137023/
---

## Q137023: PRB: Can't See Changed Data If Update VB 3.0 DB App to VB 4.0

{% raw %}

	Article: Q137023
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 3.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 4.0 
	- Microsoft Visual Basic Standard Edition for Windows, version 3.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Applications written and compiled in Visual Basic 3.0 that check and reflect a
	changing data source do not show changed records after that application is
	compiled Visual Basic 4.0.
	
	RESOLUTION
	==========
	
	This problem does not occur if you occasionally call the Idle method of the
	DBEngine object using this line of code:
	
	     DBEngine.Idle dbFreeLocks
	
	This line of code is needed only for databases saved in Microsoft Jet versions
	1.x and 2.x. Databases created with Microsoft Jet version 3.0 do not exhibit
	this behavior, and programs written only to manipulate Jet 3.0 databases do not
	require the call to the Idle method.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Double-click the Label button in the Toolbox to add a label control (Label1)
	  to Form1.
	
	3. Add a timer control (Timer1) to Form1 by double-clicking the Timer button in
	  the Toolbox.
	
	4. Insert the following code in the General Declarations section of Form1:
	
	     Dim db As Database
	     Dim ds As Recordset
	
	5. Add the following code to the Form_Load and Form_Unload event procedures:
	
	     Private Sub Form_Load()
	        ' Replace the next line with the path to your VB 4.0 directory:
	        Set db = DBEngine(0).OpenDatabase("c:\vb\biblio.mdb")
	        Set ds = db.OpenRecordset("Authors")
	     End Sub
	
	     Private Sub Form_Unload()
	        ds.Close
	        db.Close
	     End Sub
	
	6. Change the Interval property of the Timer control to 3000 (3 seconds).
	
	7. Insert the following code in the Timer1_Timer event procedure:
	
	     Private Sub Timer1_Timer()
	        Dim s As String
	        s = Time$ + " / " + ds("Author")
	        Label1.Caption = s
	     End Sub
	
	8. On the Run menu, click start (ALT, R, S), or press the F5 key to run the
	  program.
	
	9. Start another copy of Visual Basic, and load and run the VisData sample
	  application located in \Vb\Samples\Visdata. Open the same Biblio.mdb database
	  referenced in your code. Open the Authors table, make a change to the Author
	  field of the first record, and update the database. With Visual Basic 3.0,
	  the change will be visible immediately in the running application, but with
	  Visual Basic 4.0 no change will be evident.
	
	  To correct this behavior, add the following line of code to the Timer1_Timer
	  event procedure:
	
	        DBEngine.Idle dbFreeLocks
	
	NOTE: The Biblio.mdb database that ships with Visual Basic 4.0 is saved as a
	Microsoft Jet 2.0 database. You can use VisData to convert this to a Microsoft
	Jet 3.0 database. If the above example is followed using Visual Basic 4.0 and a
	Microsoft Jet 3.0 database, no call to DBEngine.Idle is necessary.
	
	Additional query words: 4.00 vb4win vb4all
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB400Search kbVB300Search kbVB400 kbVB300
	Version           : :3.0,4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
