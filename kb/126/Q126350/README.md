---
layout: page
title: "Q126350: Windows 95 Setup Modifies the Boot Sector of All Drives"
permalink: kb/126/Q126350/
---

## Q126350: Windows 95 Setup Modifies the Boot Sector of All Drives

	Article: Q126350
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you set up Windows 95 on your computer, you can no longer boot from a
	different physical hard disk.
	
	CAUSE
	=====
	
	The Windows 95 Setup program checks all the hard disks in your computer to make
	sure that only one contains 80h in the DriveNumber field of the boot sector. If
	more than one hard disk contains 80h in the DriveNumber field, Setup changes the
	boot sector of all the hard disks so that only drive C contains 80h in the
	DriveNumber field. Setup makes this change so that Windows 95 can find the boot
	disk when you start the computer and recognize the other drives.
	
	
	WORKAROUND
	==========
	
	You can use either of the following methods to correct the DriveNumber field:
	
	- Use the FDISK program that is included with Windows 95 to set the primary
	  active partition.
	
	- Use a disk editor to change a disk's DriveNumber field so that you can boot
	  from that hard disk.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	When the Windows 95 Setup program finds more than one hard disk in a computer,
	it sets the DriveNumber field of all disks other than the boot disk (usually
	drive C) to 81h, even if you had the DriveNumber field of other disks set to 80h
	so the computer could be booted from them.
	
	Additional query words: scsi ide esdi
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
