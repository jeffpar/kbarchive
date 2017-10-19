---
layout: page
title: "Q149513: BUG: An OPEN Status= Option Like String Converted to Uppercase"
permalink: /kb/149/Q149513/
---

## Q149513: BUG: An OPEN Status= Option Like String Converted to Uppercase

	Article: Q149513
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
	
	Compiling a source file that contains a character string that is the same as an
	OPEN statement status= option (that is: new, old, scratch, unknown) is
	inadvertenly converted to uppercase. This problem occurs when an OPEN statement
	is in the same source file and uses the same status= character string.
	
	RESOLUTION
	==========
	
	Assign the status= option string to a temporary variable, and then use the
	temporary variable as the OPEN statement's status= option.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Compiling the following source code causes the print statement's 'unknown'
	string to be converted to uppercase. Note the OPEN statement must be in the same
	source file and has to use the same status= string for this to occur.
	
	Sample Code
	-----------
	
	  ! Compile options needed: none
	
	  ! uncomment the following line for work-around
	  !      character*7 :: openstatus = 'unknown'
	        print *, 'the following should be lowercase: ', 'unknown'
	  ! comment the following line for work-around
	        open(unit=20, file='test.out', status='unknown')
	  ! uncomment the following line for work-around
	  !      open(unit=20, file='test.out', status=openstatus)
	        end
	
	Output
	------
	
	the following should be lowercase: UNKNOWN
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbFortranPS kbLangFortran kbbuglist
	Technology        : kbAudDeveloper kbPTProdChange kbFortranSearch kbFORTRANPower400NT
	Version           : :4.0
	
	=============================================================================
	
