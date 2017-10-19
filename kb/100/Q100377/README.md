---
layout: page
title: "Q100377: FIX: F1001: confold.c Line 253, Negative Integer Exponent"
permalink: /kb/100/Q100377/
---

## Q100377: FIX: F1001: confold.c Line 253, Negative Integer Exponent

	Article: Q100377
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0,1.0a
	Operating System(s): 
	Keyword(s): kberrmsg kbCompiler kbFL32 kbFortranPS
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN PowerStation for MS-DOS, versions 1.0, 1.0a 
	- Microsoft Fortran Powerstation 32 for Windows NT, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An attempt to compile an application fails and Microsoft FORTRAN PowerStation
	version 1.0 for MS-DOS displays the following message:
	
	  fatal error F1001: INTERNAL COMPILER ERROR
	  (compiler file '@(#)confold.c:1.144', line 253)
	  Contact Microsoft Product Support Services
	
	FORTRAN PowerStation version 1.0a for MS-DOS displays the following error
	message:
	
	  fatal error F1001: INTERNAL COMPILER ERROR
	  (compiler file '@(#)confold.c:1.144', line 254)
	  Contact Microsoft Product Support Services
	
	CAUSE
	=====
	
	The command line specifies the /Ox optimization and the code contains an
	expression that computes a negative integer power of a constant integer or of an
	integer expression. The error above occurs when the compiler processes the unary
	minus operator in an integer exponentiation expression.
	
	RESOLUTION
	==========
	
	There are two methods to work around this problem:
	
	- Modify the compiler command line to specify the /Oxp compiler option switch.
	
	- Modify the source code to remove the unary minus operator from integer
	  expressions used as exponents. Assign the exponent to a temporary variable
	  and negate the value. Then specify the temporary as the exponent.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was fixed in FORTRAN PowerStation
	32, version 4.0.
	
	MORE INFORMATION
	================
	
	The following sample code demonstrates this problem:
	
	Sample Code #1
	--------------
	
	  c Compiler options needed: /Ox
	
	        program test
	        integer j
	        real    x
	
	        j = 1
	        x = 2**(-j)
	        print *, x
	        end
	
	The following sample code demonstrates one method to work around this problem:
	
	Sample Code #2
	--------------
	
	  c Compile options needed: /Ox
	
	        program test
	        integer j
	        real    x
	
	        j = 1
	        j = -j      ! Negation occurs here.
	        x = 2**(j)
	        print *, x
	        end
	
	Additional query words: 1.00 1.00a
	
	======================================================================
	Keywords          : kberrmsg kbCompiler kbFL32 kbFortranPS 
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword2 kbZNotKeyword3 kbFORTRANPower32100NT kbFORTRANPower100DOS kbFORTRANPower100aDOS
	Version           : :1.0,1.0a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
