---
layout: page
title: "Q150125: BUG: Write of Function Returning a Character String Fails"
permalink: /kb/150/Q150125/
---

## Q150125: BUG: Write of Function Returning a Character String Fails

{% raw %}

	Article: Q150125
	Product(s): Microsoft Fortran Compiler
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbFortranPS kbLangFortrankbbuglist
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fortran PowerStation for Windows 95 and Windows NT, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you declare a function that returns a variable size array of variable
	length character strings by putting the array declaration part before the string
	declaration part, a write of the array-valued function fails to produce correct
	results.
	
	RESOLUTION
	==========
	
	Reorder the declaration by specifying the string declaration part before the
	array declaration part.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The following sample code causes the write of the array to print nothing.
	Changing the declaration, so the string is declared before the array, causes the
	correct output 1 to be written to the display.
	
	Sample Code to Illustrate Problem
	---------------------------------
	
	  ! Compile options needed: none
	
	        program test
	          interface
	            function h(i,j)
	  ! comment the following two lines for workaround
	              dimension h(i)
	              character(len=j) h
	  ! uncomment the following two lines for workaround
	  !            character(len=j) h
	  !            dimension h(i)
	            end function
	          end interface
	
	          write(*,*) h(1,1)
	        end program test
	
	        function h(i,j)
	  ! comment the following two lines for workaround
	          dimension h(i)
	          character(len=j) h
	  ! uncomment the following two lines for workaround
	  !        character(len=j) h
	  !        dimension h(i)
	          h = '1234567890'
	        end function
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbFortranPS kbLangFortran kbbuglist
	Technology        : kbAudDeveloper kbPTProdChange kbFortranSearch kbFORTRANPower400NT
	Version           : :4.0
	
	=============================================================================
	

{% endraw %}
