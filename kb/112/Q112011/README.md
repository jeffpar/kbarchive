---
layout: page
title: "Q112011: FIX: Access Violation with Pass by Value and -Ox -G3"
permalink: /kb/112/Q112011/
---

## Q112011: FIX: Access Violation with Pass by Value and -Ox -G3

	Article: Q112011
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbCompiler kbFL32 kbFortranPSkbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fortran Powerstation 32 for Windows NT, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using FORTRAN PowerStation for Windows NT to compile subprograms that pass
	arguments by value (either by using [C] or [VALUE]) may produce an "access
	violation" application error message box when compiling with both -G3 and - Ox.
	
	CAUSE
	=====
	
	This compile-time error appears to be caused by either passing mismatched
	arguments by value, or by passing expressions by value in the argument list.
	
	RESOLUTION
	==========
	
	When using -G3 and -Ox and passing by value, always match argument lengths and
	types and do not pass expressions.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft FORTRAN PowerStation
	for Windows NT, version 1.0. This problem was corrected in FORTRAN PowerStation
	32, version 4.0.
	
	MORE INFORMATION
	================
	
	The following sample passes expressions by value, and will cause the compiler to
	generate an access violation when compiling with -G3 -Ox:
	
	Sample Code
	-----------
	
	  c Compile options needed: -G3 -Ox
	  c
	          subroutine s[c](rr,r4,r8,rt,rs)
	          real*8 r8
	          write(*,*) rr, r4, r8, rt,rs
	          end
	
	          real*8 r8 /0.d0/ 
	          r4 = 0.
	          rr = 0.
	          rs = 0.
	          rt = 0.
	          call s(rr, r4,     r8,     rt, rs)
	          call s(rr, r4+1.0, r8-1.0, rt, rs)
	          end
	
	Additional query words: 1.00 Dr. Watson
	
	======================================================================
	Keywords          : kbCompiler kbFL32 kbFortranPS kbbuglist kbfixlist
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword2 kbFORTRANPower32100NT
	Version           : :1.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
