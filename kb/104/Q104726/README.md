---
layout: page
title: "Q104726: DoubleSpace Restarts Your Computer and Loops Endlessly"
permalink: kb/104/Q104726/
---

## Q104726: DoubleSpace Restarts Your Computer and Loops Endlessly

	Article: Q104726
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	This information applies to both Microsoft DoubleSpace and Microsoft
	DriveSpace. For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands
	and filenames.
	
	SYMPTOMS
	========
	
	When DoubleSpace restarts your computer to increase the DBLSPACE.INI
	MaxFileFragments setting (because your DoubleSpace-compressed drive is too
	fragmented to mount), your computer becomes trapped in an endless loop.
	
	CAUSE
	=====
	
	This problem occurs when a DoubleSpace-compressed drive on your hard disk drive
	is too fragmented to mount and you are booting your computer from a floppy disk
	(typically in drive A).
	
	DoubleSpace modifies the DBLSPACE.INI file on the host drive for the overly
	fragmented DoubleSpace-compressed drive; DoubleSpace does not consider which
	drive is the boot drive.
	
	
	RESOLUTION
	==========
	
	To work around this situation:
	
	1. Ensure the floppy disk drives are empty and reboot your computer.
	
	2. When the "Starting MS-DOS..." prompt is displayed, press F5.
	
	3. Run Microsoft Defragmenter (Defrag).
	
	4. Restart you computer.
	
	Additional query words: 6.20 6.22 stuck
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.22
	
	=============================================================================
	
