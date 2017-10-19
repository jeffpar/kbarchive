---
layout: page
title: "Q166929: FIX: DBCombo Control Change Event Does Not Fire"
permalink: /kb/166/Q166929/
---

## Q166929: FIX: DBCombo Control Change Event Does Not Fire

	Article: Q166929
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbVBp kbVBp500 kbControl
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Program code in the Change event procedure of Microsoft Visual Basic will not
	execute. Applications written using Visual Basic version 4.0 may no longer work
	as expected if functionality is based on responding to a Change event in a
	DBCombo control.
	
	RESOLUTION
	==========
	
	To correct this problem, use one of the following methods.
	
	- Install Visual Studio 97 Service Pack 2 or later.
	
	-or-
	
	- To resolve this problem without installing Visual Studio 97 Service Pack 2 or
	  later:
	
	  Replace the functional code of the Change event procedure with equivalent code
	  entered in the Click event procedure. This code is conditioned by testing the
	  DataChanged property of the DBCombo control.
	
	An example of this workaround is as follows:
	
	     Private Sub DBCombo1_Click(Area As Integer)
	        If DBCombo1.DataChanged Then
	           ' Any code that would normally be in the Change Event
	           ' or call the Change event like this: DBCombo1_Change
	           ' followed by code that resets the DataChanged property, such as:
	           DBCombo1.DataChanged = False
	        End IF
	     End Sub
	
	If the user normally tabs to the DBCombo control and then uses arrow keys to
	navigate to an item in the list, similar code would be required in the KeyPress,
	KeyDown and/or KeyUp event procedures. In this case, it would be more effective
	to write a single form-level module to replace the code of the DBCombo Change
	event and call it from the various places where the DBCombo.DataChanged property
	would be tested.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Studio 97 Service
	Pack 2.
	
	For more information, please see the following article in the Microsoft Knowledge
	Base:
	
	Q170365 INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Standard EXE project. Form1 is created by default.
	
	2. On Form1, place two Data Controls named Data1 and Data2.
	
	3. Set the following values for the properties of Data1:
	
	  Name            Data1
	  DatabaseName    C:\Program Files\DevStudio\VB\Biblio.mdb (or the
	                  appropriate path to that database)
	  RecordsetType   0 - Table
	  RecordSource    Titles
	
	4. Set the following values for the properties of Data2:
	
	  Name            Data2
	  DatabaseName    C:\Program Files\DevStudio\VB\Biblio.mdb (or the
	                  appropriate path to that database)
	  RecordsetType   2 - Snapshot
	  RecordSource    SELECT PubID, Name FROM Publishers ORDER BY Name
	
	5. Place a DBCombo control on the form.
	
	6. Set the following values for the properties of DBCombo1:
	
	  Name            DBCombo1
	  BoundColumn     PubID
	  DataField       PubID
	  DataSource      Data1
	  ListField       Name
	  RowSource       Data2
	  Style           0 [ASCII 150] dbcDropDownCombo
	
	7. In the module for the form, enter the following:
	
	        Private Sub DBCombo1_Change()
	           Debug.Print "In the Change Event Method"
	        End Sub
	
	8. Run the form. Click the down arrow to the DBCombo to open the list portion.
	
	9. Click any line in the list portion. Observe the Immediate (Debug) Window.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp kbVBp500 kbControl 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
