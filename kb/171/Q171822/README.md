---
layout: page
title: "Q171822: FIX: Adding Routine to UserControl in Break Mode Causes Crash"
permalink: /kb/171/Q171822/
---

## Q171822: FIX: Adding Routine to UserControl in Break Mode Causes Crash

	Article: Q171822
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
	
	Adding a routine to UserControl while in Break Mode may result in the following
	error:
	
	  "VB5 caused an invalid page fault in module VB5.EXE at <address>"
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Studio 97 Service
	Pack 2.
	
	For more information on the Visual Studio 97 Service Pack 2, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q170365 INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	For a list of the Visual Basic 5.0 bugs that were fixed in the Visual Studio 97
	Service Pack 2, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q171554 INFO: Visual Basic 5.0 Fixes in Visual Studio 97 Service Pack 2
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	This bug is spurious and may be difficult to reproduce.
	
	1. Start a new Standard Exe project.
	
	2. Select File | Add Project to add an ActiveX Control project. UserControl1 is
	  created by default.
	
	3. Select Project | Add User Control to add a second UserControl (UserControl2)
	  to the ActiveX Control project.
	
	4. Close UserControl2's design window.
	
	5. Place an instance of UserControl2(UserControl21) on UserControl1.
	
	6. Add the following code to UserControl1's code window:
	
	        Private Sub UserControl_Initialize()
	           UserControl21.Test = True
	        End Sub
	
	7. Close UserControl1's code and design windows.
	
	8. Place an instance of UserControl1 on the Standard Exe's Form1.
	
	9. Click Ok to the method or data member not found error. You now in break mode.
	
	10. Open the UserControl2's code window.
	
	11. Type in the following code and hit <Enter>.
	
	        Public Function Test ()
	
	The result is that Visual Basic may crash.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp500 kbVS97sp2fix kbGrpDSVB kbvbp500sp2fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbZNotKeyword3
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
