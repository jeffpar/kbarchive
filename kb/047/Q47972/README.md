---
layout: page
title: "Q47972: FIX: F1001: srclist.c:1.59, Line 1153, Invalid COMMON in SAVE"
permalink: /kb/047/Q47972/
---

## Q47972: FIX: F1001: srclist.c:1.59, Line 1153, Invalid COMMON in SAVE

	Article: Q47972
	Product(s): Microsoft Fortran Compiler
	Version(s): 4.0,4.01,4.1,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN compiler for OS/2, versions 4.0, 4.01, 4.1, 5.0 
	- Microsoft FORTRAN Compiler for MS-DOS, versions 4.0, 4.01, 4.1, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An attempt to compile an application fails and the compiler generates the
	following message:
	
	  fatal error F1001: Internal Compiler Error
	  (compiler file '@(#)srclist.c:1.59', line 1153)
	
	CAUSE
	=====
	
	The application specifies a non-existent COMMON block in a SAVE statement and
	the compiler command line specifies the /F2 compiler option switch.
	
	RESOLUTION
	==========
	
	To correct this problem, remove the name of the undeclared COMMON block from
	SAVE statement.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in FORTRAN version 5.0 for MS-DOS
	and OS/2. This problem was corrected in FORTRAN version 5.1 for MS-DOS and OS/2.
	
	MORE INFORMATION
	================
	
	The following code example demonstrates this problem.
	
	Sample Code
	-----------
	
	  C Compile options needed: None
	
	        SUBROUTINE SUBR()
	          SAVE /C1/, /TEST/ 
	          COMMON /C1/ I, J, K
	        END
	
	To correct this error, remove "/test/" from the second line. If a subroutine and
	a COMMON block have the same name and the compiler command line specifies the
	/Fs compiler option switch, the following error occurs:
	
	  fatal error F1001: Internal Compiler Error
	  (compiler file '@(#)p3io.c:1.93',line 605)
	
	Additional query words: 4.00 4.01 4.10 5.00 buglist5.00 fixlist5.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword3 kbFORTRAN400DOS kbFORTRAN401DOS kbFORTRAN500DOS kbFORTRAN410DOS kbFORTRAN500OS2 kbFORTRAN400OS2 kbFORTRAN410OS2 kbFORTRAN401OS2
	Version           : :4.0,4.01,4.1,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
