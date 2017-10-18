---
layout: page
title: "Q106530: FIX: F4201 on Entry with Attribute [VALUE]"
permalink: kb/106/Q106530/
---

## Q106530: FIX: F4201 on Entry with Attribute [VALUE]

	Article: Q106530
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0,1.0a,4.0,4.01,4.1,5.0,5.1
	Operating System(s): 
	Keyword(s): kberrmsg kbFortranPS kbLangFortran
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN PowerStation for MS-DOS, versions 1.0, 1.0a 
	- Microsoft Fortran Powerstation 32 for Windows NT, version 1.0 
	- Microsoft FORTRAN Compiler for MS-DOS, versions 4.0, 4.01, 4.1, 5.0, 5.1 
	- Microsoft FORTRAN compiler for OS/2, versions 4.1, 5.0, 5.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a subroutine or an external function with entry points has an argument
	passed by value, the compiler generates the following warning message for every
	ENTRY statement in the code:
	
	  warning F4201: ENTRY : formal argument : attribute VALUE : mismatch
	
	RESOLUTION
	==========
	
	This warning message can be ignored, provided that there is no other problem
	with the ENTRY statements.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was fixed in FORTRAN PowerStation
	32, version 4.0.
	
	MORE INFORMATION
	================
	
	The following sample code produces the F4201 warning message on compilation, but
	will properly execute to yield correct results:
	
	  15
	  35
	  63
	
	Sample Code
	-----------
	
	  C No compiler options required
	
	        subroutine x(i)
	        integer i[value]
	        print *, i*3
	
	        entry y(i)
	        print *, i*7
	        end
	
	        program test
	        integer j
	        j = 5
	        call x(j)
	        j = 9
	        call y(j)
	
	        end
	
	Additional query words: 1.00 1.00a 5.10
	
	======================================================================
	Keywords          : kberrmsg kbFortranPS kbLangFortran 
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword2 kbZNotKeyword3 kbFORTRAN510DOS kbFORTRAN400DOS kbFORTRAN401DOS kbFORTRAN500DOS kbFORTRAN410DOS kbFORTRAN500OS2 kbFORTRAN510OS2 kbFORTRAN410OS2 kbFORTRANPower32100NT kbFORTRANPower100DOS kbFORTRANPower100aDOS
	Version           : :1.0,1.0a,4.0,4.01,4.1,5.0,5.1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
