---
layout: page
title: "Q155173: PRB: Undocumented Compiler Switches /QIfdiv, /QIf, and /QI6"
permalink: kb/155/Q155173/
---

## Q155173: PRB: Undocumented Compiler Switches /QIfdiv, /QIf, and /QI6

	Article: Q155173
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), included with:
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, versions 4.0, 4.1, 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Visual C++ version 4.0, the compiler switches /QIfdiv, /Qif, and /QI6 are not
	documented. In Visual C++ version 4.1, the switch /QIfdiv is now documented.
	Below is a list of the default behavior of each switch in Visual C++ version 4.0
	and version 4.1.
	
	MORE INFORMATION
	================
	
	/QIfdiv
	
	  This switch is turned on by default in VC 4.0. It is turned off (/QIfdiv-) by
	  default in VC 4.1. /QIfdiv is a workaround for the Pentium floating-point
	  bug. /QIfdiv causes emulator functions to be used.
	
	/QIf
	
	  This switch is unchanged. /QIf forces the .debug$F FPO debug information to
	  be output always. This allows a backtrace of the stack even when some of the
	  kernel stack has been paged out.
	
	/QI6
	
	  This was an undocumented switch to work around P6 problems and it was off by
	  default in VC 4.0. This switch was removed in VC 4.1 but its functionality is
	  still there and is turned on by default.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : winnt:
	Issue type        : kbprb
	
	=============================================================================
	
