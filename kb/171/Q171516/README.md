---
layout: page
title: "Q171516: FIX: ActiveX Document DLL Causes GPF When Unloading Modal Form"
permalink: /kb/171/Q171516/
---

## Q171516: FIX: ActiveX Document DLL Causes GPF When Unloading Modal Form

	Article: Q171516
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbVBp500 kbVS97sp2fix kbGrpDSVB kbvbp500sp2fix
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A General Protection Fault (GPF) occurs in Internet Explorer when using ActiveX
	UserDocument DLL.
	
	CAUSE
	=====
	
	This behavior occurs when you attempt to unload a form within the Paint Event.
	
	RESOLUTION
	==========
	
	This problem has been fixed in SP2. Visual Basic now catches the error and posts
	an error message stating that the form can not be unloaded in this context.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Studio 97 Service
	Pack 2.
	
	For more information on the Visual Studio 97 Service Pack 2, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q170365 : INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	For a list of the Visual Basic 5.0 bugs that were fixed in the Visual Studio 97
	Service Pack 2, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q171554 : INFO: Visual Basic 5.0 Fixes in Visual Studio 97 Service Pack 2
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new ActiveX Document DLL project. UserDocument1 is created by
	  default.
	
	2. Add a CommandButton (Command1) to UserDocument1.
	
	3. Add the following code to the Click event of Command1:
	
	        Private Sub Command1_Click()
	           Dim x As New Form1
	           x.Show vbModal
	        End Sub
	
	4. Add a Form (Form1) to the project.
	
	5. Add the following code to the Paint event of Form1:
	
	        Private Sub Form_Paint()
	           Unload Me
	        End Sub
	
	6. Press the F5 key to run the project.
	
	7. Load the UserDocument1.vbd from the Visual Basic installation directory into
	  Internet Explorer.
	
	8. Click on Command1 button.
	
	Additional query words: kbDSupport
	
	======================================================================
	Keywords          : kbVBp500 kbVS97sp2fix kbGrpDSVB kbvbp500sp2fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbZNotKeyword3
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
