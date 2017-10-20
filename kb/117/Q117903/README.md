---
layout: page
title: "Q117903: FIX: Incorrect Floating-Point Calculations with /Ox and /Op"
permalink: /kb/117/Q117903/
---

## Q117903: FIX: Incorrect Floating-Point Calculations with /Ox and /Op

{% raw %}

	Article: Q117903
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN PowerStation for MS-DOS, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The program produces incorrect floating-point results when it is compiled using
	the /Ox and /Op optimizations (or /Oxp).
	
	RESOLUTION
	==========
	
	Do not use both /Ox and /Op when compiling.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in FORTRAN PowerStation for MS-DOS,
	version 1.0. This problem was corrected in the FORTRAN PowerStation for MS-DOS
	maintenance release, version 1.0a.
	
	MORE INFORMATION
	================
	
	FORTRAN PowerStation, version 1.0, can be differentiated from the maintenance
	release, version 1.0a, by invoking the linker. Typing "link32 | more" (without
	the quotation marks) from the \F32\BIN directory will show version 2.8 for
	FORTRAN PowerStation, version 1.0, and will show version 1.0f for the
	maintenance release, version 1.0a.
	
	The following sample program can be used to demonstrate this problem. The correct
	result is:
	
	  2.929688E-03
	  2.929688E-03
	
	Sample Code
	-----------
	
	  C compile options required: /Oxp
	
	     n1 = 1024
	     n2 = 512
	     c = (1./n1)+(1./n2)
	     write (*,*) c
	     write (*,*) (1./n1)+(1./n2)
	     end
	
	Additional query words: 1.00 1.00a buglist1.00 fixlist1.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword3 kbFORTRANPower100DOS
	Version           : :1.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
