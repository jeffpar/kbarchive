---
layout: page
title: "Q149474: BUG: F2333 Error Not Generated in Illegal Redefinition"
permalink: /kb/149/Q149474/
---

## Q149474: BUG: F2333 Error Not Generated in Illegal Redefinition

{% raw %}

	Article: Q149474
	Product(s): Microsoft Fortran Compiler
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbFortranPS kbLangFortrankbbuglist
	Last Modified: 03-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fortran PowerStation for Windows 95 and Windows NT, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An illegal redefinition of a named constant, explicitly defined with a type and
	the PARAMETER attribute, doesn't cause the F2333 compiler error message.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Sample Code to Illustrate Problem
	---------------------------------
	
	  C Compile options needed: none
	        PROGRAM TEST
	          INTEGER, PARAMETER :: A = 5
	          DIMENSION :: A(1:10)  ! No F2333 compiler error generated
	        END PROGRAM
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbFortranPS kbLangFortran kbbuglist
	Technology        : kbAudDeveloper kbPTProdChange kbFortranSearch kbFORTRANPower400NT
	Version           : :4.0
	
	=============================================================================
	

{% endraw %}
