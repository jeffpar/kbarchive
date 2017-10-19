---
layout: page
title: "Q297094: Command-Line Options Available to Install MMC versions 1.1a/1.2"
permalink: /kb/297/Q297094/
---

## Q297094: Command-Line Options Available to Install MMC versions 1.1a/1.2

	Article: Q297094
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbtoolkbfaq
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows 98 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article lists the command-line options that you can use to install
	Microsoft Management Console (MMC) version 1.1a or version 1.2.
	
	MORE INFORMATION
	================
	
	At a command prompt, if you type: "immc.exe /?" (without the quotation marks),
	you can obtain all of the command-line options that are available to install
	MMC:
	
	- /Q - Quiet modes for a package
	
	- /T:(full path) - Specifies a temporary working folder
	
	- /C - Extracts the files only to the folder when the /T command is used
	
	- /C:(Cmd) - Overrides the install command that is defined by the author
	
	NOTE: Microsoft Windows 2000 contains MMC version 1.2, by default.
	
	REFERENCES
	==========
	
	You can download MMC version 1.2 from the following Microsoft Web site:
	
	  http://support.microsoft.com/support/mmc/mmcus12.asp
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool kbfaq
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbWin95search kbWin98search kbZNotKeyword3 kbWin98
	Version           : :4.0
	Issue type        : kbinfo
	
	=============================================================================
	
