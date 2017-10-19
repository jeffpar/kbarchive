---
layout: page
title: "Q107602: MS-DOS 6.2 Stacker Conversion Err Msg: Out of Memory"
permalink: /kb/107/Q107602/
---

## Q107602: MS-DOS 6.2 Stacker Conversion Err Msg: Out of Memory

	Article: Q107602
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you start the Stacker conversion process and DoubleSpace reboots your
	computer, you may receive the following error message:
	
	  AN ERROR OCCURRED while attempting to convert Stacker volume c:\stacvol.dsk
	  to DoubleSpace format. There is not enough conventional memory.
	
	CAUSE
	=====
	
	This problem occurs when DoubleSpace reboots your computer and there is
	insufficient memory to convert your Stacker volume file (SVF) to a DoubleSpace
	compressed volume file (CVF) due to the size of your SVF.
	
	RESOLUTION
	==========
	
	You can work around this problem by using the following procedure:
	
	NOTE: Reboot your computer and try to run the Stacker conversion routine after
	each step.
	
	1. Place DBLSPACE.SYS in a parallel directory on the host drive. For example, if
	  C:\DOS contains your MS-DOS files, and your host drive is D, type "xcopy
	  c:\dos\dblspace.sys d:\dos\" (without the quotation marks) at the MS-DOS
	  command prompt and then press ENTER.
	
	2. Edit the CONFIG.SYS file and ensure the DEVICE commands for HIMEM.SYS and, if
	  present, EMM386.EXE are placed before the first DEVICE=C:\DOS\DBLSPACE.SYS
	  line.
	
	3. Edit the CONFIG.SYS and AUTOEXEC.BAT files and remark out unneeded device
	  drivers and terminate-and-stay-resident (TSR) programs using the REM command.
	
	4. Defragment the host drive for the Stacker-compressed drive. To do this:
	
	  a. Copy ATTRIB.EXE to the host drive.
	
	  b. Copy DEFRAG.EXE to the host drive.
	
	  c. Unmount the Stacker-compressed drive.
	
	  d. Clear the file attributes on the SVF. For example, type "attrib -r -s -h
	     stacvol.*" (without the quotation marks) at the MS-DOS command prompt and
	     then press ENTER.
	
	  e. Run DEFRAG /H <host drive> to fully defragment the Stacker host
	     drive.
	
	Additional query words: 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch
	Version           : MS-DOS:
	
	=============================================================================
	
