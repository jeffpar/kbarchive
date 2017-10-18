---
layout: page
title: "Q106567: BUG: RUNQQ Generates DX1420 for MS-DOS Extended Tools"
permalink: kb/106/Q106567/
---

## Q106567: BUG: RUNQQ Generates DX1420 for MS-DOS Extended Tools

	Article: Q106567
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
	
	RUNQQ generates the following error message when it invokes any executable that
	requires the MS-DOS extended utility shipped with Microsoft language products:
	
	  DOSXMSF : fatal error DX1420: cannot load program : invalid or corrupted .EXE
	  file
	
	For example, RUNQQ cannot execute the MS-DOS extended utilities such as NMAKE,
	FL32, and LINK32, that are shipped with Microsoft FORTRAN PowerStation for
	MS-DOS, version 1.0 and 1.0a.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in FORTRAN PowerStation for MS-DOS,
	version 1.0 and 1.0a.
	
	This is not a problem with FORTRAN PowerStation 32.
	
	MORE INFORMATION
	================
	
	The following sample program generates DX1420 when RUNQQ executes the MS-DOS
	extended utility FL32.EXE. RUNQQ does not cause any problems when it spawns
	16-bit programs and utilities.
	
	Sample Code
	-----------
	
	  C No compiler options required
	         include 'flib.fi'
	         include 'flib.fd'
	         i = runqq('fl32',' ')
	         print '(A,I3)',' Return Code:', i
	         end
	
	The following output is produced when the above program is executed:
	
	  DOSXMSF : fatal error DX1420: cannot load program : invalid or corrupted .EXE
	  file
	  Additional info: "C:\F32\BIN\fl32.exe"
	  Return Code: 11
	
	Additional query words: nofpsnt 1.00 1.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword3 kbFORTRANPower100DOS kbFORTRANPower100aDOS
	Version           : :1.0,1.0a
	
	=============================================================================
	
