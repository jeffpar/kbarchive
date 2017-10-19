---
layout: page
title: "Q105937: FIX: /4Ys or &#36;STRICT on Character Functions Causes F2368"
permalink: /kb/105/Q105937/
---

## Q105937: FIX: /4Ys or &#36;STRICT on Character Functions Causes F2368

	Article: Q105937
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
	
	Compiling valid ANSI 77 FORTRAN code that contains character functions with the
	/4Ys compiler option or $STRICT metacommand incorrectly generates an F2368 error
	message.
	
	RESOLUTION
	==========
	
	A possible workaround is to use Microsoft FORTRAN compiler version 5.0 or 5.1 to
	check for ANSI conformance. Avoiding /4Ys or $STRICT for problematic cases is
	also a workaround.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in FORTRAN PowerStation version
	1.0. This problem has been resolved with FORTRAN PowerStation maintenance
	release version 1.0a for MS-DOS.
	
	MORE INFORMATION
	================
	
	FORTRAN PowerStation version 1.0 can be differentiated from the maintenance
	release version 1.0a by invoking the linker. Typing "link32 | more" (without the
	quotation marks) from \F32\BIN directory will show version 2.8 for FORTRAN
	PowerStation version 1.0, and it will show version 1.0f for the maintenance
	release version 1.0a.
	
	The following sample code demonstrates the problem in version 1.00:
	
	Sample Code
	-----------
	
	  C Compile options needed: /4Ys or have $STRICT metacommand in the code
	
	        character*1 function test
	        test = 'test'
	        end
	
	  C When compiled with /4Ys, the above code causes:
	  C    error F2368: 0000slen : truncated to 6 characters
	
	Additional query words: 1.00 buglist1.00 fixlist1.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword3 kbFORTRANPower100DOS kbFORTRANPower100aDOS
	Version           : :1.0,1.0a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
