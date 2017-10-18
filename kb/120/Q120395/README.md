---
layout: page
title: "Q120395: PRB: Link or CVPack May Fail with PS 1.0a Objects"
permalink: kb/120/Q120395/
---

## Q120395: PRB: Link or CVPack May Fail with PS 1.0a Objects

	Article: Q120395
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN PowerStation for MS-DOS, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you build a debug version of an application with FORTRAN PowerStation for
	MS-DOS version 1.0 (PS 1.0) and include object modules (.OBJ) compiled with
	FORTRAN PowerStation for MS-DOS version 1.0a (PS 1.0a), the following errors may
	be generated:
	
	  Assertion failed: i != C7FIXUPSYMCNT, file symbols7.c, line 314
	
	-or-
	
	  CVPACK : fatal error CK1010: symbol error in module;
	  contact Microsoft Product Support Services
	
	-or-
	
	  ***** Linker INTERNAL ERROR during EmitCodeView *****
	
	  Command line error D2027 : cannot execute 'C:\F32\BIN\link32.exe'
	
	CAUSE
	=====
	
	The versions of CVPack and Link32 included with PS 1.0 may not be able handle
	the debugging information appended to object modules by the PS 1.0a compiler. PS
	1.0a inserts debug information into the object module when you use the compiler
	options /Zi and /Zd, as expected, but also inserts some debug information when
	you use the /Ox compiler option.
	
	RESOLUTION
	==========
	
	Call Microsoft support, (425) 635-7015, and ask for the free update to Microsoft
	FORTRAN PowerStation for MS-DOS version 1.0a.
	
	While using PS 1.0 do not build in debug mode or do not include object modules
	from PS 1.0a that have debug information.
	
	Re-compile the object modules from PS 1.0a without using options /Ox, /Zi, or
	/Zp.
	
	MORE INFORMATION
	================
	
	Version information
	-------------------
	
	            PS 1.0   PS 1.0a
	  --------------------------
	  Link32      2.8      1.0F
	  CVPack      4.21     4.25
	
	To determine the version of CVPack, type the following at the MS-DOS prompt:
	
	  " CVPACK" (without the quotation marks)
	
	The version number will be displayed.
	
	To determine the version of Link32, type the following at the MS-DOS prompt:
	
	  " link32 | more" (without the quotation marks)
	
	Steps to Reproduce the Problem
	------------------------------
	
	Because the Microsoft IMSL for FORTRAN PowerStation libraries were built with PS
	1.0a using the /Ox option, they include some debugging information and can be
	used to demonstrate the problem.
	
	1. Build one of the samples from the Microsoft IMSL Libraries. For example, move
	  to the C:\MSIMSL32\FORTRAN\EXAMPLES\MATH\DOUBLE directory and type the
	  following at the MS-DOS prompt:
	
	  " fl32 -Zi dlprs_ex.for -link mathd.lib" (without the quotation marks)
	
	  The following error is displayed:
	
	  ***** Linker INTERNAL ERROR during EmitCodeView *****
	
	  Command line error D2027 : cannot execute 'C:\F32\BIN\link32.exe'
	
	2. Modify the makefile so the compiler switch /Zi or /Zd is used.
	
	  The following errors are displayed:
	
	  CVPACK : fatal error CK1010: symbol error in module dlprs_ex.obj; contact
	  Microsoft Product Support Services
	  LINK32 : warning LNK4527: CVPACK error
	  Command line error D2027 : cannot execute 'C:\F32\BIN\link32.exe'
	  NMAKE : fatal error U1077: 'FL32' : return code '0x2'
	  Stop.
	
	Additional query words: 1.00 1.00a compile link failure
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword3 kbFORTRANPower100DOS
	Version           : :1.0
	
	=============================================================================
	
