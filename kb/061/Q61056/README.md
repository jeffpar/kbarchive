---
layout: page
title: "Q61056: Why Zero-Length .SBR Files Are Left on the Disk by the PWB"
permalink: kb/061/Q61056/
---

## Q61056: Why Zero-Length .SBR Files Are Left on the Disk by the PWB

	Article: Q61056
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:1.0,1.1; OS/2:1.0,1.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Programmer's Workbench for MS-DOS, versions 1.0, 1.1 
	- Microsoft Programmer's Workbench for OS/2, versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When using the Source Browser functionality within the Programmer's WorkBench
	(PWB) versions 1.0 and 1.1, you can expect to have zero-length .SBR files on
	your disk. This is by design of the PWBRMAKE utility.
	
	MORE INFORMATION
	================
	
	PWBRMAKE.EXE is a utility that converts the .SBR files created by the compiler
	for each program module into a single database file that can be read by the
	Programmer's WorkBench (PWB) Source Browser. The resulting Source Browser
	database file has the extension .BSC.
	
	When a Source Browser database (a .BSC file) is built from .SBR files, the .SBR
	files are truncated to zero length to save disk space since they can be quite
	large. .SBR files are truncated to zero length, rather than being deleted,
	because PWBRMAKE performs incremental updates to the database and, therefore,
	needs the time and date stamp from the files.
	
	When you rebuild part of your project, new .SBR files are built for those
	modules. Each .SBR file that has not been re-created during a build is included
	as a zero-length file. This tells PWBRMAKE that the file has no new contribution
	to make to the database, so no update of that part of the database is required.
	
	Additional query words: kbinf 1.00 1.10 PWBIss
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbPWBSearch kbZNotKeyword3 kbPWB100DOS kbPWB110DOS kbPWB100OS2 kbPWB110OS2
	Version           : MS-DOS:1.0,1.1; OS/2:1.0,1.1
	
	=============================================================================
	
