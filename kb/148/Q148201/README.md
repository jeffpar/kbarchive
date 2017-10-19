---
layout: page
title: "Q148201: BUG: Unused Local Variables Are Unavailable in the Debugger"
permalink: /kb/148/Q148201/
---

## Q148201: BUG: Unused Local Variables Are Unavailable in the Debugger

	Article: Q148201
	Product(s): Microsoft Fortran Compiler
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbFortranPS kbLangFortrankbbuglist
	Last Modified: 03-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fortran PowerStation for Windows 95 and Windows NT, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Local variables flagged by the compiler as unused become unavailable in the
	debugger even if they have been initialized with the DATA statement.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Using Developer Studio build the following sample code. After building the
	project, start a debugging session. On the Build menu, click Debug, and then
	click Step Into. The variables "A" and "B" are not displayed in the locals
	window even though they have been initialized with the integer values of "1" and
	"2" respectively.
	
	Sample Code
	-----------
	
	  C Compile options needed: /Zi
	
	        INTEGER A, B
	
	        DATA A / 1 / 
	        DATA B / 2 / 
	
	        PRINT *, 'HELLO'
	        END
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbFortranPS kbLangFortran kbbuglist
	Technology        : kbAudDeveloper kbPTProdChange kbFortranSearch kbFORTRANPower400NT
	Version           : :4.0
	
	=============================================================================
	
