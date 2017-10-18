---
layout: page
title: "Q119504: PRB: Result Differs Between 16-bit and 32-bit _gcvt()"
permalink: kb/119/Q119504/
---

## Q119504: PRB: Result Differs Between 16-bit and 32-bit _gcvt()

	Article: Q119504
	Product(s): Microsoft C Compiler
	Version(s): 
	Operating System(s): 
	Keyword(s): kbCRT kbVC
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C Run-Time (CRT), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition 
	   - Microsoft Visual C++, 32-bit Professional Edition 
	   - Microsoft Visual C++, 32-bit Learning Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the following test case, 32-bit _gcvt() returns a different value than
	16-bit _gcvt():
	
	     double r1 = 1.797693134862315E+308;
	     char buf[40];
	
	     _gcvt(r1, 15, buf);
	
	The 16-bit _gcvt() rounds the value to 1.79769313486232E+308, but the 32-bit
	_gcvt() truncates the value to 1.79769313486231E+308.
	
	CAUSE
	=====
	
	The low-level floating-point-to-string conversion routines were completely
	rewritten for Win32. The 32-bit output routines use an internal 12-byte
	floating-point format for the intermediate values and a new conversion
	algorithm. The specific value used in the test case mentioned in the "SYMPTOMS"
	section is at the limit of type "double," and the new conversion routine
	exhibits this problem when converting the value to a 12-byte value. The
	conversion routine yields a mantissa string of 79769313486231490 instead of
	797693134862315, which causes the rounding problems in this particular case.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCRT kbVC 
	Technology        : kbVCsearch kbAudDeveloper kbCRT
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
