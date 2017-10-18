---
layout: page
title: "Q130087: How to Troubleshoot Windows NT Boot Floppy Disk Problems"
permalink: kb/130/Q130087/
---

## Q130087: How to Troubleshoot Windows NT Boot Floppy Disk Problems

	Article: Q130087
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbsetupkbfaq
	Last Modified: 06-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article describes how to troubleshoot problems you may encounter when you
	create or use Windows NT boot floppy disks.
	
	MORE INFORMATION
	================
	
	To create a set of Windows NT boot floppy disks, use the WINNT command as
	follows:
	
	- WINNT.EXE (without any parameters)
	
	- WINNT.EXE /O (installing from floppy disks)
	
	- WINNT.EXE /OX (installing from a CD-ROM)
	
	If you encounter problems trying to use or create the Windows NT boot floppy
	disks, follow these steps:
	
	1. Ensure the integrity of your floppy disks using the following steps:
	
	  a. Reformat the three Windows NT boot floppy disks.
	
	  b. If it is available, use the Microsoft MS-DOS or Microsoft Windows 95
	     ScanDisk tool to verify the surface integrity of each disk.
	
	  c. If you continue to have problems, use a new set of floppy disks.
	
	2. Use a different computer to create the Windows NT boot floppy disks.
	
	3. To install Windows NT without creating or using the boot floppy disks, use
	  the WINNT /B command. For information about the WINNT /B command, see the
	  following article in the Microsoft Knowledge Base:
	
	  Q126690 : Windows NT 4.0 Setup Troubleshooting Guide
	
	NOTE: If you cannot access your CD-ROM drive, contact your hardware manufacturer
	for assistance.
	
	Additional query words: 0xc000026c
	
	======================================================================
	Keywords          : kbsetup kbfaq
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51,4.0
	
	=============================================================================
	
