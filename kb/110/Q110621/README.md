---
layout: page
title: "Q110621: Defragmenter Err Msg: Program Too Big to Fit into Memory"
permalink: kb/110/Q110621/
---

## Q110621: Defragmenter Err Msg: Program Too Big to Fit into Memory

	Article: Q110621
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Microsoft Defragmenter (DEFRAG.EXE), you may encounter the
	following error:
	
	  Program too big to fit into memory
	
	This error can occur even if plenty of memory is available and the hard disk
	drive's specifications do not exceed the limitations of DEFRAG.EXE.
	
	CAUSE
	=====
	
	This problem can be caused by either of the following:
	
	- DEFRAG.EXE was not properly upgraded by the MS-DOS 6.2 Step-Up program.
	
	-or-
	
	- DEFRAG.EXE has become corrupted.
	
	WORKAROUND
	==========
	
	If you have and MS-DOS Upgrade package, DEFRAG.EXE is not compressed and can be
	copied from the original disks. Delete or rename DEFRAG.EXE on your hard disk
	drive before copying the replacement file from the floppy disks.
	
	If you installed MS-DOS Step-Up to upgrade from 6.0 to 6.2, copy DEFRAG.EXE from
	your original MS-DOS 6.0 disks to your hard disk drive and then run Step-Up to
	upgrade DEFRAG.EXE.
	
	Additional query words: 6.22 6.20 program defrag corrupt stepup
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.21,6.22
	
	=============================================================================
	
