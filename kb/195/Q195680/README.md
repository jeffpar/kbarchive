---
layout: page
title: "Q195680: Error Message: Correcting Errors in the Uppercase File"
permalink: kb/195/Q195680/
---

## Q195680: Error Message: Correcting Errors in the Uppercase File

	Article: Q195680
	Product(s): Microsoft Windows NT
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbtool
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Chkdsk.exe tool on a hard disk that is formatted with the NTFS
	file system, you may receive the following error message:
	
	  Correcting errors in the uppercase file
	
	Note that you can safely ignore this error message.
	
	CAUSE
	=====
	
	This issue can occur if you upgrade Microsoft Windows NT 3.51 to Windows NT 4.0
	and your hard disk is formatted using the NTFS file system.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the Chkdsk.exe tool with the /f switch. To do this,
	type "chkdsk /f" (without quotation marks) at the command prompt.
	
	Note that when you type "chkdsk /f" you may receive the following prompt:
	
	  The type of the file system is NTFS.
	  Cannot lock current drive.
	  Chkdsk cannot run because the volume is in use by another
	  process. Would you like to schedule this volume to be
	  checked the next time the system restarts? (Y/N)
	
	If you receive this prompt, press Y. The next time you restart your computer, the
	Chkdsk.exe tool runs.
	
	Additional query words: checkdisk upcase
	
	======================================================================
	Keywords          : kberrmsg kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : WINNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
