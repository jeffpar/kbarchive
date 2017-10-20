---
layout: page
title: "Q109878: FIX: Commas in NAMELIST Data Fields Cause F6511"
permalink: /kb/109/Q109878/
---

## Q109878: FIX: Commas in NAMELIST Data Fields Cause F6511

{% raw %}

	Article: Q109878
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kberrmsg kbCompiler kbFL32 kbFortranPS
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN PowerStation for MS-DOS, version 1.0 
	- Microsoft Fortran Powerstation 32 for Windows NT, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If one or more blanks precede a NAMELIST comma separator, it will generate the
	following run-time error at the input line:
	
	  run-time error F6511:
	  input_operation(filename.***) -variable name not found
	
	The error can also occur if there are repeat factors in a comma separated
	NAMELIST or if there are spaces after repeat factors in a NAMELIST which are not
	separated by commas.
	
	RESOLUTION
	==========
	
	The comma value separator must immediately follow the variable name. Removing
	blank(s) between the NAMELIST variable and the following comma separator will
	resolve this problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft FORTRAN PowerStation
	32 for Windows NT, version 1.0. This problem was corrected in FORTRAN
	PowerStation version 4.0.
	
	MORE INFORMATION
	================
	
	A NAMELIST value separator can be a single comma or one or more blanks. Tabs are
	valid as white-space separators. Blanks are not allowed between a NAMELIST
	variable and the comma following.
	
	Sample Code
	-----------
	
	The following sample program and NAMELIST data set produces run-time error F6511
	at the READ statement:
	
	        NAMELIST /SECT1/STX, STY
	        OPEN (15, FILE='NM.DAT', STATUS='OLD')
	        READ (15, SECT1)
	        STOP
	        END
	
	NM.DAT Data Set 1
	-----------------
	
	     &SECT1 STX= 0.0000 , STY=10.0000 / 
	
	The following data set does not generate the error:
	
	NM.DAT Data Set 2
	-----------------
	
	     &SECT1 STX=0.0000, STY=10.0000 / 
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          : kberrmsg kbCompiler kbFL32 kbFortranPS 
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword2 kbZNotKeyword3 kbFORTRANPower32100NT kbFORTRANPower100DOS
	Version           : :1.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
