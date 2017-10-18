---
layout: page
title: "Q189775: BUG: Watch/Locals Windows Truncate Char. Variables at CHR(0)"
permalink: kb/189/Q189775/
---

## Q189775: BUG: Watch/Locals Windows Truncate Char. Variables at CHR(0)

	Article: Q189775
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you look at the value of a character-type variable that contains an embedded
	CHR(0) (that is, a NULL value) in the Visual FoxPro Debugger Watch or Debugger
	Locals window, the variable is truncated at the point where the CHR(0) occurs.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Type the following in the Command Window:
	
	        gcX = "xxx"+CHR(0)+"yyy"
	        DEBUG
	
	2. Look at gcX in the Debugger Locals window, or type gcX in the Debugger Watch
	  window and look at its value there.
	
	RESULT: gcX's displayed value is "xxx" and LEN(gcX) = 7.
	
	Additional query words: kbVFp500abug kbTools kbXBase
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : WINDOWS:5.0,5.0a
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
