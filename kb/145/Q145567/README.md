---
layout: page
title: "Q145567: BUG: TabStrip Control Incorrectly Displays TABs on Form_Load"
permalink: /kb/145/Q145567/
---

## Q145567: BUG: TabStrip Control Incorrectly Displays TABs on Form_Load

	Article: Q145567
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.00 | 4.00
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A Visual Basic program with a TabStrip control does not correctly display the
	TAB during run-time if the TAB height is set in the Form_Load procedure of the
	form. The TAB is correctly displayed if the TAB height is set in any other
	procedure except Form_Load.
	
	STATUS
	======
	
	Microsoft has confirmed this to be an issue in the Microsoft products listed at
	the beginning of this article. This problem has been corrected in the Microsoft
	Visual Basic version 4.0a for Windows synchronization release.
	
	WORKAROUND
	==========
	
	To work around this issue, show and refresh the TabStrip control in the
	Form_Load event before setting the TAB height.
	
	MORE INFORMATION
	================
	
	The following creates an example to reproduce this behavior. A Picture control
	is moved to the TAB area of the TabStrip control during the Form_Load procedure.
	The same code in the Form_Load procedure is also in the Form_Click procedure.
	
	When you run this example, the TAB does not appear. Click the Form and the TAB
	appears.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start the 32-bit version of Visual Basic 4.0 or if it is already running,
	  click New Project on the File menu.
	
	2. Add a TabStrip and a Picture control to the Form1 form.
	
	3. Copy the following code sample to the Form1 code window:
	
	        Option Explicit
	
	        Private Sub Form_Click()
	
	        'Uncomment the next two lines to work around this issue.
	        'Me.Show
	        'TabStrip1.Refresh
	
	        'Move the Picture1 control to the display area.
	        'of the TabStrip control
	           With TabStrip1
	              Picture1.Move .ClientLeft, .ClientTop, _
	                            .ClientWidth, .ClientHeight
	           End With
	        End Sub
	
	        Private Sub Form_Load()
	
	        'Move the Picture1 control to the display area.
	        'of the TabStrip control
	           With TabStrip1
	              Picture1.Move .ClientLeft, .ClientTop, _
	                            .ClientWidth, .ClientHeight
	           End With
	        End Sub
	
	4. On the Run menu, click Start or press the F5 key to start the program. Click
	  on the form and note that the TAB appears.
	
	Additional query words: 4.00 4.00a vb4win vb432 buglist4.00
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400
	Version           : 4.00 | 4.00
	Issue type        : kbbug
	
	=============================================================================
	
