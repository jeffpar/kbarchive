---
layout: page
title: "Q73444: Using DiskLock PC with MS-DOS 5.x or 6.x"
permalink: kb/073/Q73444/
---

## Q73444: Using DiskLock PC with MS-DOS 5.x or 6.x

	Article: Q73444
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains information about using DiskLock PC versions 1.01 and 1.02
	from Fifth Generation Systems with MS-DOS version 5.0 or 6.0.
	
	DiskLock is drive-locking software. Once installed, it modifies the master boot
	record and installs the device driver, DISKLOCK.SYS, in the CONFIG.SYS file.
	According to Fifth Generation Systems, DiskLock PC is compatible with MS-DOS 5.0
	or 6.0 as long as CONFIG.SYS contains the following lines:
	
	  DEVICE = C:\DOS\HIMEM.SYS
	  DOS = HIGH
	
	If either of these lines is not present, DiskLock PC may not load or may generate
	a series of error messages.
	
	According to Fifth Generation Systems, the recommended steps to install MS-DOS
	5.x or 6.x on a machine with DiskLock PC are:
	
	1. Uninstall DiskLock.
	
	2. Install MS-DOS 5.0 or 6.0.
	
	3. Install DiskLock.
	
	MORE INFORMATION
	================
	
	DiskLock PC allows locking of floppy drives, individual partitions on a hard
	drive, files, and directories.
	
	DiskLock PC modifies the master boot record so that the first thing the system
	does is look for the DISKLOCK.SYS device driver. If such a driver cannot be
	loaded, the machine is unusable. You may be able to access the drive(s);
	however, all data on the drive(s) or locked files or directories is encrypted.
	To verify whether you can properly access the drive, issue the DIR command. The
	screen displays scrambled information that cannot be read. This is due to the
	encrypting in effect by DiskLock. No data is lost, however, and the hard drive
	is still operable as long as you load DiskLock again.
	
	If you use FDISK to view the partition(s) information, the locked drive will show
	as a XENIX partition. Even though such a partition can be deleted in MS-DOS 5.0
	or 6.0, doing so is not recommended because your data is still encrypted and you
	cannot access it.
	
	Loading MS-DOS low or falling to install HIMEM renders the machine unusable. If
	you cannot reload DiskLock, the only way to be able to use the hard drive is to
	low-level format it. If DiskLock hangs during installation after installing
	MS-DOS 5.0 or 6.0, you cannot use it.
	
	If you use DiskLock PC with MS-DOS 6.0, you cannot use the MEM command to display
	what is loading in the Upper Memory Block (UMB) area. Upper memory is displayed
	as 0. DiskLock does not prevent the use of the UMB; it just prevents the
	information from being shown when you issue the MEM command.
	
	DiskLock PC is manufactured by Fifth Generation Systems, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 5.00 5.00a 6.00 6.20 3rdparty 5th
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2
	
	=============================================================================
	
