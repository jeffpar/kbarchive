---
layout: page
title: "Q132621: Cannot Start Help After Removing Disk from Disk Drive"
permalink: /kb/132/Q132621/
---

## Q132621: Cannot Start Help After Removing Disk from Disk Drive

	Article: Q132621
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95 appscomp kbAppCompatibility
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you load a Windows-based program file from a disk in a disk drive or save
	a Windows-based program file to a disk in a disk drive, and then you remove the
	disk from the drive, you are unable to start Windows Help from within the
	Windows-based program. Depending on the Windows-based program that you are
	using, you may or may not receive an error message indicating that Windows Help
	did not start.
	
	CAUSE
	=====
	
	When you start Windows Help from a Windows-based program, Windows 95 passes the
	program's current working directory to Windows Help. If the current working
	directory is located on a disk drive, and if there is no disk in that drive,
	Windows 95 does not verify that the directory exists and therefore does not
	start Windows Help.
	
	RESOLUTION
	==========
	
	To work around this behavior, insert a disk in the disk drive, or change the
	current working directory to a valid directory using the program's File Open and
	Save commands.
	
	======================================================================
	Keywords          : win95 appscomp kbAppCompatibility 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
