---
layout: page
title: "Q100312: Error Messages During Boot Sequence on Intel x86 Machines"
permalink: /kb/100/Q100312/
---

## Q100312: Error Messages During Boot Sequence on Intel x86 Machines

	Article: Q100312
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	The following error messages may be displayed during the boot process
	of Windows NT on an Intel x86 machine. Error messages are listed with
	possible causes and resolutions.
	
	Error Messages During Boot Sequence
	-----------------------------------
	
	  BOOT: Couldn't find NTLDR Please insert another disk.
	
	The NTLDR program has been deleted from the boot drive or is not
	located in the root directory.
	
	  Error Opening NTDETECT Press any key to continue
	
	The NTDETECT program has been deleted from the boot drive or is not
	located in the root directory.
	
	-or-
	
	The timeout option for the Boot Loader in the BOOT.INI file may be
	set to 0.
	
	-or-
	
	The path of the default operating system in the Boot Loader section of
	the BOOT.INI file is different than any of the paths listed in the
	[operating systems] section.
	
	  OS Loader V2.10
	  The system did not load because of a computer disk hardware configuration
	  problem.
	  Could not read from the selected boot disk. Check the boot path and disk
	  hardware.
	  Please check the Windows NT documentation about hardware disk configuration
	  and your hardware reference manuals for additional information. Boot failed.
	
	The device or partition component of a path is incorrect in the
	[operating systems] section of the BOOT.INI file.
	
	  OS Loader V2.10
	  loading file
	  multi(0)disk(0)rdisk(0)partition(1)\winnx\system\ntoskrnl.exe
	  The system did not load because it cannot find the following file:
	  <sysroot>\SYSTEM32\NTOSKRNL.EXE
	  Please reinstall a copy of the above file.
	  Boot failed.
	
	The directory component of the path is incorrect in the [operating
	systems] section of the BOOT.INI file.
	
	-or-
	
	Ensure that both NTLDR and BOOT.INI are in the system root directory
	on the bootable logical drive.
	
	  Couldn't open boot sector file
	  multi(0)disk(0)rdisk(0)partition(1)\bootsect.dos
	
	The BOOTSECT.DOS file is lost or damaged. The only way to restore this
	file is from a backup. This file contains information about the
	physical heads, tracks, and cylinders and partition table information;
	it is unique to each machine.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : winnt:3.5,3.51,4.0
	
	=============================================================================
	
