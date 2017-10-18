---
layout: page
title: "Q148193: How to Change REAL&#42;4 Numbers to REAL&#42;8 Values in Debugger"
permalink: kb/148/Q148193/
---

## Q148193: How to Change REAL&#42;4 Numbers to REAL&#42;8 Values in Debugger

	Article: Q148193
	Product(s): Microsoft Fortran Compiler
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbFortranPS kbLangFortran
	Last Modified: 03-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fortran PowerStation for Windows 95 and Windows NT, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you want to change a REAL*8 variable's single-precision value in the
	debugger to a number greater than the maximum positive or negative value allowed
	for single-precision numbers, you must use the "D" exponent descriptor.
	
	MORE INFORMATION
	================
	
	All REAL variables are initially expressed with the single-precision "E"
	exponent descriptor in the debugger. To change the value of a REAL*8 variable
	containing a single-precision number to a double-precision number, increase the
	size of the exponent, and change the "E" exponent descriptor to the "D" exponent
	descriptor.
	
	Step-by-Step Example
	--------------------
	
	1. Build the following sample code in Developer Studio.
	
	2. In Developer Studio, click Debug on the Build menu, and then click Step Into
	  to begin the debugging process.
	
	3. In the locals window, double-click the value associated with the Single
	  variable. Replace the exponent part with "D+039" and press the ENTER key.
	  This changes the value to a double-precision number.
	
	Sample Code
	-----------
	
	  C Compile options needed: /Zi
	
	        real*8 Single
	
	        Single = 3.40E+38
	
	        end
	
	Additional query words: kbinf 4.00
	
	======================================================================
	Keywords          : kbFortranPS kbLangFortran 
	Technology        : kbAudDeveloper kbPTProdChange kbFortranSearch kbFORTRANPower400NT
	Version           : :4.0
	
	=============================================================================
	
