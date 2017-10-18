---
layout: page
title: "Q129042: Alternate Methods of Booting from a Failed Mirror"
permalink: kb/129/Q129042/
---

## Q129042: Alternate Methods of Booting from a Failed Mirror

	Article: Q129042
	Product(s): Microsoft Windows NT
	Version(s): 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	If the primary or boot drive is mirrored and fails, the following alternate
	method can be used to boot from the mirrored drive if there is no fault
	tolerant boot floppy available. This procedure applies only if the boot
	partition is mirrored. You need MS-DOS FDISK.EXE or Norton Utilities
	DISKEDIT.EXE. This method works only fox x86-based platforms.
	
	1. Remove the power cable from the failed primary drive.
	
	2. Boot from drive A.
	
	3. To use FDISK:
	
	  a. Start FDISK. Make sure you have Fixed Disk Drive 1 selected.
	
	  b. Select option 2, Set Active Partition.
	
	  c. Press 1 when you are prompted to enter the number of the partition you
	     want to make active. Enter 1.
	
	  d. When the Partition 1 Made Active message appears, press Esc. FDISK reboots
	     the system.
	
	  To use DISKEDIT:
	
	  a. From the Object menu, choose Drive.
	
	  b. Select physical disks, hard disk 1.
	
	  This shows the MBR on the disk.
	
	  c. Go to offset 446.
	
	  d. This byte will be set to 00, change it to 80.
	
	  e. From the Edit menu select Write changes and then select Write.
	
	  f. Quit DISKEDIT.
	
	You should now be able to boot from the hard disk.
	
	NOTE: The specified offset for the boot indicator assumes that the first
	physical partition table entry contains the system partition. This may not
	always be the case. Some computers, such as Compaq, may have an EISA
	configuration or other partition not used by the operating system as the
	first physical partition. The system partition has the files NTLDR,
	NTDETECT.COM and BOOT.INI. This is the partition that should be marked
	active. The correct offset can be calculated by adding 16 for the next
	partition table entry or using the table below.
	
	Boot Indicator for Partition 1  =  446  - Hex 01BE
	
	Boot Indicator for Partition 2  =  462  - Hex 01CE
	
	Boot Indicator for Partition 3  =  478  - Hex 01DE
	
	Boot Indicator for Partition 4  =  494  - Hex 01EE
	
	Additional query words: prodnt drive ft
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.50
	
	=============================================================================
	
