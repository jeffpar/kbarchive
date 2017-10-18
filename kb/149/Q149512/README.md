---
layout: page
title: "Q149512: BUG: ASSERT Failure with String Assigned to User-Defined Type"
permalink: kb/149/Q149512/
---

## Q149512: BUG: ASSERT Failure with String Assigned to User-Defined Type

	Article: Q149512
	Product(s): Microsoft Fortran Compiler
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbCompiler kbFL32 kbFortranPSkbbuglist
	Last Modified: 03-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fortran PowerStation for Windows 95 and Windows NT, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The compiler generates the following assertion failure message when you make a
	direct assignment of a character string to a user-defined data type structure
	variable:
	
	  Assertion failed:
	  (NTYPE(symbolptr->_var.initial.whole_value)==N_STRUCTURE_CONS) ||
	  (((NTYPE(symbolptr->_var.initial.whole_value) == N_ARRAY_CONS) ||
	  (NTYPE(symbolptr->_var.initial.whole_value)==N_ARRAY_SECTION)) &&
	  (symbolptr->_name.xdim != NULL)), file err_geninit.c, line 648
	
	  abnormal program termination
	
	RESOLUTION
	==========
	
	Assign the character string to a corresponding user-defined data type structure
	character variable member.
	
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
	
	        type A
	            character*8 s
	        end type
	        type (A) f
	  ! comment the following line for work-around
	        f = 'hello'  ! This line causes the assertion failure
	  ! uncomment the following line for work-around
	  !      f%s = 'hello' ! Ok, assignment to character variable member
	        print *, f
	        end
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbCompiler kbFL32 kbFortranPS kbbuglist
	Technology        : kbAudDeveloper kbPTProdChange kbFortranSearch kbFORTRANPower400NT
	Version           : :4.0
	
	=============================================================================
	
