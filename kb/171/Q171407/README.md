---
layout: page
title: "Q171407: NetManage Chameleon 32 NFS v4.0-v6.0 Causes STOP:0x1E in NT 4.0"
permalink: kb/171/Q171407/
---

## Q171407: NetManage Chameleon 32 NFS v4.0-v6.0 Causes STOP:0x1E in NT 4.0

	Article: Q171407
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install NetManage's Chameleon 32 NFS version 4.0, 5.0, or 6.0 on a
	computer running Windows NT 4.0, the system will produce the STOP 0X0000001E
	error below while attempting to copy files from a UNIX-based personal computer
	to the Windows NT personal computer with FAT or NTFS:
	
	  STOP 0X0000001E (C00000005, 8015DCD5, 00000000, 0000000C)
	  KMODE_EXCEPTION_NOT_HANDLED
	
	CAUSE
	=====
	
	NetManage's Chameleon 32 NFS versions 4.0, 5.0, and 6.0 for Windows NT 3.51 are
	not compatible with Windows NT 4.0.
	
	RESOLUTION
	==========
	
	NetManage has a new version of the software that is compatible with Windows NT
	4.0. The new product is Chameleon UNIXLink 97. The new version works on
	computers running Windows NT 4.0 and Windows 95.
	
	Uninstall the previous versions and install UNIXLink 97.
	
	MORE INFORMATION
	================
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: Chameleon32 Netmanage NFS0x1E 0x0000001E
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
