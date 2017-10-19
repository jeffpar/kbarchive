---
layout: page
title: "Q149751: BUG: FOR3294 Error Using Module Inside Module Procedure"
permalink: /kb/149/Q149751/
---

## Q149751: BUG: FOR3294 Error Using Module Inside Module Procedure

	Article: Q149751
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
	
	Referencing a user-defined data type, defined in one module, at another module's
	internal procedure level causes the compiler to fail to recognize the
	user-defined data type. Specifically, this occurs when the module and main
	program sources are contained in different files. The following compiler error
	is generated under these circumstances:
	
	  error FOR3294: derived type referenced but not declared
	
	RESOLUTION
	==========
	
	Do one of the following:
	
	- Use the module containing the user-defined data type at the module level, not
	  at the module's internal procedure level.
	
	-or-
	
	- Combine the module and program source code into one source file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Using the sample code provided, create a module and program file.
	
	2. Compile and link the module and program files together.
	
	Sample Code to Illustrate Problem and Workaround
	------------------------------------------------
	
	  ! Compile options needed: none
	
	  ! --- mods.for ---
	
	        module types
	          type my_type
	              real :: x
	          end type my_type
	        end module types
	
	        module funcs
	  !     use types               ! uncomment this line for first workaround
	        contains
	          function my_func(z1) result(z2)
	              use types         ! comment this line for first workaround
	              implicit none
	              real z1
	              type(my_type) z2
	              z2 % x = z1
	          end function my_func
	        end module funcs
	
	  ! --- prog.for ---
	
	        program test
	          use types
	          use funcs
	          implicit none
	          real a
	          type (my_type) :: b
	
	          a = 1.0
	          b = my_func(a)
	        end program test
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbFortranPS kbLangFortran kbbuglist
	Technology        : kbAudDeveloper kbPTProdChange kbFortranSearch kbFORTRANPower400NT
	Version           : :4.0
	
	=============================================================================
	
