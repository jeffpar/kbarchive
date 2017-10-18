---
layout: page
title: "Q153981: Error Message: Windows Cannot Find Autorun.exe"
permalink: kb/153/Q153981/
---

## Q153981: Error Message: Windows Cannot Find Autorun.exe

	Article: Q153981
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): Win2000:95; winnt:4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbtool win95
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are viewing drives in My Computer, one or more of the drives may have
	an incorrect icon associated with it. When you double-click the icon to view the
	contents of the drive, the following error message may be displayed:
	
	  Program Not Found
	  Windows cannot find Autorun.exe.
	  This program is needed for opening files of type 'File'.
	
	You are then prompted for the location of the Autorun.exe file.
	
	CAUSE
	=====
	
	An Autorun.inf file exists in the root folder of the drive.
	
	RESOLUTION
	==========
	
	Delete or rename the Autorun.inf file in the root folder of the affected drive.
	
	MORE INFORMATION
	================
	
	The Autorun.inf file is used with CD-ROMs to automatically run specified
	programs. When a non-CD-ROM drive contains an Autorun.inf file, AutoPlay is
	started when you double-click the drive's icon. AutoPlay attempts to load
	Autorun.exe (which is not present) to read the Autorun.inf file.
	
	If the Autorun.exe file is also present in the root folder, the actions specified
	in the Autorun.inf file are carried out if possible.
	
	Additional query words: autoplay.exe
	
	======================================================================
	Keywords          : kberrmsg kbtool win95 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWin95search kbZNotKeyword3
	Version           : Win2000:95; winnt:4.0
	
	=============================================================================
	
