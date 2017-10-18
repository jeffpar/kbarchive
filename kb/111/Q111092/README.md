---
layout: page
title: "Q111092: BUG: DIMENSION Statement Out of Order Causes D2030 Error"
permalink: kb/111/Q111092/
---

## Q111092: BUG: DIMENSION Statement Out of Order Causes D2030 Error

	Article: Q111092
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0,1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN PowerStation for MS-DOS, versions 1.0, 1.0a 
	- Microsoft Fortran Powerstation 32 for Windows NT, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Compiling a file that contains any executable statement before a DIMENSION
	statement may produce the following errors under Windows NT:
	
	  error F2836: statement out of order
	  Command Line Error D2030: INTERNAL COMPILER ERROR
	
	Under straight MS-DOS, the following errors may be produced:
	
	  error F2836: statement out of order
	  DOSXNT : fatal error DX1020: unhandled exception: Page fault;
	
	The F2836 error is correctly being generated in both cases.
	
	RESOLUTION
	==========
	
	Fixing the "statement out of order" problem also alleviates the internal
	compiler and page fault errors.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in FORTRAN PowerStation 32 for
	Windows NT and MS-DOS, version 1.0 and 1.0A. We are researching this problem and
	will post new information here in the Microsoft Knowledge Base as it becomes
	available.
	
	MORE INFORMATION
	================
	
	The following sample illustrates the problem:
	
	Sample Code
	-----------
	
	  c Compile options needed: none
	  c
	        continue
	        dimension p(10)
	        write(*,*) (p(j),j=1,10)
	        end
	
	Additional query words: 1.00 1.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword2 kbZNotKeyword3 kbFORTRANPower32100NT kbFORTRANPower100DOS kbFORTRANPower100aDOS
	Version           : :1.0,1.0a
	
	=============================================================================
	
