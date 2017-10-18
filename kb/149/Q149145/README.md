---
layout: page
title: "Q149145: BUG: F1001 Error in Write of Namelist in Internal Procedure"
permalink: kb/149/Q149145/
---

## Q149145: BUG: F1001 Error in Write of Namelist in Internal Procedure

	Article: Q149145
	Product(s): Microsoft Fortran Compiler
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbFortranPS kbLangFortrankbbuglist
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fortran PowerStation for Windows 95 and Windows NT, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Compiling a source file that performs a list-directed write of a namelist in an
	internal procedure where the namelist is defined in the main program unit may
	cause the following internal compiler error:
	
	  fatal error F1001: INTERNAL COMPILER ERROR
	  (compiler file '..\..\\P2\main.c', line 374)
	  Please choose the Technical Support command on the Developer Studio
	  Help menu, or open the Technical Support help file for more information
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Sample Code to Illustrate Problem
	---------------------------------
	
	  ! Compile options needed: none
	
	        program one
	          integer n
	          namelist/input/ n
	          n=22
	          write(*, input)
	          call two
	            contains
	              subroutine two
	                write(*, input)   ! F1001 error generated here
	              end subroutine two
	        end program one
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbFortranPS kbLangFortran kbbuglist
	Technology        : kbAudDeveloper kbPTProdChange kbFortranSearch kbFORTRANPower400NT
	Version           : :4.0
	
	=============================================================================
	
