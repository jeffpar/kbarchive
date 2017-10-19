---
layout: page
title: "Q75529: Differences Between Tandy DOS 5.0 and MS-DOS 5.0"
permalink: /kb/075/Q75529/
---

## Q75529: Differences Between Tandy DOS 5.0 and MS-DOS 5.0

	Article: Q75529
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Tandy is shipping its own version of the MS-DOS 5 Upgrade called Tandy DOS 5.0
	Upgrade. It is available through Radio Shack stores nationwide.
	
	MORE INFORMATION
	================
	
	The differences between the Microsoft MS-DOS 5 Upgrade and the Tandy DOS 5.0
	Upgrade are as follows:
	
	- The Tandy Upgrade must be run from drive A after using UPGRADE.COM to make
	  the disk bootable and rebooting the system. Setup does not create an
	  Uninstall disk. Setup also deletes all files it does not recognize in the DOS
	  directory. It then expands all of the DOS files into the DOS directory and
	  after going through the five disks, it again goes to disk 1 and disk 2.
	  Instead of modifying the current CONFIG.SYS and AUTOEXEC.BAT files, it
	  renames them to CONFIG.OLD and AUTOEXEC.OLD and places a new CONFIG.SYS and
	  AUTOEXEC.BAT in the root directory.
	
	  The Tandy Upgrade Setup does not remove IO.SYS and MSDOS.SYS if these were the
	  names of the previous system files.
	
	- Tandy MS-DOS 5.0 Upgrade ships with both 3.5-inch and 5.25-inch disks.
	
	- Tandy MS-DOS 5.0 Upgrade has a program, UPGRADE.COM, that makes the first
	  upgrade disk bootable.
	
	- Tandy MS-DOS 5.0 Upgrade uses the IBM convention for system files: IBMBIO.COM
	  and IBMDOS.COM.
	
	- Tandy MS-DOS 5.0 Upgrade has FDISK and FORMAT in noncompressed mode.
	
	- Date and time of Tandy MS-DOS files are 05-22-91 at 1:00p.
	
	- Tandy MS-DOS 5.0 Upgrade does not include HDBKUP.EXE, HDRSTORE.EXE, the
	  updated Disk Manager, Speedstore, or network redirectors shipped with the
	  Microsoft upgrade product.
	
	- Tandy MS-DOS 5.0 Upgrade comes with Logitech mouse driver release 6.0 that
	  includes both MOUSE.SYS and MOUSE.COM.
	
	- Tandy MS-DOS 5.0 Upgrade also includes the file HSECT.COM, which is a Tandy
	  utility for low level hard drive formatting.
	
	The product included here (Tandy MS-DOS 5.0 Upgrade) is manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: 5.00 noupd
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	
