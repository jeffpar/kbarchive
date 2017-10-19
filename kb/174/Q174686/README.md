---
layout: page
title: "Q174686: PRB: Error 371 or 404 Occurs When Using the Show Method"
permalink: /kb/174/Q174686/
---

## Q174686: PRB: Error 371 or 404 Occurs When Using the Show Method

	Article: Q174686
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbnokeyword kbVBp500 kbVBp600 kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the MDI child form uses the Show method to open a form, you may receive the
	following error:
	
	  Run-time Error '371':
	  The specified object can't be used as an owner form for Show().
	
	When the MDI child form uses the Show method to open an MDI Child form, you may
	receive the following error:
	
	  Run-time Error '404':
	  MDI child forms cannot be shown modally.
	
	CAUSE
	=====
	
	These errors occur if an MDI child form uses the Show method and specifies that
	it owns the form to display. An MDI child form cannot own another form.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	While you can specify the owner of a form as one of the parameters in the Show
	method, you cannot designate an MDI Child form as an owner of another form.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Add a CommandButton to Form1.
	
	3. Add an MDI form and a second form to your project.
	
	4. Set the MDIChild Property of Form1 to True.
	
	  NOTE: To reproduce the error #5, set the MDIChild Property of Form2 to True as
	  well.
	
	5. Copy the following code to the Code window of Form1.
	
	        Option Explicit
	
	        Private Sub Command1_Click()
	           Form2.Show vbModal, Me
	        End Sub
	
	6. Press the F5 key to run the program. Click the CommandButton and the error
	  occurs.
	
	(c) Microsoft Corporation 1997, All Rights Reserved. Contributions by Arsenio
	Locsin, Microsoft Corporation
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbnokeyword kbVBp500 kbVBp600 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Issue type        : kbprb
	
	=============================================================================
	
