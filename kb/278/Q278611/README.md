---
layout: page
title: "Q278611: PRB: Sheridan Command Button Click Event Raised in WhatsThisMode"
permalink: /kb/278/Q278611/
---

## Q278611: PRB: Sheridan Command Button Click Event Raised in WhatsThisMode

{% raw %}

	Article: Q278611
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbActivexEvents kbCtrl kbVBp kbVBp500 kbVBp600 kbForms kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Click event of a Sheridan command button fires when it attempts to retrieve
	the WhatsThisHelp property on the button. The Click event should not be raised
	when WhatsThisMode is active.
	
	RESOLUTION
	==========
	
	The MouseDown event of the Sheridan command button does not fire when a Form is
	in WhatThisMode. To work around the problem, set a flag when the MouseDown event
	of the command button does fire. Check the flag in the Click event of the button
	to determine if code needs to be run.
	
	MORE INFORMATION
	================
	
	This problem has been reproduced with version 1.0.41.0 of the Sheridan 3D
	Controls library (Threed32.ocx).
	
	Steps to Reproduce and Work Around the Behavior
	-----------------------------------------------
	
	1. Create a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. In the Properties window, set the MaxButton and MinButton properties of Form1
	  to False.
	
	3. In the Properties Window, set the WhatsThisButton property of Form1 to True.
	
	4. On the Project menu, click to select Components, select Sheridan 3D Controls,
	  and then click OK.
	
	5. Add an SSCommand control to Form1.
	
	6. Paste the following code into the code window of Form1:
	
	  Dim blnFireEvent As Boolean
	
	  Private Sub Form_Load()
	      blnFireEvent = False
	  End Sub
	
	  Private Sub SSCommand1_Click()
	      If blnFireEvent Then
	          MsgBox "Execute the click event code"
	          blnFireEvent = False
	      Else
	          MsgBox "WhatsThisMode is active"
	      End If
	  End Sub
	
	  Private Sub SSCommand1_KeyDown(KeyCode As Integer, Shift As Integer)
	      ' The keyboard was used on the button.
	      ' Set the flag to execute the code.
	      blnFireEvent = True
	  End Sub
	
	  Private Sub SSCommand1_MouseDown(Button As Integer, Shift As Integer, X As Single, Y As Single)
	      ' Because the MouseDown event was raised, WhatsThisHelp is not active.
	      ' Set the flag to execute the code.
	      blnFireEvent = True
	  End Sub
	
	7. Run the project. Click SSCommand1, and note that a message box is displayed
	  indicating that you should execute the click event code.
	
	8. Dismiss the message box.
	
	9. Enter WhatsThisMode by clicking on the WhatsThisHelp button at the top right
	  of Form1.
	
	10. Click SSCommand1, and note that a message box is displayed indicating that
	  you are in WhatsThisMode.
	
	Additional query words: WhatsThis Mode
	
	======================================================================
	Keywords          : kb3rdparty kbActivexEvents kbCtrl kbVBp kbVBp500 kbVBp600 kbForms kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
