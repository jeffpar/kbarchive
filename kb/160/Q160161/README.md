---
layout: page
title: "Q160161: FIX: SPACE BAR+ARROW KEY Causes GPF When Unloading Form"
permalink: kb/160/Q160161/
---

## Q160161: FIX: SPACE BAR+ARROW KEY Causes GPF When Unloading Form

	Article: Q160161
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
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
	
	With a form that contains at least two controls that are capable of receiving
	focus, if the SPACE BAR+ARROW KEY combination is pressed while the focus is on
	the control whose click event contains the code "Unload Me," a General
	Protection Fault (GPF) will occur.
	
	RESOLUTION
	==========
	
	Instead of unloading the form immediately in the click event of a control, place
	a Timer control on the form and use it to defer this action for one millisecond
	using the following code:
	
	     Private Sub Command1_Click()
	         '''Unload Me
	         Timer1.Interval = 1
	     End Sub
	
	     Private Sub Timer1_Timer()
	         Unload Me
	     End Sub
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Basic 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Place two CommandButtons, Command1 and Command2, on Form1.
	
	3. Place the following code in the Command1_Click event:
	
	     Private Sub Command1_Click()
	         Unload Me
	     End Sub
	
	4. Run the project by pressing the F5 key.
	
	5. With the focus on Command1, press the SPACE BAR+ARROW KEY combination and
	  note that a GFP occurs.
	
	Additional query words: kbVBp400bug kbVBp600fix kbVBp kbdsd kbDSupport kbCtrl
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
