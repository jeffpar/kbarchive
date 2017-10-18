---
layout: page
title: "Q98760: DoubleSpace Error: R6003 - Integer Divide by Zero"
permalink: kb/098/Q98760/
---

## Q98760: DoubleSpace Error: R6003 - Integer Divide by Zero

	Article: Q98760
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	This information applies to both Microsoft DoubleSpace and Microsoft DriveSpace.
	For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands and filenames.
	
	You may receive the following error message if you are using MS-DOS DoubleSpace:
	
	  Error: R6003 - Integer Divide by Zero
	
	CAUSE
	=====
	
	This error message can be caused by corrupted DoubleSpace files or incompatible
	terminate-and-stay-resident (TSR) programs.
	
	WORKAROUND
	==========
	
	To work around this problem, do the following:
	
	1. Copy the DBLSPACE.BIN file from Disk 1 of the original MS-DOS Upgrade disk
	  set to the root directory for your host drive. For example, if your
	  compressed drive is C, and your host drive is H, type the following at the
	  MS-DOS command prompt and then press ENTER:
	
	  " copy a:\dblspace.bin h:\ " (without the quotation marks)
	
	  To determine your host drive for drive C, type "dblspace /list" (without the
	  quotation marks) at the MS-DOS command prompt and then press ENTER.
	
	  Note: If there is an existing DBLSPACE.BIN file on the host drive but it is
	  corrupted, remove the attributes from the file before copying a new one to
	  the drive. For example, type "attrib h:\dblspace.bin -r -s -h" (without the
	  quotation marks) at the MS-DOS command prompt and then press ENTER.
	
	2. Expand the DBLSPACE.EXE files from the original MS-DOS disks. For example,
	  type the following at the MS-DOS command prompt and then press ENTER:
	
	  " expand a:\dblspace.ex_ c:\dblspace.exe" (without the quotation marks)
	
	  DBLSPACE.EX_ is located on Disk 3 of the 1.44-megabyte (MB) 3.5-inch disk set
	  and on Disk 4 of the 1.2-MB 5.25-inch disk set.
	
	3. Restart your computer by pressing the reset button or by turning the machine
	  off and then on again.
	
	4. If you have not eliminated the problem, restart your computer again. To
	  isolate the problem, press the Clean Start function key (F5) or the
	  Interactive Startup function key (F8) when the text "Starting MS-DOS..."
	  appears to eliminate unnecessary device drives and TSRs.
	
	Additional query words: 6.00 6.20 cold boot run time run-time runtime error R6003
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22
	
	=============================================================================
	
