---
layout: page
title: "Q165710: Creating an Emergency Repair Disk Fails - Disk Unusable"
permalink: /kb/165/Q165710/
---

## Q165710: Creating an Emergency Repair Disk Fails - Disk Unusable

	Article: Q165710
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbsetup
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Create Repair Disk option of the Repair Disk Utility you can
	receive the following error:
	
	  An unknown error has occurred reading from or writing to the disk.
	
	  The disk is possibly unusable.
	
	CAUSE
	=====
	
	This error can be caused by having the disk drive in use and locked by a command
	prompt, Windows NT Explorer, Windows NT File Manager, or a file Save/Open dialog
	box. When the disk drive is locked, the Repair Disk utility cannot format the
	disk.
	
	RESOLUTION
	==========
	
	Close the window that has the floppy drive locked.
	
	Additional query words: diskette fail doesn't work unexpected
	======================================================================
	Keywords          : kbenv kberrmsg kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.5,3.51,4.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
