---
layout: page
title: "Q161305: PRB: &quot;Hash Marks&quot; on ActiveX Controls After Run-Time Error"
permalink: /kb/161/Q161305/
---

## Q161305: PRB: &quot;Hash Marks&quot; on ActiveX Controls After Run-Time Error

	Article: Q161305
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbprogramming kbVBp500 kbGrpDSVBDB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After receiving an error message, all instances of the ActiveX control are
	disabled and drawn with "hash marks."
	
	CAUSE
	=====
	
	This behavior occurs after an unhandled error in event code.
	
	RESOLUTION
	==========
	
	The conditions listed below must be met to avoid this problem:
	
	1. Ensure that the event code never generates a run-time error or that it
	  handles all errors with an error handler.
	
	2. Never use Err.Raise within a UserControl.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Unhandled errors in event procedures are fatal to your control component's
	operation and the application using it because there is no procedure on the call
	stack to handle the error.
	
	It is safe to raise errors in property procedures and methods, however, because
	properties and methods are always invoked by other procedures and errors you
	raise can be handled by the user in those procedures.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create an ActiveX control called "UserCtrl" with no constituent controls and
	  the following code:
	
	        Option Explicit
	
	        Private Procedure UserControl_Click()
	          Err.Raise 999, "UserControl", "Don't Click on Me"
	        End Sub
	
	        Public Sub BackColor(ByVal NewVal As Long)
	          UserCtrl.BackColor = NewVal
	          Err.Raise 555, "UserControl", "Don't invoke this method"
	        End Sub
	
	2. Make an OCX.
	
	3. Create a new project and add the OCX via the Project|Components menu.
	
	4. Add your control and a CommandButton to the form.
	
	5. Add the following code to the CommandButton's Click event:
	
	        Sub Command1_Click()
	          On Error Resume Next
	          UserCtrl1.BackColor 0
	        End Sub
	
	6. Run the form and click the button. Then click your control.
	
	  When you click the CommandButton, nothing happens; the error is trapped and
	  dealt with (ignored in this case).
	
	  When you click your control, you see the error message and, when dismissed,
	  the control is disabled and becomes hashed out.
	
	REFERENCES
	==========
	
	Microsoft Visual Basic User's Guide, Chapter 9, Building ActiveX Controls,
	Creating Robust Controls.
	
	(c) Microsoft Corporation 1996, All Rights Reserved. Contributions by Malcolm
	Stewart, Microsoft Corporation
	
	
	Additional query words: OCX component constituent hash hatch
	
	======================================================================
	Keywords          : kbprogramming kbVBp500 kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbZNotKeyword3
	Version           : 5.0
	Issue type        : kbprb
	
	=============================================================================
	
