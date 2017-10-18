---
layout: page
title: "Q159044: Error Message: Schedule Plus DLL Unable to Initialize"
permalink: kb/159/Q159044/
---

## Q159044: Error Message: Schedule Plus DLL Unable to Initialize

	Article: Q159044
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive the following error message when you start Microsoft Schedule
	Plus 7.0:
	
	  A problem occurred initializing Microsoft Schedule Plus.dll which prevents
	  Microsoft Schedule Plus from running. You may need to reinstall Microsoft
	  Schedule Plus.
	
	CAUSE
	=====
	
	The Ctl3d32.dll file is missing or damaged.
	
	RESOLUTION
	==========
	
	Copy the file Ctl3d32.dll from the i386\Inetsrv\Odbc folder on the Windows NT
	CD-ROM to the Winnt\System32 folder on the hard drive. Then restart your
	computer.
	
	<d>:
	cd \i386\inetsrv\odbc
	copy ctl3d32.dll c:\winnt\system32\ctl3d32.dll
	
	where <d> is the drive letter for the CD-ROM drive. After you copy the
	file, restart your computer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT version
	4.0. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: prodnt Schedule+.dll
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search
	Version           : 4.0
	
	=============================================================================
	
