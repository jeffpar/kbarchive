---
layout: page
title: "Q189666: BUG: Toolbar Displays Multiple Selected Toggle Buttons"
permalink: /kb/189/Q189666/
---

## Q189666: BUG: Toolbar Displays Multiple Selected Toggle Buttons

	Article: Q189666
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Two buttons on a Toolbar within the same Toggle Button Group appear to be
	selected simultaneously.
	
	RESOLUTION
	==========
	
	To work around this problem, set the Value property of the toggle button to
	tbrPressed only after the Form has been initially displayed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	This problem occurs whenever the Value property of one of the toggle buttons is
	set to "1 - tbrPressed" before the control is first displayed on the screen at
	run-time. For example, setting this property at any of the following times will
	result in this problem:
	
	1. Design time.
	
	2. Form's Initialize event.
	
	3. Form's Load event.
	
	Despite the appearance of these buttons, only the last button selected actually
	has its Value property set to "1 - tbrPressed." All other toggle buttons within
	this toggle group have their Value property correctly set to "0 -
	tbrUnPressed."
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Standard EXE project. Form1 is created by default.
	
	2. Select Components from the Project menu and add a reference to the "Microsoft
	  Windows Common Controls 6.0."
	
	3. Add a Toolbar control to Form1.
	
	4. View the custom property sheet for the Toolbar control, select the Buttons
	  tab, and insert two buttons.
	
	5. Set the Style property of both buttons to "2 - tbrButtonGroup."
	
	6. Set button 1's Value property to "1 - tbrPressed" and leave button 2's Value
	  as "0 - tbrUnPressed."
	
	7. Paste the following code into Form1's code window:
	
	         Private Sub Form_Click()
	            Toolbar1.Buttons(2).Value = tbrPressed
	         End Sub
	
	8. Run the sample project.
	
	9. Click on the form, and note that both Toolbar buttons appear to be pressed.
	
	WORKAROUND
	----------
	
	1. Add a Timer control to Form1 in the previous project.
	
	2. Set the Timer's Interval property to "1."
	
	3. Add the following code to Form1:
	
	         Private Sub Timer1_Timer()
	            Toolbar1.Buttons(1).Value = tbrPressed
	            Timer1.Enabled = False
	         End Sub
	
	4. View the custom property sheet for the Toolbar control. Set the Value
	  property of all Toolbar buttons to "0 - tbrUnPressed."
	
	5. Run your sample and click on Form1. Note that the Toolbar's correct
	  appearance is achieved.
	
	Additional query words: kbDSupport kbDSD kbVBp kbCtrl kbVBp600bug
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Issue type        : kbbug
	
	=============================================================================
	
