---
layout: page
title: "Q106520: FIX: /Ge Fails to Detect Stack Overflow"
permalink: /kb/106/Q106520/
---

## Q106520: FIX: /Ge Fails to Detect Stack Overflow

{% raw %}

	Article: Q106520
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0,1.0a
	Operating System(s): 
	Keyword(s): kberrmsg kbFortranPS kbLangFortran
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN PowerStation for MS-DOS, versions 1.0, 1.0a 
	- Microsoft Fortran Powerstation 32 for Windows NT, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Programs compiled with the /Ge option produce the following run-time error
	
	  DOSXMSF : fatal error DX1020: unhandled exception: General protection fault;
	
	when a stack overflow occurs, instead of the expected R6000 stack overflow
	message.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in FORTRAN PowerStation version 1.0
	for MS-DOS. This problem was corrected in Microsoft FORTRAN PowerStation 32,
	version 4.0.
	
	MORE INFORMATION
	================
	
	The stack-checking routine enabled by the /Ge option does not detect stack
	overflow. Because the default stack size for the FORTRAN PowerStation is 32K, a
	general protection (GP) fault is unlikely to be caused by a stack overflow. The
	exception to this is when one of the following types of programs is written:
	
	- Programs deliberately designed to use up the stack. This would involve
	  extensive use of automatic variables, indirect recursion, or deeply nested
	  subroutine and function calls totaling thousands of passed arguments.
	
	- Programs that circumvent the link time check for stack use based on name
	  decorations. These programs may cause stack overflow if they contain problems
	  related to passing arguments. This check is circumvented by declaring the
	  routine to use the C or VARYING calling conventions or by using the ALIAS
	  attribute.
	
	- Programs that call Assembly language routines that incorrectly use the stack.
	
	Sample Code
	-----------
	
	The following code can be used to illustrate the problem:
	
	  C Compile options needed: /Ge
	        subroutine recur(y)
	        integer y
	        y = y + 1
	        call indrec(y)
	        end
	        subroutine indrec(i)
	        integer i
	        i = i + 1
	        call recur(i)
	        end
	        integer x
	        x = 0
	        call recur(x)
	        end
	
	NOTE: The /Ge compiler option is no longer used for stack-probe checks under
	FORTRAN PowerStation 32, version 4.0. Attempting to use this option will
	generate the message:
	
	  Command line warning D2004: obsolete option /Ge ignored.
	
	Additional query words: 1.00 gpf gp-fault
	
	======================================================================
	Keywords          : kberrmsg kbFortranPS kbLangFortran 
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword2 kbZNotKeyword3 kbFORTRANPower32100NT kbFORTRANPower100DOS kbFORTRANPower100aDOS
	Version           : :1.0,1.0a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
