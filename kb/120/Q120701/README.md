---
layout: page
title: "Q120701: Setup Does Not Copy Files to Disk"
permalink: /kb/120/Q120701/
---

## Q120701: Setup Does Not Copy Files to Disk

	Article: Q120701
	Product(s): Microsoft Home Games
	Version(s): MS-DOS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Space Simulator for MS-DOS, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If the SETUP.EXE program for Space Simulator is run from any active drive other
	than drive A or B, Setup will not copy any files to the hard disk.
	
	For example, typing "a:\setup" (without the quotation marks) at the C:\ MS-DOS
	prompt will not perform a complete setup because drive C is the active drive.
	
	MORE INFORMATION
	================
	
	The SETUP.EXE file will operate in one of two modes depending on the conditions
	it detects. If Setup detects that the active drive is either the floppy drive A
	or B, it will perform a complete installation, including creating the necessary
	directory, copying all files to the disk, and configuring the program. If Setup
	detects that the active drive is not drive A or B, it will operate in a
	configuration mode, bypassing the directory creation and file copy, and will
	only perform the configuration portion of the Setup process.
	
	Additional query words: 1.00 Spacesim sim dos ss1 D_spacesim
	
	======================================================================
	Keywords          :  
	Technology        : kbGamesSearch kbZNotKeyword3 kbSpaceSim100DOS
	Version           : MS-DOS:1.0
	Issue type        : kbinfo
	
	=============================================================================
	
