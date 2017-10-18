---
layout: page
title: "Q94569: Compression Software Doesn't Load After Running MemMaker"
permalink: kb/094/Q94569/
---

## Q94569: Compression Software Doesn't Load After Running MemMaker

	Article: Q94569
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you run MemMaker with a third-party disk compression program, such as Stacker
	or SuperStor, MemMaker cannot undo the changes in the CONFIG.SYS and
	AUTOEXEC.BAT files after a failed boot attempt.
	
	MORE INFORMATION
	================
	
	If a reboot attempt fails, MemMaker provides a Cancel button to undo changes.
	MemMaker attempts to undo all changes to your CONFIG.SYS and AUTOEXEC.BAT files
	on the host drive but cannot because the compressed drive in no longer mounted.
	
	Although MemMaker correctly detects compression on the system and verifies that
	the CONFIG.SYS and AUTOEXEC.BAT files match, the problem still occurs because
	CHKSTATE.SYS is loaded before the disk-compression software. MemMaker is able to
	restore the files on the host drive, but not on the compressed volume (which is
	swapped with the host AFTER the disk- compression software is loaded).
	
	To restore your computer to its previous state, copy and rename the AUTOEXEC.UMB
	and CONFIG.UMB files from the host drive to the compressed volume after you
	choose the MemMaker Cancel option. For example, if drive D is the uncompressed
	host drive and drive C is the compressed volume, use the following commands:
	
	  copy d:\autoexec.umb c:\autoexec.bat
	  copy d:\config.umb c:\config.sys
	
	Additional query words: 6.22 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
