---
layout: page
title: "Q74551: Can't Start MS-DOS 5.0 or later on a BSR Computer"
permalink: kb/074/Q74551/
---

## Q74551: Can't Start MS-DOS 5.0 or later on a BSR Computer

	Article: Q74551
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After installing MS-DOS or later on a BSR computer, you may be unable to start
	MS-DOS from the hard drive, Uninstall disk, or a MS-DOS 5.0 or later bootable
	floppy.
	
	CAUSE
	=====
	
	The BIOS chips in some BSR 386 machines prevent MS-DOS from properly completing
	its starting sequence.
	
	WORKAROUND
	==========
	
	If you are having difficulty starting MS-DOS 5.0, 6.0, or 6.2 on a BSR machine,
	turn off switch 2 on switch bank 1 of the system. If the machine still does not
	start, contact BSR for a BIOS upgrade.
	
	NOTE: Quarterdeck Expanded Memory Manager (QEMM) does not work on the machine
	after this switch has been changed.
	
	
	MORE INFORMATION
	================
	
	If you want to uninstall MS-DOS 5.0, 6.0, or 6.2, you must start from a floppy
	disk from your previous version of MS-DOS, back up the hard drive to floppy
	disks, and manually install the previous version of MS-DOS to the hard drive. To
	reinstall your previous version of MS-DOS, do the following:
	
	1. Use the Sys command to transfer the previous version of DOS system files to
	  the hard drive.
	
	2. Copy the COMMAND.COM file to the root directory of drive C.
	
	3. Copy the contents of the previous version of MS-DOS disks to the DOS
	  directory.
	
	4. Find the old AUTOEXEC.BAT and CONFIG.SYS files on the Uninstall disk as
	  AUTOEXEC.DAT and CONFIG.DAT. Copy them to the hard drive, and rename them
	  AUTOEXEC.BAT and CONFIG.SYS.
	
	For more information, contact DAK Industries technical support.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 6.22 5.00 5.00a 5.0a 6.00 6.20 upgrade update 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
