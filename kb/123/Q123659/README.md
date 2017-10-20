---
layout: page
title: "Q123659: BUG: Divide by Zero Error Compiling an Empty Structure"
permalink: /kb/123/Q123659/
---

## Q123659: BUG: Divide by Zero Error Compiling an Empty Structure

{% raw %}

	Article: Q123659
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
	
	When you compile a program that contains an empty structure declaration, it
	fails giving the following error messages:
	
	Under MS-DOS:
	
	  error F2385: EMPTY : STRUCTURE has no elements
	  DOSXNT : fatal error DX1020: unhandled exception: Divide by zero exception
	
	Under Windows NT:
	
	  f13232.exe - Application error
	  The exception Integer division by zero (0Xc0000094) occurred in the
	  application at location 0x0001a2e9.
	
	RESOLUTION
	==========
	
	Do not use an empty structure declaration.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Sample Code to Reproduce Problem
	--------------------------------
	
	  C Compile options needed: none
	     structure /empty/ 
	     end structure
	     end
	
	Additional query words: 1.00 1.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword2 kbZNotKeyword3 kbFORTRANPower32100NT kbFORTRANPower100DOS kbFORTRANPower100aDOS
	Version           : :1.0,1.0a
	
	=============================================================================
	

{% endraw %}
