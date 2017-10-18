---
layout: page
title: "Q97837: Changes and Functions of SpaceMan with MS-DOS DoubleSpace"
permalink: kb/097/Q97837/
---

## Q97837: Changes and Functions of SpaceMan with MS-DOS DoubleSpace

	Article: Q97837
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This information applies to both Microsoft DoubleSpace and Microsoft DriveSpace.
	For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands and filenames.
	
	SpaceManager is a third-party disk utility that works with DoubleSpace to do the
	following:
	
	- Increase the actual compression ratio (ACR)
	
	- Automatically mount DoubleSpace-compressed floppy disks
	
	- Make DoubleSpace-compressed removable media disk usable by any computer using
	  MS-DOS 3.31 or later
	
	To use SpaceManager with MS-DOS 6.2 DoubleSpace, you need to obtain version 1.53
	from Verisoft.
	
	MORE INFORMATION
	================
	
	SpaceManager makes changes to the AUTOEXEC.BAT and SYSTEM.INI files. These
	changes are explained below and can be remarked out (using the REM command)
	without causing any problems.
	
	SpaceManager uses the following files:
	
	    Filename          Function
	  -------------------------------------------------------------
	
	  SELECTC.BAT       This batch file is used to select the level
	                    of compression for different types of files.
	
	  SMOUNT.EXE        This file is used to automatically mount
	                    removable media disks.
	
	  FORTUNE.EXE       This file is used to estimate free disk
	                    space.
	
	Sample AUTOEXEC.BAT File
	------------------------
	
	set spaceman=c:\spaceman\ 
	call c:\spaceman\selectc /b
	c:\spaceman\smount /b
	c:\spaceman\fortune /b
	
	NOTE: The /B parameter causes the program to look in the SPACEMAN.INI file for
	the load=1 line, which indicates that command should run.
	
	Changes Made to the [386enh] Section of the SYSTEM.INI File
	-----------------------------------------------------------
	
	SpaceManager adds "device=c:\spaceman\spaceman.386" to the [386enh] section of
	the SYSTEM.INI file. This file is a Windows-based virtual compression manager.
	
	For more information, call Vertisoft Systems.
	
	SpaceManager is manufactured by Vertisoft Systems, Inc., a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 6.00 6.20 man space manager disk-compression dblspace double
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22
	
	=============================================================================
	
