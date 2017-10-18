---
layout: page
title: "Q109999: BUG: Browser Treats  Interface to Function  as a Subprogram"
permalink: kb/109/Q109999/
---

## Q109999: BUG: Browser Treats  Interface to Function  as a Subprogram

	Article: Q109999
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0,1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN PowerStation for MS-DOS, versions 1.0, 1.0a 
	- Microsoft Fortran Powerstation 32 for Windows NT, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the INTERFACE TO extension in a FORTRAN PowerStation application, the
	Browser treats the INTERFACE statement as a function definition.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in FORTRAN PowerStation 32 for
	Windows NT and MS-DOS, version 1.0. and 1.0A We are researching this problem and
	will post new information here in the Microsoft Knowledge Base as it becomes
	available.
	
	MORE INFORMATION
	================
	
	In the following example, lineto is listed twice in the Browser database. While
	this is inconvenient when searching for the function, it does not affect the
	behavior of your FORTRAN program.
	
	Sample Code
	-----------
	
	        INTERFACE TO FUNCTION lineto(x,y)
	        INTEGER*2 lineto[C,ALIAS:'__lineto'],x,y
	        END
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword2 kbZNotKeyword3 kbFORTRANPower32100NT kbFORTRANPower100DOS kbFORTRANPower100aDOS
	Version           : :1.0,1.0a
	
	=============================================================================
	
