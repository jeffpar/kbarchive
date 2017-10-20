---
layout: page
title: "Q250475: PRB: VBCE: Deactivate Event Fires when Second Form is Closed"
permalink: /kb/250/Q250475/
---

## Q250475: PRB: VBCE: Deactivate Event Fires when Second Form is Closed

{% raw %}

	Article: Q250475
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 2.0,2.11,3.0
	Operating System(s): 
	Keyword(s): kbToolkit kbVBp600 kbOSWinCE100 kbGrpDSVB kbDSupport
	Last Modified: 26-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual Basic 6.0 
	- Microsoft eMbedded Visual Basic, version 3.0, on platform(s):
	   - Microsoft Windows CE versions 2.0, 2.11 for the Handheld PC 
	   - Microsoft Windows CE version 2.11 for the Palm-size PC 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After closing a form that has been shown on top of another form, the Deactivate
	event of the form that is being closed fires. This occurs only when the
	application is run on the remote device.
	
	RESOLUTION
	==========
	
	To work around this behavior, a form level variable can be used to determine
	when the event should fire. The following example sets the form level variable
	in the QueryUnload event so that the Deactivate event does not fire:
	
	  Dim FireDeactivateEvent
	
	  Private Sub Form_Deactivate()
	      If FireDeactivateEvent Then
	          MsgBox "Deactivate"
	      End If
	  End Sub
	
	  Private Sub Form_Load()
	      FireDeactivateEvent = True
	  End Sub
	
	  Private Sub Form_QueryUnload(Cancel As Integer, UnloadMode As Integer)
	      FireDeactivateEvent = False
	  End Sub
	
	MORE INFORMATION
	================
	
	This behavior only occurs in the Windows CE Platform and only on the remote
	device.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Windows CE Project in Visual Basic. Form1 is created by default.
	
	2. Add the following code behind Form1:
	
	  Private Sub Form_Click()
	      Form2.Show
	  End Sub
	
	3. Add a second form to the project.
	
	4. Add the following code behind Form2:
	
	  Private Sub Form_Deactivate()
	      MsgBox "Deactivate"
	  End Sub
	
	5. Press the F5 key to run the program.
	
	6. Click on Form1 and note that Form2 appears.
	
	7. Close Form2 and note that the message box appears after Form2 is closed.
	
	Additional query words: wce vbce vbce6
	
	======================================================================
	Keywords          : kbToolkit kbVBp600 kbOSWinCE100 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword2 kbVBeMbSearch kbWinCETKVBSearch kbWinCESearch
	Version           : :2.0,2.11,3.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
