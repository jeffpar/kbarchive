---
layout: page
title: "Q106728: BUG: DX1010 Running PowerStation Application from NMAKE"
permalink: /kb/106/Q106728/
---

## Q106728: BUG: DX1010 Running PowerStation Application from NMAKE

	Article: Q106728
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
	
	When using an MS-DOS extended version of NMAKE, the DOSXNT error
	
	  DOSXNT : fatal error DX1010: DOS-Extended applications nested too deeply
	
	occurs when attempting to run an application built with FORTRAN PowerStation from
	the makefile.
	
	CAUSE
	=====
	
	FORTRAN PowerStation for MS-DOS comes with two MS-DOS extenders:
	
	DOSXMSF.EXE -- This is the MS-DOS extender used by programs created with the
	FORTRAN PowerStation.
	
	DOSXNT.EXE -- This is the MS-DOS extender loaded by PowerStation utilities such
	as NMAKE and FL32.
	
	The DX1010 error occurs when attempting to load one MS-DOS extender while the
	other MS-DOS extender is in memory. These two MS-DOS extenders are not
	compatible (see the Microsoft Knowledge Base article Q106567 for more
	information on the incompatibility between DOSXNT.EXE and DOSXMSF.EXE).
	
	RESOLUTION
	==========
	
	There are two alternatives to avoid the conflict:
	
	- Do not use a version of NMAKE that loads DOSXNT.EXE.
	
	- Compile the programs that are run from the makefile with FORTRAN version 5.1
	  or earlier.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in FORTRAN PowerStation version 1.0
	and 1.0a for MS-DOS.
	
	This is not a problem in FORTRAN PowerStation 32.
	
	MORE INFORMATION
	================
	
	Running NMAKE that ships with the FORTRAN PowerStation on the sample makefile
	below generates the DX1010 error when attempting to run HELLO.EXE:
	
	Sample Makefile
	---------------
	
	  run: hello.exe
	     hello
	  hello.exe:
	     fl32 <<hello.for
	         print *, 'Hello'
	         end
	  <<KEEP
	
	Additional query words: nofpsnt 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword3 kbFORTRANPower100DOS kbFORTRANPower100aDOS
	Version           : :1.0,1.0a
	
	=============================================================================
	
