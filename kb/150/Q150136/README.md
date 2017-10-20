---
layout: page
title: "Q150136: BUG: SPREAD() Intrinsic Function Application Error"
permalink: /kb/150/Q150136/
---

## Q150136: BUG: SPREAD() Intrinsic Function Application Error

{% raw %}

	Article: Q150136
	Product(s): Microsoft Fortran Compiler
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbFortranPS kbLangFortrankbbuglist
	Last Modified: 02-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fortran PowerStation for Windows 95 and Windows NT, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the SPREAD() intrinsic function to copy an array into an array one
	dimension larger, you may find that some large arrays cause the following
	application error at run-time:
	
	Under Windows 95:
	
	  This program has performed an illegal operation and will be shut down.
	  If the problem persists, contact the program vendor.
	
	  Details:
	
	  <program> caused an invalid page fault in module <program.exe> at
	  0137:004013d7
	
	Under Windows NT version 3.51:
	
	  The instruction at "0x00000000" referenced memory at "0x00000000". The memory
	  could not be "read".
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Sample Code to Illustrate Problem
	---------------------------------
	
	  ! Compile options needed: none
	        INTEGER IRESULT(4,4,4,4,4,4)
	        INTEGER ISOURCE(4,4,4,4,4)
	        IDIM = 1
	        NCOPIES = 1
	        IRESULT = SPREAD(ISOURCE, IDIM, NCOPIES)
	        END
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbFortranPS kbLangFortran kbbuglist
	Technology        : kbAudDeveloper kbPTProdChange kbFortranSearch kbFORTRANPower400NT
	Version           : :4.0
	
	=============================================================================
	

{% endraw %}
