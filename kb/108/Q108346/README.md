---
layout: page
title: "Q108346: FIX: Substring Out of Range Hangs with -4Yb -Ox -G5"
permalink: /kb/108/Q108346/
---

## Q108346: FIX: Substring Out of Range Hangs with -4Yb -Ox -G5

{% raw %}

	Article: Q108346
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fortran Powerstation 32 for Windows NT, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An attempt to execute a program that is compiled using the -4Yb, -Ox, and -G5
	options and that contains a character substring expression out of range may
	cause the application to hang.
	
	CAUSE
	=====
	
	Compiler options -4Yb and -G5, along with the optimization (option -Ox) cause
	the compiler to generate incorrect code.
	
	RESOLUTION
	==========
	
	This problem does not occur with a different combination of options. Avoid the
	-Ox optimization option, the -4Yb extended-error-handling option, or use the -G4
	processor option instead of -G5.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in FORTRAN PowerStation 32 for
	Windows NT, version 1.0. This problem was fixed in FORTRAN PowerStation, version
	4.0.
	
	MORE INFORMATION
	================
	
	The example program below demonstrates the problem:
	
	Sample Code
	-----------
	
	  C Compile options needed: -4Yb, -Ox and -G5
	
	        character m*10 /'1234567890'/ 
	        l = 3
	        write(*,*) l ! putting this inside the loop avoids hang
	        do while (m(l:l) .ne. 'Q')
	        l = l + 1
	        end do
	        write(*,*) 'L = ', l
	        write(*,*) 'M = ', m
	        end
	
	Additional query words: 1.00 lock halt
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword2 kbFORTRANPower32100NT
	Version           : :1.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
