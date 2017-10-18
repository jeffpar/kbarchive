---
layout: page
title: "Q141121: Converting FAT to NTFS Fails Using BusLogic Controller"
permalink: kb/141/Q141121/
---

## Q141121: Converting FAT to NTFS Fails Using BusLogic Controller

	Article: Q141121
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kbhw kbHardware
	Last Modified: 07-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Windows NT and try to convert a File Allocation Table (FAT)
	partition to Windows NT File System (NTFS) either by running the Setup program
	upon final boot after installing Windows NT 3.51 or by using the CONVERT
	command, the following error message appears on a blue screen during boot:
	
	  Insufficient memory, could not check partition for errors, did not convert to
	  NTFS
	
	You are still able to boot up your computer, but the file system will only be in
	FAT format. Windows NT then checks for errors on the disk, and you will get the
	following error message:
	
	  The type of file system is FAT. Volume serial number is
	  <serial_number>. Insufficient Memory.
	
	The system log has the following error entries:
	
	  Event ID: 11
	  Source: Buslogic
	  Description:
	
	  The driver detected a controller error on \Device\ScsiPort0.
	
	CAUSE
	=====
	
	Your computer has a hard drive with a capacity of over 2 gigabytes (GB) attached
	to a BusLogic SCSI card.
	
	RESOLUTION
	==========
	
	To correct this problem, download the new BUSLOGIC.SYS driver for Windows NT
	3.51 from the BusLogic BBS.
	
	Please contact Bus Logic technical support at (408) 970-1414 to obtain the new
	driver and to confirm the firmware and BIOS versions on your SCSI controllers.
	There may be firmware and BIOS dependencies of the BusLogic SCSI adapters for
	the new driver to function correctly.
	
	
	MORE INFORMATION
	================
	
	To install the new driver:
	
	1. Copy the new driver (Buslogic.sys, 16384 bytes, 10-20-95, 1:26P) into the
	  C:\WINNT35\SYSTEM32\DRIVERS sub-directory.
	
	2. Reboot the system.
	
	3. At a command prompt, type "CHKDSK C: /f /r" (without the quotation marks to
	  ensure the volume is clean prior to converting the volume to NTFS.
	
	  If errors persist after you issue the CHKDSK.EXE command several times, you
	  will need to reformat the drive and reinstall Windows NT. This is because the
	  older driver damaged the volume at the sector level which cannot be repaired
	  by CHKDSK.EXE.
	
	4. To convert the file system from FAT to NTFS, type:
	
	  convert c: /fs:ntfs
	
	5. Clear the event log of previous error messages.
	
	6. Reboot.
	
	7. Run chkdsk to make sure no errors are present.
	
	
	Additional query words: prodnt convert.exe
	
	======================================================================
	Keywords          : kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	
