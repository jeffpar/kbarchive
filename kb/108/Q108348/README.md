---
layout: page
title: "Q108348: FIX: Error F1001 in schedp5u.c Compiling with -Ox and -G5"
permalink: /kb/108/Q108348/
---

## Q108348: FIX: Error F1001 in schedp5u.c Compiling with -Ox and -G5

{% raw %}

	Article: Q108348
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kberrmsg kbLangFortran
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fortran Powerstation 32 for Windows NT, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An attempt to compile a program using the -Ox and -G5 options may cause the
	following error message to be generated:
	
	  fatal error F1001: INTERNAL COMPILER ERROR
	  (compiler file '@(#)schedp5u.c:1.0', line 2661)
	
	RESOLUTION
	==========
	
	Avoid using the optimization switch -Ox with the -G5 option.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft FORTRAN PowerStation
	32, version 1.0. This problem was fixed in FORTRAN PowerStation 32, version 4.0.
	
	MORE INFORMATION
	================
	
	The following program demonstrates the problem:
	
	Sample Code
	-----------
	
	  C Compile options needed: -Ox -G5
	
	     20  WT     = WT*(0.5/(I+1))
	         TERM   = WT*(.805)
	         SUM    = SUM + TERM
	         I      = I + 1
	         ADJ    = ADJ*4.3/(2.0*I)
	         IF (TERM.GE.(0.1*SUM)) GO TO 20
	         END
	
	Additional query words: 1.00 ICE
	
	======================================================================
	Keywords          : kberrmsg kbLangFortran 
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword2 kbFORTRANPower32100NT
	Version           : :1.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
