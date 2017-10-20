---
layout: page
title: "Q118392: BUG: Incorrect F2370 or C1900 when Compiling with /4Y"
permalink: /kb/118/Q118392/
---

## Q118392: BUG: Incorrect F2370 or C1900 when Compiling with /4Y

{% raw %}

	Article: Q118392
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0,1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN PowerStation for MS-DOS, versions 1.0, 1.0a 
	- Microsoft Fortran Powerstation 32 for Windows NT, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you compile a program using /4Yv that has errors in a declaration, one of
	the following error messages may be displayed:
	
	- 
	
	  an infinite number of error F2370: "length specification illegal"
	
	-or-
	
	- 
	
	  fatal error C1900: "Il mismatch between 'P1' version '0' and 'P2' version
	  '19930414'"
	
	RESOLUTION
	==========
	
	Compile the code without using /4Yv to get a list of error messages. Correct the
	errors in the declaration(s). (The corrected code may be compiled using /4Yv.)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the FORTRAN PowerStation for MS-
	DOS, versions 1.0 and 1.0a, and the Microsoft FORTRAN PowerStation 32 for
	Windows NT, version 1.0. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	To demonstrate the problem, compile the sample code using the option /4Yv. The
	following error message will be displayed in a continuous loop:
	
	  error F2370: length specification illegal
	
	To fix the problem, compile the sample code using no options. The following error
	messages will be displayed:
	
	  error F2362: integer constant expression expected
	
	  error F2830: END missing
	
	Sample Code
	-----------
	
	  C Compile options needed: /4Yv
	
	        parameter (size=12)
	        character*(size) ch
	
	Additional query words: 1.00 1.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword2 kbZNotKeyword3 kbFORTRANPower32100NT kbFORTRANPower100DOS kbFORTRANPower100aDOS
	Version           : :1.0,1.0a
	
	=============================================================================
	

{% endraw %}
