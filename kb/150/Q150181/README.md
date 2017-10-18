---
layout: page
title: "Q150181: BUG: Spin Control Does Not Obey Move Method"
permalink: kb/150/Q150181/
---

## Q150181: BUG: Spin Control Does Not Obey Move Method

	Article: Q150181
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
	
	When you use the Move method of the Spin control, the control may not move if it
	is invisible.
	
	STATUS
	======
	
	Microsoft has confirmed this to be an issue in the Microsoft products listed at
	the beginning of this article.
	
	WORKAROUND
	==========
	
	To work around this problem, issue the Move command twice. For example, instead
	of writing:
	
	     SpinButton1.Move 0,0,200,200
	
	use the following code to move the control if it is invisible:
	
	     SpinButton1.Move 0,0,200,200
	     SpinButton1.Move 0,0,200,200
	
	If the size of the control remains unchanged, the command only needs to be issued
	once.
	
	Steps To Reproduce Problem
	--------------------------
	
	1. Start a new project. Form1 is created by default.
	
	2. Place an OutRider SpinButton control on the form. From the Tools menu, select
	  the Custom Controls menu option, and then select the Outrider SpinButton.
	
	3. In the Form_Click event, place the following code:
	
	     Private Sub Form_Click()
	
	     SpinButton1.Visible = False
	
	     SpinButton1.Move 0, 0, 200, 200
	
	     SpinButton1.Visible = True
	
	     End Sub
	
	Run the program by pressing F5, and notice that the control re-sizes but does not
	move to the upper left hand corner of the client area of the Form.
	
	MORE INFORMATION
	================
	
	In general, this problem is encountered when the size and the position of the
	control are adjusted. If the size of the control is not adjusted by the Move
	command, the control will move correctly.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp400bug 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0
	Issue type        : kbbug
	
	=============================================================================
	
