---
layout: page
title: "Q120218: FIX: Warning C4056 Generated When /Op Option is Used"
permalink: kb/120/Q120218/
---

## Q120218: FIX: Warning C4056 Generated When /Op Option is Used

	Article: Q120218
	Product(s): Microsoft C Compiler
	Version(s): 2.0,4.0,4.1,4.2,5.0
	Operating System(s): 
	Keyword(s): kbHWMAC kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600fix
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 4.0, 4.1, 4.2, 5.0 
	   - Microsoft Visual C++, Macintosh Cross-Development Addon, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following warning is generated when the sample code listed in the More
	Information section below is compiled with the option /Op and the warning level
	set to 3 or higher:
	
	  warning C4056 : overflow in floating-point constant arithmetic
	
	RESOLUTION
	==========
	
	Ignore the warning as it is generated incorrectly. Alternatively, you can
	suppress the warning by using the /W2 option.
	
	STATUS
	======
	
	This bug was corrected in Microsoft Visual C++, version 6.0.
	
	MORE INFORMATION
	================
	
	Sample Code to Reproduce Problem
	--------------------------------
	
	  /* Compile options needed:   /Op /W3
	  */ 
	
	  void main()
	  {
	     double i;
	     i = -1.0;
	  }
	
	Additional query words: 9.00 10.00 10.10 10.20
	
	======================================================================
	Keywords          : kbHWMAC kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600fix 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :2.0,4.0,4.1,4.2,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
