---
layout: page
title: "Q106633: BUG: Sample Code for GRDEMO Contains Errors"
permalink: /kb/106/Q106633/
---

## Q106633: BUG: Sample Code for GRDEMO Contains Errors

{% raw %}

	Article: Q106633
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN PowerStation for MS-DOS, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Compiling GRDEMO.FOR with extended error handling ($DEBUG or /4Yb) generates the
	following error:
	
	  GRDEMO.FOR(449) : error F2536: S : subscript 7 out of range
	
	The default directory for the GRDEMO program is:
	
	  \F32\SAMPLES\GRAPHICS\DEMO
	
	CAUSE
	=====
	
	Subroutine "MonitorWarning" declares a local array S as:
	
	     CHARACTER*60 S(6)
	
	However, the corresponding DATA statement initializes seven elements.
	
	There is also an error in the main program where variable iModesCur is set to 0
	(zero) and then used to access an array.
	
	RESOLUTION
	==========
	
	  On line 247, change
	
	     iModesCur = 0
	
	to the following:
	
	     iModesCur = 1
	
	On line 439, change
	
	     CHARACTER*60 s(6)
	
	to the following:
	
	     CHARACTER*60 s(7)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in FORTRAN PowerStation version 1.0
	and 1.0a for MS-DOS.
	
	This example does not exist in FORTRAN PowerStation 32.
	
	Additional query words: 1.00 1.00a nofpsnt
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword3 kbFORTRANPower100DOS
	Version           : :1.0
	
	=============================================================================
	

{% endraw %}
