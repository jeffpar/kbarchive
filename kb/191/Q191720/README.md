---
layout: page
title: "Q191720: BUG: Option Button Value Changes When Group is Disabled"
permalink: kb/191/Q191720/
---

## Q191720: BUG: Option Button Value Changes When Group is Disabled

	Article: Q191720
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You have a group of Option Buttons on a Visual Basic Form. When you disable them
	from code, the last one disabled will have its Value property changed to True,
	causing the Click event for that button to fire. This occurs only when all of
	the option buttons are disabled.
	
	CAUSE
	=====
	
	The problem occurs when the buttons are disabled while the current input focus
	is on one of the buttons. As each button is disabled in turn, the tab order
	advances the focus to the next available button in the option group. When the
	last button is disabled, its Value property is set to True, and its Click event
	is fired.
	
	RESOLUTION
	==========
	
	This behavior does not occur if the input focus is moved to another control
	before the buttons are disabled.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Standard EXE project. Form1 is created by default.
	
	2. Add three Option Buttons to Form1.
	
	3. Paste the following code into Form1's code window:
	
	        Option Explicit
	
	        Private Sub Form_Load()
	            Option2.Value = True
	        End Sub
	
	        Private Sub Form_DblClick()
	           Option1.Enabled = False
	           Option2.Enabled = False
	           Option3.Enabled = False
	        End Sub
	
	        Private Sub Option3_Click()
	           MsgBox "Option3 Click"
	        End Sub
	
	4. Run the project by pressing the F5 key. When the program starts, the input
	  focus is set to Option2.
	
	5. Double-click somewhere on Form1. Note that the Click event for Option3 is
	  fired when the button is disabled.
	
	6. To resolve the problem, add a Text Box to Form1. Then add the following line
	  at the start of the Form_DblClick event:
	
	        Text1.SetFocus
	
	7. Re-run the program and double-click somewhere on Form1. This time the Click
	  event of Option3 should not fire when the control is disabled.
	
	Additional query words: kbDSupport kbDSD radio kbVBp kbvbp400bug kbVBp600bug kbVBp500bug kbVBp kbdsd
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400 kbVB16bitSearch
	Issue type        : kbbug
	
	=============================================================================
	
