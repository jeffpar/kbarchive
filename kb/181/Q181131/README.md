---
layout: page
title: "Q181131: PRB: ComboBox Text Property Does Not Update Properly"
permalink: kb/181/Q181131/
---

## Q181131: PRB: ComboBox Text Property Does Not Update Properly

	Article: Q181131
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kbToolkit kbVBp500 kbVBp600 kbOSWinCE100 kbGrpDSVB
	Last Modified: 16-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual Basic 6.0 
	- Microsoft eMbedded Visual Basic, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The ComboBox Text property is not updated until after the ComboBox Click event
	is complete. This behavior may be a problem if the value of the Text property is
	required during the ComboBox Click event.
	
	RESOLUTION
	==========
	
	The ListIndex property is updated as soon as the item is selected and can be
	used to determine the text of that item. To work around this problem, use the
	ListIndex property as follows:
	
	  Combo1.List(Combo1.ListIndex)
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Windows CE project in either Visual Basic or eMbedded Visual
	  Basic. Form1 is created by default.
	
	2. Add a ComboBox (Combo1) to Form1.
	
	3. Add the following code:
	
	        Option Explicit
	        Dim x
	
	        Private Sub Form_Load()
	           For x = 1 to 8
	              Combo1.AddItem "Item" & x
	           Next
	        End Sub
	
	        Private Sub Combo1_Click()
	           MsgBox "Text: " & Combo1.Text & ", ListIndex: " & _
	           Combo1.ListIndex
	        End Sub
	
	4. Press F5 to run the project.
	
	5. Click the drop-down arrow of Combo1 and click Item1. Note that the message
	  box shows the value of the Text property as Combo1 instead of Item1.
	
	Additional query words: wince wce vbce evb vbce6
	
	======================================================================
	Keywords          : kbToolkit kbVBp500 kbVBp600 kbOSWinCE100 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword2 kbVBeMbSearch kbWinCETKVBSearch kbWinCESearch kbVBeMb300
	Version           : :3.0
	Issue type        : kbprb
	
	=============================================================================
	
