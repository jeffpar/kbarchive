---
layout: page
title: "Q157117: RegSaveKey Returns Error 112"
permalink: kb/157/Q157117/
---

## Q157117: RegSaveKey Returns Error 112

	Article: Q157117
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you install or upgrade Windows NT 4.0, an error message is received:
	
	  Setup was unable to save registry data.default to the
	  <drive_letter>:\%system_root%\Profiles\Default user\ntuser.dat because
	  of the following error: RegSaveKey returned error 112.
	
	MORE INFORMATION
	================
	
	The RegSaveKey function saves the given key, and all of its subkeys and values,
	to a new file. If the function succeeds, the return value is ERROR_SUCCESS;
	otherwise, it is an error value. In this case, error 112 represents
	Error_Disk_Full.
	
	
	RESOLUTION
	==========
	
	There is not enough room on the current disk drive to hold Windows NT 4.0. More
	drive space needs to be made available on the current drive, or the installation
	needs to be moved to a larger drive or partition.
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	
