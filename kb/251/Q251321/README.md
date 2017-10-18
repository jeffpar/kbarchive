---
layout: page
title: "Q251321: BUG: ScrollBar Controls Exhibit Paint Problems In Change Event"
permalink: kb/251/Q251321/
---

## Q251321: BUG: ScrollBar Controls Exhibit Paint Problems In Change Event

	Article: Q251321
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbCtrl kbScrollBar kbVBp kbVBp400bug kbVBp500bug kbVBp600bug kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Microsoft Visual Basic, the intrinsic HScrollBar and VScrollBar controls
	experience painting problems if the mouse is moved off the control prior to the
	completion of code execution in the Change event.
	
	RESOLUTION
	==========
	
	To work around this behavior, the scrollbar control can be disabled at the start
	of the Change event. Once the code execution is complete, the control can then
	be enabled again.
	
	  Private Sub HScroll1_Change()
	     HScroll1.Enabled = False
	
	     ' place your code here 
	
	     HScroll1.Enabled = True
	  End Sub
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Visual Basic Standard EXE project. Form1 is created by default.
	
	2. Add an HScrollBar control to Form1.
	
	3. Add the following code to the General Declarations section of Form1:
	
	  Private Sub HScroll1_Change()
	      t = Timer
	      While Timer < (t + 2)  ' to give you time to move the mouse
	          DoEvents
	      Wend
	  End Sub
	
	4. Press the F5 key to run the program.
	
	5. Click on the RIGHT ARROW of the HScrollBar control. Note that the RIGHT ARROW
	  appears in a depressed state.
	
	6. Before the RIGHT ARROW of the HScrollBar returns to the raised state, move
	  the mouse off the HScrollBar control and position the mouse over any portion
	  of the client area of Form1.
	
	7. When the RIGHT ARROW of the HScrollBar returns to the raised state, click
	  once on the HScrollBar thumb. Note that the thumb receives focus and begins
	  flashing.
	
	8. Drag the HScrollBar thumb to the the right side of the control. Note that
	  both the RIGHT and LEFT ARROWs of the HScrollBar control are now selected and
	  in a depressed state.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCtrl kbScrollBar kbVBp kbVBp400bug kbVBp500bug kbVBp600bug kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0,5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
