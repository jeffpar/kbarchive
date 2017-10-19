---
layout: page
title: "Q67365: Err Msg When Booting System: NO ROM BASIC"
permalink: /kb/067/Q67365/
---

## Q67365: Err Msg When Booting System: NO ROM BASIC

	Article: Q67365
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21,6.22; WINDOWS:95
	Operating System(s): 
	Keyword(s): msdos win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you partition your hard disk and install MS-DOS or Windows 95, you may
	receive the following message when you turn on your computer:
	
	  NO ROM BASIC
	
	  SYSTEM HALTED
	
	CAUSE
	=====
	
	You did not select an active partition. (You must do this in addition to
	partitioning the hard disk.)
	
	Note that this error message can also occur if the motherboard in your computer
	is failing.
	
	RESOLUTION
	==========
	
	To select an active partition, choose the Set Active Partition option on the
	FDISK main menu. The only MS-DOS or Windows 95 partition that can be set as
	active is the primary DOS partition.
	
	MORE INFORMATION
	================
	
	When the computer is started, the boot routine polls drive A for a valid boot
	disk. If no boot disk is detected, the system reads the boot sector from the
	first physical hard disk. The partition table is examined for a partition with a
	boot indicator. If no partitions are marked as bootable, the system executes an
	interrupt 18H, which transfers control to ROM Basic.
	
	Only IBM personal computers have Basic included in ROM; on a compatible,
	interrupt 18H typically displays the message "NO ROM BASIC," then "SYSTEM
	HALTED," and the system halts.
	
	Under these conditions, some older Compaq DESKPRO computers display the message:
	
	  Non-System disk or disk error
	  replace and strike any key when ready
	
	It is also possible for some systems to return the message:
	
	  System does not support resident BASIC
	
	If this behavior occurs when there is a bootable floppy disk in drive A, make
	sure that the boot sequence is set to drive A and then drive C in the computer's
	CMOS settings (instead of drive C and then drive A).
	
	Additional query words: 6.22 3.20 3.21 3.30 3.30a 4.00 4.01 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          : msdos win95 
	Technology        : kbWin95search kbZNotKeyword3 kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21,6.22; WINDOWS:95
	
	=============================================================================
	
