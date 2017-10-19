---
layout: page
title: "Q98115: Microsoft Backup Doesn't Work on Panasonic Notebook Computers"
permalink: /kb/098/Q98115/
---

## Q98115: Microsoft Backup Doesn't Work on Panasonic Notebook Computers

	Article: Q98115
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may have difficulty running Microsoft Backup on a Panasonic notebook
	computer (models CF170, CF270, and CF370) or on a Texas Instruments 4000e laptop
	machine. After you insert a floppy disk, Backup may not respond or one of the
	following error messages may be displayed:
	
	  Defective Floppy
	
	  -or-
	
	  Please insert disk 27724 in drive x
	
	In addition, all of the data on the floppy disk may be erased.
	
	CAUSE
	=====
	
	This problem is caused by the computer's power-saving feature which interferes
	with or turns off the floppy disk drives.
	
	WORKAROUND
	==========
	
	To run Backup and use the floppy disk drives, you must run POWERxxx.EXE (where
	xxx is the specific model number of the laptop) and disable the "floppy
	time-out" feature.
	
	Additional query words: 6.00 note book laptop lap top msbackup mwbackup 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22
	
	=============================================================================
	
