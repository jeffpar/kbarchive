---
layout: page
title: "Q96204: You have a SCSI Hard Disk Drive and MemMaker Hangs"
permalink: kb/096/Q96204/
---

## Q96204: You have a SCSI Hard Disk Drive and MemMaker Hangs

	Article: Q96204
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have an SCSI hard disk and MemMaker stops responding (hangs), a device
	driver may be loading into upper memory before the SMARTDrive double_buffer
	driver in the CONFIG.SYS file.
	
	WORKAROUND
	==========
	
	To work around this problem,
	
	1. Restart your computer (if you haven't already done so).
	
	2. When MemMaker prompts you for input, choose Cancel And Undo Changes.
	
	3. Use MS-DOS Editor to add the following line to the beginning of your
	  CONFIG.SYS file:
	
	     device=c:\dos\smartdrv.exe /double_buffer+
	
	  NOTE: If this line already appears in your CONFIG.SYS file, make sure it is
	  the first line.
	
	4. Save your CONFIG.SYS file.
	
	5. Try running MemMaker again.
	
	MORE INFORMATION
	================
	
	If this does not correct the problem refer to Chapter 6 of the "Microsoft MS-DOS
	6 User's Guide" for information about troubleshooting MemMaker.
	
	For more information about SMARTDrive and the double_buffer driver, query on the
	following words in the Microsoft Knowledge Base:
	
	  smartdrive and double_buffer
	
	Additional query words: 6.22 6.0 6.2 load loading high umb uma devicehigh
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
