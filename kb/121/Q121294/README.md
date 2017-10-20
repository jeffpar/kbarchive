---
layout: page
title: "Q121294: Windows 95 Err Msg w/a DISTEC Drive: Missing Operating System"
permalink: /kb/121/Q121294/
---

## Q121294: Windows 95 Err Msg w/a DISTEC Drive: Missing Operating System

{% raw %}

	Article: Q121294
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When Windows 95 reboots after Setup is complete, you receive the following error
	message:
	
	  Missing operating system
	
	CAUSE
	=====
	
	This error message occurs when your DISCTEC removable hard disk drive is set as
	the boot drive.
	
	DISCTEC removable hard disk drives set the CMOS to drive type 2. The DISCTEC
	removable drive device driver (DISCTEC.SYS) then uses an INT 13 function 9 call
	to reset the BIOS with the proper hard disk drive type. The hard disk drive type
	is stored in the partition sector.
	
	Windows 95, as well as some earlier versions of MS-DOS, rewrites the partition
	sector when installed. This causes the code the DISCTEC device driver inserted
	to be removed. Therefore, the BIOS can no longer identify the proper hard disk
	drive type.
	
	WORKAROUND
	==========
	
	- If you have already installed Windows 95 and are receiving the above error
	  message, perform the following steps:
	
	  1. Boot your computer with a bootable floppy disk.
	
	  2. Insert the DISCTEC installation disk in the floppy disk drive and change
	     to this drive (A: or B:).
	
	  3. Use DISCTEC's hard disk drive partitioning software to rewrite the
	     partition table as follows:
	
	  HDPRT /w /0
	
	     NOTE: The last character above is a zero.
	
	     You are returned to a drive prompt without any messages being displayed.
	     This step works correctly as long as the formatting of the hard disk has
	     not changed.
	
	  4. Reboot your computer from the hard disk.
	
	- If you have not installed Windows 95 yet, perform the following steps:
	
	  1. Manually set the CMOS to the proper hard disk drive type.
	
	  2. Remove the DISCTEC.SYS device driver from the CONFIG.SYS file and reboot
	     your computer.
	
	  3. Install Windows 95.
	
	  4. Reinstall the DISCTEC software.
	
	If you continue to receive the above error message or experience other problems
	with your DISCTEC removable drive, contact DISCTEC technical support at (407)
	671-5500.
	
	MORE INFORMATION
	================
	
	After booting from a floppy disk and attempting to access your hard disk drive,
	you may encounter "Sector not found" error messages. To correct these errors,
	make sure that the DISCTEC device driver (DISCTEC.SYS) is loading in the
	CONFIG.SYS file on the floppy disk.
	
	The DISCTEC removable hard disk drive is manufactured by Disk Technologies Corp.,
	a vendor independent of Microsoft; we make no warranty, implied or otherwise,
	regarding this product's performance or reliability.
	
	Additional query words: 3rdparty disktec disktech disctech
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	
	=============================================================================
	

{% endraw %}
