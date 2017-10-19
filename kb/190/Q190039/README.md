---
layout: page
title: "Q190039: BUG: VB Crashes When Deselecting Multi-Selected Objects"
permalink: /kb/190/Q190039/
---

## Q190039: BUG: VB Crashes When Deselecting Multi-Selected Objects

	Article: Q190039
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbCtrl kbVBp600bug kbIDEProject kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you multi-select three or more controls on a form using either the CTRL key
	or SHIFT key and then deselect one of the controls with the Properties window
	closed in the integrated development environment (IDE), VB6.exe crashes.
	
	NOTE: This problem does not occur if the Properties window is open.
	
	RESOLUTION
	==========
	
	To work around this problem, open the Properties window. You can open the
	Properties window by pressing the F4 key or clicking on the Properties Window in
	the View menu in the VB6 IDE.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a Standard EXE project in Visual Basic. Form1 is created by default.
	
	2. On Form1 place a TextBox (Text1), a CommandButton (Command1), and an
	  OptionButton (Option1). (It does not matter which three controls you use.)
	
	3. Close the Properties window by either clicking the "X" in the upper-right
	  corner of the Properties window, or right-clicking the Properties window and
	  selecting Hide.
	
	4. Hold down the Shift key and select the three controls with the mouse.
	
	5. Deselect one of the controls by holding the Shift key down and clicking on
	  one of the selected controls.
	
	This will produce a crash in VB6.exe. Typical error messages that might appear
	are:
	
	  An application error has occurred and an application error log is being
	  Generated.
	
	-or-
	
	  This program has performed an illegal operation and will be shut down.
	
	Additional query words: Exception Error Access violation IPF Invalid Page Fault GPF Multiselect multiselected
	
	======================================================================
	Keywords          : kbCtrl kbVBp600bug kbIDEProject kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
