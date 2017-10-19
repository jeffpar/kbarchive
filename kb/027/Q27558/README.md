---
layout: page
title: "Q27558: FIX: Protection Violation, Application Error, From COMMON Name"
permalink: /kb/027/Q27558/
---

## Q27558: FIX: Protection Violation, Application Error, From COMMON Name

	Article: Q27558
	Product(s): Microsoft Fortran Compiler
	Version(s): 4.1,5.0,5.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN compiler for OS/2, versions 4.1, 5.0, 5.1 
	- Microsoft FORTRAN Compiler for MS-DOS, version 5.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An attempt to run an application fails and the corresponding message below
	appears on the screen. In FORTRAN for OS/2, the following message appears:
	
	  A program caused a Protection Violation.
	
	If the application compiled as a QuickWin application, the following message
	appears:
	
	  Unexpected Application Error
	
	CAUSE
	=====
	
	The name of a COMMON block in the application ends with the letters "code." The
	compiler confuses the code and data segments that have similar names. When the
	application writes to the COMMON block, the generated code writes into a code
	segment.
	
	RESOLUTION
	==========
	
	To work around this problem, modify the source code to rename the COMMON block.
	The last four letters of the name cannot be "code."
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in FORTRAN versions 4.1, 5.0, and
	5.1. This problem was corrected in FORTRAN PowerStation.
	
	MORE INFORMATION
	================
	
	The following code example demonstrates this problem.
	
	Sample Code
	-----------
	
	        COMMON /PCODE/ I
	        I = 7
	        END
	
	Additional query words: nofps 4.10 5.00 5.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword3 kbFORTRAN510DOS kbFORTRAN500OS2 kbFORTRAN510OS2 kbFORTRAN410OS2
	Version           : :4.1,5.0,5.1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
