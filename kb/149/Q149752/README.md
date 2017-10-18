---
layout: page
title: "Q149752: BUG: FOR2862 Error Caused by External Function Without Type"
permalink: kb/149/Q149752/
---

## Q149752: BUG: FOR2862 Error Caused by External Function Without Type

	Article: Q149752
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
	
	When you don't fully qualify an external function with a type and attempt to use
	it in a WRITE statement, the following compilation error occurs:
	
	  error FOR2862: procedure name <procedure> in I/O list
	
	RESOLUTION
	==========
	
	Fully qualify the externl function by giving it a type attribute.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Sample Code to Illustrate Problem and Workaround
	------------------------------------------------
	
	  ! Compile options needed: none
	
	        MODULE THE_MODULE
	          IMPLICIT INTEGER(E)
	  ! comment the next line for workaround
	          EXTERNAL EXTERN_FUNC
	  ! uncomment the next line for workaround
	  !        INTEGER, EXTERNAL :: EXTERN_FUNC
	        END MODULE
	
	        PROGRAM THE_PROGRAM
	          USE THE_MODULE
	          WRITE(6,*) EXTERN_FUNC()
	        END PROGRAM THE_PROGRAM
	
	        INTEGER FUNCTION EXTERN_FUNC()
	          EXTERN_FUNC = 737
	        END FUNCTION
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbFortranPS kbLangFortran kbbuglist
	Technology        : kbAudDeveloper kbPTProdChange kbFortranSearch kbFORTRANPower400NT
	Version           : :4.0
	
	=============================================================================
	
