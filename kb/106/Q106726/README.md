---
layout: page
title: "Q106726: BUG: Errors CV1255 and EE0037 Watching Assumed Size Arrays"
permalink: /kb/106/Q106726/
---

## Q106726: BUG: Errors CV1255 and EE0037 Watching Assumed Size Arrays

{% raw %}

	Article: Q106726
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0,1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN PowerStation for MS-DOS, versions 1.0, 1.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Assumed size arrays do not display in a Watch or Locals window; instead, one of
	the following errors is displayed:
	
	  CV1255 Message: no data members
	
	  -or-
	
	  EE0037 Error: Array subscript out of bounds
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in FORTRAN PowerStation versions
	1.0 and 1.0a.
	
	This is not a problem in FORTRAN PowerStation 32.
	
	MORE INFORMATION
	================
	
	To demonstrate the problem:
	
	1. Build the sample code with the project in debug mode.
	
	2. Set a breakpoint on the print statement and then GO (press F5).
	
	3. In the Watch window, type the following:
	
	  " A <press the DOWN ARROW key> A(1) <press the UP ARROW key>
	  <ENTER> " (without the quotation marks)
	
	4. The following is displayed:
	
	  -a
	  CV1255 Message: no data members
	  a(1) = EE0037 Error: Array subscript out of bounds.
	
	5. In the Locals window, press ENTER and the following is displayed:
	  [BP+0008]-DIM A CV1255 Message: no data members
	
	Sample Code
	-----------
	
	        real*4 x(10)
	        x = 3.14
	        call sub (x)
	        end
	
	        subroutine sub (a)
	        real*4  a(*)
	        a(1) = 1.2
	        print*, a(1)
	        end
	
	Additional query words: nofpsnt 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword3 kbFORTRANPower100DOS kbFORTRANPower100aDOS
	Version           : :1.0,1.0a
	
	=============================================================================
	

{% endraw %}
