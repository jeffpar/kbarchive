---
layout: page
title: "Q148626: BUG: D2013 Internal Compiler Error Reshape of Character Array"
permalink: /kb/148/Q148626/
---

## Q148626: BUG: D2013 Internal Compiler Error Reshape of Character Array

	Article: Q148626
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
	
	Compiling source code that contains a reshape of an array of character strings
	under Windows 95 may cause the following internal compiler error:
	
	  Command line error D2013: internal compiler error
	
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
	  ! Use Fortran 90 source extension: .F90
	
	  CHARACTER (LEN=5),parameter, dimension(2) :: c2 =  (/'abcde', 'fghij'/)
	
	  CHARACTER (LEN=5),parameter, dimension(2) :: c3 = reshape((/c2/),(/2/))
	
	  END
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbFortranPS kbLangFortran kbbuglist
	Technology        : kbAudDeveloper kbPTProdChange kbFortranSearch kbFORTRANPower400NT
	Version           : :4.0
	
	=============================================================================
	
