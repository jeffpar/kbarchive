---
layout: page
title: "Q148186: DOCERR: RETURN Statement Not Supported in Main Program Unit"
permalink: /kb/148/Q148186/
---

## Q148186: DOCERR: RETURN Statement Not Supported in Main Program Unit

	Article: Q148186
	Product(s): Microsoft Fortran Compiler
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbFortranPS kbLangFortran
	Last Modified: 02-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fortran PowerStation for Windows 95 and Windows NT, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Fortran PowerStation for Windows 95 and Windows NT, version 4.0,
	Reference Manual, Page 453, incorrectly describes the effect of using a RETURN
	statement in the main program unit. It says, "A RETURN statement in the main
	program is treated as a STOP statement with no message parameter." This
	reference to and usage of RETURN statements is considered obsolete. Instead, a
	RETURN statement in the main program unit will cause the following compile-time
	error:
	
	  error FOR2718: RETURN is only allowed in SUBROUTINEs and FUNCTIONs
	
	MORE INFORMATION
	================
	
	The following code illustrates the problem:
	
	  CC Compile options needed: none
	
	        print *, 'hello, world'
	        return         ! Compilation error
	        end
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbFortranPS kbLangFortran 
	Technology        : kbAudDeveloper kbPTProdChange kbFortranSearch kbFORTRANPower400NT
	Version           : :4.0
	
	=============================================================================
	
