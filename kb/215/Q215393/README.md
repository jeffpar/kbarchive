---
layout: page
title: "Q215393: BUG: Code Comments Increase the Size of a Compiled VBCE App"
permalink: kb/215/Q215393/
---

## Q215393: BUG: Code Comments Increase the Size of a Compiled VBCE App

	Article: Q215393
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kbToolkit kbVBp600bug kbOSWinCEsearch kbGrpDSVB
	Last Modified: 16-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual Basic 6.0 
	- Microsoft eMbedded Visual Basic, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Adding comments to a Windows CE project in Visual Basic or eMbedded Visual Basic
	increases the size of the compiled .vb file.
	
	CAUSE
	=====
	
	Comments are included in the compiled VBCE/eVB application to allow the debugger
	to see them.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Windows CE project in either Visual Basic or eMbedded Visual
	  Basic. Form1 is created by default.
	
	2. Note the Local Path setting before clicking OK in the Project Properties
	  dialog box to accept the defaults.
	
	3. From the File menu, select Make Project1.
	
	4. Using Windows Explorer, navigate to the directory noted in the Local Path
	  setting above.
	
	5. Note that the compiled VBCE application is 2K in size.
	
	6. Paste the following code into Form1:
	
	  Private Sub Form_Load()
	      'This is a comment that has been added
	      'to show that adding comments increases
	      'the size of a compiled VBCE application.
	  End Sub
	
	7. From the File menu, select Make Project1.
	
	8. Using Windows Explorer, navigate to the directory noted in the Local Path
	  setting above.
	
	Note that the compiled application is now larger in size.
	
	Additional query words: vbceevb vbce6 wince
	
	======================================================================
	Keywords          : kbToolkit kbVBp600bug kbOSWinCEsearch kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword2 kbVBeMbSearch kbWinCETKVBSearch kbWinCESearch kbVBeMb300
	Version           : :3.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
