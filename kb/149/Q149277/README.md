---
layout: page
title: "Q149277: BUG: SSCommand Click Fired with Double-Click in Common Dialog"
permalink: /kb/149/Q149277/
---

## Q149277: BUG: SSCommand Click Fired with Double-Click in Common Dialog

	Article: Q149277
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
	
	Double-clicking a file name in a common dialog box that happens to be displayed
	immediately above an SSCommand button will cause the Click event for the
	SSCommand button to be fired.
	
	WORKAROUND
	==========
	
	This problem can be worked around in two ways. The easiest and quickest route is
	to replace all SSCommand buttons with regular command buttons. The regular
	command button does not show this behavior.
	
	Another alternative is to set the enabled property of the SSCommand button to
	false immediately before showing the common dialog box. If this route is taken
	then a timer must be utilized to switch the enabled property of the SSCommand
	back to True. If Enabled is set to true immediately after the common dialog box
	returns (or even after a delay loop), the SSCommand will still have its click
	event fired. The following is a step-by-step example for this fix (this can be
	followed after the reproduction sample below):
	
	1. Add a single timer control to the form.
	
	2. Set these properties of the timer control:
	
	  Enabled: False
	  Interval: 1
	
	3. Add this code to the Timer1_Timer event:
	
	        Private Sub Timer1_Timer()
	           SSCommand1.Enabled = True
	           Timer1.Enabled = False
	        End Sub
	
	4. In code, add this line immediately before the common dialog is shown:
	
	        SSCommand1.Enabled = False
	
	5. Add this line of code immediately after the common dialog is shown:
	
	        Timer1.Enabled = True
	
	This code will turn off the SSCommand immediately before showing the common
	dialog box. When the dialog box returns, the timer will be enabled, its event
	will fire 1 millisecond later, re-enabling the SSCommand, and then it will turn
	itself off.
	
	STATUS
	======
	
	Microsoft has confirmed this to be an issue in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start Visual Basic 4.0. Form1 is created by default.
	
	2. Add a single SSCommand button to the form. Size the button to be very large
	  so that the reproduction is easier to accomplish.
	
	3. Add an additional regular command button and a single common dialog box
	  control.
	
	4. Add this code to Form1:
	
	        Private Sub SSCommand1_Click()
	           MsgBox "SSCommand clicked"
	        End Sub
	
	        Private Sub Command1_Click()
	           CommonDialog1.Filter = "(*.txt)|*.txt"
	           CommonDialog1.ShowOpen
	        End Sub
	
	5. Press F5 or select Start from the Run menu to run the application. Click on
	  the regular command button to display the Open common dialog box. Ensure that
	  the common dialog box is positioned such that a file name is immediately over
	  the SSCommand. Double-click the file name, and see that, after the common
	  dialog box is dismissed, a message box is displayed indicating that the
	  SSCommand button has been clicked.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp400bug 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0
	Issue type        : kbbug
	
	=============================================================================
	
