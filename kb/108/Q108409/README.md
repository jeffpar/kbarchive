---
layout: page
title: "Q108409: BUG: Access Violation/Hang on Divide by Zero with Intrinsic"
permalink: /kb/108/Q108409/
---

## Q108409: BUG: Access Violation/Hang on Divide by Zero with Intrinsic

	Article: Q108409
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kberrmsg kbLangFortran
	Last Modified: 02-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fortran Powerstation 32 for Windows NT, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error may not be produced when a divide by zero exception
	involving an intrinsic function occurs at run time:
	
	  run-time error M6103: MATH
	  floating-point error: divide by 0
	
	If such a program is compiled with the -Ox option, a Dr. Watson "Application
	Error" message box specifying "Exception: access violation" may be generated.
	Otherwise, the application may hang.
	
	The following occurs using Fortran PowerStation 32, version 4.0:
	
	1. Using the -Ox compile option causes an Application Error at run-time.
	
	2. Using no compile options, the following appropriate run-time error is
	  generated:
	
	  run-time error M6103: MATH
	  - floating-point error: divide by zero
	
	CAUSE
	=====
	
	This unexpected behavior occurs when the divide by zero exception occurs in the
	argument list of the SIN, COS, or SQRT intrinsic functions. ABS, EXP, and TAN
	also produce incorrect behavior that is slightly different from the behavior
	mentioned above.
	
	RESOLUTION
	==========
	
	Explicitly check denominators in arguments to the SIN, COS, TAN, ABS, EXP, or
	SQRT intrinsic function for zero values before performing a divide operation.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The intrinsic function ABS generates the appropriate run-time error regardless
	of optimization.
	
	The intrinsic function EXP generates the appropriate run-time error with -Ox, and
	hangs otherwise.
	
	The intrinsic function TAN returns 0 (zero) with -Ox, and hangs otherwise. For
	this particular function, the compiler may generate the following warning when
	compiling with /Ox:
	
	  warning F4723: potential divide by 0
	
	The following sample code illustrates the symptoms described above:
	
	Sample Code
	-----------
	
	  C Compile options needed: -Ox causes an Application Error to occur
	  C Compile options needed: none causes the application to hang
	
	        a = 0.
	        b = 1.
	        write (*,*) a,b !no effect when commented out
	        c= SQRT(b/a) !GPF here
	        write (*,*) a,b,c  !no effect when commented out
	        end
	
	Additional query words: 1.00 4.00 lock halt gp-fault
	
	======================================================================
	Keywords          : kberrmsg kbLangFortran 
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword2 kbFORTRANPower32100NT
	Version           : :1.0
	
	=============================================================================
	
