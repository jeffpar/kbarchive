---
layout: page
title: "Q155385: PRB: DEBUGOUT and ASSERT Commands Do Not Function in .exe"
permalink: kb/155/Q155385/
---

## Q155385: PRB: DEBUGOUT and ASSERT Commands Do Not Function in .exe

	Article: Q155385
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp500 kbvfp600
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The new debugging tools in Visual FoxPro version 5.0 and 6.0 do not function
	when used in an .exe file. The .exe file ignores the DEBUGOUT command in 5.0,
	5.0a, and 6.0. The ASSERT command generates a "Feature not available" error
	inside of an .exe in Visual FoxPro 5.0, and is ignored in Visual FoxPro 5.0a and
	6.0.
	
	CAUSE
	=====
	
	Because the debugger is not distributed and does not function in a compiled
	.exe, the functions that use the debugger also do not function within an .exe.
	
	STATUS
	======
	
	This problem is by design and will not be changed.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
