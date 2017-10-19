---
layout: page
title: "Q103234: Windows NT Err Msg: MSWORD/PP3 Caused Segment Load Failure..."
permalink: /kb/103/Q103234/
---

## Q103234: Windows NT Err Msg: MSWORD/PP3 Caused Segment Load Failure...

	Article: Q103234
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive the following error message when running Microsoft Word for
	Windows 2.0 or PowerPoint for Windows 3.0:
	
	  MSWORD caused a segment load failure in module OLESVR.DLL
	
	  -or-
	
	  PP3 caused a segment load failure in module OLESVR.DLL
	
	CAUSE
	=====
	
	This error is caused by a damaged or corrupt OLESVR.DLL located in the
	%SYSTEMROOT%\SYSTEM32 directory, where SYSTEMROOT is the directory that contains
	your Windows NT system files.
	
	RESOLUTION
	==========
	
	To correct this problem, rename OLESVR.DLL in the %SYSTEMROOT%\SYSTEM32
	directory and expand the original file from the compact disc (CD) by doing the
	following:
	
	1. At the command prompt, change to the CD-ROM drive.
	
	2. Change to the I386 directory.
	
	3. Type
	
	  expand olesvr.dl_ %systemroot%\system32\olesvr.dll
	
	To expand from the floppy disks:
	
	1. Insert disk 22 in the disk drive.
	
	2. At the command prompt change to the appropriate drive.
	
	3. Type
	
	  expand olesvr.dl_ %systemroot%\system32\olesvr.dll
	
	Additional query words: prodnt PowerPoint Winword cdg power point macppt winppt
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1
	
	=============================================================================
	
