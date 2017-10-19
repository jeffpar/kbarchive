---
layout: page
title: "Q242998: PRB: Beautify Changes the Case of Multi-Line Strings"
permalink: /kb/242/Q242998/
---

## Q242998: PRB: Beautify Changes the Case of Multi-Line Strings

	Article: Q242998
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbMiscTools kbvfp500a kbvfp600 kbGrpDSFox kbDSupport
	Last Modified: 13-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After running the Beautify Application, string expressions that span multiple
	lines are changed to either upper or lower case. This behavior occurs when the
	Capitalization for Symbols option in the Beautify Options dialog box is set to
	either "UPPERCASE" or "lowercase".
	
	RESOLUTION
	==========
	
	When running the Beautify Application, set the Capitalization for Symbols option
	in the Beautify Options dialog box to either "Match first occurrence" or "No
	change."
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a program file named Test.prg using the following code:
	
	  multi_line_value  = "This should be " + ;
	     "Mixed Case"
	
	2. From the Tools menu, select Beautify.
	
	3. In the Beautify Options dialog box, set the Capitalization for Symbols option
	  to UPPERCASE.
	
	4. Click the Run command button in the Beautify Options dialog box. Note that
	  after the Beautify application runs, the "Mixed Case" portion of the string
	  is changed to "MIXED CASE."
	
	5. From the Tools menu, select Beautify.
	
	6. In the Beautify Options dialog box, set the Capitalization for Symbols option
	  to "lowercase."
	
	7. Click the Run command button in the Beautify Option dialog box. Note that
	  after the Beautify application runs, the "MIXED CASE" portion of the string
	  is changed to "mixed case."
	
	Additional query words: kbDSE
	
	======================================================================
	Keywords          : kbMiscTools kbvfp500a kbvfp600 kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
