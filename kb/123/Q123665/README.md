---
layout: page
title: "Q123665: PRB: DOSXNT: Fatal Error DX1410: Cannot Load Program"
permalink: kb/123/Q123665/
---

## Q123665: PRB: DOSXNT: Fatal Error DX1410: Cannot Load Program

	Article: Q123665
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0,1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN PowerStation for MS-DOS, versions 1.0, 1.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While building a program, the following error is generated:
	
	  DOSXNT : fatal error DX1410: cannot load program : entry point not found in
	  DLL
	
	Or while running a FORTRAN PowerStation program, the following error is
	generated:
	
	  DOSXMSF : fatal error DX1410: cannot load program : entry point not found in
	  DLL
	
	CAUSE
	=====
	
	An older version of the MS-DOS-extender was found and used when building or
	running the program. This older version of the MS-DOS-extender is not compatible
	with the build tools (NMAKE, compiler, linker, and so forth) or it is not
	compatible with the programs created with the new version of the FORTRAN
	PowerStation.
	
	The following MS-DOS-extender is used when building programs:
	
	  DOSXNT.EXE
	
	The MS-DOS-extender used when running FORTRAN PowerStation applications is:
	
	  DOSXMSF.EXE
	
	RESOLUTION
	==========
	
	Do all of the following:
	
	- Check the PATH environment variable to be sure that the most recent version
	  of the MS-DOS-extender will be found.
	
	- Delete all older versions of the MS-DOS-extenders everywhere on the entire
	  system so they are not accidentally used when building or running the
	  program. Check all drives and subdirectories.
	
	- Check all connected network drives to ensure they do not have copies of the
	  MS-DOS-extenders. If they do, rearrange the order of directories in the PATH
	  so that the local directory (containing the most recent MS-DOS- extenders) is
	  before all directories containing older versions of the MS-DOS-extenders.
	
	MORE INFORMATION
	================
	
	For FORTRAN PowerStation, the old build tools and previously built programs will
	run using the new versions of the MS-DOS-extenders, so there is no need to keep
	the old MS-DOS-extenders.
	
	To check the versions, compare the file creation dates for each copy of the
	files: DOSXNT.EXE and DOSXMSF.EXE.
	
	NOTE: File creation dates are not completely reliable.
	
	REFERENCES
	==========
	
	For more information on FORTRAN PowerStation 1.0a, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q123660 Maintenance Release for FORTRAN PowerStation
	
	Additional query words: 1.00 1.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword3 kbFORTRANPower100DOS kbFORTRANPower100aDOS
	Version           : :1.0,1.0a
	
	=============================================================================
	
