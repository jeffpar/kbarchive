---
layout: page
title: "Q118549: PRB: PowerStation MS-DOS Apps Do Not Start Under Win32s"
permalink: /kb/118/Q118549/
---

## Q118549: PRB: PowerStation MS-DOS Apps Do Not Start Under Win32s

	Article: Q118549
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0,1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN PowerStation for MS-DOS, versions 1.0, 1.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Applications created using FORTRAN PowerStation for MS-DOS fail to start from
	File Manager or Program Manager if Win32s is installed. The hourglass appears
	and then goes away, but the application does not start.
	
	CAUSE
	=====
	
	The application is identified as having the Parity Enable (PE) format, so it is
	loaded by the Win32s loader. However, output to the console is not supported, so
	the application does not appear to be running.
	
	RESOLUTION
	==========
	
	Create a program information file (PIF) to start the application. When the PIF
	is run from File Manager or Program Manager, the application is started by
	Windows and runs correctly.
	
	Additional query words: 1.00 nofpsnt 1.00a filemanager launch double-click doubleclick click
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword3 kbFORTRANPower100DOS kbFORTRANPower100aDOS
	Version           : :1.0,1.0a
	
	=============================================================================
	
