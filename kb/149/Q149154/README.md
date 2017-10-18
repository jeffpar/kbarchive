---
layout: page
title: "Q149154: BUG: Memory Leak Caused by Formatted Internal WRITE"
permalink: kb/149/Q149154/
---

## Q149154: BUG: Memory Leak Caused by Formatted Internal WRITE

	Article: Q149154
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
	
	Performing a formatted internal WRITE causes a memory leak. A memory leak is
	caused by a program not releasing the memory it allocates.
	
	RESOLUTION
	==========
	
	Use list-directed I/O with an internal WRITE.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	In the following sample code, the memory storage area associated with the
	character string "LLINE" is not released after each internal WRITE.
	Consequently, additional memory must be allocated for each subsequent internal
	WRITE utimately causing all physical and virtual memory to be exhausted.
	
	Sample Code to Illustrate Problem and Workaround
	------------------------------------------------
	
	  ! Compile options needed: none
	
	        PROGRAM TEST
	        INTEGER I
	        CHARACTER LLINE*32
	        DO I=1,1000000
	            WRITE(LLINE, '(I10,E20.5)') I, REAL(I) ! Memory leak here
	  !          WRITE(LLINE, *) I, REAL(I) ! Uncomment this line for workaround
	        END DO
	        END
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbFortranPS kbLangFortran kbbuglist
	Technology        : kbAudDeveloper kbPTProdChange kbFortranSearch kbFORTRANPower400NT
	Version           : :4.0
	
	=============================================================================
	
