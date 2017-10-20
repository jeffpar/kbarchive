---
layout: page
title: "Q149150: BUG: GETENV() Fails If Input Variable Has Trailing Spaces"
permalink: /kb/149/Q149150/
---

## Q149150: BUG: GETENV() Fails If Input Variable Has Trailing Spaces

{% raw %}

	Article: Q149150
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
	
	Using an input variable containing trailing blank spaces in the GETENV() Portlib
	subroutine causes the call to the GETENV() subroutine to fail.
	
	Under Windows 95, blank spaces are returned to the output variable(evalue), and
	under Windows NT 3.51, random characters are returned to the output
	variable(evalue).
	
	RESOLUTION
	==========
	
	Do one of the following:
	
	- Use an input character variable that has a length identical to that of the
	  environment variable.
	
	-or-
	
	- Use TRIM() to truncate any trailing blank spaces from the input variable.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Sample Code to Demonstrate Problem
	----------------------------------
	
	  ! Compile options needed: none
	
	        use portlib
	  ! Comment the following line for the first workaround:
	        character*10 :: ename = 'PATH'
	  ! Uncomment the following line for the first workaround:
	  !      character*4 :: ename = 'PATH'
	        character*100 :: evalue = 'nothing'
	
	        CALL GETENV( ename, evalue )   ! GETENV fails to return information
	
	  ! Uncomment the following line for the second workaround:
	  !      CALL GETENV( trim(ename), evalue )
	        print *, ename, " uses ", evalue
	        end
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbFortranPS kbLangFortran kbbuglist
	Technology        : kbAudDeveloper kbPTProdChange kbFortranSearch kbFORTRANPower400NT
	Version           : :4.0
	
	=============================================================================
	

{% endraw %}
