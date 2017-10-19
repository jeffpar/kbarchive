---
layout: page
title: "Q139843: Recovering from Stop 21A Caused by Disk Mirror Sets"
permalink: /kb/139/Q139843/
---

## Q139843: Recovering from Stop 21A Caused by Disk Mirror Sets

	Article: Q139843
	Product(s): Microsoft Windows NT
	Version(s): 3.1,3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the Hkey_Local_Machine\System\Disk key gets corrupted or the Microsoft
	Windows NT disk signature on the system drive is removed or changed (and the
	system drive is part of a Windows NT software level mirror set) you may receive
	the following error message and stop message upon restart:
	
	
	  Autochk program not found. Skipping autocheck.
	
	Immediately following the error message above, the next error message will
	appear:
	
	  STOP: c000021a {Fatal System Error}
	  The Session Manager Initialization system process terminated unexpectedly with
	  a status of 0xc0000013 (0x00000000 0x00000000).
	  The system has shutdown.
	
	CAUSE
	=====
	
	This is caused by the File system indicator byte in the master boot record (MBR)
	of the boot drive (that is set to Fault tolerant) but the Windows NT registry
	does not contain FT Information about the drive or partition that is mirrored.
	This can also be caused by a corrupt Ftdisk.sys device driver.
	
	RESOLUTION
	==========
	
	If you have the Windows NT 4.0 Resource Kit, you can use the Disksave.exe
	utility to remove the fault-tolerant bit in the MBR.
	
	To remove the fault-tolerant bit in the MBR, perform the following steps:
	
	1. Restart your computer from an MS-DOS version 6.XX Disk.
	
	2. Run the Disksave.exe utility, and select the F6 option.
	
	  This can reset the high order bit of the system ID Byte of the active
	  partition on disk zero (boot drive only). This does not work if Windows NT is
	  installed on a logical drive in an extended partition.
	
	3. Quit Disksave and restart the computer to Windows NT.
	
	4. When you enter Windows NT, go to Disk Administrator and break the mirror,
	  restart and re-establish the mirror.
	
	-or-
	
	To fix this problem, you need a third-party disk editor, such as Norton
	Diskedit.
	
	To change this, do the following:
	
	NOTE: Norton diskedit is used in the following example.
	
	1. Format a floppy disk with MS-DOS 5.0 or greater using the /s switch to make
	  the disk bootable.
	
	2. Find a copy of Norton Diskedit and place Diskedit.exe on the floppy disk.
	
	NOTE: Make sure the floppy disk is scanned with the latest virus software and
	write protect the disk after formatting. Booting with a floppy disk is one way
	that viruses are transferred to the boot drive.
	
	1. Place the floppy disk in the drive and start the computer. Run Diskedit from
	  the floppy disk.
	
	  a. On the Object menu, select DRIVE..
	
	  b. Select TYPE - Physical Disk and select Hardisk1.
	
	     NOTE: The BIOS must be enabled on the SCSI Host Bus adapter to see the
	     Physical drive, click OK.
	
	     This dumps you out at Cyl 0 Side 0 Sector 1, this is the Master Boot Record
	     of the disk.
	
	  c. Go down to line 000001C0: and find the third byte, this is the File System
	     Indicator.
	
	     NOTE: If you have a Compaq computer with an EISA partition, go down to line
	     000001D0.
	
	     It has one of two values:
	
	  86 = Fat mirror
	  87 = NTFS mirror
	
	  d. Change this value to 06 or 07 depending of the type of file system on the
	     drive.
	
	  e. On the Edit menu, click Write Changes.
	
	  f. Quit Diskedit and restart the computer to Windows NT. When entering
	     Windows NT, go to Disk administrator and break the mirror, restart and
	     reestablish the mirror.
	
	     NOTE: If more than one mirror set was on the system, they can show up in
	     disk administrator without a drive letter. Just assign one in disk
	     administrator.
	
	NOTE: The MS-DOS boot disk must be formatted on an NTFS system.
	
	
	Additional query words: prodnt fault tolerence ft
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNT310Search
	Version           : :3.1,3.5,3.51,4.0
	Issue type        : kbhowto
	
	=============================================================================
	
