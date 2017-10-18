---
layout: page
title: "Q94722: Running MemMaker to Optimize a Startup Floppy Disk"
permalink: kb/094/Q94722/
---

## Q94722: Running MemMaker to Optimize a Startup Floppy Disk

	Article: Q94722
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you run MemMaker to optimize a startup (boot) floppy disk, it incorrectly
	prompts you to "Remove all floppy disks from your floppy-disk drives and then
	press Enter." Although MemMaker specifically supports the optimization of a
	startup floppy disk, it displays a generic prompt that assumes you are
	optimizing drive C.
	
	To work around this problem, ignore the message to remove all floppy disks, and
	press ENTER to restart your computer.
	
	MORE INFORMATION
	================
	
	To optimize a startup floppy disk, you must run MemMaker from drive A. If you do
	not, MemMaker optimizes the startup files on your hard disk drive.
	
	To start MemMaker from drive A:
	
	1. Change to drive A.
	
	2. Start MemMaker. (To do this, type "memmaker" (without the quotation marks)
	  and then press ENTER.
	
	Note: When you run MemMaker to optimize a startup floppy disk, you must have the
	following five files on the floppy disk in drive A.
	
	  CHKSTATE.SYS
	  EMM386.EXE
	  HIMEM.SYS
	  MEMMAKER.EXE
	  SIZER.EXE
	
	
	Additional query words: 6.22 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
