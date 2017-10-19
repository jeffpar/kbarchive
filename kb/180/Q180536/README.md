---
layout: page
title: "Q180536: BUG: Right-Justified Label Caption Is Aligned Improperly"
permalink: /kb/180/Q180536/
---

## Q180536: BUG: Right-Justified Label Caption Is Aligned Improperly

	Article: Q180536
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 2.11,3.0
	Operating System(s): 
	Keyword(s): kbToolkit kbVBp kbVBp500 kbVBp600bug kbOSWinCEsearch kbOSWinCE100 kbGrpDSVB
	Last Modified: 21-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual Basic 6.0, used with:
	   - Microsoft Windows CE version 2.11 for the Handheld PC 
	   - Microsoft Windows CE version 2.11 for the Palm-size PC 
	- Microsoft eMbedded Visual Basic, version 3.0, used with:
	   - Microsoft Windows CE version 2.11 for the Handheld PC 
	   - Microsoft Windows CE version 2.11 for the Palm-size PC 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Label control's Alignment property is set to "1 - Right Justify," and the
	BorderStyle property is set to "1 - Fixed Single," the caption is displayed too
	far to the right, resulting in the last character not being visible.
	
	RESOLUTION
	==========
	
	Add two spaces to the end of the caption to avoid this problem.
	
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
	
	2. Add a Label (Label1) to Form1.
	
	3. Set the Caption property of Label1 to "Hello World."
	
	4. Set the BorderStyle property of Label1 to "1 - Fixed Single."
	
	5. Set the Alignment property of Label1 to "1 - Right Justify."
	
	6. Press F5 to run the project and note how the Label's caption is truncated.
	
	Additional query words: VBCE VBCE6 evb
	
	======================================================================
	Keywords          : kbToolkit kbVBp kbVBp500 kbVBp600bug kbOSWinCEsearch kbOSWinCE100 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbWinCETKVBSearch kbWinCESearch
	Version           : :2.11,3.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
