---
layout: page
title: "Q149275: FIX: MouseMove Button Is Incorrect with ListView MultiSelect"
permalink: /kb/149/Q149275/
---

## Q149275: FIX: MouseMove Button Is Incorrect with ListView MultiSelect

	Article: Q149275
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbVBp500 kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Button argument of the ListView's MouseMove event may not always correctly
	reflect the most current mouse button status. This can occur if the MultiSelect
	property of the ListView control is set to True. The Button argument of the
	MouseMove event is updated only when the MouseDown event is fired, not every
	time the MouseMove event is fired.
	
	RESOLUTION
	==========
	
	To work around this problem, one could use an OCX or tool that allows the
	trapping of Windows messages. The code would need to be written, but one
	possible scheme could involve a flag variable that would be set whenever the
	ListView control received a WM_LBUTTONDOWN or WM_RBUTTONDOWN message and only
	reset when a corresponding WM_LBUTTONUP or WM_RBUTTONUP message was received.
	This flag variable could be used as the equivalent of the button argument in the
	MouseMove event, because it will return different values when the mouse button
	has been clicked or when the mouse button has been clicked but not released. The
	Message Blaster OCX, produced by WareWithAll, is a good tool to use to trap
	Windows messages.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Basic 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce
	------------------
	
	1. Start Visual Basic 4.0. Form1 is created by default.
	
	2. Add a single ListView control to the form. Also add one label control.
	
	3. Set the following property of the ListView control:
	
	  MultiSelect: True
	
	4. Add this code to the form:
	
	     Private Sub Form_Load()
	         ListView1.ListItems.Add , , "item 1"
	     End Sub
	
	     Private Sub ListView1_MouseMove(Button As Integer, Shift As Integer, x
	     As Single, y As Single)
	         Label1.Caption = Button
	     End Sub
	
	5. Press F5 or select Start from the Run menu to run the application. Click once
	  on the white space of the control and see that the label changes to show a
	  1--the constant for the left mouse button. Now move the mouse button around
	  and see that the label still shows 1 even though the left mouse button is not
	  pressed.
	
	Additional query words: kbVBp400bug kbVBp600fix kbVBp kbdsd kbDSupport kbControl
	
	======================================================================
	Keywords          : kbVBp500 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500 kbVB400Search kbVB400
	Version           : :4.0,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
