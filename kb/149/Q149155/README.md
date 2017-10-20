---
layout: page
title: "Q149155: BUG: Assertion Failure with ERR= and END= in READ Statement"
permalink: /kb/149/Q149155/
---

## Q149155: BUG: Assertion Failure with ERR= and END= in READ Statement

{% raw %}

	Article: Q149155
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
	
	Using the err= and end= options together in a READ statement and performing a
	formatted READ using an integer expression in a FORMAT statement causes the
	following compile-time ASSERT failure message to be generated:
	
	  Assertion failed: 0, file err_genex.c, line 6143
	
	RESOLUTION
	==========
	
	Use literal constants instead of integer expressions with edit descriptors in
	FORMAT statements.
	
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
	
	        integer, parameter :: lenrec = 25
	        character*25 rec
	
	        open (unit=1,file='test.dat',status='old')
	        read (1,100,end=500,err=500) rec
	  100   format (a<lenrec>)  ! Comment for workaround
	  ! Uncomment the next line for workaround
	  ! 100  format (a25)       ! Use literal values with edit descriptors
	  500   continue
	        end
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbFortranPS kbLangFortran kbbuglist
	Technology        : kbAudDeveloper kbPTProdChange kbFortranSearch kbFORTRANPower400NT
	Version           : :4.0
	
	=============================================================================
	

{% endraw %}
