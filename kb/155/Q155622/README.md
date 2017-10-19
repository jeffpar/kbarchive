---
layout: page
title: "Q155622: FIX: IDE Debugger Truncates Floating Point Numbers"
permalink: /kb/155/Q155622/
---

## Q155622: FIX: IDE Debugger Truncates Floating Point Numbers

	Article: Q155622
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbProgramming kbDebug kbide kbVC400bug kbVC410bug kbVC420bug kbVC500fix
	Last Modified: 04-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Integrated Debugger, included with:
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, versions 4.0, 4.1, 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you change the Language Settings under the operating system to a language
	that uses a comma as the decimal separator, recalculating any floating point
	numbers in the QuickWatch window in the integrated debugger truncates the
	floating point number. Thereafter, incorrect results may be generated from
	program execution. To reproduce the problem, please see the "More Information"
	section below.
	
	The following language settings may cause this problem.
	
	  German      Italian    Portuguese    Swedish   Norwegian
	  Indonesian  Icelandic  French        Finnish   Dutch
	  Danish      Catalan    Basque
	
	RESOLUTION
	==========
	
	To work around the problem, use one of the following suggestions:
	
	- In the QuickWatch window, cast the variable you plan to watch to the proper
	  type. For example, if you plan to watch variable "a" in the following
	  program, because "a" is defined as type double, cast it to a double in the
	  QuickWatch window. That is, type "(double)a" (without the quotation marks) in
	  the QuickWatch window.
	
	  -or-
	
	- In the QuickWatch window, add zero to the variable. For example, in the
	  following program, type "a+0" (without the quotation marks) in the QuickWatch
	  window to watch variable "a".
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ version 5.0.
	
	MORE INFORMATION
	================
	
	You can use the following steps to reproduce the problem:
	
	1. Use Control Panel to change language settings to German(Standard), then
	  reboot the system.
	
	2. Build an application using the source file below:
	
	     /* Compile options needed: Developer Studio default console application
	     */ 
	
	     #include <stdio.h>
	
	     void main()
	     {
	        double a = 1.99;
	        double b;
	
	        printf("a = %g\n", a);
	
	        b = a;  // At this point do QuickWatch and Recalculate for 'a'.
	
	        printf("b = %g\n", b);
	     }
	
	3. Start debugging and get to the commented line "b = a".
	
	4. Use QuickWatch for "a"; it will show the correct value 1.99.
	
	5. Click Recalculate one or two times more.
	
	Result: The value of "a" is changed to 1.0, and the program's output will be
	wrong when execution is continued to next line.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbProgramming kbDebug kbide kbVC400bug kbVC410bug kbVC420bug kbVC500fix 
	Technology        : kbVCsearch kbAudDeveloper kbIntegratedDebugger
	Version           : winnt:
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
