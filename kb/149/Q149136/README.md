---
layout: page
title: "Q149136: BUG: FOR1252 Error USE of Module in Internal Module Procedure"
permalink: kb/149/Q149136/
---

## Q149136: BUG: FOR1252 Error USE of Module in Internal Module Procedure

	Article: Q149136
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
	
	Using a user-defined data type defined in one module at another module's
	internal procedure level where the internal procedure defines the behavior of
	either the INTERFACE OPERATOR(+) or INTERFACE OPERATOR(-) specified by the
	MODULE PROCEDURE statement, causes the following internal compiler error:
	
	  error FOR1252: internal compiler error detected between % and X
	
	  Internal Error -- please report this bug Command line error D2013: internal
	  compiler error.
	
	RESOLUTION
	==========
	
	Specify the USE of the user-defined data type at the module level not at the
	module's internal procedure level.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Sample Code to Illustrate Problem
	---------------------------------
	
	  ! Compile options needed: /c
	
	        Module VALUES
	          Type VAL ; Real :: x ; End Type VAL
	        End Module VALUES
	
	        Module COMPUT
	  ! Uncomment the following line for work-around
	  !      USE VALUES
	        Interface Operator (+)
	          Module Procedure VAL_PLUS
	        End Interface
	        Contains
	          Type(VAL) Function VAL_PLUS (A,B) Result(C)
	  ! Comment the following line for work-around
	            USE VALUES
	            Implicit None
	            Type(VAL), Intent(In) :: A, B
	            C%x = A%x + B%x
	          End Function VAL_PLUS
	        End Module COMPUT
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbFortranPS kbLangFortran kbbuglist
	Technology        : kbAudDeveloper kbPTProdChange kbFortranSearch kbFORTRANPower400NT
	Version           : :4.0
	
	=============================================================================
	
