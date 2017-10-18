---
layout: page
title: "Q251292: PRB: Closing a Modal Form Raises an Application Error"
permalink: kb/251/Q251292/
---

## Q251292: PRB: Closing a Modal Form Raises an Application Error

	Article: Q251292
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbCtrl kbListView kbVBp kbVBp600bug kbGrpDSVB kbDSupport kbControl
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An application error occurs when a modal dialog or form is closed after being
	shown from the ItemClick event of a ListView control in Microsoft Visual Basic.
	The error only occurs if the ListView control is cleared in the ItemClick event
	and an item other than the first item in the ListView was clicked.
	
	RESOLUTION
	==========
	
	To work around this behavior, the ListView control must be disabled before it is
	cleared. Once the ListView is cleared, the control can then be enabled.
	
	  Private Sub ListView1_ItemClick(ByVal Item As MSComctlLib.ListItem)     ListView1.Enabled = False
	     ListView1.ListItems.Clear
	     ListView1.Enabled = True
	     MsgBox "Cleared"
	  End Sub
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Visual Basic Standard EXE project. Form1 is created by default.
	
	2. On the Project menu, select Components. In the Components dialog box, select
	  the Microsoft Windows Common Controls 6.0 component and click OK.
	
	3. Add a ListView control to Form1.
	
	4. Add the following code to the General Declarations section of Form1:
	
	  Private Sub Form_Load()
	     ListView1.ListItems.Add , , "First"
	     ListView1.ListItems.Add , , "Second"
	  End Sub
	
	  Private Sub ListView1_ItemClick(ByVal Item As MSComctlLib.ListItem)
	     ListView1.ListItems.Clear
	     MsgBox "Cleared"
	  End Sub
	
	5. Press the F5 key to run the program.
	
	6. Click on the word "Second" that is contained within the ListView control.
	  Notice that the message box dialog is displayed.
	
	7. Close the dialog box and note that an Application Error occurs.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCtrl kbListView kbVBp kbVBp600bug kbGrpDSVB kbDSupport kbControl 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
