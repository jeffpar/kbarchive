---
layout: page
title: "Q173877: What Files Are Needed to Uninstall Windows NT Service Pack"
permalink: kb/173/Q173877/
---

## Q173877: What Files Are Needed to Uninstall Windows NT Service Pack

	Article: Q173877
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you applied a Windows NT 4.0 service pack from a network share, you may not
	be able to uninstall the service pack.
	
	CAUSE
	=====
	
	This may occur if loss of network connectivity has made Update.exe or the
	service pack executable (that is, nt4sp3_i.exe) inaccessible because it resides
	on another server.
	
	RESOLUTION
	==========
	
	NOTE: In order to uninstall the Windows NT service pack, the option to create an
	uninstall directory must have been chosen during the application of the service
	pack and the %SystemRoot%\$NTServicePackUninstall$ must exist.
	
	If the service pack was installed from the self-installing file (for example, the
	Service Pack 3 executable file is called nt4sp3_i.exe), perform the following
	steps:
	
	1. From the system that contains the nt4sp3_i.exe executable file, extract the
	  files to a directory by typing the following from an MS-DOS command prompt:
	
	  nt4sp3_i.exe /x
	
	  This will expand all the Service pack files without installing them.
	
	2. Copy the files Update.exe, License.txt, and Update.inf to a floppy disk.
	
	3. Run Update.exe from the floppy disk on the Windows NT system you want to
	  uninstall the service pack from, and you will be prompted with the option to
	  uninstall the service pack.
	
	If the service pack was installed from a previously extracted service pack
	directory on another server, perform the following steps:
	
	1. Copy the files Update.exe, License.txt, and Update.inf to a floppy disk.
	
	2. Run Update.exe from the floppy disk on the Windows NT system you want to
	  uninstall the service pack from, and you will be prompted with the option to
	  uninstall the service pack.
	
	Additional query words: EULA NIC SP2 SP3
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	
	=============================================================================
	
