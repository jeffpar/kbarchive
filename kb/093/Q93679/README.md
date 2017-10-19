---
layout: page
title: "Q93679: Setup Is Unable to Read Uninstall Disk on a COMPAQ"
permalink: /kb/093/Q93679/
---

## Q93679: Setup Is Unable to Read Uninstall Disk on a COMPAQ

	Article: Q93679
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are using SMARTDrive to cache a floppy disk on a COMPAQ machine, MS-DOS 6
	and later Upgrade may be unable to read the Uninstall disk during installation.
	Setup also may also repeatedly ask you to insert MS-DOS Upgrade Setup Disk 1
	after you select the Windows-based and/or MS-DOS-based optional utilities.
	
	CAUSE
	=====
	
	These problems are caused by a problem in the COMPAQ BIOS. They occur when
	SMARTDrive is loaded in upper memory because all floppy disk data transfers go
	through the upper memory blocks (UMBs).
	
	WORKAROUND
	==========
	
	To work around this problem, edit your AUTOEXEC.BAT file as follows so that it
	loads SMARTDrive in conventional memory:
	
	  smartdrv /l
	
	If loading SMARTDrive low does not correct the situation, either configure
	SMARTDrive for read-caching only (no write-cache) on the floppy disk drives, or
	restart your computer without loading SMARTDrive before you run MS-DOS Upgrade
	Setup.
	
	Additional query words: 6.22 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
