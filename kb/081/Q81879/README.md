---
layout: page
title: "Q81879: BUG: BIND Error U1253 Opening DOSCALLS.LIB"
permalink: kb/081/Q81879/
---

## Q81879: BUG: BIND Error U1253 Opening DOSCALLS.LIB

	Article: Q81879
	Product(s): Microsoft Fortran Compiler
	Version(s): 5.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN compiler for OS/2, version 5.1 
	- Microsoft FORTRAN Compiler for MS-DOS, version 5.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An attempt to create a bound executable file fails and the BIND utility produces
	the following message:
	
	  BIND : fatal error U1253: cannot open file : DOSCALLS.LIB
	
	CAUSE
	=====
	
	When the compiler command line specifies the /Fb compiler option switch to
	create a bound executable file, the FORTRAN compiler passes the name
	"DOSCALLS.LIB" to the BIND utility. The error occurs because DOSCALLS.LIB is not
	provided with FORTRAN version 5.1. The functions are provided in the OS2.LIB
	file.
	
	RESOLUTION
	==========
	
	To address this error, perform one of the following two steps:
	
	1. Copy the OS2.LIB file to the DOSCALLS.LIB file in the FORTRAN libraries
	  directory.
	
	-or-
	
	2. Link the application with the appropriate protected-mode library, then
	  explicitly call the BIND utility.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem with FORTRAN version 5.1 for OS/2.
	
	This is not a problem in FORTRAN PowerStation.
	
	Additional query words: nofps 5.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword3 kbFORTRAN510DOS kbFORTRAN510OS2
	Version           : :5.1
	
	=============================================================================
	
