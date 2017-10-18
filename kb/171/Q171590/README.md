---
layout: page
title: "Q171590: Fatal Error 127 during Windows NT Upgrade"
permalink: kb/171/Q171590/
---

## Q171590: Fatal Error 127 during Windows NT Upgrade

	Article: Q171590
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During an upgrade from Windows NT version 3.51 to Windows NT version 4.0, the
	following fatal error message may be displayed:
	
	  An error has been encountered that prevents Setup from continuing. Setup was
	  unable to initialize licensing components. The specific error code is 127.
	
	This error will usually occur during the reboot into the graphical user interface
	(GUI) portion of Setup.
	
	CAUSE
	=====
	
	During the upgrade process, the file Liccpa.cpl was not updated and the upgrade
	will fail without it.
	
	
	RESOLUTION
	==========
	
	Replacing the Liccpa.cpl file located in the %SystemRoot%\System32 directory
	with the one from the Windows NT 4.0 CD will allow the upgrade to continue.
	
	
	If the File System is File Allocation Table (FAT)
	-------------------------------------------------
	
	If the file system is FAT, perform the following steps:
	
	1. Start your computer in MS-DOS mode, or another operating system if present,
	  and replace the Liccpa.cpl file in the System32 directory with the one from
	  the Windows NT 4.0 CD.
	
	2. Restart the computer, and the upgrade process should continue from where it
	  had stopped.
	
	If the File System is NTFS
	--------------------------
	
	If the file system is NTFS, perform the following steps:
	
	1. Create a new directory and install a parallel copy of Windows NT in this new
	  directory.
	
	2. Boot into this parallel copy of Windows NT, and copy the Liccpa.cpl file in
	  the System32 directory to the System32 directory of the original installation
	  of Windows NT.
	
	3. Restart the computer, and select the original copy of Windows NT from the
	  Boot.ini menu. The upgrade process should continue from where it stopped.
	
	Additional query words: error 127
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51,4.0
	
	=============================================================================
	
