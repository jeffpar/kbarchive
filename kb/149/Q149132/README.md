---
layout: page
title: "Q149132: BUG: Signed 4-byte Integer Overlow Not Caught by the Compiler"
permalink: /kb/149/Q149132/
---

## Q149132: BUG: Signed 4-byte Integer Overlow Not Caught by the Compiler

	Article: Q149132
	Product(s): Microsoft Fortran Compiler
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbFortranPS kbLangFortrankbbuglist
	Last Modified: 03-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fortran PowerStation for Windows 95 and Windows NT, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The compiler does not catch or reports incorrect information for signed
	four-byte integers that are one value greater than the allowable range for these
	numerical types. For signed four-byte integers, the allowable range is
	-2147483648 to 2147483647.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	In the following sample code, the compiler does not catch and report the literal
	value of 2147483648 as an overflow error. When the compiler catches the out of
	range literal value of -2147483649, it incorrectly reports it as positive.
	
	Sample Code
	-----------
	
	  C Compile options needed: none
	
	        INTEGER*4 MYLONG
	
	        MYLONG =  2147483647    ! OK
	        MYLONG =  2147483648    ! out of range - not caught
	        MYLONG =  2147483647+1  ! out of range - caught
	
	        MYLONG = -2147483648    ! OK
	        MYLONG = -2147483649    ! out of range - caught reported positive
	        MYLONG = -2147483648-1  ! out of range - caught
	
	        WRITE(*,*) MYLONG
	
	        END
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbFortranPS kbLangFortran kbbuglist
	Technology        : kbAudDeveloper kbPTProdChange kbFortranSearch kbFORTRANPower400NT
	Version           : :4.0
	
	=============================================================================
	
