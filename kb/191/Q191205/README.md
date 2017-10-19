---
layout: page
title: "Q191205: BUG: Run-Time Error 458 When Late-Binding Rich TextBox Control"
permalink: /kb/191/Q191205/
---

## Q191205: BUG: Run-Time Error 458 When Late-Binding Rich TextBox Control

	Article: Q191205
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kberrmsg kbCtrl kbVBp500bug kbVBp600bug kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you access the BackColor property of a Rich TextBox Control that is
	late-bound, the following error occurs when you run the program:
	
	  Error 458: Variable uses an Automation type not supported in Visual Basic.
	
	RESOLUTION
	==========
	
	Instead of late-binding the control, try to early-bind it. For example, you can
	replace the following code:
	
	     Dim ctl As Control
	     Set ctl = RichTextBox1
	
	with:
	
	     Dim ctl As RichTextBox
	     Set ctl = RichTextBox1
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Select Components from the Project menu, browse for the Microsoft Rich
	  TextBox Control 6.0, and select it. Add the control to Form1.
	
	3. Paste the following code into the code window of Form1:
	
	        Private Sub Form_Load()
	           Dim ctl As Control
	           Set ctl = RichTextBox1
	           ctl.BackColor = vbRed
	           If ctl.BackColor <> vbRed Then
	              MsgBox "fail"
	           End If
	        End Sub
	
	4. Press F5 to run the project.
	
	RESULTS: The following error appears:
	
	  Error 458: Variable uses an Automation type not supported in Visual Basic
	
	======================================================================
	Keywords          : kbcode kberrmsg kbCtrl kbVBp500bug kbVBp600bug kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
