---
layout: page
title: "Q168502: Windows NT Reboots Continuously During Installation"
permalink: kb/168/Q168502/
---

## Q168502: Windows NT Reboots Continuously During Installation

	Article: Q168502
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are installing Windows NT Server or Workstation, your computer may
	reboot continuously after the first reboot.
	
	CAUSE
	=====
	
	This behavior can occur if the Bootsect.dat file in the root of the hard disk is
	infected with a boot-sector virus. The Bootsect.dat file is an image of the boot
	sector with added code to load Setupldr.bin to continue the Windows NT
	installation.
	
	RESOLUTION
	==========
	
	Boot the computer from a virus-free bootable floppy disk. Use a third- party
	virus detector (such as McAfee's Virus Scan) to scan the root of the drive.
	Clean the virus from the Bootsect.dat file. If the file cannot be cleansed, boot
	from a write-protected bootable MS-DOS disk and use the SYS C: command to place
	a new boot sector on the boot drive. Run Setup again to create a new
	Bootsect.dat file, or reformat the drive and reinstall Windows NT.
	
	MORE INFORMATION
	================
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: Form-A Virus
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51 4.0
	
	=============================================================================
	
