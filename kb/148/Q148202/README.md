---
layout: page
title: "Q148202: BUG: Changes to Double-Precision Values in Debugger Fail"
permalink: /kb/148/Q148202/
---

## Q148202: BUG: Changes to Double-Precision Values in Debugger Fail

	Article: Q148202
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
	
	When you change a single-precision number stored in a REAL*8 variable to a
	double-precision number in one of the debugger's watch windows, you will not be
	able to change the value again in the same debugging session. Furthermore, a
	REAL*8 variable that is initialized with a double-precision number cannot have
	its value changed in the debugger.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Build the following sample code in Developer Studio.
	
	  C Compile options needed: /Zi
	
	        real*8 DoubleVal1, DoubleVal2
	
	        DoubleVal1 = 3.40E+38
	        DoubleVal2 = 3.40D+40
	        end
	
	1. To invoke a debugging session in Developer Studio, click Debug on the Build
	  menu, and then click Step Into.
	
	2. In either the watch or quick watch window, type the variable names
	  "DoubleVal1" (without the quotation marks) and "DoubleVal2" (without the
	  quotation marks).
	
	3. Change DoubleVal1 to a double-precision number by changing the exponent part
	  to D+039 and pressing the ENTER key. Attempting to change the value of
	  DoubleVal1 again in the current debugging session will not work. Attempting
	  to change the value of DoubleVal2 after it has been initialized will fail.
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbFortranPS kbLangFortran kbbuglist
	Technology        : kbAudDeveloper kbPTProdChange kbFortranSearch kbFORTRANPower400NT
	Version           : :4.0
	
	=============================================================================
	
