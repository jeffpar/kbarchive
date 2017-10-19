---
layout: page
title: "Q150234: BUG: Sheridan Panel Doesn't Correctly Align if Visible is False"
permalink: /kb/150/Q150234/
---

## Q150234: BUG: Sheridan Panel Doesn't Correctly Align if Visible is False

	Article: Q150234
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbVBp400bug
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
	
	The Sheridan Panel control does not correctly align to the bottom of a form
	after a window is resized if the Visible property of the control is set to False
	during the resize of the window.
	
	RESOLUTION
	==========
	
	Set the position of the status bar using code. For example, rather than setting
	the Visible property of the status bar to True, calculate and set the position
	before showing the bar. The following code aligns the bar to the bottom of a
	Form before showing it:
	
	     SSPanel1.Align = 0
	     SSPanel1.Top = Form1.Top + Form1.Width - SSPanel1.Width
	     SSPanel1.Visible = True
	     SSPanel1.Align = 2
	
	STATUS
	======
	
	Microsoft has confirmed this to be an issue in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Place a Sheridan Panel on the form, and set its Align property to 2 - Align
	  Bottom.
	
	3. Place two Command buttons on Form1. In the Click event for Command1, place
	  the following code:
	
	        Private Sub Command1_Click()
	        SSPanel1.Visible = False
	        End Sub
	
	4. In the Click event for the second Command button, place the following code:
	
	        Private Sub Command2_Click()
	        SSPanel1.Visible = True
	        End Sub
	
	5. Run the project by pressing the F5 key. Click the Command1 button to cause
	  the panel to disappear. Resize the window, and then click the Command2 button
	  to cause the panel to reappear.
	
	Note that the panel appears in the middle of the form where the bottom of the
	form was prior to the Resize event.
	
	To work around the problem, place the code in the WORKAROUND Section above in the
	Click event of the Command2 button.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp400bug 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0
	Issue type        : kbbug
	
	=============================================================================
	
