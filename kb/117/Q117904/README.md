---
layout: page
title: "Q117904: DOCERR: F2400 : &quot;&lt;name&gt; : COMMON not defined&quot;"
permalink: /kb/117/Q117904/
---

## Q117904: DOCERR: F2400 : &quot;&lt;name&gt; : COMMON not defined&quot;

{% raw %}

	Article: Q117904
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0,1.0a,4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbCompiler kbFL32 kbFortranPS
	Last Modified: 04-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN PowerStation for MS-DOS, versions 1.0, 1.0a 
	- Microsoft Fortran Powerstation 32 for Windows NT, versions 1.0, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following compiler error message is not included in the documentation for
	the products listed above:
	
	  error F2400: <var name> : COMMON not defined
	
	Or for Fortran PowerStation 4.0:
	
	  error FOR3295: COMMON block /A/ SAVEd but not declared
	
	Note: the above error message is correctly described in the Fortran PowerStation
	4.0 on-line help.
	
	The sample code below produces the error. The "save" statement should have a
	common block name between the slashes ("/").
	
	Sample Code
	-----------
	
	  C Compile options needed: none
	
	     CALL TEST
	     END
	
	     SUBROUTINE TEST()
	     SAVE /A/ 
	     END
	
	Additional query words: 1.00 1.00a 4.00 docerr
	
	======================================================================
	Keywords          : kberrmsg kbCompiler kbFL32 kbFortranPS 
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword2 kbZNotKeyword3 kbFORTRANPower32100NT kbFORTRANPower32400NT kbFORTRANPower100DOS kbFORTRANPower100aDOS
	Version           : :1.0,1.0a,4.0
	
	=============================================================================
	

{% endraw %}
