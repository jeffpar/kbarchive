---
layout: page
title: "Q172773: Problems Using LS/120 Floppy Disk Drive with Windows NT Setup"
permalink: /kb/172/Q172773/
---

## Q172773: Problems Using LS/120 Floppy Disk Drive with Windows NT Setup

	Article: Q172773
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS NT:4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are trying to install Windows NT, you may experience any of the
	following symptoms:
	
	- When you boot from the installation disks, the following error message may be
	  displayed when disk 2 is inserted:
	
	  Stop 0x0000007B Inaccessible Boot Device
	  (0xFF109C50, 0x00000000, 0x00000000, 0x00000000)
	
	- When you are attempting to create a set of installation disks using the WINNT
	  /ox or WINNT32 /ox command, the following error message may be displayed:
	
	  This floppy disk is not formatted as high-density, not formatted with a
	  standard Windows NT or MS-DOS format, or is corrupted. Setup is unable to use
	  this disk.
	
	CAUSE
	=====
	
	You are using a LS/120-type floppy disk drive.
	
	RESOLUTION
	==========
	
	To work around this issue, install Windows NT Workstation with the /b switch.
	This causes Windows NT Workstation Setup to run without requiring the
	installation disks.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q126690 Windows NT 4.0 Setup Troubleshooting Guide
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: LS 120 LS-120 7B STOP7B 0x7B
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WINDOWS NT:4.0
	
	=============================================================================
	
