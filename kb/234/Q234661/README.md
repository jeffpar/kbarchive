---
layout: page
title: "Q234661: Cannot Log On if Desktop Background File Is on a Floppy Disk"
permalink: /kb/234/Q234661/
---

## Q234661: Cannot Log On if Desktop Background File Is on a Floppy Disk

	Article: Q234661
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbgraphic
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to log on to a Windows NT-based computer that uses a desktop
	background, you may receive the following error message:
	
	  Error: SAS Window: Winlogon.exe
	  There is no disk in the drive. Please insert a disk into drive A:
	
	CAUSE
	=====
	
	This issue can occur if the file you use for your desktop background is on a
	floppy disk and that floppy disk is not inserted into your floppy disk drive.
	
	RESOLUTION
	==========
	
	To resolve this issue, use one of the following methods:
	
	- Reconfigure the desktop background to use a file located on the computer's
	  hard disk.
	
	- Insert the floppy disk that contains the correct desktop background file
	  before you log on to your computer.
	
	For additional information about Winlogon.exe error messages, please see the
	following articles in the Microsoft Knowledge Base:
	
	  Q196449 Error: SAS Window: Winlogon.exe When Logging In
	
	  Q158155 SAS Window: Winlogon.exe Error
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbgraphic 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	
