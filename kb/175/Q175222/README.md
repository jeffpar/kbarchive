---
layout: page
title: "Q175222: HOWTO: Tell If UserControl is in Design-Time or Run-Time"
permalink: /kb/175/Q175222/
---

## Q175222: HOWTO: Tell If UserControl is in Design-Time or Run-Time

{% raw %}

	Article: Q175222
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When creating a UserControl in Visual Basic you may have code that you don't
	what to run when the control is on a Form at design-time, but you do want to run
	when the Form is in run-time. This article shows how to use the
	AmbientProperties Object to tell when a host container of a control is in design
	or run-time.
	
	MORE INFORMATION
	================
	
	When a UserControl is placed on a form, any constituent controls that are in the
	control are in run-time mode, not design-time mode. Usually this does not cause
	any trouble for the developer. But there are cases where you need to have an
	event happen only when the container for the UserControl is in run-time. The
	following example shows how to enable or disable a Timer control by testing to
	see if the container is in design-time or run-time.
	
	Step-by-Step Example
	--------------------
	
	1. Create a New Standard EXE project.
	
	2. From the Project Menu, select Add UserControl.
	
	3. Add a Timer and a Label control to the UserControl.
	
	4. Add the Following Code to the UserControl:
	
	        Private Sub Timer1_Timer()
	           Label1.Caption = Time()
	        End Sub
	
	        Private Sub UserControl_Show()
	           If Ambient.UserMode Then 'We are in run-time
	              Timer1.Interval = 1000
	              Timer1.Enabled = True
	           Else 'We are in design-time
	              Timer1.Enabled = False
	              Label1.Caption = "design time"
	           End If
	        End Sub
	
	5. Close the UserControl.
	
	6. Add the UserControl to Form1.
	
	7. Run the Form.
	
	8. Close the Form.
	
	REFERENCES
	==========
	
	Visual Basic Component Tools Guide, Chapter 9.
	
	Additional query words: ActiveX Control kbVBp500 kbVBp600 kbVBp kbdsd kbDSupport KBCONTROL 
	KBCTRLCREATE
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbZNotKeyword3
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
