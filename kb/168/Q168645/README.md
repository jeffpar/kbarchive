---
layout: page
title: "Q168645: Error: Please Insert the Compaq SSD into Drive &quot;CD-ROM&quot;"
permalink: /kb/168/Q168645/
---

## Q168645: Error: Please Insert the Compaq SSD into Drive &quot;CD-ROM&quot;

	Article: Q168645
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you upgrade a Compaq server from a Smart Start CD (that includes Compaq's
	OEM version of Windows NT) to a retail copy of Microsoft Windows NT, you may get
	the following error:
	
	  Please insert the Compaq SSD into drive "CD-ROM".
	
	where "CD-ROM" is your drive letter assignment for the CD-ROM.
	
	CAUSE
	=====
	
	This is caused when the original installation of Windows NT came from a Compaq
	Smart Start CD. The Compaq Software Support Diskette (SSD) is included on the
	Compaq CD and was installed at the same time from one media. When an upgrade is
	attempted from a non-Smart Start installation CD, it looks at the following
	registry setting for the setup source path:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Windows\CurrentVersion\Setup
	  SourcePath E:\ (CD drive enumeration)
	
	RESOLUTION
	==========
	
	The Compaq SSD now needs to be installed from a disk. Since the upgrade is
	looking for the CD (E: etc.) you cannot insert the disk into drive A: and
	continue. To fix this, do one of the following:
	
	- Press the Esc key to finish the upgrade. Install the SSD from a disk later.
	
	  -or-
	
	- Edit the registry key:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Start Registry Editor (Regedt32.exe) and locate the following subkey:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Windows\CurrentVersion\Setup
	
	2. Change the SourcePath to A:\ (do this before doing the upgrade).
	
	3. Exit Registry Editor and restart your computer.
	
	The upgrade process will then ask you to insert the SSD into drive A:\.
	
	Additional query words: Compaq SSD Smart Start CD
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:4.0
	
	=============================================================================
	
