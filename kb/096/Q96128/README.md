---
layout: page
title: "Q96128: How Setup, MemMaker, and DoubleSpace Find Windows"
permalink: kb/096/Q96128/
---

## Q96128: How Setup, MemMaker, and DoubleSpace Find Windows

	Article: Q96128
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	This information applies to both Microsoft DoubleSpace and Microsoft
	DriveSpace. For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands
	and filenames.
	
	SUMMARY
	=======
	
	Setup, MemMaker, and DoubleSpace need to locate the Windows directory on your
	hard disk (if you have one).
	
	MORE INFORMATION
	================
	
	To find the Windows directory, Setup looks for the following three files:
	
	  WIN.COM
	  PROGMAN.INI
	  SYSTEM.INI
	
	When you run SETUP /E to install the optional utilities, Setup checks to make
	sure your DOS directory is in the path and looks for one of the following files
	in that directory: DISKCOPY.COM, FORMAT.COM, or SYS.COM.
	
	MemMaker looks for the WINVER.EXE file.
	
	DoubleSpace looks for the following three files:
	
	  WINVER.EXE
	  SYSTEM.INI
	  WINFILE.INI
	
	Additional query words: 6.00 setup.exe busetup.exe memmaker.exe dblspace dblspace.exe 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22
	
	=============================================================================
	
