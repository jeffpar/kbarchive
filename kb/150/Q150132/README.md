---
layout: page
title: "Q150132: PRB: Undefined Pointer Assignment Causes Application Error"
permalink: /kb/150/Q150132/
---

## Q150132: PRB: Undefined Pointer Assignment Causes Application Error

	Article: Q150132
	Product(s): Microsoft Fortran Compiler
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbFortranPS kbLangFortrankbbuglist
	Last Modified: 02-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fortran PowerStation for Windows 95 and Windows NT, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Attempting to assign a pointer result to an undefined pointer causes one of the
	following application errors at run time:
	
	Under Windows NT version 3.51:
	
	  The instruction at "0x00000000" referenced memory at "0x 00000000".
	  The memory could not be "written".
	
	Under Windows 95:
	
	  This program has performed an illegal operation and will be shut down.
	  If the problem persists, contact the program vendor.
	
	  Details:
	
	  <program> caused an invalid page fault in module <filename.exe> at
	  0137:00401022
	
	CAUSE
	=====
	
	The pointer variable is undefined at the time of assignment.
	
	RESOLUTION
	==========
	
	The pointer must be defined by either a pointer assignment or an allocate
	statement.
	
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
	
	        integer, target :: i = 1
	        integer, pointer :: p
	  ! comment the following line for work-around
	        p = i        ! undefined pointer
	  ! uncomment the following line for work-around
	  !      p => i      ! definition and assignment
	        print *, p
	        end
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbFortranPS kbLangFortran kbbuglist
	Technology        : kbAudDeveloper kbPTProdChange kbFortranSearch kbFORTRANPower400NT
	Version           : :4.0
	
	=============================================================================
	
