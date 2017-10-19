---
layout: page
title: "Q189774: BUG: Repeated Outputs to _SCREEN Distorts _SCREEN.Picture"
permalink: /kb/189/Q189774/
---

## Q189774: BUG: Repeated Outputs to _SCREEN Distorts _SCREEN.Picture

	Article: Q189774
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Repeated output to _SCREEN might distort the _SCREEN.Picture image.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run the following code in the Command window:
	
	        _SCREEN.Picture=HOME()+'Fox.bmp'
	
	2. Type the following in the Command window:
	
	  " DISPLAY STATUS" (without the quotation marks)
	
	3. Press Enter, and then press Escape (Esc).
	
	4. Repeat steps 2 and 3 five times.
	
	5. Type the following in the Command window:
	
	  " Clear" (without the quotation marks)
	
	RESULT: The background image in the upper left-hand portion of the Visual FoxPro
	desktop is distorted.
	
	Additional query words: kbVFp600bug kbVFp500bug kbVFp500abug kbXBase
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
