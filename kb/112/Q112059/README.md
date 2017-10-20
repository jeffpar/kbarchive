---
layout: page
title: "Q112059: DOCERR: Cannot Break on Condition in PowerStation Debugger"
permalink: /kb/112/Q112059/
---

## Q112059: DOCERR: Cannot Break on Condition in PowerStation Debugger

{% raw %}

	Article: Q112059
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0,1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN PowerStation for MS-DOS, versions 1.0, 1.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft FORTRAN Visual Workbench help file incorrectly states that the
	PowerStation debugger can be used to set breakpoints on certain conditions. This
	is not correct. The FORTRAN PowerStation version 1.0 and 1.0a debuggers do not
	support this functionality.
	
	This functionality is supported by FORTRAN PowerStation 32.
	
	MORE INFORMATION
	================
	
	The information below is displayed when you choose FORTRAN Visual Workbench from
	the Help menu, and then select Debugging Your Application:
	
	The Debugger
	
	  How Do I?                Brief                               Click
	  ----------------------------------------------------------------------
	  Set breakpoints for      Setting breakpoints to break at
	  certain conditions       location, break when an
	                           expression has changed, or
	                           break at an exported Windows
	                           function
	
	The information in this section of the help file is not correct. The FORTRAN
	PowerStation for MS-DOS does not support conditional breakpoints and cannot be
	used to create applications for Windows.
	
	Additional query words: 1.00 1.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword3 kbFORTRANPower100DOS kbFORTRANPower100aDOS
	Version           : :1.0,1.0a
	
	=============================================================================
	

{% endraw %}
