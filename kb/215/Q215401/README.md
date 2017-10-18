---
layout: page
title: "Q215401: BUG: Cannot Use a Constant to Define the Size of Array in VBCE"
permalink: kb/215/Q215401/
---

## Q215401: BUG: Cannot Use a Constant to Define the Size of Array in VBCE

	Article: Q215401
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kbToolkit kbVBp500bug kbVBp600bug kbOSWinCEsearch kbGrpDSVB
	Last Modified: 16-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual Basic 6.0 
	- Microsoft eMbedded Visual Basic, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to use a defined constant as the size of an array, the
	following compile error results:
	
	  Compile Error: Expected integer constant
	
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
	
	2. Paste the following code into Form1:
	
	      Const cbFormatsNum = 14
	      Dim cbFormats(cbFormatsNum)
	
	3. Run the project.
	
	The error message mentioned in the "Symptoms" section occurs.
	
	Additional query words: vbce vbce6 wce evb
	
	======================================================================
	Keywords          : kbToolkit kbVBp500bug kbVBp600bug kbOSWinCEsearch kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword2 kbVBeMbSearch kbWinCETKVBSearch kbWinCESearch kbVBeMb300
	Version           : :3.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
