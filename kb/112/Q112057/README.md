---
layout: page
title: "Q112057: FIX: F1001 in regasg.c with Adjustable Sized COMPLEX and /4Yb"
permalink: /kb/112/Q112057/
---

## Q112057: FIX: F1001 in regasg.c with Adjustable Sized COMPLEX and /4Yb

{% raw %}

	Article: Q112057
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0,1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN PowerStation for MS-DOS, versions 1.0, 1.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Compiling a routine (that uses adjustable sized COMPLEX arrays in an expression
	with a COMPLEX constant) with the /4Yb (or $debug) option may produce the
	following error with FORTRAN PowerStation 1.0:
	
	  fatal error F1001: INTERNAL COMPILER ERROR
	  (compiler file '@(#)regasg.c:1.25', line 451)
	  Contact Microsoft Product Support Services
	
	Using FORTRAN PowerStation 1.0a, the following error may be produced:
	
	  fatal error F1001: INTERNAL COMPILER ERROR
	  (compiler file '@(#)regasg.c:1.25', line 453)
	  Contact Microsoft Product Support Services
	
	RESOLUTION
	==========
	
	Either use the CMPLX or DCMPLX intrinsic function on the COMPLEX constant, or do
	not compile with extended error handling.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in FORTRAN PowerStation versions
	1.0 and 1.0a for MS-DOS. This problem was corrected in FORTRAN PowerStation 32.
	
	MORE INFORMATION
	================
	
	To demonstrate the problem, compile the sample code below with the Microsoft
	FORTRAN PowerStation:
	
	Sample Code #1
	--------------
	
	  $debug
	        SUBROUTINE FILTER(FFT1,FFT2,N)
	        complex fft1(n),fft2(n)
	        fft1(n)=(0,1)*fft2(n)
	        return
	        end
	
	The internal compiler error can be alleviated by using the CMPLX intrinsic
	function as shown in the example below:
	
	Sample Code #2
	--------------
	
	  $debug
	        SUBROUTINE FILTER(FFT1,FFT2,N)
	        complex fft1(n),fft2(n)
	        fft1(n)=CMPLX(0,1)*fft2(n)
	        return
	        end
	
	Additional query words: 1.00 1.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword3 kbFORTRANPower100DOS kbFORTRANPower100aDOS
	Version           : :1.0,1.0a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
